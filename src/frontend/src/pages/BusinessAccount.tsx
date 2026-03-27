import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BadgeCheck,
  BarChart2,
  Briefcase,
  ChevronRight,
  DollarSign,
  Eye,
  MousePointerClick,
  Pause,
  Play,
  Plus,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const TABS = ["Earning", "Ads Manager", "Insights"] as const;
type Tab = (typeof TABS)[number];

const CAMPAIGNS = [
  {
    id: 1,
    name: "Reel Boost – Dance Tutorial",
    status: "active",
    budget: 500,
    spent: 312,
    impressions: 48200,
    clicks: 1840,
    ctr: 3.8,
    reach: 31000,
    objective: "Reach",
  },
  {
    id: 2,
    name: "Academy Course Promo",
    status: "active",
    budget: 1000,
    spent: 687,
    impressions: 92400,
    clicks: 3120,
    ctr: 3.4,
    reach: 67000,
    objective: "Traffic",
  },
  {
    id: 3,
    name: "Digital Market eBook",
    status: "paused",
    budget: 300,
    spent: 201,
    impressions: 22000,
    clicks: 660,
    ctr: 3.0,
    reach: 15200,
    objective: "Sales",
  },
];

const EARNING_BREAKDOWN = [
  {
    icon: "📹",
    label: "Reel Ad Revenue",
    amount: 3240,
    change: "+12%",
    positive: true,
  },
  {
    icon: "📣",
    label: "Sponsored Posts",
    amount: 4800,
    change: "+22%",
    positive: true,
  },
  {
    icon: "🎓",
    label: "Academy Sales",
    amount: 5600,
    change: "+8%",
    positive: true,
  },
  {
    icon: "💎",
    label: "Digital Market",
    amount: 1900,
    change: "+15%",
    positive: true,
  },
  {
    icon: "💝",
    label: "Donations",
    amount: 710,
    change: "+5%",
    positive: true,
  },
  {
    icon: "👥",
    label: "Referrals",
    amount: 1800,
    change: "+25%",
    positive: true,
  },
];

const MONTHLY = [
  { month: "Oct", earn: 8200, adSpend: 1200 },
  { month: "Nov", earn: 9100, adSpend: 1500 },
  { month: "Dec", earn: 11400, adSpend: 1800 },
  { month: "Jan", earn: 10800, adSpend: 1300 },
  { month: "Feb", earn: 13200, adSpend: 2100 },
  { month: "Mar", earn: 14050, adSpend: 1700 },
];

const maxEarn = Math.max(...MONTHLY.map((d) => d.earn));

function EarningTab() {
  return (
    <div className="space-y-5">
      {/* Balance Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl p-5 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.22) 0%, rgba(168,85,247,0.28) 100%)",
          border: "1px solid rgba(168,85,247,0.35)",
          boxShadow:
            "0 8px 32px rgba(168,85,247,0.2), 0 2px 8px rgba(47,168,255,0.15)",
        }}
      >
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #a855f7, transparent)",
          }}
        />
        <div
          className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #2fa8ff, transparent)",
          }}
        />
        <div className="flex items-center gap-2 mb-1">
          <Badge
            className="text-[10px] font-bold px-2 py-0.5"
            style={{
              background: "rgba(47,168,255,0.25)",
              color: "#93c5fd",
              border: "1px solid rgba(47,168,255,0.4)",
            }}
          >
            <Briefcase size={9} className="mr-1" /> BUSINESS ACCOUNT
          </Badge>
          <Badge
            className="text-[10px] font-bold px-2 py-0.5"
            style={{
              background: "rgba(34,197,94,0.2)",
              color: "#4ade80",
              border: "1px solid rgba(34,197,94,0.35)",
            }}
          >
            <BadgeCheck size={9} className="mr-1" /> Verified
          </Badge>
        </div>
        <p className="text-[11px] text-white/50 uppercase tracking-widest mt-3">
          Total Earned
        </p>
        <p className="text-[34px] font-bold text-white leading-tight">
          ₹18,050<span className="text-[20px]">.00</span>
        </p>
        <div className="flex items-center gap-2 mt-1 mb-4">
          <span className="text-[12px] text-green-400 font-semibold flex items-center gap-1">
            <TrendingUp size={12} /> +18% this month
          </span>
          <span className="text-white/30">·</span>
          <span className="text-[12px] text-yellow-300">🪙 8,400 KomoCoin</span>
        </div>
        <div className="flex gap-3">
          <Button
            className="komo-gradient border-0 text-white flex-1 h-9 text-[13px] font-semibold"
            onClick={() => toast.success("Withdrawal request submitted!")}
          >
            <DollarSign size={14} className="mr-1.5" /> Withdraw
          </Button>
          <Button
            variant="outline"
            className="flex-1 h-9 text-[13px] font-semibold border-white/30 text-white hover:bg-white/10"
            onClick={() => toast.info("Payout history आ रहा है!")}
          >
            <BarChart2 size={14} className="mr-1.5" /> History
          </Button>
        </div>
      </motion.div>

      {/* Earning Breakdown */}
      <div>
        <p className="text-[13px] font-semibold text-komo-text-secondary mb-3 flex items-center gap-1.5">
          <DollarSign size={14} className="text-komo-blue" /> Earning Breakdown
        </p>
        <div className="grid grid-cols-2 gap-3">
          {EARNING_BREAKDOWN.map((src, i) => (
            <motion.div
              key={src.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              className="rounded-2xl p-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,168,255,0.07), rgba(168,85,247,0.1))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-[22px]">{src.icon}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/25">
                  {src.change}
                </span>
              </div>
              <p className="text-[18px] font-bold komo-gradient-text leading-tight">
                ₹{src.amount.toLocaleString()}
              </p>
              <p className="text-[11px] text-komo-text-muted mt-0.5">
                {src.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Monthly Chart */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.3 }}
        className="komo-surface rounded-2xl p-4"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="text-[13px] font-semibold text-foreground mb-4 flex items-center gap-1.5">
          <TrendingUp size={14} className="text-komo-purple" /> Monthly Earnings
          vs Ad Spend
        </p>
        <div className="space-y-3">
          {MONTHLY.map((d, i) => (
            <div key={d.month} className="flex items-center gap-3">
              <span className="text-[11px] text-komo-text-muted w-7 flex-shrink-0">
                {d.month}
              </span>
              <div className="flex-1 space-y-1">
                <div className="h-3 rounded-full overflow-hidden bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(d.earn / maxEarn) * 100}%` }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + i * 0.07,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #2fa8ff, #a855f7)",
                    }}
                  />
                </div>
                <div className="h-2 rounded-full overflow-hidden bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(d.adSpend / maxEarn) * 100}%` }}
                    transition={{
                      duration: 0.7,
                      delay: 0.35 + i * 0.07,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #f97316, #ef4444)",
                    }}
                  />
                </div>
              </div>
              <span className="text-[11px] font-semibold komo-gradient-text w-12 text-right flex-shrink-0">
                ₹{(d.earn / 1000).toFixed(1)}K
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-3">
          <div className="flex items-center gap-1.5">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "linear-gradient(90deg, #2fa8ff, #a855f7)" }}
            />
            <span className="text-[11px] text-komo-text-muted">Earning</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "linear-gradient(90deg, #f97316, #ef4444)" }}
            />
            <span className="text-[11px] text-komo-text-muted">Ad Spend</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function AdsManagerTab() {
  const [campaigns, setCampaigns] = useState(CAMPAIGNS);
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({
    name: "",
    objective: "Reach",
    budget: "",
    duration: "7",
  });

  const toggleStatus = (id: number) => {
    setCampaigns((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "active" ? "paused" : "active" }
          : c,
      ),
    );
    toast.success("Campaign status updated!");
  };

  const createCampaign = () => {
    if (!form.name || !form.budget) {
      toast.error("Campaign name और budget डालें");
      return;
    }
    setCampaigns((prev) => [
      {
        id: prev.length + 1,
        name: form.name,
        status: "active",
        budget: Number(form.budget),
        spent: 0,
        impressions: 0,
        clicks: 0,
        ctr: 0,
        reach: 0,
        objective: form.objective,
      },
      ...prev,
    ]);
    setShowCreate(false);
    setForm({ name: "", objective: "Reach", budget: "", duration: "7" });
    toast.success("Campaign launch हो गया! 🚀");
  };

  return (
    <div className="space-y-5">
      {/* Ad Account Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            label: "Total Spend",
            value: "₹1,200",
            icon: <DollarSign size={14} className="text-red-400" />,
            color: "rgba(239,68,68,0.15)",
          },
          {
            label: "Total Reach",
            value: "1.13L",
            icon: <Eye size={14} className="text-blue-400" />,
            color: "rgba(59,130,246,0.15)",
          },
          {
            label: "Avg CTR",
            value: "3.4%",
            icon: <MousePointerClick size={14} className="text-green-400" />,
            color: "rgba(34,197,94,0.15)",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl p-3 text-center"
            style={{
              background: stat.color,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex justify-center mb-1">{stat.icon}</div>
            <p className="text-[15px] font-bold text-foreground">
              {stat.value}
            </p>
            <p className="text-[10px] text-komo-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Create Campaign */}
      <Button
        className="w-full komo-gradient border-0 text-white h-10 text-[13px] font-semibold"
        onClick={() => setShowCreate(!showCreate)}
      >
        <Plus size={15} className="mr-2" /> New Campaign बनाएं
      </Button>

      {showCreate && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-4 space-y-3"
          style={{
            background: "rgba(47,168,255,0.07)",
            border: "1px solid rgba(47,168,255,0.2)",
          }}
        >
          <p className="text-[13px] font-semibold text-foreground flex items-center gap-1.5">
            <Sparkles size={13} className="text-komo-blue" /> New Campaign
          </p>
          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground placeholder-komo-text-muted focus:outline-none focus:border-komo-blue"
            placeholder="Campaign का नाम"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <select
            className="w-full bg-[#11161D] border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground focus:outline-none focus:border-komo-blue"
            value={form.objective}
            onChange={(e) => setForm({ ...form, objective: e.target.value })}
          >
            <option value="Reach">Objective: Reach</option>
            <option value="Traffic">Objective: Traffic</option>
            <option value="Sales">Objective: Sales</option>
            <option value="Engagement">Objective: Engagement</option>
            <option value="Brand Awareness">Objective: Brand Awareness</option>
          </select>
          <div className="flex gap-3">
            <input
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground placeholder-komo-text-muted focus:outline-none focus:border-komo-blue"
              placeholder="Budget (₹)"
              type="number"
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
            />
            <select
              className="flex-1 bg-[#11161D] border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground focus:outline-none focus:border-komo-blue"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
            >
              <option value="7">7 Days</option>
              <option value="14">14 Days</option>
              <option value="30">30 Days</option>
            </select>
          </div>
          <div className="flex gap-2">
            <Button
              className="flex-1 komo-gradient border-0 text-white h-9 text-[12px]"
              onClick={createCampaign}
            >
              <Zap size={13} className="mr-1.5" /> Launch
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-9 text-[12px] border-white/20 text-white hover:bg-white/10"
              onClick={() => setShowCreate(false)}
            >
              Cancel
            </Button>
          </div>
        </motion.div>
      )}

      {/* Campaigns List */}
      <div className="space-y-3">
        <p className="text-[13px] font-semibold text-komo-text-secondary flex items-center gap-1.5">
          <Target size={14} className="text-komo-purple" /> Active Campaigns
        </p>
        {campaigns.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="rounded-2xl p-4"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0 pr-2">
                <p className="text-[13px] font-semibold text-foreground truncate">
                  {c.name}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-komo-text-muted">
                    {c.objective}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      c.status === "active"
                        ? "bg-green-500/15 text-green-400 border border-green-500/25"
                        : "bg-yellow-500/15 text-yellow-400 border border-yellow-500/25"
                    }`}
                  >
                    {c.status === "active" ? "🟢 Active" : "⏸ Paused"}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => toggleStatus(c.id)}
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                style={{
                  background:
                    c.status === "active"
                      ? "rgba(239,68,68,0.15)"
                      : "rgba(34,197,94,0.15)",
                }}
              >
                {c.status === "active" ? (
                  <Pause size={13} className="text-red-400" />
                ) : (
                  <Play size={13} className="text-green-400" />
                )}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-[11px] text-komo-text-muted">Spend</span>
                <span className="text-[11px] text-komo-text-muted">
                  ₹{c.spent} / ₹{c.budget}
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(c.spent / c.budget) * 100}%`,
                    background: "linear-gradient(90deg, #2fa8ff, #a855f7)",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  label: "Impressions",
                  value:
                    c.impressions >= 1000
                      ? `${(c.impressions / 1000).toFixed(1)}K`
                      : c.impressions,
                  icon: <Eye size={11} />,
                },
                {
                  label: "Clicks",
                  value:
                    c.clicks >= 1000
                      ? `${(c.clicks / 1000).toFixed(1)}K`
                      : c.clicks,
                  icon: <MousePointerClick size={11} />,
                },
                {
                  label: "CTR",
                  value: `${c.ctr}%`,
                  icon: <TrendingUp size={11} />,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-2 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div className="flex justify-center text-komo-text-muted mb-1">
                    {stat.icon}
                  </div>
                  <p className="text-[13px] font-bold komo-gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-komo-text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function InsightsTab() {
  const metrics = [
    { label: "Profile Visits", value: "24.8K", change: "+18%", icon: "👁️" },
    { label: "Post Reach", value: "1.2L", change: "+31%", icon: "📢" },
    { label: "Reel Views", value: "4.5L", change: "+42%", icon: "🎬" },
    { label: "Followers", value: "18.4K", change: "+8%", icon: "👥" },
    { label: "Engagement Rate", value: "6.2%", change: "+2.1%", icon: "❤️" },
    { label: "Link Clicks", value: "3,210", change: "+11%", icon: "🔗" },
  ];

  const topContent = [
    {
      title: "Dance Tutorial Reel",
      views: "2.1L",
      likes: "8.4K",
      type: "Reel",
    },
    {
      title: "Morning Routine Post",
      views: "42K",
      likes: "1.9K",
      type: "Post",
    },
    {
      title: "Academy Course Launch",
      views: "18K",
      likes: "892",
      type: "Story",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="rounded-2xl p-4"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-[20px]">{m.icon}</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/25">
                {m.change}
              </span>
            </div>
            <p className="text-[18px] font-bold komo-gradient-text">
              {m.value}
            </p>
            <p className="text-[11px] text-komo-text-muted mt-0.5">{m.label}</p>
          </motion.div>
        ))}
      </div>

      <div
        className="komo-surface rounded-2xl p-4"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="text-[13px] font-semibold text-foreground mb-3 flex items-center gap-1.5">
          <Sparkles size={13} className="text-yellow-400" /> Top Performing
          Content
        </p>
        <div className="space-y-3">
          {topContent.map((item, i) => (
            <div
              key={item.title}
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-[14px] flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(47,168,255,0.2), rgba(168,85,247,0.2))",
                }}
              >
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-foreground truncate">
                  {item.title}
                </p>
                <p className="text-[10px] text-komo-text-muted">
                  {item.views} views · {item.likes} likes
                </p>
              </div>
              <Badge
                className="text-[10px]"
                style={{
                  background: "rgba(168,85,247,0.15)",
                  color: "#c084fc",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                {item.type}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <div
        className="rounded-2xl p-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.08), rgba(168,85,247,0.12))",
          border: "1px solid rgba(168,85,247,0.25)",
        }}
      >
        <p className="text-[13px] font-semibold text-foreground mb-3 flex items-center gap-1.5">
          <Settings size={13} className="text-komo-blue" /> Business Settings
        </p>
        {[
          { label: "Auto Ad Optimization", checked: true },
          { label: "Monetize Reels", checked: true },
          { label: "Brand Collaboration Requests", checked: false },
          { label: "Sponsored Content Labels", checked: true },
        ].map((setting) => (
          <div
            key={setting.label}
            className="flex items-center justify-between py-2"
          >
            <span className="text-[12px] text-komo-text-secondary">
              {setting.label}
            </span>
            <div
              className="w-10 h-5 rounded-full cursor-pointer transition-colors"
              style={{
                background: setting.checked
                  ? "linear-gradient(90deg, #2fa8ff, #a855f7)"
                  : "rgba(255,255,255,0.15)",
              }}
              onClick={() => toast.info("Setting updated!")}
              onKeyDown={(e) =>
                e.key === "Enter" && toast.info("Setting updated!")
              }
            >
              <div
                className={`w-4 h-4 rounded-full bg-white shadow-sm mt-0.5 transition-transform ${setting.checked ? "translate-x-5" : "translate-x-0.5"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BusinessAccount() {
  const { navigate } = useApp();
  const [activeTab, setActiveTab] = useState<Tab>("Earning");

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex items-center gap-3 mb-6"
      >
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="w-9 h-9 rounded-full flex items-center justify-center text-komo-text-secondary hover:text-foreground transition-colors"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-[20px] font-bold text-foreground flex items-center gap-2">
            <Briefcase size={18} className="text-komo-blue" /> Business Account
          </h1>
          <p className="text-[12px] text-komo-text-muted">
            Earning · Ads Manager · Insights
          </p>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className="flex-shrink-0 px-4 h-9 rounded-full text-[13px] font-semibold transition-all"
            style={{
              background:
                activeTab === tab
                  ? "linear-gradient(135deg, #2fa8ff, #a855f7)"
                  : "rgba(255,255,255,0.06)",
              color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.5)",
              border:
                activeTab === tab ? "none" : "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Earning" && <EarningTab />}
      {activeTab === "Ads Manager" && <AdsManagerTab />}
      {activeTab === "Insights" && <InsightsTab />}
    </div>
  );
}
