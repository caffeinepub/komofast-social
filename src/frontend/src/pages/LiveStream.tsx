import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  Mic,
  MicOff,
  Radio,
  Send,
  Share2,
  Users,
  Video,
  VideoOff,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useApp } from "../context/AppContext";

const CATEGORIES = ["Entertainment", "Gaming", "Music", "Talk", "Cooking"];

const MOCK_COMMENTS = [
  { id: "1", user: "Ravi Kumar", msg: "🔥 Amazing stream!", time: 1 },
  { id: "2", user: "Anjali M", msg: "Super bhai!", time: 2 },
  { id: "3", user: "Deepak S", msg: "Love this! ❤️", time: 3 },
  { id: "4", user: "Pooja V", msg: "Watching from Mumbai!", time: 4 },
  { id: "5", user: "Suresh P", msg: "👏👏👏", time: 5 },
  { id: "6", user: "Meena R", msg: "Best creator on KomoFast!", time: 6 },
  { id: "7", user: "Kiran T", msg: "First time watching 🙌", time: 7 },
  { id: "8", user: "Vikram N", msg: "Pls do a Q&A!", time: 8 },
];

const REACTIONS = ["❤️", "🔥", "👏", "😍", "🎉"];

export default function LiveStream() {
  const { navigate } = useApp();
  const [isLive, setIsLive] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Entertainment");
  const [muted, setMuted] = useState(false);
  const [camOn, setCamOn] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [viewers, setViewers] = useState(1200);
  const [comments, setComments] = useState(MOCK_COMMENTS.slice(0, 3));
  const [floatingReactions, setFloatingReactions] = useState<
    { id: string; emoji: string; x: number }[]
  >([]);
  const [chatInput, setChatInput] = useState("");
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLive) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [isLive]);

  useEffect(() => {
    if (!isLive) return;
    const t = setInterval(() => {
      setViewers((v) => v + Math.floor(Math.random() * 20) - 5);
      const c = MOCK_COMMENTS[Math.floor(Math.random() * MOCK_COMMENTS.length)];
      setComments((prev) => [
        ...prev.slice(-9),
        { ...c, id: Date.now().toString() },
      ]);
    }, 2500);
    return () => clearInterval(t);
  }, [isLive]);

  useEffect(() => {
    if (!isLive) return;
    const t = setInterval(() => {
      const emoji = REACTIONS[Math.floor(Math.random() * REACTIONS.length)];
      const id = Date.now().toString();
      const x = 20 + Math.random() * 60;
      setFloatingReactions((prev) => [...prev, { id, emoji, x }]);
      setTimeout(
        () => setFloatingReactions((prev) => prev.filter((r) => r.id !== id)),
        2500,
      );
    }, 1500);
    return () => clearInterval(t);
  }, [isLive]);

  useEffect(() => {
    if (commentsRef.current)
      commentsRef.current.scrollTop = commentsRef.current.scrollHeight;
  }); // run after every render where comments change

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const sendChat = () => {
    if (!chatInput.trim()) return;
    setComments((prev) => [
      ...prev.slice(-9),
      { id: Date.now().toString(), user: "You", msg: chatInput, time: 0 },
    ]);
    setChatInput("");
  };

  if (!isLive) {
    return (
      <div
        className="min-h-screen flex flex-col px-5 py-6"
        style={{ background: "#0B0F14" }}
        data-ocid="live.page"
      >
        <button
          type="button"
          data-ocid="live.back_button"
          onClick={() => navigate("/")}
          className="mb-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center self-start"
        >
          <ArrowLeft size={18} className="text-white" />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 rounded-full flex items-center justify-center mb-8"
            style={{ background: "linear-gradient(135deg,#ef4444,#b91c1c)" }}
          >
            <Radio size={40} className="text-white" />
          </motion.div>

          <h1 className="text-white text-2xl font-bold mb-2">Go Live</h1>
          <p className="text-white/50 text-sm mb-8 text-center">
            Broadcast live to your followers
          </p>

          <div className="w-full max-w-sm space-y-4">
            <Input
              data-ocid="live.title_input"
              placeholder="Stream title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
            />

            <div>
              <p className="text-white/50 text-xs mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    data-ocid={`live.category_${cat.toLowerCase()}.toggle`}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      category === cat
                        ? "text-white border-0"
                        : "bg-white/5 text-white/60 border border-white/10"
                    }`}
                    style={
                      category === cat
                        ? {
                            background:
                              "linear-gradient(135deg,#a855f7,#ec4899)",
                          }
                        : {}
                    }
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              data-ocid="live.go_live_button"
              onClick={() => setIsLive(true)}
              className="w-full py-4 rounded-2xl text-white font-bold text-lg"
              style={{ background: "linear-gradient(135deg,#ef4444,#a855f7)" }}
            >
              🔴 Start Live
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "#050709" }}
      data-ocid="live.broadcast.page"
    >
      {/* Top */}
      <div className="absolute top-10 left-0 right-0 px-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-md bg-red-600 text-white text-xs font-bold animate-pulse">
            ● LIVE
          </span>
          <span className="text-white/80 text-xs">{fmt(seconds)}</span>
        </div>
        <div className="flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded-full">
          <Users size={13} className="text-white" />
          <span className="text-white text-xs font-semibold">
            {viewers.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Camera placeholder */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg,#1a0533 0%,#070a10 60%,#1a0533 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Video size={80} className="text-white/5" />
        </div>
      </div>

      {/* Floating reactions */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <AnimatePresence>
          {floatingReactions.map((r) => (
            <motion.div
              key={r.id}
              className="absolute bottom-40 text-2xl"
              style={{ left: `${r.x}%` }}
              initial={{ y: 0, opacity: 1, scale: 0.5 }}
              animate={{ y: -200, opacity: 0, scale: 1.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5 }}
            >
              {r.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Chat overlay */}
      <div
        ref={commentsRef}
        className="absolute bottom-28 left-3 right-16 max-h-48 overflow-y-auto z-20 space-y-1 pointer-events-none"
        style={{ maskImage: "linear-gradient(0deg,white 60%,transparent)" }}
      >
        {comments.map((c) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 bg-black/50 rounded-full px-3 py-1 backdrop-blur-sm"
          >
            <span className="text-xs font-bold" style={{ color: "#a78bfa" }}>
              {c.user}
            </span>
            <span className="text-white text-xs">{c.msg}</span>
          </motion.div>
        ))}
      </div>

      {/* Chat input */}
      <div className="absolute bottom-16 left-3 right-3 z-20 flex gap-2">
        <input
          data-ocid="live.chat_input"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendChat()}
          placeholder="Say something..."
          className="flex-1 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-white text-xs placeholder:text-white/30 outline-none"
        />
        <button
          type="button"
          data-ocid="live.chat_send_button"
          onClick={sendChat}
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
        >
          <Send size={14} className="text-white" />
        </button>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-around px-8 z-20">
        <button
          type="button"
          data-ocid="live.mute_toggle"
          onClick={() => setMuted((v) => !v)}
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            muted ? "bg-red-600" : "bg-white/15"
          }`}
        >
          {muted ? (
            <MicOff size={20} className="text-white" />
          ) : (
            <Mic size={20} className="text-white" />
          )}
        </button>
        <button
          type="button"
          data-ocid="live.camera_toggle"
          onClick={() => setCamOn((v) => !v)}
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            !camOn ? "bg-red-600" : "bg-white/15"
          }`}
        >
          {camOn ? (
            <Video size={20} className="text-white" />
          ) : (
            <VideoOff size={20} className="text-white" />
          )}
        </button>
        <button
          type="button"
          data-ocid="live.share_button"
          className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center"
        >
          <Share2 size={20} className="text-white" />
        </button>
        <button
          type="button"
          data-ocid="live.end_live_button"
          onClick={() => setIsLive(false)}
          className="px-5 h-12 rounded-full flex items-center gap-2 font-bold text-white text-sm"
          style={{ background: "linear-gradient(135deg,#ef4444,#b91c1c)" }}
        >
          <Radio size={16} /> End Live
        </button>
      </div>
    </div>
  );
}
