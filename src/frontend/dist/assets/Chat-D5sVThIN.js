import { r as reactExports, j as jsxRuntimeExports, B as Button, g as ScrollArea, I as Input, M as MessageCircle, a9 as Search, m as motion } from "./index-C-s34q_b.js";
import { A as ArrowLeft } from "./arrow-left-BLO9QN5q.js";
import { S as Send } from "./send-4cS-Pq0K.js";
const ONLINE_FRIENDS = [
  {
    id: "f1",
    name: "Neha Singh",
    initials: "NS",
    online: true,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: "f3",
    name: "Sunita Devi",
    initials: "SD",
    online: true,
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "f5",
    name: "Meena Gupta",
    initials: "MG",
    online: true,
    color: "from-violet-500 to-purple-600"
  },
  {
    id: "f2",
    name: "Ravi Verma",
    initials: "RV",
    online: false,
    color: "from-pink-500 to-rose-600"
  },
  {
    id: "f4",
    name: "Arun Yadav",
    initials: "AY",
    online: false,
    color: "from-amber-500 to-orange-600"
  }
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
    online: true
  },
  {
    id: "c2",
    name: "Ravi Verma",
    initials: "RV",
    color: "from-pink-500 to-rose-600",
    lastMsg: "Reel dekhi kya tune?",
    time: "15m ago",
    unread: 0,
    online: false
  },
  {
    id: "c3",
    name: "Sunita Devi",
    initials: "SD",
    color: "from-emerald-500 to-teal-600",
    lastMsg: "Thanks bhai! 🙏",
    time: "1h ago",
    unread: 1,
    online: true
  },
  {
    id: "c4",
    name: "Arun Yadav",
    initials: "AY",
    color: "from-amber-500 to-orange-600",
    lastMsg: "Kya haal hai?",
    time: "3h ago",
    unread: 0,
    online: false
  },
  {
    id: "c5",
    name: "Meena Gupta",
    initials: "MG",
    color: "from-violet-500 to-purple-600",
    lastMsg: "Academy course kaisi rahi?",
    time: "Yesterday",
    unread: 0,
    online: true
  }
];
const DUMMY_MESSAGES = [
  { id: 1, from: "them", text: "Hey! Kaisa hai tu? 😊" },
  { id: 2, from: "me", text: "Bilkul sahi! Teri kya baat hai?" },
  { id: 3, from: "them", text: "Mast hoon. Komofast pe naya reel dala kya?" },
  { id: 4, from: "me", text: "Haan, abhi upload kiya! Check kar 👆" },
  { id: 5, from: "them", text: "Waah! Bahut accha tha 🔥" }
];
function ChatPage() {
  const [search, setSearch] = reactExports.useState("");
  const [activeChat, setActiveChat] = reactExports.useState(null);
  const [messages, setMessages] = reactExports.useState(DUMMY_MESSAGES);
  const [msgInput, setMsgInput] = reactExports.useState("");
  const activeChatData = MOCK_CONVERSATIONS.find((c) => c.id === activeChat);
  const sendMessage = () => {
    if (!msgInput.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "me", text: msgInput.trim() }
    ]);
    setMsgInput("");
  };
  const filtered = MOCK_CONVERSATIONS.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase())
  );
  if (activeChat && activeChatData) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-[calc(100vh-4rem)] max-w-lg mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 bg-card/80 backdrop-blur-sm border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "w-8 h-8 rounded-full",
            onClick: () => setActiveChat(null),
            "data-ocid": "chat.back.button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-9 h-9 rounded-full bg-gradient-to-br ${activeChatData.color} flex items-center justify-center text-white font-bold text-xs`,
            children: activeChatData.initials
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: activeChatData.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: activeChatData.online ? "🟢 Online" : "⚫ Offline" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1 px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: messages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `flex ${msg.from === "me" ? "justify-end" : "justify-start"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `max-w-[72%] px-3 py-2 rounded-2xl text-sm ${msg.from === "me" ? "bg-gradient-to-r from-komo-blue to-komo-purple text-white rounded-br-sm" : "bg-card border border-border text-foreground rounded-bl-sm"}`,
              children: msg.text
            }
          )
        },
        msg.id
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-card/80 backdrop-blur-sm border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: msgInput,
            onChange: (e) => setMsgInput(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && sendMessage(),
            placeholder: "Message likhein...",
            "data-ocid": "chat.message.input",
            className: "flex-1 rounded-full bg-background border-border text-sm"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "icon",
            onClick: sendMessage,
            "data-ocid": "chat.send.button",
            className: "w-9 h-9 rounded-full bg-gradient-to-r from-komo-blue to-komo-purple text-white border-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pb-24 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-komo-blue to-komo-purple flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 20, className: "text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-foreground", children: "Messages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Friends · Chats" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Online Friends" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 overflow-x-auto pb-2 scrollbar-hide", children: ONLINE_FRIENDS.map((friend) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "chat.online_friend.button",
            onClick: () => {
              const conv = MOCK_CONVERSATIONS.find(
                (c) => c.id === friend.id.replace("f", "c")
              );
              if (conv) setActiveChat(conv.id);
            },
            className: "flex flex-col items-center gap-1.5 flex-shrink-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-14 h-14 rounded-full bg-gradient-to-br ${friend.color} flex items-center justify-center text-white font-bold text-sm`,
                    children: friend.initials
                  }
                ),
                friend.online && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground w-14 text-center truncate", children: friend.name.split(" ")[0] })
            ]
          },
          friend.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Search,
          {
            size: 15,
            className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Search messages...",
            "data-ocid": "chat.search.input",
            className: "pl-9 rounded-full bg-card border-border text-sm"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 px-4", "data-ocid": "chat.conversations.list", children: filtered.map((conv, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        type: "button",
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: idx * 0.05 },
        "data-ocid": `chat.conversations.item.${idx + 1}`,
        onClick: () => setActiveChat(conv.id),
        className: "w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-accent/50 transition-colors text-left",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-12 h-12 rounded-full bg-gradient-to-br ${conv.color} flex items-center justify-center text-white font-bold text-sm`,
                children: conv.initials
              }
            ),
            conv.online && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `font-semibold text-sm ${conv.unread > 0 ? "text-foreground" : "text-foreground/80"}`,
                  children: conv.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: conv.time })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-xs truncate ${conv.unread > 0 ? "text-foreground font-medium" : "text-muted-foreground"}`,
                children: conv.lastMsg
              }
            )
          ] }),
          conv.unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 bg-gradient-to-br from-komo-blue to-komo-purple rounded-full text-[10px] text-white flex items-center justify-center font-bold flex-shrink-0", children: conv.unread })
        ]
      },
      conv.id
    )) })
  ] }) });
}
export {
  ChatPage as default
};
