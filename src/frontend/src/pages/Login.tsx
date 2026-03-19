import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const MOCK_OTP = "123456";
const OTP_INDICES = [0, 1, 2, 3, 4, 5] as const;

export default function Login() {
  const { login } = useApp();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleSendOtp = () => {
    if (phone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
      toast.success("OTP sent successfully!");
    }, 1200);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length < 6) {
      toast.error("Please enter the 6-digit OTP");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      login(`+91${phone}`);
      toast.success("Login successful! Welcome to Komofast 🎉");
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5"
      style={{
        background:
          "linear-gradient(160deg, #0B0F14 0%, #0d1220 40%, #110b1e 100%)",
      }}
    >
      {/* Background glow blobs */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(47,168,255,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed bottom-0 right-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10 text-center"
      >
        <div
          className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl font-black text-white"
          style={{
            background: "linear-gradient(135deg, #2FA8FF 0%, #A855F7 100%)",
            boxShadow: "0 8px 32px rgba(47,168,255,0.35)",
          }}
        >
          K
        </div>
        <h1 className="text-[28px] font-black text-white tracking-tight">
          Komofast
          <span
            className="ml-2"
            style={{
              background: "linear-gradient(90deg, #2FA8FF, #A855F7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Social
          </span>
        </h1>
        <p
          className="text-[13px] mt-1"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Connect. Create. Earn.
        </p>
      </motion.div>

      {/* Card */}
      <AnimatePresence mode="wait">
        {step === "phone" ? (
          <motion.div
            key="phone"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-sm rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
            }}
          >
            <h2 className="text-[20px] font-bold text-white mb-1">
              Login with Mobile
            </h2>
            <p
              className="text-[13px] mb-6"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Enter your mobile number to receive OTP
            </p>

            <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-2">
              Mobile Number
            </p>
            <div className="flex gap-2 mb-5">
              <div
                className="flex items-center px-3 rounded-xl text-[15px] font-semibold text-white"
                style={{
                  background: "rgba(47,168,255,0.12)",
                  border: "1px solid rgba(47,168,255,0.25)",
                  minWidth: "52px",
                }}
              >
                +91
              </div>
              <Input
                id="phone-input"
                data-ocid="login.input"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Enter 10-digit number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                onKeyDown={(e) => e.key === "Enter" && handleSendOtp()}
                className="flex-1 rounded-xl text-[15px] text-white placeholder:text-white/25"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  height: "48px",
                }}
              />
            </div>

            <Button
              data-ocid="login.primary_button"
              className="w-full h-12 rounded-xl text-[15px] font-bold text-white border-0"
              style={{
                background: "linear-gradient(135deg, #2FA8FF 0%, #A855F7 100%)",
                boxShadow: loading
                  ? "none"
                  : "0 4px 24px rgba(47,168,255,0.35)",
              }}
              onClick={handleSendOtp}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Sending OTP...
                </span>
              ) : (
                "Send OTP →"
              )}
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="otp"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-sm rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setStep("phone");
                setOtp(["", "", "", "", "", ""]);
              }}
              className="text-[13px] mb-4 flex items-center gap-1"
              style={{ color: "rgba(47,168,255,0.8)" }}
            >
              ← Back
            </button>

            <h2 className="text-[20px] font-bold text-white mb-1">
              Verify OTP
            </h2>
            <p
              className="text-[13px] mb-1"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Sent to +91 {phone}
            </p>

            {/* Mock OTP hint */}
            <div
              className="mb-6 px-3 py-2 rounded-xl text-[12px] font-mono"
              style={{
                background: "rgba(168,85,247,0.12)",
                border: "1px dashed rgba(168,85,247,0.35)",
                color: "rgba(168,85,247,0.9)",
              }}
            >
              🔐 Your OTP: <strong>{MOCK_OTP}</strong> (demo mode)
            </div>

            <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">
              Enter 6-digit OTP
            </p>

            <div className="flex gap-2 justify-between mb-5">
              {OTP_INDICES.map((i) => (
                <input
                  key={`otp-digit-${i}`}
                  data-ocid="login.input"
                  ref={(el) => {
                    inputRefs.current[i] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={otp[i]}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  className="w-12 h-14 rounded-xl text-center text-[22px] font-bold text-white outline-none transition-all"
                  style={{
                    background: otp[i]
                      ? "rgba(47,168,255,0.15)"
                      : "rgba(255,255,255,0.06)",
                    border: otp[i]
                      ? "1.5px solid rgba(47,168,255,0.6)"
                      : "1.5px solid rgba(255,255,255,0.12)",
                  }}
                />
              ))}
            </div>

            <Button
              data-ocid="login.submit_button"
              className="w-full h-12 rounded-xl text-[15px] font-bold text-white border-0"
              style={{
                background: "linear-gradient(135deg, #2FA8FF 0%, #A855F7 100%)",
                boxShadow: loading
                  ? "none"
                  : "0 4px 24px rgba(47,168,255,0.35)",
              }}
              onClick={handleVerify}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Verifying...
                </span>
              ) : (
                "Verify & Login ✓"
              )}
            </Button>

            <p
              className="text-center text-[12px] mt-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Didn't receive OTP?{" "}
              <button
                type="button"
                onClick={() => toast.info("OTP resent! (demo mode)")}
                style={{ color: "rgba(47,168,255,0.7)" }}
              >
                Resend
              </button>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <p
        className="mt-8 text-[11px]"
        style={{ color: "rgba(255,255,255,0.2)" }}
      >
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noreferrer"
          style={{ color: "rgba(47,168,255,0.5)" }}
        >
          caffeine.ai
        </a>
      </p>
    </div>
  );
}
