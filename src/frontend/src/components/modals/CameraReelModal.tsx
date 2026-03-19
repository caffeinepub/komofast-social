import {
  Camera,
  Check,
  FlipHorizontal,
  Mic,
  MicOff,
  RefreshCw,
  Sparkles,
  Video,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import ReelAIEditorModal from "./ReelAIEditorModal";

interface Props {
  open: boolean;
  onClose: () => void;
}

type Mode = "camera" | "preview";

export default function CameraReelModal({ open, onClose }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [mode, setMode] = useState<Mode>("camera");
  const [isRecording, setIsRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [aiEditorOpen, setAiEditorOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const MAX_SECONDS = 60;

  const stopStream = useCallback(() => {
    if (streamRef.current) {
      for (const t of streamRef.current.getTracks()) {
        t.stop();
      }
      streamRef.current = null;
    }
  }, []);

  const startCamera = useCallback(
    async (facing: "user" | "environment", mic: boolean) => {
      setIsLoading(true);
      setCameraError(null);
      stopStream();
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: facing,
            width: { ideal: 720 },
            height: { ideal: 1280 },
          },
          audio: mic,
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch {
        setCameraError(
          "Camera access denied. Please allow camera permission and try again.",
        );
      } finally {
        setIsLoading(false);
      }
    },
    [stopStream],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally only runs on open change
  useEffect(() => {
    if (open && mode === "camera") {
      startCamera(facingMode, micEnabled);
    }
    if (!open) {
      stopStream();
      setMode("camera");
      setIsRecording(false);
      if (recordedUrl) URL.revokeObjectURL(recordedUrl);
      setRecordedUrl(null);
      setElapsed(0);
    }
  }, [open]);

  const flipCamera = () => {
    const next = facingMode === "user" ? "environment" : "user";
    setFacingMode(next);
    startCamera(next, micEnabled);
  };

  const toggleMic = () => {
    const next = !micEnabled;
    setMicEnabled(next);
    startCamera(facingMode, next);
  };

  const stopRecording = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  }, []);

  const startRecording = () => {
    if (!streamRef.current || isRecording) return;
    chunksRef.current = [];
    const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
      ? "video/webm;codecs=vp9"
      : "video/webm";
    const mr = new MediaRecorder(streamRef.current, { mimeType });
    mr.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };
    mr.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      setRecordedUrl(url);
      setMode("preview");
      stopStream();
    };
    mr.start(100);
    mediaRecorderRef.current = mr;
    setIsRecording(true);
    setElapsed(0);
    timerRef.current = setInterval(() => {
      setElapsed((prev) => {
        if (prev + 1 >= MAX_SECONDS) {
          stopRecording();
          return MAX_SECONDS;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const handleRetake = () => {
    if (recordedUrl) URL.revokeObjectURL(recordedUrl);
    setRecordedUrl(null);
    setMode("camera");
    setElapsed(0);
    startCamera(facingMode, micEnabled);
  };

  const handleUseVideo = () => {
    onClose();
    setTimeout(() => setAiEditorOpen(true), 300);
  };

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
  const progress = (elapsed / MAX_SECONDS) * 100;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            data-ocid="camera_reel.modal"
            className="fixed inset-0 z-[70] bg-black flex flex-col"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Recording progress bar */}
            {isRecording && (
              <div className="absolute top-0 left-0 right-0 z-20 h-1">
                <div
                  className="h-full transition-all duration-1000"
                  style={{
                    background: "linear-gradient(90deg, #a855f7, #ec4899)",
                    width: `${progress}%`,
                  }}
                />
              </div>
            )}

            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 pt-10 pb-3">
              <button
                type="button"
                data-ocid="camera_reel.close_button"
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center"
              >
                <X size={20} className="text-white" />
              </button>

              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-[12px] font-semibold"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                }}
              >
                <Sparkles size={12} />
                AI Reel
              </div>

              <div className="flex flex-col gap-2">
                {mode === "camera" && (
                  <>
                    <button
                      type="button"
                      data-ocid="camera_reel.flip_button"
                      onClick={flipCamera}
                      disabled={isRecording}
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center disabled:opacity-40"
                    >
                      <FlipHorizontal size={18} className="text-white" />
                    </button>
                    <button
                      type="button"
                      data-ocid="camera_reel.mic_button"
                      onClick={toggleMic}
                      disabled={isRecording}
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center disabled:opacity-40"
                    >
                      {micEnabled ? (
                        <Mic size={18} className="text-white" />
                      ) : (
                        <MicOff size={18} className="text-red-400" />
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Camera view */}
            {mode === "camera" && (
              <div className="flex-1 relative overflow-hidden">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                    <div className="w-10 h-10 border-2 border-white/20 border-t-purple-500 rounded-full animate-spin" />
                  </div>
                )}
                {cameraError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-10 px-8 text-center gap-4">
                    <Camera size={48} className="text-white/30" />
                    <p className="text-white/70 text-sm">{cameraError}</p>
                    <button
                      type="button"
                      onClick={() => startCamera(facingMode, micEnabled)}
                      className="px-4 py-2 rounded-xl text-white text-sm font-medium"
                      style={{
                        background: "linear-gradient(135deg, #a855f7, #ec4899)",
                      }}
                    >
                      Try Again
                    </button>
                  </div>
                )}
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                  style={{
                    transform: facingMode === "user" ? "scaleX(-1)" : "none",
                  }}
                />
                {isRecording && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/90 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-white text-sm font-bold">
                      {formatTime(elapsed)}
                    </span>
                    <span className="text-white/60 text-xs">
                      / {formatTime(MAX_SECONDS)}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Preview view */}
            {mode === "preview" && recordedUrl && (
              <div className="flex-1 relative overflow-hidden">
                <video
                  ref={previewRef}
                  src={recordedUrl}
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <track kind="captions" />
                </video>
                <div className="absolute top-16 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                    <Check size={12} className="text-green-400" />
                    <span className="text-white text-xs font-medium">
                      {formatTime(elapsed)} recorded
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom controls */}
            <div className="absolute bottom-0 left-0 right-0 pb-10 px-8 flex flex-col items-center gap-4">
              {mode === "camera" ? (
                <>
                  <div className="flex items-center justify-center gap-12 w-full">
                    <div className="w-12" />
                    {/* Record button */}
                    <button
                      type="button"
                      data-ocid="camera_reel.record_button"
                      onClick={() => {
                        if (isRecording) stopRecording();
                        else startRecording();
                      }}
                      className="relative w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        boxShadow: isRecording
                          ? "0 0 0 4px #ef4444, 0 0 20px rgba(239,68,68,0.5)"
                          : "0 0 0 4px rgba(255,255,255,0.8)",
                      }}
                    >
                      <motion.div
                        className="rounded-full"
                        animate={{
                          width: isRecording ? 32 : 56,
                          height: isRecording ? 32 : 56,
                          borderRadius: isRecording ? 8 : 28,
                        }}
                        style={{
                          background: isRecording
                            ? "#ef4444"
                            : "linear-gradient(135deg, #a855f7, #ec4899)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      />
                    </button>
                    <button
                      type="button"
                      onClick={flipCamera}
                      disabled={isRecording}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center disabled:opacity-30"
                    >
                      <RefreshCw size={20} className="text-white" />
                    </button>
                  </div>
                  <p className="text-white/40 text-xs">
                    {isRecording
                      ? "Tap to stop"
                      : `Tap to record — max ${MAX_SECONDS}s`}
                  </p>
                </>
              ) : (
                <div className="flex items-center gap-4 w-full">
                  <button
                    type="button"
                    data-ocid="camera_reel.retake_button"
                    onClick={handleRetake}
                    className="flex-1 py-3.5 rounded-2xl border border-white/30 text-white font-bold text-[15px] flex items-center justify-center gap-2 bg-black/40 backdrop-blur-sm"
                  >
                    <Video size={16} />
                    Retake
                  </button>
                  <button
                    type="button"
                    data-ocid="camera_reel.use_video_button"
                    onClick={handleUseVideo}
                    className="flex-1 py-3.5 rounded-2xl text-white font-bold text-[15px] flex items-center justify-center gap-2"
                    style={{
                      background: "linear-gradient(135deg, #a855f7, #ec4899)",
                    }}
                  >
                    <Sparkles size={16} />
                    Edit with AI
                  </button>
                </div>
              )}
            </div>

            {/* Flash on record start */}
            <AnimatePresence>
              {isRecording && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.3))",
                  }}
                />
              )}
            </AnimatePresence>

            {/* Pulse hint */}
            {!isRecording &&
              mode === "camera" &&
              !cameraError &&
              !isLoading && (
                <motion.div
                  className="absolute bottom-36 left-1/2 -translate-x-1/2 pointer-events-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 0.7, 0], scale: [0.8, 1, 0.8] }}
                  transition={{
                    duration: 2,
                    repeat: 3,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <Zap
                    size={28}
                    className="text-purple-400"
                    fill="rgba(168,85,247,0.3)"
                  />
                </motion.div>
              )}
          </motion.div>
        )}
      </AnimatePresence>

      <ReelAIEditorModal
        open={aiEditorOpen}
        onClose={() => setAiEditorOpen(false)}
      />
    </>
  );
}
