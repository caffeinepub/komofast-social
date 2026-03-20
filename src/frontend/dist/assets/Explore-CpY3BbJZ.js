import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-BD3kMB2h.js";
import { P as PostCard } from "./PostCard-BVZSdxRr.js";
import { R as ReelCard } from "./ReelCard-DWmmirjC.js";
import { P as PostDetailModal } from "./PostDetailModal-M47dXIjL.js";
import { T as TRENDING_HASHTAGS, a as MOCK_POSTS, b as MOCK_REELS } from "./mockData-C0D4n2wq.js";
import { T as TrendingUp } from "./trending-up-Dls4ispW.js";
import { M as MapPin } from "./map-pin-BzZiaLQL.js";
import "./badge-CQJz1qXV.js";
import "./heart-BvLIMsKY.js";
import "./index-BeKep1x5.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode);
const LOCAL_POSTS = MOCK_POSTS.slice(0, 4);
const GLOBAL_POSTS = [...MOCK_POSTS].reverse();
function Explore() {
  const [tab, setTab] = reactExports.useState("local");
  const [selectedPost, setSelectedPost] = reactExports.useState(null);
  const posts = tab === "local" ? LOCAL_POSTS : GLOBAL_POSTS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 22, className: "text-komo-blue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-foreground", children: "Trending Feed" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "explore.feed.tab",
        className: "flex p-1 rounded-full bg-accent mb-6 w-fit",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setTab("local"),
              className: `flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold transition-all ${tab === "local" ? "komo-gradient text-white shadow-sm" : "text-komo-text-secondary hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
                " Local"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setTab("global"),
              className: `flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold transition-all ${tab === "global" ? "komo-gradient text-white shadow-sm" : "text-komo-text-secondary hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 14 }),
                " Global"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-foreground mb-3", children: "🔥 Trending Hashtags" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: TRENDING_HASHTAGS.map((tag, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          "data-ocid": `explore.hashtag.item.${i + 1}`,
          className: "text-[12px] font-medium px-3 py-1.5 rounded-full bg-[#202632] text-komo-text-secondary hover:text-komo-blue hover:bg-komo-blue/10 transition-colors border border-komo-border/50",
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: i * 0.04 },
          children: tag
        },
        tag
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_280px] gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground", children: "Trending Posts" }),
        posts.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          PostCard,
          {
            post,
            index: i + 1,
            onCommentClick: () => setSelectedPost(post)
          },
          post.id
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground", children: "Trending Reels" }),
        MOCK_REELS.map((reel, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReelCard, { reel, index: i + 1 }, reel.id))
      ] })
    ] }),
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
  Explore as default
};
