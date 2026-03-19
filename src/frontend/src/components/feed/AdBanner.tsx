import { ExternalLink } from "lucide-react";

export default function AdBanner() {
  return (
    <div
      data-ocid="feed.ad.card"
      className="rounded-2xl overflow-hidden relative komo-card-shadow"
      style={{
        background:
          "linear-gradient(135deg, rgba(47,168,255,0.08) 0%, rgba(168,85,247,0.08) 100%)",
        border: "1px solid rgba(59,130,246,0.25)",
      }}
    >
      <div className="px-4 py-2 flex items-center justify-between border-b border-komo-border/30">
        <span className="text-[10px] font-semibold text-komo-text-muted uppercase tracking-wider">
          Sponsored
        </span>
        <ExternalLink size={12} className="text-komo-text-muted" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
            style={{ background: "linear-gradient(135deg, #2FA8FF, #A855F7)" }}
          >
            Ad
          </div>
          <div className="flex-1">
            <p className="text-[13px] font-semibold text-foreground">
              Google Ads Placeholder
            </p>
            <p className="text-[12px] text-komo-text-muted mt-0.5">
              Your ad could appear here · Reach 2M+ creators
            </p>
          </div>
        </div>
        <div
          className="mt-3 w-full h-20 rounded-xl flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.15))",
            border: "1px dashed rgba(59,130,246,0.3)",
          }}
        >
          <span className="text-[12px] text-komo-text-muted">
            728×90 Ad Banner Slot
          </span>
        </div>
      </div>
    </div>
  );
}
