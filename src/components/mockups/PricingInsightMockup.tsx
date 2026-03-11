"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, TrendingUp, ArrowRight, Check, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

type AnimationPhase = "idle" | "insight" | "why" | "action" | "impact" | "complete";

export function PricingInsightMockup() {
  const [phase, setPhase] = useState<AnimationPhase>("idle");
  const [cycle, setCycle] = useState(0);

  // Animation sequence
  useEffect(() => {
    const sequence = async () => {
      // Reset to idle
      setPhase("idle");
      await delay(800);
      
      // Insight appears
      setPhase("insight");
      await delay(2000);
      
      // Why expands
      setPhase("why");
      await delay(2000);
      
      // Action highlights
      setPhase("action");
      await delay(2000);
      
      // Impact shows
      setPhase("impact");
      await delay(2500);
      
      // Complete state
      setPhase("complete");
      await delay(1500);
      
      // Loop
      setCycle(c => c + 1);
    };

    sequence();
  }, [cycle]);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const showInsight = phase !== "idle";
  const showWhy = ["why", "action", "impact", "complete"].includes(phase);
  const showAction = ["action", "impact", "complete"].includes(phase);
  const showImpact = ["impact", "complete"].includes(phase);
  const isComplete = phase === "complete";

  return (
    <div className="relative w-full h-full min-h-[400px] bg-[#0A0A0F] rounded-xl border border-white/10 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-[#4ADE80]" />
            <span className="text-white text-sm font-medium">Olive Studio Insight</span>
          </div>
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-2 py-0.5 rounded-full bg-[#4ADE80]/20 text-[#4ADE80] text-[10px] font-medium"
          >
            Live
          </motion.span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        <AnimatePresence mode="wait">
          {phase === "idle" ? (
            <motion.div
              key="waiting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center h-[280px]"
            >
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-8 h-8 text-[#4ADE80] mx-auto mb-3" />
                </motion.div>
                <p className="text-gray-500 text-sm">Analyzing player data...</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              {/* Nugget Card */}
              <div 
                className="p-4 rounded-lg bg-[#14141A] border border-white/10"
                style={{ borderLeftWidth: 3, borderLeftColor: "#4ADE80" }}
              >
                {/* Category & Time */}
                <div className="flex items-center justify-between mb-2">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#4ADE80]/20 text-[#4ADE80]"
                  >
                    Monetization
                  </motion.span>
                  <span className="text-gray-500 text-[10px]">Just now</span>
                </div>

                {/* Title */}
                <motion.h4 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white text-sm font-semibold mb-3"
                >
                  Battle Pass conversion below target
                </motion.h4>

                {/* Insight - Always visible once shown */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ delay: 0.3 }}
                  className="mb-3"
                >
                  <p className="text-[10px] text-[#4ADE80] uppercase tracking-wider mb-1">Insight</p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Season 4 Battle Pass showing 12% lower conversion than Season 3 at same point in season.
                  </p>
                </motion.div>

                {/* Why - Expands in */}
                <AnimatePresence>
                  {showWhy && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-3 overflow-hidden"
                    >
                      <p className="text-[10px] text-[#4ADE80] uppercase tracking-wider mb-1">Why</p>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Price point $12.99 underperforming with 18-24 segment. Competitor launched similar pass at $9.99.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action - Highlights */}
                <AnimatePresence>
                  {showAction && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        boxShadow: showImpact ? "0 0 20px rgba(74, 222, 128, 0.3)" : "none"
                      }}
                      className="p-3 rounded bg-[#0A0A0F] border border-[#4ADE80]/30"
                    >
                      <p className="text-[10px] text-[#4ADE80] uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Recommended Action
                      </p>
                      <p className="text-white text-xs leading-relaxed">
                        Test $9.99 price point with 18-24 cohort.
                      </p>
                      
                      {/* Projected impact */}
                      <AnimatePresence>
                        {showImpact && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between"
                          >
                            <span className="text-gray-400 text-[10px]">Projected conversion lift</span>
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 200 }}
                              className="text-[#4ADE80] font-bold text-sm flex items-center gap-1"
                            >
                              <TrendingUp className="w-3 h-3" />
                              +18%
                            </motion.span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom action bar */}
              <AnimatePresence>
                {showImpact && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between pt-2"
                  >
                    <div className="flex items-center gap-2">
                      {isComplete ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex items-center gap-1 text-[#4ADE80] text-xs"
                        >
                          <Check className="w-3 h-3" />
                          <span>Test scheduled</span>
                        </motion.div>
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-3 py-1.5 rounded bg-gradient-to-r from-[#4ADE80] to-[#00D4FF] text-[#0A0A0F] text-xs font-medium"
                        >
                          Run A/B Test
                        </motion.button>
                      )}
                    </div>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center gap-1 text-[#4ADE80] text-xs cursor-pointer"
                    >
                      <span>Dive deeper</span>
                      <ArrowRight className="w-3 h-3" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
        <motion.div
          key={cycle}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 12, ease: "linear" }}
          className="h-full bg-gradient-to-r from-[#4ADE80] to-[#00D4FF]"
        />
      </div>
    </div>
  );
}
