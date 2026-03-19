import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { useApp } from "../../context/AppContext";
import { MOCK_STORIES } from "../../data/mockData";

export default function StoriesStrip() {
  const { setCreateStoryOpen } = useApp();

  return (
    <div className="flex items-center gap-4 py-4 px-1 overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-3 flex-shrink-0">
        {MOCK_STORIES.map((story, i) => (
          <motion.button
            key={story.id}
            data-ocid={`stories.item.${i + 1}`}
            className="flex flex-col items-center gap-1.5 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div
              className="w-16 h-16 rounded-full p-[3px] flex-shrink-0"
              style={{
                background: story.viewed
                  ? "#2A313C"
                  : "linear-gradient(135deg, #2FA8FF 0%, #A855F7 100%)",
              }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center text-[13px] font-bold text-white border-2 border-[#1A1F26]"
                style={{ background: story.gradient }}
              >
                {story.initials}
              </div>
            </div>
            <span className="text-[11px] text-komo-text-secondary truncate max-w-[64px] text-center">
              {story.username}
            </span>
          </motion.button>
        ))}

        {/* Your Story */}
        <motion.button
          data-ocid="stories.add.button"
          onClick={() => setCreateStoryOpen(true)}
          className="flex flex-col items-center gap-1.5 flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#2A313C] flex items-center justify-center bg-[#202632] hover:border-komo-blue transition-colors">
            <Plus size={22} className="text-komo-blue" />
          </div>
          <span className="text-[11px] text-komo-text-muted">Your Story</span>
        </motion.button>
      </div>
    </div>
  );
}
