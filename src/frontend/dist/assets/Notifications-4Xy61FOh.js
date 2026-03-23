import { u as useApp, r as reactExports, j as jsxRuntimeExports, b as Bell, B as Button, C as Check, Z as Zap, M as MessageCircle, m as motion } from "./index-zmx2XQHm.js";
import { d as MOCK_NOTIFICATIONS } from "./mockData-C0D4n2wq.js";
import { U as UserPlus } from "./user-plus-BUPHkJvh.js";
import { H as Heart } from "./heart-COib0PlW.js";
const NOTIF_ICONS = {
  like: { icon: Heart, color: "text-komo-red", bg: "bg-komo-red/15" },
  follow: { icon: UserPlus, color: "text-komo-blue", bg: "bg-komo-blue/15" },
  comment: {
    icon: MessageCircle,
    color: "text-komo-purple",
    bg: "bg-komo-purple/15"
  },
  subscribe: { icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/15" }
};
function Notifications() {
  const { setUnreadNotifs } = useApp();
  const [notifications, setNotifications] = reactExports.useState(MOCK_NOTIFICATIONS);
  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    setUnreadNotifs(0);
  };
  const markRead = (id) => {
    setNotifications(
      (prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n)
    );
    setUnreadNotifs((c) => Math.max(0, c - 1));
  };
  const unreadCount = notifications.filter((n) => !n.read).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 22, className: "text-komo-blue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-foreground", children: "Notifications" }),
        unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-full bg-komo-blue text-white text-[11px] font-bold flex items-center justify-center", children: unreadCount })
      ] }),
      unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          "data-ocid": "notifications.mark_all_read.button",
          variant: "ghost",
          size: "sm",
          className: "text-[13px] text-komo-blue hover:text-komo-blue hover:bg-komo-blue/10",
          onClick: markAllRead,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "mr-1" }),
            " Mark all read"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", "data-ocid": "notifications.list", children: notifications.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "notifications.empty_state",
        className: "text-center py-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 48, className: "text-komo-text-muted mx-auto mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold", children: "No notifications yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-komo-text-muted text-[13px] mt-1", children: "You're all caught up!" })
        ]
      }
    ) : notifications.map((notif, i) => {
      const config = NOTIF_ICONS[notif.type];
      const Icon = (config == null ? void 0 : config.icon) || Bell;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          "data-ocid": `notifications.item.${i + 1}`,
          className: `flex items-center gap-3 p-4 rounded-2xl komo-card-shadow cursor-pointer transition-colors ${notif.read ? "komo-surface" : "bg-komo-blue/5 border border-komo-blue/20"}`,
          onClick: () => markRead(notif.id),
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: i * 0.05 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-bold text-white",
                  style: { background: notif.gradient },
                  children: notif.actorInitials
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${config == null ? void 0 : config.bg}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 11, className: config == null ? void 0 : config.color })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: notif.actor }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-komo-text-secondary", children: notif.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: notif.time })
            ] }),
            notif.postImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: notif.postImage,
                alt: "post",
                className: "w-full h-full object-cover"
              }
            ) }),
            !notif.read && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-komo-blue flex-shrink-0" })
          ]
        },
        notif.id
      );
    }) })
  ] });
}
export {
  Notifications as default
};
