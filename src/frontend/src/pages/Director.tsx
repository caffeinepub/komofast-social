import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  BadgeCheck,
  BarChart2,
  CheckCircle,
  Clock,
  HeadphonesIcon,
  MessageSquare,
  Package,
  Shield,
  Star,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const PENDING_POSTS = [
  {
    id: "p1",
    author: "@amit_sharma",
    avatar: "AS",
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    content: "यह एक बहुत अच्छा दिन था! आज मैंने अपने नए business की शुरुआत की। 🚀",
    time: "2 घंटे पहले",
    category: "Business",
  },
  {
    id: "p2",
    author: "@priya_tech",
    avatar: "PT",
    gradient: "linear-gradient(135deg,#ec4899,#8b5cf6)",
    content:
      "Machine Learning के बारे में मेरा नया article publish हुआ। AI का भविष्य बहुत bright है!",
    time: "4 घंटे पहले",
    category: "Tech",
  },
  {
    id: "p3",
    author: "@rahul_creator",
    avatar: "RC",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    content:
      "नए Reel के लिए script ready है। Shooting शुरू करने से पहले feedback दें! 🎬",
    time: "6 घंटे पहले",
    category: "Creator",
  },
  {
    id: "p4",
    author: "@sneha_finance",
    avatar: "SF",
    gradient: "linear-gradient(135deg,#10b981,#3b82f6)",
    content: "Stock market tips: आज के top 5 sectors जो 2024 में boom करेंगे। 📈",
    time: "8 घंटे पहले",
    category: "Finance",
  },
];

const MARKETPLACE_ITEMS = [
  {
    id: "m1",
    name: "Premium Photography Preset Pack",
    seller: "@photo_guru",
    price: "₹499",
    status: true,
    sales: 124,
  },
  {
    id: "m2",
    name: "Social Media Template Bundle",
    seller: "@design_studio",
    price: "₹299",
    status: true,
    sales: 89,
  },
  {
    id: "m3",
    name: "Video Editing Course (Basic)",
    seller: "@video_master",
    price: "₹799",
    status: false,
    sales: 45,
  },
  {
    id: "m4",
    name: "Coding Bootcamp Notes PDF",
    seller: "@dev_notes",
    price: "₹199",
    status: true,
    sales: 201,
  },
];

const SUPPORT_TICKETS = [
  {
    id: "t1",
    user: "@vikram_user",
    subject: "Wallet withdrawal नहीं हो रहा",
    message:
      "मैंने ₹500 withdraw करने की कोशिश की लेकिन error आ रहा है। कृपया help करें।",
    status: "open",
    priority: "high",
    time: "1 घंटे पहले",
  },
  {
    id: "t2",
    user: "@meena_seller",
    subject: "Product listing approve नहीं हुई",
    message: "मेरा product 3 दिनों से pending है। कोई response नहीं मिला।",
    status: "open",
    priority: "medium",
    time: "3 घंटे पहले",
  },
  {
    id: "t3",
    user: "@raju_creator",
    subject: "Creator Studio access issue",
    message:
      "Eligibility check pass होने के बाद भी monetization enable नहीं हो रहा।",
    status: "pending",
    priority: "medium",
    time: "1 दिन पहले",
  },
  {
    id: "t4",
    user: "@sunita_shop",
    subject: "Account verification pending",
    message: "Documents submit करने के 5 दिन बाद भी verification नहीं हुई।",
    status: "resolved",
    priority: "low",
    time: "2 दिन पहले",
  },
];

const STATS = [
  {
    label: "कुल Revenue",
    value: "₹2,84,750",
    icon: TrendingUp,
    color: "#22c55e",
  },
  { label: "Active Users", value: "12,847", icon: Users, color: "#3b82f6" },
  { label: "Posts Today", value: "1,203", icon: BadgeCheck, color: "#8b5cf6" },
  {
    label: "Support Tickets",
    value: "47",
    icon: MessageSquare,
    color: "#f59e0b",
  },
];

export default function Director() {
  const { navigate } = useApp();
  const [postStatuses, setPostStatuses] = useState<
    Record<string, "approved" | "rejected" | "pending">
  >(Object.fromEntries(PENDING_POSTS.map((p) => [p.id, "pending"])));
  const [marketplaceStatuses, setMarketplaceStatuses] = useState<
    Record<string, boolean>
  >(Object.fromEntries(MARKETPLACE_ITEMS.map((m) => [m.id, m.status])));
  const [ticketReplies, setTicketReplies] = useState<Record<string, string>>(
    {},
  );
  const [resolvedTickets, setResolvedTickets] = useState<Set<string>>(
    new Set(["t4"]),
  );

  const handleApprove = (id: string) => {
    setPostStatuses((prev) => ({ ...prev, [id]: "approved" }));
    toast.success("Post approved successfully!");
  };

  const handleReject = (id: string) => {
    setPostStatuses((prev) => ({ ...prev, [id]: "rejected" }));
    toast.error("Post rejected.");
  };

  const toggleMarketplace = (id: string) => {
    setMarketplaceStatuses((prev) => {
      const next = !prev[id];
      toast.success(next ? "Product activated!" : "Product deactivated.");
      return { ...prev, [id]: next };
    });
  };

  const handleReply = (id: string) => {
    const reply = ticketReplies[id];
    if (!reply?.trim()) return toast.error("Reply खाली है!");
    setResolvedTickets((prev) => new Set([...prev, id]));
    setTicketReplies((prev) => ({ ...prev, [id]: "" }));
    toast.success("Reply sent & ticket resolved!");
  };

  return (
    <div className="min-h-screen" style={{ background: "#0B0F14" }}>
      {/* Header */}
      <div
        className="sticky top-0 z-30 px-4 py-3 flex items-center gap-3"
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #2d1b69 100%)",
          borderBottom: "1px solid rgba(99,102,241,0.25)",
          backdropFilter: "blur(12px)",
        }}
      >
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="text-white/70 hover:text-white transition-colors p-1"
          data-ocid="director.back.button"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-2 flex-1">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}
          >
            <Shield size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-[16px] font-bold text-white leading-tight">
              Director Dashboard
            </h1>
            <p className="text-[10px] text-amber-400/80">
              KomoFast Director Panel
            </p>
          </div>
        </div>
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(245,158,11,0.15)",
            border: "1px solid rgba(245,158,11,0.35)",
          }}
        >
          <Star size={12} className="text-amber-400 fill-amber-400" />
          <span className="text-[11px] font-bold text-amber-400">DIRECTOR</span>
        </div>
      </div>

      {/* Director Info Card */}
      <div className="px-4 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-4 flex items-center gap-3 mb-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(217,119,6,0.08))",
            border: "1px solid rgba(245,158,11,0.25)",
          }}
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold text-white"
            style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}
          >
            D
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="text-[15px] font-bold text-white">
                Director Account
              </p>
              <Badge className="text-[9px] bg-amber-400/20 text-amber-400 border-amber-400/30">
                <Shield size={8} className="mr-0.5" /> DIRECTOR
              </Badge>
            </div>
            <p className="text-[12px] text-white/50">
              Content & Support Management Access
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="px-4">
        <Tabs defaultValue="posts">
          <TabsList
            className="w-full grid grid-cols-4 mb-4"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <TabsTrigger
              value="posts"
              data-ocid="director.posts.tab"
              className="text-[11px] data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400"
            >
              <CheckCircle size={12} className="mr-1" /> Queue
            </TabsTrigger>
            <TabsTrigger
              value="marketplace"
              data-ocid="director.marketplace.tab"
              className="text-[11px] data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400"
            >
              <Package size={12} className="mr-1" /> Market
            </TabsTrigger>
            <TabsTrigger
              value="support"
              data-ocid="director.support.tab"
              className="text-[11px] data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400"
            >
              <HeadphonesIcon size={12} className="mr-1" /> Support
            </TabsTrigger>
            <TabsTrigger
              value="stats"
              data-ocid="director.stats.tab"
              className="text-[11px] data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400"
            >
              <BarChart2 size={12} className="mr-1" /> Stats
            </TabsTrigger>
          </TabsList>

          {/* Posts Queue */}
          <TabsContent value="posts" className="space-y-3">
            <p className="text-[12px] text-white/40">
              Pending approval posts:{" "}
              {
                PENDING_POSTS.filter((p) => postStatuses[p.id] === "pending")
                  .length
              }{" "}
              remaining
            </p>
            <AnimatePresence>
              {PENDING_POSTS.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  data-ocid={`director.posts.item.${i + 1}`}
                  className="rounded-2xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                      style={{ background: post.gradient }}
                    >
                      {post.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[13px] font-semibold text-white">
                          {post.author}
                        </span>
                        <span
                          className="text-[9px] px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(99,102,241,0.2)",
                            color: "#818cf8",
                            border: "1px solid rgba(99,102,241,0.3)",
                          }}
                        >
                          {post.category}
                        </span>
                        <span className="text-[10px] text-white/30 ml-auto flex items-center gap-1">
                          <Clock size={9} /> {post.time}
                        </span>
                      </div>
                      <p className="text-[13px] text-white/70 leading-relaxed">
                        {post.content}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    {postStatuses[post.id] === "pending" ? (
                      <>
                        <Button
                          size="sm"
                          data-ocid={`director.approve.button.${i + 1}`}
                          onClick={() => handleApprove(post.id)}
                          className="h-8 text-[12px] flex-1"
                          style={{
                            background:
                              "linear-gradient(135deg,#22c55e,#16a34a)",
                            border: "none",
                            color: "white",
                          }}
                        >
                          <CheckCircle size={13} className="mr-1.5" /> Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          data-ocid={`director.reject.button.${i + 1}`}
                          onClick={() => handleReject(post.id)}
                          className="h-8 text-[12px] flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10"
                        >
                          <XCircle size={13} className="mr-1.5" /> Reject
                        </Button>
                      </>
                    ) : (
                      <div
                        className={`flex items-center gap-1.5 text-[12px] font-semibold ${
                          postStatuses[post.id] === "approved"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {postStatuses[post.id] === "approved" ? (
                          <CheckCircle size={14} />
                        ) : (
                          <XCircle size={14} />
                        )}
                        {postStatuses[post.id] === "approved"
                          ? "Approved"
                          : "Rejected"}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </TabsContent>

          {/* Marketplace */}
          <TabsContent value="marketplace" className="space-y-3">
            <p className="text-[12px] text-white/40">
              Product listings manage करें — activate या deactivate
            </p>
            {MARKETPLACE_ITEMS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                data-ocid={`director.marketplace.item.${i + 1}`}
                className="rounded-2xl p-4 flex items-center gap-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    background: "rgba(99,102,241,0.15)",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                >
                  <Package size={18} className="text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-white truncate">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-white/40">
                    {item.seller} • {item.price} • {item.sales} sales
                  </p>
                </div>
                <button
                  type="button"
                  data-ocid={`director.marketplace.toggle.${i + 1}`}
                  onClick={() => toggleMarketplace(item.id)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
                    marketplaceStatuses[item.id]
                      ? "text-green-400 border border-green-500/30 bg-green-500/10 hover:bg-green-500/20"
                      : "text-red-400 border border-red-500/30 bg-red-500/10 hover:bg-red-500/20"
                  }`}
                >
                  {marketplaceStatuses[item.id] ? "Active" : "Inactive"}
                </button>
              </motion.div>
            ))}
          </TabsContent>

          {/* Support */}
          <TabsContent value="support" className="space-y-3">
            <p className="text-[12px] text-white/40">
              Support tickets देखें और reply करें
            </p>
            {SUPPORT_TICKETS.map((ticket, i) => (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                data-ocid={`director.support.item.${i + 1}`}
                className="rounded-2xl p-4 space-y-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-semibold text-white">
                        {ticket.user}
                      </span>
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${
                          ticket.priority === "high"
                            ? "bg-red-500/20 text-red-400 border border-red-500/30"
                            : ticket.priority === "medium"
                              ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                              : "bg-green-500/20 text-green-400 border border-green-500/30"
                        }`}
                      >
                        {ticket.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-[12px] font-medium text-white/80 mt-0.5">
                      {ticket.subject}
                    </p>
                    <p className="text-[11px] text-white/40 mt-0.5">
                      {ticket.message}
                    </p>
                  </div>
                  <span
                    className={`text-[9px] px-2 py-1 rounded-full whitespace-nowrap ${
                      resolvedTickets.has(ticket.id)
                        ? "bg-green-500/20 text-green-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {resolvedTickets.has(ticket.id) ? "✓ Resolved" : "Open"}
                  </span>
                </div>
                {!resolvedTickets.has(ticket.id) && (
                  <div className="space-y-2">
                    <Textarea
                      data-ocid={`director.support.textarea.${i + 1}`}
                      placeholder="Reply लिखें..."
                      value={ticketReplies[ticket.id] ?? ""}
                      onChange={(e) =>
                        setTicketReplies((prev) => ({
                          ...prev,
                          [ticket.id]: e.target.value,
                        }))
                      }
                      className="text-[12px] min-h-[60px] resize-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "white",
                      }}
                    />
                    <Button
                      size="sm"
                      data-ocid={`director.support.submit_button.${i + 1}`}
                      onClick={() => handleReply(ticket.id)}
                      className="h-8 text-[12px]"
                      style={{
                        background: "linear-gradient(135deg,#3b82f6,#6366f1)",
                        border: "none",
                        color: "white",
                      }}
                    >
                      <MessageSquare size={12} className="mr-1.5" /> Reply &
                      Resolve
                    </Button>
                  </div>
                )}
              </motion.div>
            ))}
          </TabsContent>

          {/* Stats (view only) */}
          <TabsContent value="stats" className="space-y-4">
            <p className="text-[12px] text-white/40">
              Platform stats — view only mode
            </p>
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.07 }}
                  data-ocid={`director.stats.card.${i + 1}`}
                  className="rounded-2xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <stat.icon
                    size={16}
                    style={{ color: stat.color }}
                    className="mb-2"
                  />
                  <p
                    className="text-[20px] font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-white/50 mt-0.5">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Revenue Breakdown */}
            <div
              className="rounded-2xl p-4 space-y-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3 className="text-[13px] font-bold text-white">
                Revenue Breakdown (View Only)
              </h3>
              {[
                { label: "Course Sales", value: "₹1,24,500", pct: 44 },
                { label: "Ad Revenue", value: "₹84,750", pct: 30 },
                { label: "Subscriptions", value: "₹48,200", pct: 17 },
                { label: "Marketplace", value: "₹27,300", pct: 9 },
              ].map((row) => (
                <div key={row.label} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[12px] text-white/60">
                      {row.label}
                    </span>
                    <span className="text-[12px] font-semibold text-white">
                      {row.value}
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${row.pct}%`,
                        background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Owner note */}
            <div
              className="rounded-2xl p-4 flex items-start gap-3"
              style={{
                background: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.2)",
              }}
            >
              <Shield
                size={16}
                className="text-amber-400 mt-0.5 flex-shrink-0"
              />
              <p className="text-[12px] text-amber-300/80 leading-relaxed">
                Revenue settings और User management Owner द्वारा manage किए जाते
                हैं। Director केवल stats देख सकता है।
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="h-20" />
    </div>
  );
}
