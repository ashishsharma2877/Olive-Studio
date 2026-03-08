"use client";

import { motion } from "framer-motion";
import { Lightbulb, AlertTriangle, TrendingDown, MessageSquare } from "lucide-react";
import { PreviewTooltip } from "./PreviewTooltip";

const nuggets = [
  {
    id: 1,
    title: "Churn spike detected in Apex Legends",
    category: "Player Retention",
    priority: "high",
    time: "2 hours ago",
    preview: "Day-7 retention dropped 18% for players acquired via TikTok campaigns this week.",
    isNew: true,
  },
  {
    id: 2,
    title: "Battle Pass conversion below target",
    category: "Monetization",
    priority: "medium",
    time: "5 hours ago",
    preview: "Season 4 Battle Pass showing 12% lower conversion than Season 3 at same point.",
    isNew: true,
  },
  {
    id: 3,
    title: "Negative sentiment trending on Reddit",
    category: "Community",
    priority: "high",
    time: "1 hour ago",
    preview: "Patch 2.4 receiving 3x more negative mentions than previous patches.",
    isNew: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  },
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "#FF4D4D";
    case "medium": return "#FFB800";
    case "low": return "#00FF88";
    default: return "#6B7280";
  }
};

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case "high": return <AlertTriangle className="w-3 h-3" />;
    case "medium": return <TrendingDown className="w-3 h-3" />;
    default: return <MessageSquare className="w-3 h-3" />;
  }
};

export function NuggetsFeedMockup() {
  return (
    <div className="relative w-full h-full min-h-[300px] bg-[#0A0A0F] rounded-xl border border-white/10 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-[#00D4FF]" />
          <h3 className="text-white font-semibold text-sm">Insights</h3>
          <span className="px-2 py-0.5 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-[10px] font-medium">
            3 new
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-xs">Filter</span>
        </div>
      </div>

      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <motion.div
          animate={{ 
            opacity: [1, 0.5, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#00D4FF] text-xs"
        >
          ✨
        </motion.div>
        <span className="text-white text-xs font-medium">New This Week</span>
        <span className="text-gray-500 text-[10px]">(3)</span>
      </div>

      {/* Nugget Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-2"
      >
        {nuggets.map((nugget) => (
          <motion.div
            key={nugget.id}
            variants={cardVariants}
            whileHover={{ scale: 1.01, borderColor: "rgba(0, 212, 255, 0.3)", backgroundColor: "rgba(20, 20, 26, 1)" }}
            className="p-3 rounded-lg bg-[#14141A] border border-white/10 transition-colors"
            style={{ borderLeftWidth: 3, borderLeftColor: getPriorityColor(nugget.priority) }}
          >
            <div className="flex items-start justify-between mb-1">
              <div className="flex items-center gap-2">
                <span 
                  className="px-1.5 py-0.5 rounded text-[8px] font-medium"
                  style={{ 
                    backgroundColor: `${getPriorityColor(nugget.priority)}20`,
                    color: getPriorityColor(nugget.priority)
                  }}
                >
                  {nugget.category}
                </span>
                {nugget.isNew && (
                  <motion.span
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]"
                  />
                )}
              </div>
              <span className="text-gray-500 text-[10px]">{nugget.time}</span>
            </div>
            
            <h4 className="text-white text-xs font-medium mb-1">{nugget.title}</h4>
            <p className="text-gray-400 text-[10px] leading-relaxed line-clamp-2">
              {nugget.preview}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-3 left-3 right-3 text-center"
      >
        <PreviewTooltip>
          <span className="text-[#00D4FF] text-[10px] cursor-pointer hover:underline">
            View all insights →
          </span>
        </PreviewTooltip>
      </motion.div>
    </div>
  );
}
