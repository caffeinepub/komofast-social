import { c as createLucideIcon, u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, Z as Zap, A as AnimatePresence, M as MessageCircle, a as ue } from "./index-DqJhXVXX.js";
import { B as Badge } from "./badge-C6PiYwjC.js";
import { F as Flag, S as Share2, B as Bookmark, R as ReportModal } from "./PostDetailModal-C0Ubv2Zg.js";
import { H as Heart } from "./heart-CBe-QVZS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
];
const Ellipsis = createLucideIcon("ellipsis", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
  ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]
];
const UserX = createLucideIcon("user-x", __iconNode);
function formatCount(n) {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return String(n);
}
function PostCard({
  post,
  onCommentClick,
  index
}) {
  const { blockedUsers, blockUser } = useApp();
  const [liked, setLiked] = reactExports.useState(post.liked);
  const [bookmarked, setBookmarked] = reactExports.useState(post.bookmarked);
  const [likeCount, setLikeCount] = reactExports.useState(post.likes);
  const [heartBurst, setHeartBurst] = reactExports.useState(false);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const [showAnyway, setShowAnyway] = reactExports.useState(false);
  const [reportOpen, setReportOpen] = reactExports.useState(false);
  const menuRef = reactExports.useRef(null);
  const isBlocked = blockedUsers.includes(post.username);
  const handleLike = () => {
    setLiked((prev) => {
      const next = !prev;
      setLikeCount((c) => next ? c + 1 : c - 1);
      if (next) {
        setHeartBurst(true);
        setTimeout(() => setHeartBurst(false), 600);
      }
      return next;
    });
  };
  const handleBlock = () => {
    blockUser(post.username);
    ue.success(`@${post.username} blocked`);
    setMenuOpen(false);
  };
  if (isBlocked && !showAnyway) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        "data-ocid": `feed.post.item.${index}`,
        className: "komo-surface rounded-2xl komo-card-shadow px-4 py-3 flex items-center justify-between",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-komo-text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { size: 15 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px]", children: [
              "Post from blocked user @",
              post.username
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "text-[12px] text-komo-blue hover:underline",
              onClick: () => setShowAnyway(true),
              children: "Show anyway"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        "data-ocid": `feed.post.item.${index}`,
        className: "komo-surface rounded-2xl komo-card-shadow overflow-hidden relative",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.07 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0",
                style: { background: post.gradient },
                children: post.initials
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-semibold text-foreground truncate", children: post.displayName }),
                post.isCreator && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-[9px] px-1.5 py-0 h-4 bg-komo-badge/20 text-komo-blue border-komo-blue/30 font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 9, className: "mr-0.5" }),
                  " CREATOR"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-komo-text-muted", children: [
                  "@",
                  post.username
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-komo-text-muted text-[10px]", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-komo-text-muted", children: post.timestamp })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 relative", ref: menuRef, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "text-[11px] font-medium px-2.5 py-1 rounded-full border border-komo-blue/30 text-komo-blue hover:bg-komo-blue/10 transition-colors",
                  "data-ocid": `feed.post.boost_button.${index}`,
                  children: "Boost"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `feed.post.dropdown_menu.${index}`,
                  className: "text-komo-text-muted hover:text-foreground p-1 rounded-lg hover:bg-white/5",
                  onClick: () => setMenuOpen((v) => !v),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 18 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: menuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "fixed inset-0 z-40",
                    onClick: () => setMenuOpen(false),
                    onKeyDown: () => setMenuOpen(false),
                    role: "button",
                    tabIndex: -1,
                    "aria-label": "Close menu"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    className: "absolute right-0 top-8 z-50 bg-[#1A2030] border border-white/10 rounded-xl shadow-2xl min-w-[170px] overflow-hidden",
                    initial: { opacity: 0, scale: 0.9, y: -5 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.9, y: -5 },
                    transition: { duration: 0.15 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          "data-ocid": `feed.post.report.${index}`,
                          className: "flex items-center gap-2.5 w-full px-4 py-3 text-[13px] text-orange-400 hover:bg-white/5 transition-colors",
                          onClick: () => {
                            setMenuOpen(false);
                            setReportOpen(true);
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { size: 14 }),
                            "Report Post"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-white/5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          "data-ocid": `feed.post.block.${index}`,
                          className: "flex items-center gap-2.5 w-full px-4 py-3 text-[13px] text-red-400 hover:bg-white/5 transition-colors",
                          onClick: handleBlock,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { size: 14 }),
                            "Block @",
                            post.username
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }) })
            ] })
          ] }),
          post.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: post.image,
              alt: "Post",
              className: "w-full object-cover max-h-80 hover:scale-[1.01] transition-transform duration-500"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-foreground leading-relaxed line-clamp-3", children: post.caption }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  "data-ocid": `feed.post.like.${index}`,
                  onClick: handleLike,
                  className: "flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-accent transition-colors group",
                  whileTap: { scale: 0.85 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        initial: { scale: 0.5 },
                        animate: { scale: 1 },
                        exit: { scale: 0.5 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Heart,
                          {
                            size: 19,
                            className: liked ? "fill-komo-red text-komo-red" : "text-komo-text-secondary group-hover:text-komo-red",
                            strokeWidth: liked ? 0 : 2
                          }
                        )
                      },
                      liked ? "liked" : "notliked"
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-[13px] font-medium ${liked ? "text-komo-red" : "text-komo-text-secondary"}`,
                        children: formatCount(likeCount)
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `feed.post.comment.${index}`,
                  onClick: () => onCommentClick == null ? void 0 : onCommentClick(post.id),
                  className: "flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-accent transition-colors group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      MessageCircle,
                      {
                        size: 19,
                        className: "text-komo-text-secondary group-hover:text-komo-blue"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-komo-text-secondary", children: formatCount(post.comments) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `feed.post.share.${index}`,
                  className: "flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-accent transition-colors group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Share2,
                      {
                        size: 19,
                        className: "text-komo-text-secondary group-hover:text-komo-purple"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-komo-text-secondary", children: formatCount(post.shares) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                "data-ocid": `feed.post.bookmark.${index}`,
                onClick: () => setBookmarked((b) => !b),
                whileTap: { scale: 0.85 },
                className: "p-2 rounded-xl hover:bg-accent transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Bookmark,
                  {
                    size: 19,
                    className: bookmarked ? "fill-komo-blue text-komo-blue" : "text-komo-text-secondary",
                    strokeWidth: bookmarked ? 0 : 2
                  }
                )
              }
            )
          ] }),
          heartBurst && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute inset-0 flex items-center justify-center pointer-events-none",
              initial: { opacity: 1, scale: 0.5 },
              animate: { opacity: 0, scale: 2.5 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 80, className: "fill-komo-red text-komo-red" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReportModal,
      {
        open: reportOpen,
        onClose: () => setReportOpen(false),
        targetId: post.id,
        targetUsername: post.username,
        type: "post"
      }
    )
  ] });
}
export {
  PostCard as P
};
