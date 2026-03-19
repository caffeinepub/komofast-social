import { Badge } from "@/components/ui/badge";
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Share2,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface PostCardProps {
  post: {
    id: string;
    username: string;
    displayName: string;
    initials: string;
    gradient: string;
    isCreator: boolean;
    timestamp: string;
    image: string | null;
    caption: string;
    likes: number;
    comments: number;
    shares: number;
    liked: boolean;
    bookmarked: boolean;
    postType: string;
  };
  onCommentClick?: (postId: string) => void;
  index: number;
}

function formatCount(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

export default function PostCard({
  post,
  onCommentClick,
  index,
}: PostCardProps) {
  const [liked, setLiked] = useState(post.liked);
  const [bookmarked, setBookmarked] = useState(post.bookmarked);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [heartBurst, setHeartBurst] = useState(false);

  const handleLike = () => {
    setLiked((prev) => {
      const next = !prev;
      setLikeCount((c) => (next ? c + 1 : c - 1));
      if (next) {
        setHeartBurst(true);
        setTimeout(() => setHeartBurst(false), 600);
      }
      return next;
    });
  };

  return (
    <motion.article
      data-ocid={`feed.post.item.${index}`}
      className="komo-surface rounded-2xl komo-card-shadow overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4">
        <button
          type="button"
          className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0"
          style={{ background: post.gradient }}
        >
          {post.initials}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-semibold text-foreground truncate">
              {post.displayName}
            </span>
            {post.isCreator && (
              <Badge className="text-[9px] px-1.5 py-0 h-4 bg-komo-badge/20 text-komo-blue border-komo-blue/30 font-semibold">
                <Zap size={9} className="mr-0.5" /> CREATOR
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[12px] text-komo-text-muted">
              @{post.username}
            </span>
            <span className="text-komo-text-muted text-[10px]">·</span>
            <span className="text-[12px] text-komo-text-muted">
              {post.timestamp}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-komo-blue/30 text-komo-blue hover:bg-komo-blue/10 transition-colors"
            data-ocid={`feed.post.boost_button.${index}`}
          >
            Boost
          </button>
          <button
            type="button"
            className="text-komo-text-muted hover:text-foreground p-1"
          >
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Image */}
      {post.image && (
        <div className="w-full overflow-hidden">
          <img
            src={post.image}
            alt="Post"
            className="w-full object-cover max-h-80 hover:scale-[1.01] transition-transform duration-500"
          />
        </div>
      )}

      {/* Caption */}
      <div className="px-4 pt-3">
        <p className="text-[14px] text-foreground leading-relaxed line-clamp-3">
          {post.caption}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1">
          {/* Like */}
          <motion.button
            data-ocid={`feed.post.like.${index}`}
            onClick={handleLike}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-accent transition-colors group"
            whileTap={{ scale: 0.85 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={liked ? "liked" : "notliked"}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
              >
                <Heart
                  size={19}
                  className={
                    liked
                      ? "fill-komo-red text-komo-red"
                      : "text-komo-text-secondary group-hover:text-komo-red"
                  }
                  strokeWidth={liked ? 0 : 2}
                />
              </motion.span>
            </AnimatePresence>
            <span
              className={`text-[13px] font-medium ${liked ? "text-komo-red" : "text-komo-text-secondary"}`}
            >
              {formatCount(likeCount)}
            </span>
          </motion.button>

          {/* Comment */}
          <button
            type="button"
            data-ocid={`feed.post.comment.${index}`}
            onClick={() => onCommentClick?.(post.id)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-accent transition-colors group"
          >
            <MessageCircle
              size={19}
              className="text-komo-text-secondary group-hover:text-komo-blue"
            />
            <span className="text-[13px] font-medium text-komo-text-secondary">
              {formatCount(post.comments)}
            </span>
          </button>

          {/* Share */}
          <button
            type="button"
            data-ocid={`feed.post.share.${index}`}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-accent transition-colors group"
          >
            <Share2
              size={19}
              className="text-komo-text-secondary group-hover:text-komo-purple"
            />
            <span className="text-[13px] font-medium text-komo-text-secondary">
              {formatCount(post.shares)}
            </span>
          </button>
        </div>

        {/* Bookmark */}
        <motion.button
          data-ocid={`feed.post.bookmark.${index}`}
          onClick={() => setBookmarked((b) => !b)}
          whileTap={{ scale: 0.85 }}
          className="p-2 rounded-xl hover:bg-accent transition-colors"
        >
          <Bookmark
            size={19}
            className={
              bookmarked
                ? "fill-komo-blue text-komo-blue"
                : "text-komo-text-secondary"
            }
            strokeWidth={bookmarked ? 0 : 2}
          />
        </motion.button>
      </div>

      {heartBurst && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ opacity: 0, scale: 2.5 }}
          transition={{ duration: 0.6 }}
        >
          <Heart size={80} className="fill-komo-red text-komo-red" />
        </motion.div>
      )}
    </motion.article>
  );
}
