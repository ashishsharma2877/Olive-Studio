"use client";

import { motion } from "framer-motion";
import { Brain, User, CheckCircle } from "lucide-react";
import { PreviewTooltip } from "./PreviewTooltip";

const learningItems = [
  {
    label: "Your role",
    value: "Studio GM",
    learned: true,
  },
  {
    label: "Priority metrics",
    value: "D7 Retention, ARPU, DAU",
    learned: true,
  },
  {
    label: "Alert preferences",
    value: "High-priority only",
    learned: true,
  },
  {
    label: "Decision patterns",
    value: "Analyzing...",
    learned: false,
  },
];

const recentActions = [
  { action: "Approved offer price change", impact: "+$42K", time: "2h ago" },
  { action: "Dismissed churn alert (false positive)", impact: "Noted", time: "1d ago" },
  { action: "Explored UA channel data", impact: "Learning", time: "3d ago" },
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

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4 }
  },
};

export function LearnMockup() {
  return (
    <div className="relative w-full h-full min-h-[300px] bg-[#0A0A0F] rounded-xl border border-white/10 p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-[#8B5CF6]" />
          <h3 className="text-white font-semibold text-sm">Living Context</h3>
        </div>
        <motion.div
          animate={{ 
            boxShadow: ["0 0 0 0 rgba(139, 92, 246, 0)", "0 0 0 8px rgba(139, 92, 246, 0.1)", "0 0 0 0 rgba(139, 92, 246, 0)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="px-2 py-0.5 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] text-[10px] font-medium"
        >
          Learning
        </motion.div>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3 p-3 rounded-lg bg-[#14141A] border border-white/10 mb-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-white text-xs font-medium">Jason Chen</p>
          <p className="text-gray-500 text-[10px]">Studio GM • Apex Legends</p>
        </div>
      </div>

      {/* What I've Learned */}
      <div className="mb-4 flex-1">
        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">What I've learned about you</p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          {learningItems.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="flex items-center justify-between p-2 rounded bg-[#14141A] border border-white/5"
            >
              <span className="text-gray-400 text-[10px]">{item.label}</span>
              <div className="flex items-center gap-1">
                <span className={`text-[10px] ${item.learned ? 'text-white' : 'text-gray-500'}`}>
                  {item.value}
                </span>
                {item.learned ? (
                  <CheckCircle className="w-3 h-3 text-[#00FF88]" />
                ) : (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 border border-[#8B5CF6] border-t-transparent rounded-full"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Stats - NOT absolute positioned */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-auto p-2 rounded bg-gradient-to-r from-[#8B5CF6]/10 to-[#00D4FF]/10 border border-white/5"
      >
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-gray-400">Context accuracy</span>
          <div className="flex items-center gap-2">
            <div className="w-16 h-1.5 bg-[#14141A] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "87%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#00D4FF] rounded-full"
              />
            </div>
            <span className="text-[#00FF88] font-medium">87%</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
