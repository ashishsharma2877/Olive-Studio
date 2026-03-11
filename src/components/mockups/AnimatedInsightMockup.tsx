"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { Lightbulb, TrendingUp, TrendingDown, ArrowRight, Check, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

type AnimationPhase = "idle" | "insight" | "why" | "action" | "impact" | "complete";
type UseCaseType = "pricing" | "roas" | "feature-roi" | "sentiment";

interface AnimatedInsightMockupProps {
  type: UseCaseType;
}

const mockupData = {
  pricing: {
    category: "Monetization",
    categoryColor: "#4ADE80",
    title: "Battle Pass conversion below target",
    insight: "Season 4 Battle Pass showing 12% lower conversion than Season 3 at same point in season.",
    why: "Price point $12.99 underperforming with 18-24 segment. Competitor launched similar pass at $9.99.",
    action: "Test $9.99 price point with 18-24 cohort.",
    impactLabel: "Projected conversion lift",
    impactValue: "+18%",
    impactTrend: "up" as const,
    actionButton: "Run A/B Test",
    completeText: "Test scheduled",
  },
  roas: {
    category: "UA Analytics",
    categoryColor: "#4ADE80",
    title: "TikTok outperforming Meta by 40%",
    insight: "TikTok campaigns delivering 2.4x ROAS vs Meta's 1.7x this week. CPI 40% lower.",
    why: "New creative format resonating with Gen-Z. Weekend multiplier 1.15x higher than weekdays.",
    action: "Shift 15% of Meta budget to TikTok for weekend campaigns.",
    impactLabel: "Projected ROAS improvement",
    impactValue: "2.4x",
    impactTrend: "up" as const,
    actionButton: "Reallocate Budget",
    completeText: "Budget shifted",
  },
  "feature-roi": {
    category: "Feature Analytics",
    categoryColor: "#00D4FF",
    title: "New ranked mode driving retention",
    insight: "Players who tried ranked mode show 23% higher D30 retention than control group.",
    why: "Competitive players engaging 2.3x more sessions. Monetization 18% higher in this cohort.",
    action: "Prioritize ranked mode improvements in Q2 roadmap.",
    impactLabel: "Retention lift",
    impactValue: "+23%",
    impactTrend: "up" as const,
    actionButton: "Update Roadmap",
    completeText: "Roadmap updated",
  },
  sentiment: {
    category: "Community Health",
    categoryColor: "#F472B6",
    title: "Negative sentiment spiking on Reddit",
    insight: "Patch 2.4 receiving 3x more negative mentions than previous patches. Main complaints: matchmaking.",
    why: "SBMM changes causing frustration in casual player segment. 42% of negative posts mention 'sweaty lobbies'.",
    action: "Consider SBMM rollback for casual modes. Prepare community response.",
    impactLabel: "Sentiment score",
    impactValue: "-18%",
    impactTrend: "down" as const,
    actionButton: "Draft Response",
    completeText: "Response drafted",
  },
};

export function AnimatedInsightMockup({ type }: AnimatedInsightMockupProps) {
  const [phase, setPhase] = useState<AnimationPhase>("idle");
  const [cycle, setCycle] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const data = mockupData[type];
  const isNegativeTrend = data.impactTrend === "down";

  // Start animation when in view
  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  // Reset when out of view
  useEffect(() => {
    if (!isInView && hasStarted) {
      setHasStarted(false);
      setPhase("idle");
      setCycle(0);
    }
  }, [isInView, hasStarted]);

  // Animation sequence
  useEffect(() => {
    if (!hasStarted) return;

    const sequence = async () => {
      setPhase("idle");
      await delay(800);
      
      setPhase("insight");
      await delay(2000);
      
      setPhase("why");
      await delay(2000);
      
      setPhase("action");
      await delay(2000);
      
      setPhase("impact");
      await delay(2500);
      
      setPhase("complete");
      await delay(1500);
      
      setCycle(c => c + 1);
    };

    sequence();
  }, [cycle, hasStarted]);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const showInsight = phase !== "idle";
  const showWhy = ["why", "action", "impact", "complete"].includes(phase);
  const showAction = ["action", "impact", "complete"].includes(phase);
  const showImpact = ["impact", "complete"].includes(phase);
  const isComplete = phase === "complete";

  return (
    <div ref={ref} className="relative w-full h-full min-h-[400px] bg-[#0A0A0F] rounded-xl border border-white/10 overflow-hidden">
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
                style={{ borderLeftWidth: 3, borderLeftColor: data.categoryColor }}
              >
                {/* Category & Time */}
                <div className="flex items-center justify-between mb-2">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-2 py-0.5 rounded text-[10px] font-medium"
                    style={{ backgroundColor: `${data.categoryColor}20`, color: data.categoryColor }}
                  >
                    {data.category}
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
                  {data.title}
                </motion.h4>

                {/* Insight */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ delay: 0.3 }}
                  className="mb-3"
                >
                  <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: data.categoryColor }}>Insight</p>
                  <p className="text-gray-300 text-xs leading-relaxed">{data.insight}</p>
                </motion.div>

                {/* Why */}
                <AnimatePresence>
                  {showWhy && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-3 overflow-hidden"
                    >
                      <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: data.categoryColor }}>Why</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{data.why}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action */}
                <AnimatePresence>
                  {showAction && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        boxShadow: showImpact ? `0 0 20px ${data.categoryColor}30` : "none"
                      }}
                      className="p-3 rounded bg-[#0A0A0F] border"
                      style={{ borderColor: `${data.categoryColor}30` }}
                    >
                      <p className="text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1" style={{ color: data.categoryColor }}>
                        <Sparkles className="w-3 h-3" />
                        Recommended Action
                      </p>
                      <p className="text-white text-xs leading-relaxed">{data.action}</p>
                      
                      {/* Projected impact */}
                      <AnimatePresence>
                        {showImpact && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between"
                          >
                            <span className="text-gray-400 text-[10px]">{data.impactLabel}</span>
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 200 }}
                              className="font-bold text-sm flex items-center gap-1"
                              style={{ color: isNegativeTrend ? "#FF4D4D" : "#4ADE80" }}
                            >
                              {isNegativeTrend ? (
                                <TrendingDown className="w-3 h-3" />
                              ) : (
                                <TrendingUp className="w-3 h-3" />
                              )}
                              {data.impactValue}
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
                          className="flex items-center gap-1 text-xs"
                          style={{ color: data.categoryColor }}
                        >
                          <Check className="w-3 h-3" />
                          <span>{data.completeText}</span>
                        </motion.div>
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-3 py-1.5 rounded text-[#0A0A0F] text-xs font-medium"
                          style={{ background: `linear-gradient(to right, ${data.categoryColor}, #00D4FF)` }}
                        >
                          {data.actionButton}
                        </motion.button>
                      )}
                    </div>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center gap-1 text-xs cursor-pointer"
                      style={{ color: data.categoryColor }}
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
          key={`${type}-${cycle}`}
          initial={{ width: "0%" }}
          animate={{ width: hasStarted ? "100%" : "0%" }}
          transition={{ duration: 12, ease: "linear" }}
          className="h-full"
          style={{ background: `linear-gradient(to right, ${data.categoryColor}, #00D4FF)` }}
        />
      </div>
    </div>
  );
}
