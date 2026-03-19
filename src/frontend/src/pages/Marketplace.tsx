import { ShoppingBag, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import ProductCard from "../components/marketplace/ProductCard";
import { useApp } from "../context/AppContext";
import { MOCK_PRODUCTS } from "../data/mockData";

const CATEGORIES = [
  "All",
  "Electronics",
  "Home & Living",
  "Creator Tools",
  "Sports & Fitness",
  "Fashion",
];

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { navigate, cartCount } = useApp();

  const filtered =
    activeCategory === "All"
      ? MOCK_PRODUCTS
      : MOCK_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <ShoppingBag size={22} className="text-komo-blue" />
          <h1 className="text-[20px] font-bold text-foreground">Marketplace</h1>
        </div>
        <button
          type="button"
          data-ocid="marketplace.cart.button"
          onClick={() => navigate("/cart")}
          className="relative flex items-center gap-2 px-4 py-2 rounded-full komo-gradient text-white text-[13px] font-medium"
        >
          <ShoppingCart size={15} />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-white/20 text-[11px] font-bold flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat}
            data-ocid="marketplace.category.tab"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all flex-shrink-0 ${
              activeCategory === cat
                ? "komo-gradient text-white shadow-sm"
                : "bg-accent text-komo-text-secondary hover:text-foreground border border-komo-border"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Product grid */}
      {filtered.length === 0 ? (
        <div data-ocid="marketplace.empty_state" className="text-center py-16">
          <ShoppingBag
            size={48}
            className="text-komo-text-muted mx-auto mb-3"
          />
          <p className="text-foreground font-semibold">
            No products in this category
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i + 1} />
          ))}
        </div>
      )}

      {/* Footer */}
      <div
        className="mt-8 p-4 rounded-2xl komo-card-shadow text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.05), rgba(168,85,247,0.05))",
          border: "1px solid rgba(59,130,246,0.15)",
        }}
      >
        <p className="text-[12px] text-komo-text-muted">
          📦 Cash on Delivery available for all orders &bull; Free returns
          within 7 days
        </p>
      </div>
    </div>
  );
}
