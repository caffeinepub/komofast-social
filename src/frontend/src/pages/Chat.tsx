import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, MessageCircle, Search, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const ONLINE_FRIENDS = [
  {
    id: "f1",
    name: "Neha Singh",
    initials: "NS",
    online: true,
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "f3",
    name: "Sunita Devi",
    initials: "SD",
    online: true,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "f5",
    name: "Meena Gupta",
    initials: "MG",
    online: true,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "f2",
    name: "Ravi Verma",
    initials: "RV",
    online: false,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "f4",
    name: "Arun Yadav",
    initials: "AY",
    online: false,
    color: "from-amber-500 to-orange-600",
  },
];

const MOCK_CONVERSATIONS = [
  {
    id: "c1",
    name: "Neha Singh",
    initials: "NS",
    color: "from-blue-500 to-purple-600",
    lastMsg: "Kal milte hain! 😊",
    time: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: "c2",
    name: "Ravi Verma",
    initials: "RV",
    color: "from-pink-500 to-rose-600",
    lastMsg: "Reel dekhi kya tune?",
    time: "15m ago",
    unread: 0,
    online: false,
  },
  {
    id: "c3",
    name: "Sunita Devi",
    initials: "SD",
    color: "from-emerald-500 to-teal-600",
    lastMsg: "Thanks bhai! 🙏",
    time: "1h ago",
    unread: 1,
    online: true,
  },
  {
    id: "c4",
    name: "Arun Yadav",
    initials: "AY",
    color: "from-amber-500 to-orange-600",
    lastMsg: "Kya haal hai?",
    time: "3h ago",
    unread: 0,
    online: false,
  },
  {
    id: "c5",
    name: "Meena Gupta",
    initials: "MG",
    color: "from-violet-500 to-purple-600",
    lastMsg: "Academy course kaisi rahi?",
    time: "Yesterday",
    unread: 0,
    online: true,
  },
];

const DUMMY_MESSAGES = [
  { id: 1, from: "them", text: "Hey! Kaisa hai tu? 😊" },
  { id: 2, from: "me", text: "Bilkul sahi! Teri kya baat hai?" },
  { id: 3, from: "them", text: "Mast hoon. Komofast pe naya reel dala kya?" },
  { id: 4, from: "me", text: "Haan, abhi upload kiya! Check kar 👆" },
  { id: 5, from: "them", text: "Waah! Bahut accha tha 🔥" },
];

export default function ChatPage() {
  const [search, setSearch] = useState("");
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [messages, setMessages] = useState(DUMMY_MESSAGES);
  const [msgInput, setMsgInput] = useState("");

  const activeChatData = MOCK_CONVERSATIONS.find((c) => c.id === activeChat);

  const sendMessage = () => {
    if (!msgInput.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "me", text: msgInput.trim() },
    ]);
    setMsgInput("");
  };

  const filtered = MOCK_CONVERSATIONS.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (activeChat && activeChatData) {
    return (
      <div className="flex flex-col h-[calc(100vh-4rem)] max-w-lg mx-auto">
        {/* Chat header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-card/80 backdrop-blur-sm border-b border-border">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 rounded-full"
            onClick={() => setActiveChat(null)}
            data-ocid="chat.back.button"
          >
            <ArrowLeft size={18} />
          </Button>
          <div
            className={`w-9 h-9 rounded-full bg-gradient-to-br ${activeChatData.color} flex items-center justify-center text-white font-bold text-xs`}
          >
            {activeChatData.initials}
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground">
              {activeChatData.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {activeChatData.online ? "🟢 Online" : "⚫ Offline"}
            </p>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 px-4 py-3">
          <div className="space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[72%] px-3 py-2 rounded-2xl text-sm ${
                    msg.from === "me"
                      ? "bg-gradient-to-r from-komo-blue to-komo-purple text-white rounded-br-sm"
                      : "bg-card border border-border text-foreground rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="flex items-center gap-2 px-4 py-3 bg-card/80 backdrop-blur-sm border-t border-border">
          <Input
            value={msgInput}
            onChange={(e) => setMsgInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Message likhein..."
            data-ocid="chat.message.input"
            className="flex-1 rounded-full bg-background border-border text-sm"
          />
          <Button
            size="icon"
            onClick={sendMessage}
            data-ocid="chat.send.button"
            className="w-9 h-9 rounded-full bg-gradient-to-r from-komo-blue to-komo-purple text-white border-0"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 pt-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="px-4 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-komo-blue to-komo-purple flex items-center justify-center shadow-lg">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Messages</h1>
              <p className="text-xs text-muted-foreground">Friends · Chats</p>
            </div>
          </div>

          {/* Online friends strip */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Online Friends
            </p>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {ONLINE_FRIENDS.map((friend) => (
                <button
                  key={friend.id}
                  type="button"
                  data-ocid="chat.online_friend.button"
                  onClick={() => {
                    const conv = MOCK_CONVERSATIONS.find(
                      (c) => c.id === friend.id.replace("f", "c"),
                    );
                    if (conv) setActiveChat(conv.id);
                  }}
                  className="flex flex-col items-center gap-1.5 flex-shrink-0"
                >
                  <div className="relative">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${friend.color} flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {friend.initials}
                    </div>
                    {friend.online && (
                      <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background" />
                    )}
                  </div>
                  <span className="text-[11px] text-muted-foreground w-14 text-center truncate">
                    {friend.name.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search messages..."
              data-ocid="chat.search.input"
              className="pl-9 rounded-full bg-card border-border text-sm"
            />
          </div>
        </div>

        {/* Conversations list */}
        <div className="space-y-1 px-4" data-ocid="chat.conversations.list">
          {filtered.map((conv, idx) => (
            <motion.button
              key={conv.id}
              type="button"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              data-ocid={`chat.conversations.item.${idx + 1}`}
              onClick={() => setActiveChat(conv.id)}
              className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-accent/50 transition-colors text-left"
            >
              <div className="relative flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${conv.color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {conv.initials}
                </div>
                {conv.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <p
                    className={`font-semibold text-sm ${conv.unread > 0 ? "text-foreground" : "text-foreground/80"}`}
                  >
                    {conv.name}
                  </p>
                  <span className="text-[11px] text-muted-foreground">
                    {conv.time}
                  </span>
                </div>
                <p
                  className={`text-xs truncate ${conv.unread > 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}
                >
                  {conv.lastMsg}
                </p>
              </div>
              {conv.unread > 0 && (
                <span className="w-5 h-5 bg-gradient-to-br from-komo-blue to-komo-purple rounded-full text-[10px] text-white flex items-center justify-center font-bold flex-shrink-0">
                  {conv.unread}
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
