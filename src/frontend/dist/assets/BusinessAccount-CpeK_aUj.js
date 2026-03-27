import { c as createLucideIcon, u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, B as Button, b as ue, ap as Eye, P as Plus, n as Sparkles, Z as Zap, ar as Pause, h as Play } from "./index-BZUiH6AR.js";
import { B as Badge } from "./badge-DrgOTno7.js";
import { A as ArrowLeft } from "./arrow-left-W6GHoU-L.js";
import { B as BadgeCheck, D as DollarSign } from "./dollar-sign-an5beGRi.js";
import { T as TrendingUp } from "./trending-up-uyy-cv4m.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-Bo4WdoXt.js";
import { T as Target } from "./target-DSNcPasu.js";
import { S as Settings } from "./settings-B0UEunGc.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
  ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
  ["path", { d: "m6 12-1.9 2", key: "mnht97" }],
  ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
  [
    "path",
    {
      d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
      key: "s0h3yz"
    }
  ]
];
const MousePointerClick = createLucideIcon("mouse-pointer-click", __iconNode);
const TABS = ["Earning", "Ads Manager", "Insights"];
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
    reach: 31e3,
    objective: "Reach"
  },
  {
    id: 2,
    name: "Academy Course Promo",
    status: "active",
    budget: 1e3,
    spent: 687,
    impressions: 92400,
    clicks: 3120,
    ctr: 3.4,
    reach: 67e3,
    objective: "Traffic"
  },
  {
    id: 3,
    name: "Digital Market eBook",
    status: "paused",
    budget: 300,
    spent: 201,
    impressions: 22e3,
    clicks: 660,
    ctr: 3,
    reach: 15200,
    objective: "Sales"
  }
];
const EARNING_BREAKDOWN = [
  {
    icon: "📹",
    label: "Reel Ad Revenue",
    amount: 3240,
    change: "+12%",
    positive: true
  },
  {
    icon: "📣",
    label: "Sponsored Posts",
    amount: 4800,
    change: "+22%",
    positive: true
  },
  {
    icon: "🎓",
    label: "Academy Sales",
    amount: 5600,
    change: "+8%",
    positive: true
  },
  {
    icon: "💎",
    label: "Digital Market",
    amount: 1900,
    change: "+15%",
    positive: true
  },
  {
    icon: "💝",
    label: "Donations",
    amount: 710,
    change: "+5%",
    positive: true
  },
  {
    icon: "👥",
    label: "Referrals",
    amount: 1800,
    change: "+25%",
    positive: true
  }
];
const MONTHLY = [
  { month: "Oct", earn: 8200, adSpend: 1200 },
  { month: "Nov", earn: 9100, adSpend: 1500 },
  { month: "Dec", earn: 11400, adSpend: 1800 },
  { month: "Jan", earn: 10800, adSpend: 1300 },
  { month: "Feb", earn: 13200, adSpend: 2100 },
  { month: "Mar", earn: 14050, adSpend: 1700 }
];
const maxEarn = Math.max(...MONTHLY.map((d) => d.earn));
function EarningTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.97 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.4 },
        className: "rounded-2xl p-5 relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.22) 0%, rgba(168,85,247,0.28) 100%)",
          border: "1px solid rgba(168,85,247,0.35)",
          boxShadow: "0 8px 32px rgba(168,85,247,0.2), 0 2px 8px rgba(47,168,255,0.15)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20",
              style: {
                background: "radial-gradient(circle, #a855f7, transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-15",
              style: {
                background: "radial-gradient(circle, #2fa8ff, transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                className: "text-[10px] font-bold px-2 py-0.5",
                style: {
                  background: "rgba(47,168,255,0.25)",
                  color: "#93c5fd",
                  border: "1px solid rgba(47,168,255,0.4)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 9, className: "mr-1" }),
                  " BUSINESS ACCOUNT"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                className: "text-[10px] font-bold px-2 py-0.5",
                style: {
                  background: "rgba(34,197,94,0.2)",
                  color: "#4ade80",
                  border: "1px solid rgba(34,197,94,0.35)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { size: 9, className: "mr-1" }),
                  " Verified"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/50 uppercase tracking-widest mt-3", children: "Total Earned" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[34px] font-bold text-white leading-tight", children: [
            "₹18,050",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[20px]", children: ".00" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-green-400 font-semibold flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 12 }),
              " +18% this month"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-yellow-300", children: "🪙 8,400 KomoCoin" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "komo-gradient border-0 text-white flex-1 h-9 text-[13px] font-semibold",
                onClick: () => ue.success("Withdrawal request submitted!"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 14, className: "mr-1.5" }),
                  " Withdraw"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                className: "flex-1 h-9 text-[13px] font-semibold border-white/30 text-white hover:bg-white/10",
                onClick: () => ue.info("Payout history आ रहा है!"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 14, className: "mr-1.5" }),
                  " History"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-komo-text-secondary mb-3 flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 14, className: "text-komo-blue" }),
        " Earning Breakdown"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: EARNING_BREAKDOWN.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.1 + i * 0.05 },
          className: "rounded-2xl p-4",
          style: {
            background: "linear-gradient(135deg, rgba(47,168,255,0.07), rgba(168,85,247,0.1))",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[22px]", children: src.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/25", children: src.change })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[18px] font-bold komo-gradient-text leading-tight", children: [
              "₹",
              src.amount.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: src.label })
          ]
        },
        src.label
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.3 },
        className: "komo-surface rounded-2xl p-4",
        style: { border: "1px solid rgba(255,255,255,0.08)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-foreground mb-4 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 14, className: "text-komo-purple" }),
            " Monthly Earnings vs Ad Spend"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: MONTHLY.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-text-muted w-7 flex-shrink-0", children: d.month }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full overflow-hidden bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: { width: `${d.earn / maxEarn * 100}%` },
                  transition: {
                    duration: 0.7,
                    delay: 0.3 + i * 0.07,
                    ease: "easeOut"
                  },
                  className: "h-full rounded-full",
                  style: {
                    background: "linear-gradient(90deg, #2fa8ff, #a855f7)"
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full overflow-hidden bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: { width: `${d.adSpend / maxEarn * 100}%` },
                  transition: {
                    duration: 0.7,
                    delay: 0.35 + i * 0.07,
                    ease: "easeOut"
                  },
                  className: "h-full rounded-full",
                  style: {
                    background: "linear-gradient(90deg, #f97316, #ef4444)"
                  }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-semibold komo-gradient-text w-12 text-right flex-shrink-0", children: [
              "₹",
              (d.earn / 1e3).toFixed(1),
              "K"
            ] })
          ] }, d.month)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-3 h-3 rounded-full",
                  style: { background: "linear-gradient(90deg, #2fa8ff, #a855f7)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-text-muted", children: "Earning" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-3 h-3 rounded-full",
                  style: { background: "linear-gradient(90deg, #f97316, #ef4444)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-text-muted", children: "Ad Spend" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function AdsManagerTab() {
  const [campaigns, setCampaigns] = reactExports.useState(CAMPAIGNS);
  const [showCreate, setShowCreate] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    objective: "Reach",
    budget: "",
    duration: "7"
  });
  const toggleStatus = (id) => {
    setCampaigns(
      (prev) => prev.map(
        (c) => c.id === id ? { ...c, status: c.status === "active" ? "paused" : "active" } : c
      )
    );
    ue.success("Campaign status updated!");
  };
  const createCampaign = () => {
    if (!form.name || !form.budget) {
      ue.error("Campaign name और budget डालें");
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
        objective: form.objective
      },
      ...prev
    ]);
    setShowCreate(false);
    setForm({ name: "", objective: "Reach", budget: "", duration: "7" });
    ue.success("Campaign launch हो गया! 🚀");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
      {
        label: "Total Spend",
        value: "₹1,200",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 14, className: "text-red-400" }),
        color: "rgba(239,68,68,0.15)"
      },
      {
        label: "Total Reach",
        value: "1.13L",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 14, className: "text-blue-400" }),
        color: "rgba(59,130,246,0.15)"
      },
      {
        label: "Avg CTR",
        value: "3.4%",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MousePointerClick, { size: 14, className: "text-green-400" }),
        color: "rgba(34,197,94,0.15)"
      }
    ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-3 text-center",
        style: {
          background: stat.color,
          border: "1px solid rgba(255,255,255,0.08)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-1", children: stat.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-bold text-foreground", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-komo-text-muted", children: stat.label })
        ]
      },
      stat.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        className: "w-full komo-gradient border-0 text-white h-10 text-[13px] font-semibold",
        onClick: () => setShowCreate(!showCreate),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 15, className: "mr-2" }),
          " New Campaign बनाएं"
        ]
      }
    ),
    showCreate && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        className: "rounded-2xl p-4 space-y-3",
        style: {
          background: "rgba(47,168,255,0.07)",
          border: "1px solid rgba(47,168,255,0.2)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-foreground flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 13, className: "text-komo-blue" }),
            " New Campaign"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground placeholder-komo-text-muted focus:outline-none focus:border-komo-blue",
              placeholder: "Campaign का नाम",
              value: form.name,
              onChange: (e) => setForm({ ...form, name: e.target.value })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "w-full bg-[#11161D] border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground focus:outline-none focus:border-komo-blue",
              value: form.objective,
              onChange: (e) => setForm({ ...form, objective: e.target.value }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Reach", children: "Objective: Reach" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Traffic", children: "Objective: Traffic" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Sales", children: "Objective: Sales" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Engagement", children: "Objective: Engagement" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Brand Awareness", children: "Objective: Brand Awareness" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: "flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground placeholder-komo-text-muted focus:outline-none focus:border-komo-blue",
                placeholder: "Budget (₹)",
                type: "number",
                value: form.budget,
                onChange: (e) => setForm({ ...form, budget: e.target.value })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: "flex-1 bg-[#11161D] border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground focus:outline-none focus:border-komo-blue",
                value: form.duration,
                onChange: (e) => setForm({ ...form, duration: e.target.value }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "7", children: "7 Days" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "14", children: "14 Days" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "30", children: "30 Days" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "flex-1 komo-gradient border-0 text-white h-9 text-[12px]",
                onClick: createCampaign,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 13, className: "mr-1.5" }),
                  " Launch"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "flex-1 h-9 text-[12px] border-white/20 text-white hover:bg-white/10",
                onClick: () => setShowCreate(false),
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-komo-text-secondary flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 14, className: "text-komo-purple" }),
        " Active Campaigns"
      ] }),
      campaigns.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: i * 0.06 },
          className: "rounded-2xl p-4",
          style: {
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 pr-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground truncate", children: c.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-komo-text-muted", children: c.objective }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-[10px] font-bold px-1.5 py-0.5 rounded-full ${c.status === "active" ? "bg-green-500/15 text-green-400 border border-green-500/25" : "bg-yellow-500/15 text-yellow-400 border border-yellow-500/25"}`,
                      children: c.status === "active" ? "🟢 Active" : "⏸ Paused"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => toggleStatus(c.id),
                  className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
                  style: {
                    background: c.status === "active" ? "rgba(239,68,68,0.15)" : "rgba(34,197,94,0.15)"
                  },
                  children: c.status === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { size: 13, className: "text-red-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 13, className: "text-green-400" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-text-muted", children: "Spend" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-komo-text-muted", children: [
                  "₹",
                  c.spent,
                  " / ₹",
                  c.budget
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-white/5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-full",
                  style: {
                    width: `${c.spent / c.budget * 100}%`,
                    background: "linear-gradient(90deg, #2fa8ff, #a855f7)"
                  }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
              {
                label: "Impressions",
                value: c.impressions >= 1e3 ? `${(c.impressions / 1e3).toFixed(1)}K` : c.impressions,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 11 })
              },
              {
                label: "Clicks",
                value: c.clicks >= 1e3 ? `${(c.clicks / 1e3).toFixed(1)}K` : c.clicks,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MousePointerClick, { size: 11 })
              },
              {
                label: "CTR",
                value: `${c.ctr}%`,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 11 })
              }
            ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center p-2 rounded-xl",
                style: { background: "rgba(255,255,255,0.04)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center text-komo-text-muted mb-1", children: stat.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-bold komo-gradient-text", children: stat.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-komo-text-muted", children: stat.label })
                ]
              },
              stat.label
            )) })
          ]
        },
        c.id
      ))
    ] })
  ] });
}
function InsightsTab() {
  const metrics = [
    { label: "Profile Visits", value: "24.8K", change: "+18%", icon: "👁️" },
    { label: "Post Reach", value: "1.2L", change: "+31%", icon: "📢" },
    { label: "Reel Views", value: "4.5L", change: "+42%", icon: "🎬" },
    { label: "Followers", value: "18.4K", change: "+8%", icon: "👥" },
    { label: "Engagement Rate", value: "6.2%", change: "+2.1%", icon: "❤️" },
    { label: "Link Clicks", value: "3,210", change: "+11%", icon: "🔗" }
  ];
  const topContent = [
    {
      title: "Dance Tutorial Reel",
      views: "2.1L",
      likes: "8.4K",
      type: "Reel"
    },
    {
      title: "Morning Routine Post",
      views: "42K",
      likes: "1.9K",
      type: "Post"
    },
    {
      title: "Academy Course Launch",
      views: "18K",
      likes: "892",
      type: "Story"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: metrics.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3, delay: i * 0.05 },
        className: "rounded-2xl p-4",
        style: {
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[20px]", children: m.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/25", children: m.change })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] font-bold komo-gradient-text", children: m.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: m.label })
        ]
      },
      m.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "komo-surface rounded-2xl p-4",
        style: { border: "1px solid rgba(255,255,255,0.08)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-foreground mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 13, className: "text-yellow-400" }),
            " Top Performing Content"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: topContent.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-3 p-3 rounded-xl",
              style: { background: "rgba(255,255,255,0.04)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-full flex items-center justify-center text-[14px] flex-shrink-0",
                    style: {
                      background: "linear-gradient(135deg, rgba(47,168,255,0.2), rgba(168,85,247,0.2))"
                    },
                    children: i + 1
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold text-foreground truncate", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-komo-text-muted", children: [
                    item.views,
                    " views · ",
                    item.likes,
                    " likes"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "text-[10px]",
                    style: {
                      background: "rgba(168,85,247,0.15)",
                      color: "#c084fc",
                      border: "1px solid rgba(168,85,247,0.3)"
                    },
                    children: item.type
                  }
                )
              ]
            },
            item.title
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-4",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.08), rgba(168,85,247,0.12))",
          border: "1px solid rgba(168,85,247,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-foreground mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 13, className: "text-komo-blue" }),
            " Business Settings"
          ] }),
          [
            { label: "Auto Ad Optimization", checked: true },
            { label: "Monetize Reels", checked: true },
            { label: "Brand Collaboration Requests", checked: false },
            { label: "Sponsored Content Labels", checked: true }
          ].map((setting) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between py-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-komo-text-secondary", children: setting.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-10 h-5 rounded-full cursor-pointer transition-colors",
                    style: {
                      background: setting.checked ? "linear-gradient(90deg, #2fa8ff, #a855f7)" : "rgba(255,255,255,0.15)"
                    },
                    onClick: () => ue.info("Setting updated!"),
                    onKeyDown: (e) => e.key === "Enter" && ue.info("Setting updated!"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-4 h-4 rounded-full bg-white shadow-sm mt-0.5 transition-transform ${setting.checked ? "translate-x-5" : "translate-x-0.5"}`
                      }
                    )
                  }
                )
              ]
            },
            setting.label
          ))
        ]
      }
    )
  ] });
}
function BusinessAccount() {
  const { navigate } = useApp();
  const [activeTab, setActiveTab] = reactExports.useState("Earning");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        className: "flex items-center gap-3 mb-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => navigate("/profile"),
              className: "w-9 h-9 rounded-full flex items-center justify-center text-komo-text-secondary hover:text-foreground transition-colors",
              style: { background: "rgba(255,255,255,0.06)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[20px] font-bold text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 18, className: "text-komo-blue" }),
              " Business Account"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "Earning · Ads Manager · Insights" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-5 overflow-x-auto pb-1", children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setActiveTab(tab),
        className: "flex-shrink-0 px-4 h-9 rounded-full text-[13px] font-semibold transition-all",
        style: {
          background: activeTab === tab ? "linear-gradient(135deg, #2fa8ff, #a855f7)" : "rgba(255,255,255,0.06)",
          color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.5)",
          border: activeTab === tab ? "none" : "1px solid rgba(255,255,255,0.08)"
        },
        children: tab
      },
      tab
    )) }),
    activeTab === "Earning" && /* @__PURE__ */ jsxRuntimeExports.jsx(EarningTab, {}),
    activeTab === "Ads Manager" && /* @__PURE__ */ jsxRuntimeExports.jsx(AdsManagerTab, {}),
    activeTab === "Insights" && /* @__PURE__ */ jsxRuntimeExports.jsx(InsightsTab, {})
  ] });
}
export {
  BusinessAccount as default
};
