import { c as createLucideIcon, u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, B as Button, T as Textarea, a as ue } from "./index-C-s34q_b.js";
import { B as Badge } from "./badge-Ct3Y1zJg.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BW4s88Te.js";
import { A as ArrowLeft } from "./arrow-left-BLO9QN5q.js";
import { S as Shield } from "./shield-BLiDPNUY.js";
import { S as Star } from "./star-_qB1ebWE.js";
import { P as Package } from "./package-DdZ0Bzbw.js";
import { H as Headphones } from "./headphones-CWjkuq0n.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-Dxtu3npk.js";
import { C as Clock } from "./clock-C79qlZw3.js";
import { T as TrendingUp } from "./trending-up-CDXFldJa.js";
import { U as Users } from "./users-D4pR1OK1.js";
import { B as BadgeCheck } from "./badge-check-ACRHMefW.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode);
const PENDING_POSTS = [
  {
    id: "p1",
    author: "@amit_sharma",
    avatar: "AS",
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    content: "यह एक बहुत अच्छा दिन था! आज मैंने अपने नए business की शुरुआत की। 🚀",
    time: "2 घंटे पहले",
    category: "Business"
  },
  {
    id: "p2",
    author: "@priya_tech",
    avatar: "PT",
    gradient: "linear-gradient(135deg,#ec4899,#8b5cf6)",
    content: "Machine Learning के बारे में मेरा नया article publish हुआ। AI का भविष्य बहुत bright है!",
    time: "4 घंटे पहले",
    category: "Tech"
  },
  {
    id: "p3",
    author: "@rahul_creator",
    avatar: "RC",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    content: "नए Reel के लिए script ready है। Shooting शुरू करने से पहले feedback दें! 🎬",
    time: "6 घंटे पहले",
    category: "Creator"
  },
  {
    id: "p4",
    author: "@sneha_finance",
    avatar: "SF",
    gradient: "linear-gradient(135deg,#10b981,#3b82f6)",
    content: "Stock market tips: आज के top 5 sectors जो 2024 में boom करेंगे। 📈",
    time: "8 घंटे पहले",
    category: "Finance"
  }
];
const MARKETPLACE_ITEMS = [
  {
    id: "m1",
    name: "Premium Photography Preset Pack",
    seller: "@photo_guru",
    price: "₹499",
    status: true,
    sales: 124
  },
  {
    id: "m2",
    name: "Social Media Template Bundle",
    seller: "@design_studio",
    price: "₹299",
    status: true,
    sales: 89
  },
  {
    id: "m3",
    name: "Video Editing Course (Basic)",
    seller: "@video_master",
    price: "₹799",
    status: false,
    sales: 45
  },
  {
    id: "m4",
    name: "Coding Bootcamp Notes PDF",
    seller: "@dev_notes",
    price: "₹199",
    status: true,
    sales: 201
  }
];
const SUPPORT_TICKETS = [
  {
    id: "t1",
    user: "@vikram_user",
    subject: "Wallet withdrawal नहीं हो रहा",
    message: "मैंने ₹500 withdraw करने की कोशिश की लेकिन error आ रहा है। कृपया help करें।",
    status: "open",
    priority: "high",
    time: "1 घंटे पहले"
  },
  {
    id: "t2",
    user: "@meena_seller",
    subject: "Product listing approve नहीं हुई",
    message: "मेरा product 3 दिनों से pending है। कोई response नहीं मिला।",
    status: "open",
    priority: "medium",
    time: "3 घंटे पहले"
  },
  {
    id: "t3",
    user: "@raju_creator",
    subject: "Creator Studio access issue",
    message: "Eligibility check pass होने के बाद भी monetization enable नहीं हो रहा।",
    status: "pending",
    priority: "medium",
    time: "1 दिन पहले"
  },
  {
    id: "t4",
    user: "@sunita_shop",
    subject: "Account verification pending",
    message: "Documents submit करने के 5 दिन बाद भी verification नहीं हुई।",
    status: "resolved",
    priority: "low",
    time: "2 दिन पहले"
  }
];
const STATS = [
  {
    label: "कुल Revenue",
    value: "₹2,84,750",
    icon: TrendingUp,
    color: "#22c55e"
  },
  { label: "Active Users", value: "12,847", icon: Users, color: "#3b82f6" },
  { label: "Posts Today", value: "1,203", icon: BadgeCheck, color: "#8b5cf6" },
  {
    label: "Support Tickets",
    value: "47",
    icon: MessageSquare,
    color: "#f59e0b"
  }
];
function Director() {
  const { navigate } = useApp();
  const [postStatuses, setPostStatuses] = reactExports.useState(Object.fromEntries(PENDING_POSTS.map((p) => [p.id, "pending"])));
  const [marketplaceStatuses, setMarketplaceStatuses] = reactExports.useState(Object.fromEntries(MARKETPLACE_ITEMS.map((m) => [m.id, m.status])));
  const [ticketReplies, setTicketReplies] = reactExports.useState(
    {}
  );
  const [resolvedTickets, setResolvedTickets] = reactExports.useState(
    /* @__PURE__ */ new Set(["t4"])
  );
  const handleApprove = (id) => {
    setPostStatuses((prev) => ({ ...prev, [id]: "approved" }));
    ue.success("Post approved successfully!");
  };
  const handleReject = (id) => {
    setPostStatuses((prev) => ({ ...prev, [id]: "rejected" }));
    ue.error("Post rejected.");
  };
  const toggleMarketplace = (id) => {
    setMarketplaceStatuses((prev) => {
      const next = !prev[id];
      ue.success(next ? "Product activated!" : "Product deactivated.");
      return { ...prev, [id]: next };
    });
  };
  const handleReply = (id) => {
    const reply = ticketReplies[id];
    if (!(reply == null ? void 0 : reply.trim())) return ue.error("Reply खाली है!");
    setResolvedTickets((prev) => /* @__PURE__ */ new Set([...prev, id]));
    setTicketReplies((prev) => ({ ...prev, [id]: "" }));
    ue.success("Reply sent & ticket resolved!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: { background: "#0B0F14" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "sticky top-0 z-30 px-4 py-3 flex items-center gap-3",
        style: {
          background: "linear-gradient(135deg, #1e3a5f 0%, #2d1b69 100%)",
          borderBottom: "1px solid rgba(99,102,241,0.25)",
          backdropFilter: "blur(12px)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => navigate("/profile"),
              className: "text-white/70 hover:text-white transition-colors p-1",
              "data-ocid": "director.back.button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 20 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-9 h-9 rounded-xl flex items-center justify-center",
                style: { background: "linear-gradient(135deg,#f59e0b,#d97706)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 18, className: "text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[16px] font-bold text-white leading-tight", children: "Director Dashboard" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-amber-400/80", children: "KomoFast Director Panel" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full",
              style: {
                background: "rgba(245,158,11,0.15)",
                border: "1px solid rgba(245,158,11,0.35)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, className: "text-amber-400 fill-amber-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-amber-400", children: "DIRECTOR" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "rounded-2xl p-4 flex items-center gap-3 mb-4",
        style: {
          background: "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(217,119,6,0.08))",
          border: "1px solid rgba(245,158,11,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold text-white",
              style: { background: "linear-gradient(135deg,#f59e0b,#d97706)" },
              children: "D"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-bold text-white", children: "Director Account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-[9px] bg-amber-400/20 text-amber-400 border-amber-400/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 8, className: "mr-0.5" }),
                " DIRECTOR"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-white/50", children: "Content & Support Management Access" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "posts", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsList,
        {
          className: "w-full grid grid-cols-4 mb-4",
          style: {
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "posts",
                "data-ocid": "director.posts.tab",
                className: "text-[11px] data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 12, className: "mr-1" }),
                  " Queue"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "marketplace",
                "data-ocid": "director.marketplace.tab",
                className: "text-[11px] data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 12, className: "mr-1" }),
                  " Market"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "support",
                "data-ocid": "director.support.tab",
                className: "text-[11px] data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Headphones, { size: 12, className: "mr-1" }),
                  " Support"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "stats",
                "data-ocid": "director.stats.tab",
                className: "text-[11px] data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 12, className: "mr-1" }),
                  " Stats"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "posts", className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-white/40", children: [
          "Pending approval posts:",
          " ",
          PENDING_POSTS.filter((p) => postStatuses[p.id] === "pending").length,
          " ",
          "remaining"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: PENDING_POSTS.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.06 },
            "data-ocid": `director.posts.item.${i + 1}`,
            className: "rounded-2xl p-4",
            style: {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0",
                    style: { background: post.gradient },
                    children: post.avatar
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-white", children: post.author }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-[9px] px-2 py-0.5 rounded-full",
                        style: {
                          background: "rgba(99,102,241,0.2)",
                          color: "#818cf8",
                          border: "1px solid rgba(99,102,241,0.3)"
                        },
                        children: post.category
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-white/30 ml-auto flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 9 }),
                      " ",
                      post.time
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-white/70 leading-relaxed", children: post.content })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex items-center gap-2", children: postStatuses[post.id] === "pending" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    "data-ocid": `director.approve.button.${i + 1}`,
                    onClick: () => handleApprove(post.id),
                    className: "h-8 text-[12px] flex-1",
                    style: {
                      background: "linear-gradient(135deg,#22c55e,#16a34a)",
                      border: "none",
                      color: "white"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 13, className: "mr-1.5" }),
                      " Approve"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    "data-ocid": `director.reject.button.${i + 1}`,
                    onClick: () => handleReject(post.id),
                    className: "h-8 text-[12px] flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 13, className: "mr-1.5" }),
                      " Reject"
                    ]
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex items-center gap-1.5 text-[12px] font-semibold ${postStatuses[post.id] === "approved" ? "text-green-400" : "text-red-400"}`,
                  children: [
                    postStatuses[post.id] === "approved" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 14 }),
                    postStatuses[post.id] === "approved" ? "Approved" : "Rejected"
                  ]
                }
              ) })
            ]
          },
          post.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "marketplace", className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-white/40", children: "Product listings manage करें — activate या deactivate" }),
        MARKETPLACE_ITEMS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -10 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: i * 0.06 },
            "data-ocid": `director.marketplace.item.${i + 1}`,
            className: "rounded-2xl p-4 flex items-center gap-3",
            style: {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0",
                  style: {
                    background: "rgba(99,102,241,0.15)",
                    border: "1px solid rgba(99,102,241,0.2)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 18, className: "text-indigo-400" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-white truncate", children: item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-white/40", children: [
                  item.seller,
                  " • ",
                  item.price,
                  " • ",
                  item.sales,
                  " sales"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `director.marketplace.toggle.${i + 1}`,
                  onClick: () => toggleMarketplace(item.id),
                  className: `px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${marketplaceStatuses[item.id] ? "text-green-400 border border-green-500/30 bg-green-500/10 hover:bg-green-500/20" : "text-red-400 border border-red-500/30 bg-red-500/10 hover:bg-red-500/20"}`,
                  children: marketplaceStatuses[item.id] ? "Active" : "Inactive"
                }
              )
            ]
          },
          item.id
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "support", className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-white/40", children: "Support tickets देखें और reply करें" }),
        SUPPORT_TICKETS.map((ticket, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.07 },
            "data-ocid": `director.support.item.${i + 1}`,
            className: "rounded-2xl p-4 space-y-3",
            style: {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-white", children: ticket.user }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-[9px] px-2 py-0.5 rounded-full font-bold ${ticket.priority === "high" ? "bg-red-500/20 text-red-400 border border-red-500/30" : ticket.priority === "medium" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "bg-green-500/20 text-green-400 border border-green-500/30"}`,
                        children: ticket.priority.toUpperCase()
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-medium text-white/80 mt-0.5", children: ticket.subject }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/40 mt-0.5", children: ticket.message })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-[9px] px-2 py-1 rounded-full whitespace-nowrap ${resolvedTickets.has(ticket.id) ? "bg-green-500/20 text-green-400" : "bg-amber-500/20 text-amber-400"}`,
                    children: resolvedTickets.has(ticket.id) ? "✓ Resolved" : "Open"
                  }
                )
              ] }),
              !resolvedTickets.has(ticket.id) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    "data-ocid": `director.support.textarea.${i + 1}`,
                    placeholder: "Reply लिखें...",
                    value: ticketReplies[ticket.id] ?? "",
                    onChange: (e) => setTicketReplies((prev) => ({
                      ...prev,
                      [ticket.id]: e.target.value
                    })),
                    className: "text-[12px] min-h-[60px] resize-none",
                    style: {
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    "data-ocid": `director.support.submit_button.${i + 1}`,
                    onClick: () => handleReply(ticket.id),
                    className: "h-8 text-[12px]",
                    style: {
                      background: "linear-gradient(135deg,#3b82f6,#6366f1)",
                      border: "none",
                      color: "white"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 12, className: "mr-1.5" }),
                      " Reply & Resolve"
                    ]
                  }
                )
              ] })
            ]
          },
          ticket.id
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "stats", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-white/40", children: "Platform stats — view only mode" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: i * 0.07 },
            "data-ocid": `director.stats.card.${i + 1}`,
            className: "rounded-2xl p-4",
            style: {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                stat.icon,
                {
                  size: 16,
                  style: { color: stat.color },
                  className: "mb-2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[20px] font-bold",
                  style: { color: stat.color },
                  children: stat.value
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/50 mt-0.5", children: stat.label })
            ]
          },
          stat.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-4 space-y-3",
            style: {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-bold text-white", children: "Revenue Breakdown (View Only)" }),
              [
                { label: "Course Sales", value: "₹1,24,500", pct: 44 },
                { label: "Ad Revenue", value: "₹84,750", pct: 30 },
                { label: "Subscriptions", value: "₹48,200", pct: 17 },
                { label: "Marketplace", value: "₹27,300", pct: 9 }
              ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-white/60", children: row.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold text-white", children: row.value })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-1.5 rounded-full",
                    style: { background: "rgba(255,255,255,0.07)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full rounded-full",
                        style: {
                          width: `${row.pct}%`,
                          background: "linear-gradient(90deg,#3b82f6,#8b5cf6)"
                        }
                      }
                    )
                  }
                )
              ] }, row.label))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-4 flex items-start gap-3",
            style: {
              background: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Shield,
                {
                  size: 16,
                  className: "text-amber-400 mt-0.5 flex-shrink-0"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-amber-300/80 leading-relaxed", children: "Revenue settings और User management Owner द्वारा manage किए जाते हैं। Director केवल stats देख सकता है।" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20" })
  ] });
}
export {
  Director as default
};
