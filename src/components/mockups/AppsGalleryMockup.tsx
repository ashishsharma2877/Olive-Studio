"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target,
  BarChart3,
  Zap,
  Star
} from "lucide-react";
import { PreviewTooltip } from "./PreviewTooltip";

const apps = [
  {
    id: 1,
    name: "Player LTV",
    icon: TrendingUp,
    isFavorite: true,
    color: "#4ADE80",
  },
  {
    id: 2,
    name: "Offer Optimizer",
    icon: DollarSign,
    isFavorite: true,
    color: "#4ADE80",
  },
  {
    id: 3,
    name: "Churn Predictor",
    icon: Users,
    isFavorite: true,
    color: "#00D4FF",
  },
  {
    id: 4,
    name: "UA Dashboard",
    icon: Target,
    isFavorite: false,
    color: "#FFB800",
  },
  {
    id: 5,
    name: "Revenue Analytics",
    icon: BarChart3,
    isFavorite: false,
    color: "#FF4D4D",
  },
  {
    id: 6,
    name: "Live Ops Monitor",
    icon: Zap,
    isFavorite: true,
    color: "#4ADE80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4 }
  },
};

export function AppsGalleryMockup() {
  return (
    <div className="relative w-full h-full min-h-[300px] bg-[#0A0A0F] rounded-xl border border-white/10 p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-semibold text-sm">Apps</h3>
          <p className="text-gray-500 text-xs">Access your analytics tools and insights</p>
        </div>
        <PreviewTooltip>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-[#4ADE80] to-[#00D4FF] text-[#0A0A0F]"
          >
            + New App
          </motion.button>
        </PreviewTooltip>
      </div>

      {/* Search */}
      <div className="mb-4">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#14141A] border border-white/10">
          <span className="text-gray-500 text-xs">🔍</span>
          <span className="text-gray-500 text-xs">Search apps...</span>
        </div>
      </div>

      {/* Favorites Section */}
      <div className="mb-3">
        <span className="text-white text-xs font-medium">Favorites ({apps.filter(a => a.isFavorite).length})</span>
      </div>

      {/* App Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 gap-2"
      >
        {apps.slice(0, 6).map((app) => (
          <motion.div
            key={app.id}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.01, 
              borderColor: `${app.color}50`,
              backgroundColor: "rgba(20, 20, 26, 1)"
            }}
            className="relative p-3 rounded-lg bg-[#14141A] border border-white/10 text-center"
          >
            {app.isFavorite && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-1 right-1"
              >
                <Star className="w-3 h-3 text-[#FFB800] fill-[#FFB800]" />
              </motion.div>
            )}
            <div 
              className="w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${app.color}20` }}
            >
              <app.icon className="w-4 h-4" style={{ color: app.color }} />
            </div>
            <p className="text-white text-[10px] font-medium truncate">{app.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-auto pt-4 flex items-center justify-between text-[10px] text-gray-500"
      >
        <span>6 apps available</span>
        <PreviewTooltip>
          <span className="text-[#4ADE80] cursor-pointer hover:underline">Browse all →</span>
        </PreviewTooltip>
      </motion.div>
    </div>
  );
}
