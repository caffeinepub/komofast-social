import { c as createLucideIcon, u as useApp, r as reactExports, j as jsxRuntimeExports, b as ue, Z as Zap, B as Button, m as motion } from "./index-BsQf1dew.js";
import { B as Badge } from "./badge-BqxMO2em.js";
import { B as Bookmark, P as PostDetailModal } from "./PostDetailModal-BkiAIECi.js";
import { A as AVATAR_GRADIENTS, a as MOCK_POSTS } from "./mockData-C0D4n2wq.js";
import { U as UserPlus } from "./user-plus-zc8baRBB.js";
import { S as Star } from "./star-De-DL6Nb.js";
import { T as TrendingUp } from "./trending-up-CP5bsZUP.js";
import "./index-Cl7mXe2h.js";
import "./heart-3No-6JQ5.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
];
const Grid3x3 = createLucideIcon("grid-3x3", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserMinus = createLucideIcon("user-minus", __iconNode);
const PROFILE_MOCK = {
  id: "me",
  username: "komofast_user",
  displayName: "Komofast User",
  bio: "Content creator & digital explorer ✨ Building the future one post at a time. Subscribe for exclusive creator content!",
  isCreator: true,
  followers: 14800,
  following: 892,
  posts: MOCK_POSTS.length,
  earnings: 2847.5,
  subscribers: 312,
  gradient: AVATAR_GRADIENTS[0],
  initials: "KU"
};
function formatNum(n) {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return String(n);
}
function Profile() {
  const { currentPath, currentUser, logout } = useApp();
  const isOwnProfile = !currentPath.includes("userId");
  const [following, setFollowing] = reactExports.useState(false);
  const [subscribed, setSubscribed] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState("posts");
  const [selectedPost, setSelectedPost] = reactExports.useState(null);
  const profile = currentUser ? {
    ...PROFILE_MOCK,
    displayName: currentUser.displayName || PROFILE_MOCK.displayName,
    username: currentUser.username || PROFILE_MOCK.username,
    bio: currentUser.bio || PROFILE_MOCK.bio,
    isCreator: currentUser.isCreator
  } : PROFILE_MOCK;
  const handleLogout = () => {
    logout();
    ue.success("Logged out successfully");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "h-32 rounded-2xl mb-0 -mb-8 relative",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.3) 0%, rgba(168,85,247,0.3) 100%)"
        },
        children: isOwnProfile && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "profile.settings.button",
              className: "w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors",
              onClick: () => ue.info("Settings coming soon!"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "profile.delete_button",
              className: "w-8 h-8 rounded-full bg-red-900/40 backdrop-blur-sm flex items-center justify-center text-red-400 hover:bg-red-900/60 transition-colors",
              title: "Logout",
              onClick: handleLogout,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 15 })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-4 pt-12 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -top-10 left-4 w-20 h-20 rounded-full flex items-center justify-center text-[24px] font-bold text-white border-4 border-[#1A1F26]",
          style: { background: profile.gradient },
          children: profile.initials
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[18px] font-bold text-foreground", children: profile.displayName }),
            profile.isCreator && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-komo-badge/20 text-komo-blue border-komo-blue/30 text-[10px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 10, className: "mr-0.5" }),
              " CREATOR"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-komo-text-muted", children: [
            "@",
            profile.username
          ] })
        ] }),
        !isOwnProfile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              "data-ocid": "profile.follow.button",
              size: "sm",
              className: following ? "bg-accent text-komo-text-secondary" : "komo-gradient border-0 text-white",
              onClick: () => {
                setFollowing((f) => !f);
                ue.success(following ? "Unfollowed" : "Following!");
              },
              children: [
                following ? /* @__PURE__ */ jsxRuntimeExports.jsx(UserMinus, { size: 14, className: "mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 14, className: "mr-1" }),
                following ? "Unfollow" : "Follow"
              ]
            }
          ),
          profile.isCreator && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              "data-ocid": "profile.subscribe.button",
              size: "sm",
              variant: subscribed ? "secondary" : "outline",
              className: subscribed ? "" : "border-komo-purple text-komo-purple hover:bg-komo-purple/10",
              onClick: () => {
                setSubscribed((s) => !s);
                ue.success(
                  subscribed ? "Unsubscribed" : "Subscribed to creator!"
                );
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 13, className: "mr-1" }),
                subscribed ? "Subscribed" : "Subscribe"
              ]
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": "profile.edit.button",
              size: "sm",
              variant: "outline",
              className: "border-komo-border text-komo-text-secondary hover:text-foreground",
              onClick: () => ue.info("Edit profile coming soon!"),
              children: "Edit Profile"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              "data-ocid": "profile.delete_button",
              size: "sm",
              variant: "outline",
              className: "border-red-800/50 text-red-400 hover:bg-red-900/20 hover:text-red-300",
              onClick: handleLogout,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 13, className: "mr-1" }),
                " Logout"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-komo-text-secondary mt-3 leading-relaxed", children: profile.bio }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold text-foreground", children: formatNum(profile.posts) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Posts" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold text-foreground", children: formatNum(profile.followers) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Followers" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold text-foreground", children: formatNum(profile.following) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Following" })
        ] }),
        profile.isCreator && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold text-foreground", children: formatNum(profile.subscribers) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Subscribers" })
        ] })
      ] }),
      isOwnProfile && profile.isCreator && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-4 p-3 rounded-xl flex items-center gap-3",
          style: {
            background: "linear-gradient(135deg, rgba(47,168,255,0.1), rgba(168,85,247,0.1))",
            border: "1px solid rgba(168,85,247,0.2)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full komo-gradient flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16, className: "text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Creator Earnings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[18px] font-bold komo-gradient-text", children: [
                "$",
                profile.earnings.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "profile.withdraw.button",
                size: "sm",
                className: "ml-auto komo-gradient border-0 text-white text-[12px]",
                onClick: () => ue.info("Withdrawal coming soon!"),
                children: "Withdraw"
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "profile.content.tab",
        className: "flex border-b border-komo-border mt-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveTab("posts"),
              className: `flex items-center gap-2 px-5 py-3 text-[13px] font-semibold border-b-2 transition-colors ${activeTab === "posts" ? "border-komo-blue text-komo-blue" : "border-transparent text-komo-text-muted hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { size: 15 }),
                " Posts"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveTab("saved"),
              className: `flex items-center gap-2 px-5 py-3 text-[13px] font-semibold border-b-2 transition-colors ${activeTab === "saved" ? "border-komo-blue text-komo-blue" : "border-transparent text-komo-text-muted hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { size: 15 }),
                " Saved"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-1 mt-1", children: (activeTab === "saved" ? MOCK_POSTS.filter((p) => p.bookmarked) : MOCK_POSTS).map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.button,
      {
        "data-ocid": `profile.post.item.${i + 1}`,
        className: "aspect-square rounded-sm overflow-hidden relative group",
        onClick: () => setSelectedPost(post),
        whileHover: { opacity: 0.85 },
        children: post.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: post.image,
            alt: "post",
            className: "w-full h-full object-cover"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full h-full flex items-center justify-center text-[11px] text-white font-medium p-2 text-center",
            style: { background: post.gradient },
            children: [
              post.caption.slice(0, 30),
              "..."
            ]
          }
        )
      },
      post.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PostDetailModal,
      {
        post: selectedPost,
        open: !!selectedPost,
        onClose: () => setSelectedPost(null)
      }
    )
  ] });
}
export {
  Profile as default
};
