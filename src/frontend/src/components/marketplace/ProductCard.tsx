import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, ShoppingCart, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../../context/AppContext";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    image: string | null;
    seller: string;
    rating: number;
    reviews: number;
  };
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [inCart, setInCart] = useState(false);
  const { setCartCount } = useApp();

  const handleAddToCart = () => {
    setInCart(true);
    setCartCount((c) => c + 1);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <motion.div
      data-ocid={`marketplace.product.item.${index}`}
      className="komo-surface rounded-2xl komo-card-shadow overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.15))",
            }}
          >
            <Package size={40} className="text-komo-text-muted mb-2" />
            <span className="text-[12px] text-komo-text-muted">No image</span>
          </div>
        )}
        <div className="absolute top-2 left-2">
          <Badge className="text-[10px] px-2 py-0.5 bg-black/60 text-white border-0 backdrop-blur-sm">
            {product.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <p className="text-[13px] font-semibold text-foreground line-clamp-2 leading-tight mb-1">
          {product.title}
        </p>
        <p className="text-[11px] text-komo-text-muted mb-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-1 mb-2">
          <Star size={11} className="fill-yellow-400 text-yellow-400" />
          <span className="text-[11px] font-medium text-foreground">
            {product.rating}
          </span>
          <span className="text-[11px] text-komo-text-muted">
            ({product.reviews})
          </span>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[16px] font-bold komo-gradient-text">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-[11px] text-komo-text-muted">
              {product.stock} left
            </span>
          </div>
          <Button
            data-ocid={`marketplace.add_cart.${index}`}
            className={`w-full h-8 text-[12px] font-semibold ${
              inCart
                ? "bg-accent text-komo-blue hover:bg-accent"
                : "komo-gradient border-0 text-white hover:opacity-90"
            }`}
            onClick={handleAddToCart}
            disabled={inCart}
          >
            <ShoppingCart size={13} className="mr-1.5" />
            {inCart ? "Added to Cart" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
