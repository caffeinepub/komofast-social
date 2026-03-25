import { r as reactExports, u as useApp, j as jsxRuntimeExports, m as motion, B as Button, k as ShoppingCart, a as ue, l as Sparkles } from "./index-BnAx1XYK.js";
import { B as Badge } from "./badge-DY-Q4UMc.js";
import { P as Package } from "./package-DfrOxUf1.js";
import { S as Star } from "./star-CJmhsr34.js";
import { f as MOCK_PRODUCTS } from "./mockData-C0D4n2wq.js";
import { S as ShoppingBag } from "./shopping-bag-C1Ag-Rwy.js";
function ProductCard({ product, index }) {
  const [inCart, setInCart] = reactExports.useState(false);
  const { setCartCount } = useApp();
  const handleAddToCart = () => {
    setInCart(true);
    setCartCount((c) => c + 1);
    ue.success(`${product.title} added to cart!`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `marketplace.product.item.${index}`,
      className: "komo-surface rounded-2xl komo-card-shadow overflow-hidden flex flex-col",
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.07 },
      whileHover: { y: -4 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: { aspectRatio: "1/1" }, children: [
          product.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.image,
              alt: product.title,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "w-full h-full flex flex-col items-center justify-center",
              style: {
                background: "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.15))"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 40, className: "text-komo-text-muted mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-komo-text-muted", children: "No image" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] px-2 py-0.5 bg-black/60 text-white border-0 backdrop-blur-sm", children: product.category }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground line-clamp-2 leading-tight mb-1", children: product.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mb-2 line-clamp-2", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 11, className: "fill-yellow-400 text-yellow-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-foreground", children: product.rating }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-komo-text-muted", children: [
              "(",
              product.reviews,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[16px] font-bold komo-gradient-text", children: [
                "$",
                product.price.toFixed(2)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-komo-text-muted", children: [
                product.stock,
                " left"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": `marketplace.add_cart.${index}`,
                className: `w-full h-8 text-[12px] font-semibold ${inCart ? "bg-accent text-komo-blue hover:bg-accent" : "komo-gradient border-0 text-white hover:opacity-90"}`,
                onClick: handleAddToCart,
                disabled: inCart,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 13, className: "mr-1.5" }),
                  inCart ? "Added to Cart" : "Add to Cart"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const CATEGORIES = [
  "All",
  "Electronics",
  "Home & Living",
  "Creator Tools",
  "Sports & Fitness",
  "Fashion"
];
function Marketplace() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const { navigate, cartCount } = useApp();
  const filtered = activeCategory === "All" ? MOCK_PRODUCTS : MOCK_PRODUCTS.filter((p) => p.category === activeCategory);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 22, className: "text-komo-blue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-foreground", children: "Marketplace" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "marketplace.digital_market.button",
            onClick: () => navigate("/digital-market"),
            className: "flex items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-semibold text-white",
            style: {
              background: "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(47,168,255,0.2))",
              border: "1px solid rgba(168,85,247,0.4)",
              color: "#c084fc"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 13 }),
              "Digital Market 💎"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "marketplace.cart.button",
            onClick: () => navigate("/cart"),
            className: "relative flex items-center gap-2 px-4 py-2 rounded-full komo-gradient text-white text-[13px] font-medium",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 15 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cart" }),
              cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-white/20 text-[11px] font-bold flex items-center justify-center", children: cartCount })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.button,
      {
        "data-ocid": "marketplace.category.tab",
        onClick: () => setActiveCategory(cat),
        className: `px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all flex-shrink-0 ${activeCategory === cat ? "komo-gradient text-white shadow-sm" : "bg-accent text-komo-text-secondary hover:text-foreground border border-komo-border"}`,
        whileTap: { scale: 0.95 },
        children: cat
      },
      cat
    )) }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "marketplace.empty_state", className: "text-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ShoppingBag,
        {
          size: 48,
          className: "text-komo-text-muted mx-auto mb-3"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold", children: "No products in this category" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: filtered.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i + 1 }, product.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "mt-8 p-4 rounded-2xl komo-card-shadow text-center",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.05), rgba(168,85,247,0.05))",
          border: "1px solid rgba(59,130,246,0.15)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "📦 Cash on Delivery available for all orders • Free returns within 7 days" })
      }
    )
  ] });
}
export {
  Marketplace as default
};
