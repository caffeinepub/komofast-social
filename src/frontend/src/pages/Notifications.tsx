import { Button } from "@/components/ui/button";
import { Bell, Check, Heart, MessageCircle, UserPlus, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useApp } from "../context/AppContext";
import { MOCK_NOTIFICATIONS } from "../data/mockData";

const NOTIF_ICONS = {
  like: { icon: Heart, color: "text-komo-red", bg: "bg-komo-red/15" },
  follow: { icon: UserPlus, color: "text-komo-blue", bg: "bg-komo-blue/15" },
  comment: {
    icon: MessageCircle,
    color: "text-komo-purple",
    bg: "bg-komo-purple/15",
  },
  subscribe: { icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/15" },
};

export default function Notifications() {
  const { setUnreadNotifs } = useApp();
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    setUnreadNotifs(0);
  };

  const markRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
    setUnreadNotifs((c) => Math.max(0, c - 1));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="max-w-2xl mx-auto px-4 py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Bell size={22} className="text-komo-blue" />
          <h1 className="text-[20px] font-bold text-foreground">
            Notifications
          </h1>
          {unreadCount > 0 && (
            <span className="w-6 h-6 rounded-full bg-komo-blue text-white text-[11px] font-bold flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <Button
            data-ocid="notifications.mark_all_read.button"
            variant="ghost"
            size="sm"
            className="text-[13px] text-komo-blue hover:text-komo-blue hover:bg-komo-blue/10"
            onClick={markAllRead}
          >
            <Check size={14} className="mr-1" /> Mark all read
          </Button>
        )}
      </div>

      {/* Notification list */}
      <div className="flex flex-col gap-2" data-ocid="notifications.list">
        {notifications.length === 0 ? (
          <div
            data-ocid="notifications.empty_state"
            className="text-center py-16"
          >
            <Bell size={48} className="text-komo-text-muted mx-auto mb-3" />
            <p className="text-foreground font-semibold">
              No notifications yet
            </p>
            <p className="text-komo-text-muted text-[13px] mt-1">
              You're all caught up!
            </p>
          </div>
        ) : (
          notifications.map((notif, i) => {
            const config = NOTIF_ICONS[notif.type as keyof typeof NOTIF_ICONS];
            const Icon = config?.icon || Bell;
            return (
              <motion.div
                key={notif.id}
                data-ocid={`notifications.item.${i + 1}`}
                className={`flex items-center gap-3 p-4 rounded-2xl komo-card-shadow cursor-pointer transition-colors ${
                  notif.read
                    ? "komo-surface"
                    : "bg-komo-blue/5 border border-komo-blue/20"
                }`}
                onClick={() => markRead(notif.id)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {/* Actor avatar */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-bold text-white"
                    style={{ background: notif.gradient }}
                  >
                    {notif.actorInitials}
                  </div>
                  <div
                    className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${config?.bg}`}
                  >
                    <Icon size={11} className={config?.color} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] text-foreground">
                    <span className="font-semibold">{notif.actor}</span>{" "}
                    <span className="text-komo-text-secondary">
                      {notif.message}
                    </span>
                  </p>
                  <p className="text-[11px] text-komo-text-muted mt-0.5">
                    {notif.time}
                  </p>
                </div>

                {/* Post thumbnail */}
                {notif.postImage && (
                  <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={notif.postImage}
                      alt="post"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Unread dot */}
                {!notif.read && (
                  <div className="w-2 h-2 rounded-full bg-komo-blue flex-shrink-0" />
                )}
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
