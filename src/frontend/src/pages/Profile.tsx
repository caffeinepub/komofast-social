import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bookmark,
  Grid,
  LogOut,
  Settings,
  Star,
  TrendingUp,
  UserMinus,
  UserPlus,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import PostDetailModal from "../components/modals/PostDetailModal";
import { useApp } from "../context/AppContext";
import { AVATAR_GRADIENTS, MOCK_POSTS } from "../data/mockData";

const PROFILE_MOCK = {
  id: "me",
  username: "komofast_user",
  displayName: "Komofast User",
  bio: "Content creator & digital explorer ✨ Building the future one post at a time. Subscribe for exclusive creator content!",
  isCreator: true,
  followers: 14800,
  following: 892,
  posts: MOCK_POSTS.length,
  earnings: 2847.5,
  subscribers: 312,
  gradient: AVATAR_GRADIENTS[0],
  initials: "KU",
};

function formatNum(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

export default function Profile() {
  const { currentPath, currentUser, logout } = useApp();
  const isOwnProfile = !currentPath.includes("userId");
  const [following, setFollowing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [activeTab, setActiveTab] = useState<"posts" | "saved">("posts");
  const [selectedPost, setSelectedPost] = useState<
    (typeof MOCK_POSTS)[0] | null
  >(null);

  const profile = currentUser
    ? {
        ...PROFILE_MOCK,
        displayName: currentUser.displayName || PROFILE_MOCK.displayName,
        username: currentUser.username || PROFILE_MOCK.username,
        bio: currentUser.bio || PROFILE_MOCK.bio,
        isCreator: currentUser.isCreator,
      }
    : PROFILE_MOCK;

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-4">
      {/* Cover / gradient header */}
      <div
        className="h-32 rounded-2xl mb-0 -mb-8 relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.3) 0%, rgba(168,85,247,0.3) 100%)",
        }}
      >
        {isOwnProfile && (
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              type="button"
              data-ocid="profile.settings.button"
              className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
              onClick={() => toast.info("Settings coming soon!")}
            >
              <Settings size={16} />
            </button>
            <button
              type="button"
              data-ocid="profile.delete_button"
              className="w-8 h-8 rounded-full bg-red-900/40 backdrop-blur-sm flex items-center justify-center text-red-400 hover:bg-red-900/60 transition-colors"
              title="Logout"
              onClick={handleLogout}
            >
              <LogOut size={15} />
            </button>
          </div>
        )}
      </div>

      {/* Avatar + info */}
      <div className="komo-surface rounded-2xl komo-card-shadow p-4 pt-12 relative">
        {/* Avatar */}
        <div
          className="absolute -top-10 left-4 w-20 h-20 rounded-full flex items-center justify-center text-[24px] font-bold text-white border-4 border-[#1A1F26]"
          style={{ background: profile.gradient }}
        >
          {profile.initials}
        </div>

        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-[18px] font-bold text-foreground">
                {profile.displayName}
              </h1>
              {profile.isCreator && (
                <Badge className="bg-komo-badge/20 text-komo-blue border-komo-blue/30 text-[10px]">
                  <Zap size={10} className="mr-0.5" /> CREATOR
                </Badge>
              )}
            </div>
            <p className="text-[13px] text-komo-text-muted">
              @{profile.username}
            </p>
          </div>

          {!isOwnProfile ? (
            <div className="flex gap-2">
              <Button
                data-ocid="profile.follow.button"
                size="sm"
                className={
                  following
                    ? "bg-accent text-komo-text-secondary"
                    : "komo-gradient border-0 text-white"
                }
                onClick={() => {
                  setFollowing((f) => !f);
                  toast.success(following ? "Unfollowed" : "Following!");
                }}
              >
                {following ? (
                  <UserMinus size={14} className="mr-1" />
                ) : (
                  <UserPlus size={14} className="mr-1" />
                )}
                {following ? "Unfollow" : "Follow"}
              </Button>
              {profile.isCreator && (
                <Button
                  data-ocid="profile.subscribe.button"
                  size="sm"
                  variant={subscribed ? "secondary" : "outline"}
                  className={
                    subscribed
                      ? ""
                      : "border-komo-purple text-komo-purple hover:bg-komo-purple/10"
                  }
                  onClick={() => {
                    setSubscribed((s) => !s);
                    toast.success(
                      subscribed ? "Unsubscribed" : "Subscribed to creator!",
                    );
                  }}
                >
                  <Star size={13} className="mr-1" />
                  {subscribed ? "Subscribed" : "Subscribe"}
                </Button>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Button
                data-ocid="profile.edit.button"
                size="sm"
                variant="outline"
                className="border-komo-border text-komo-text-secondary hover:text-foreground"
                onClick={() => toast.info("Edit profile coming soon!")}
              >
                Edit Profile
              </Button>
              <Button
                data-ocid="profile.delete_button"
                size="sm"
                variant="outline"
                className="border-red-800/50 text-red-400 hover:bg-red-900/20 hover:text-red-300"
                onClick={handleLogout}
              >
                <LogOut size={13} className="mr-1" /> Logout
              </Button>
            </div>
          )}
        </div>

        {/* Bio */}
        <p className="text-[13px] text-komo-text-secondary mt-3 leading-relaxed">
          {profile.bio}
        </p>

        {/* Stats row */}
        <div className="flex gap-5 mt-4">
          <div className="text-center">
            <p className="text-[16px] font-bold text-foreground">
              {formatNum(profile.posts)}
            </p>
            <p className="text-[11px] text-komo-text-muted">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-[16px] font-bold text-foreground">
              {formatNum(profile.followers)}
            </p>
            <p className="text-[11px] text-komo-text-muted">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-[16px] font-bold text-foreground">
              {formatNum(profile.following)}
            </p>
            <p className="text-[11px] text-komo-text-muted">Following</p>
          </div>
          {profile.isCreator && (
            <div className="text-center">
              <p className="text-[16px] font-bold text-foreground">
                {formatNum(profile.subscribers)}
              </p>
              <p className="text-[11px] text-komo-text-muted">Subscribers</p>
            </div>
          )}
        </div>

        {/* Creator earnings (own profile only) */}
        {isOwnProfile && profile.isCreator && (
          <div
            className="mt-4 p-3 rounded-xl flex items-center gap-3"
            style={{
              background:
                "linear-gradient(135deg, rgba(47,168,255,0.1), rgba(168,85,247,0.1))",
              border: "1px solid rgba(168,85,247,0.2)",
            }}
          >
            <div className="w-9 h-9 rounded-full komo-gradient flex items-center justify-center">
              <TrendingUp size={16} className="text-white" />
            </div>
            <div>
              <p className="text-[11px] text-komo-text-muted">
                Creator Earnings
              </p>
              <p className="text-[18px] font-bold komo-gradient-text">
                ${profile.earnings.toFixed(2)}
              </p>
            </div>
            <Button
              data-ocid="profile.withdraw.button"
              size="sm"
              className="ml-auto komo-gradient border-0 text-white text-[12px]"
              onClick={() => toast.info("Withdrawal coming soon!")}
            >
              Withdraw
            </Button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div
        data-ocid="profile.content.tab"
        className="flex border-b border-komo-border mt-5"
      >
        <button
          type="button"
          onClick={() => setActiveTab("posts")}
          className={`flex items-center gap-2 px-5 py-3 text-[13px] font-semibold border-b-2 transition-colors ${
            activeTab === "posts"
              ? "border-komo-blue text-komo-blue"
              : "border-transparent text-komo-text-muted hover:text-foreground"
          }`}
        >
          <Grid size={15} /> Posts
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("saved")}
          className={`flex items-center gap-2 px-5 py-3 text-[13px] font-semibold border-b-2 transition-colors ${
            activeTab === "saved"
              ? "border-komo-blue text-komo-blue"
              : "border-transparent text-komo-text-muted hover:text-foreground"
          }`}
        >
          <Bookmark size={15} /> Saved
        </button>
      </div>

      {/* Post grid */}
      <div className="grid grid-cols-3 gap-1 mt-1">
        {(activeTab === "saved"
          ? MOCK_POSTS.filter((p) => p.bookmarked)
          : MOCK_POSTS
        ).map((post, i) => (
          <motion.button
            key={post.id}
            data-ocid={`profile.post.item.${i + 1}`}
            className="aspect-square rounded-sm overflow-hidden relative group"
            onClick={() => setSelectedPost(post)}
            whileHover={{ opacity: 0.85 }}
          >
            {post.image ? (
              <img
                src={post.image}
                alt="post"
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-[11px] text-white font-medium p-2 text-center"
                style={{ background: post.gradient }}
              >
                {post.caption.slice(0, 30)}...
              </div>
            )}
          </motion.button>
        ))}
      </div>

      <PostDetailModal
        post={selectedPost}
        open={!!selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
}
