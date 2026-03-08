"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import { PreviewTooltip } from "./PreviewTooltip";

interface UseCaseMockupProps {
  type: "pricing" | "roas" | "feature-roi" | "sentiment";
  color: string;
}

const mockupData = {
  pricing: {
    title: "Battle Pass conversion below target",
    category: "Monetization",
    priority: "high",
    time: "2 hours ago",
    insight: "Season 4 Battle Pass showing 12% lower conversion than Season 3 at same point in season.",
    why: "Price point $12.99 underperforming with 18-24 segment. Competitor launched similar pass at $9.99.",
    action: "Test $9.99 price point with 18-24 cohort. Projected +18% conversion lift.",
    metric: { label: "Projected Impact", value: "+$240K", trend: "up" },
    chartData: [35, 42, 38, 45, 52, 48, 55, 62],
  },
  roas: {
    title: "TikTok outperforming Meta by 40%",
    category: "UA Analytics",
    priority: "medium",
    time: "5 hours ago",
    insight: "TikTok campaigns delivering 2.4x ROAS vs Meta's 1.7x this week. CPI 40% lower.",
    why: "New creative format resonating with Gen-Z. Weekend multiplier 1.15x higher than weekdays.",
    action: "Shift 15% of Meta budget to TikTok for weekend campaigns. Test new creative variants.",
    metric: { label: "ROAS Improvement", value: "2.4x", trend: "up" },
    chartData: [20, 28, 35, 42, 55, 68, 75, 82],
  },
  "feature-roi": {
    title: "New ranked mode driving retention",
    category: "Feature Analytics",
    priority: "low",
    time: "1 day ago",
    insight: "Players who tried ranked mode show 23% higher D30 retention than control group.",
    why: "Competitive players engaging 2.3x more sessions. Monetization 18% higher in this cohort.",
    action: "Prioritize ranked mode improvements in Q2 roadmap. Consider ranked-specific battle pass.",
    metric: { label: "Retention Lift", value: "+23%", trend: "up" },
    chartData: [45, 48, 52, 58, 62, 68, 72, 78],
  },
  sentiment: {
    title: "Negative sentiment spiking on Reddit",
    category: "Community Health",
    priority: "high",
    time: "1 hour ago",
    insight: "Patch 2.4 receiving 3x more negative mentions than previous patches. Main complaints: matchmaking.",
    why: "SBMM changes causing frustration in casual player segment. 42% of negative posts mention 'sweaty lobbies'.",
    action: "Consider SBMM rollback for casual modes. Prepare community response addressing concerns.",
    metric: { label: "Sentiment Score", value: "-18%", trend: "down" },
    chartData: [75, 72, 68, 55, 42, 38, 35, 32],
  },
};

export function UseCaseMockup({ type, color }: UseCaseMockupProps) {
  const data = mockupData[type];
  const isNegativeTrend = data.metric.trend === "down";

  return (
    <div className="relative w-full h-full min-h-[350px] bg-[#0A0A0F] rounded-xl border border-white/10">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-white text-sm font-medium">FanMint Insight</span>
          </div>
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-2 py-0.5 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-[10px] font-medium"
          >
            Live
          </motion.span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Nugget Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-4 rounded-lg bg-[#14141A] border border-white/10 mb-4"
          style={{ borderLeftWidth: 3, borderLeftColor: color }}
        >
          {/* Category & Time */}
          <div className="flex items-center justify-between mb-2">
            <span 
              className="px-2 py-0.5 rounded text-[10px] font-medium"
              style={{ backgroundColor: `${color}20`, color }}
            >
              {data.category}
            </span>
            <span className="text-gray-500 text-[10px]">{data.time}</span>
          </div>

          {/* Title */}
          <h4 className="text-white text-sm font-semibold mb-2">{data.title}</h4>

          {/* Insight */}
          <div className="mb-3">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Insight</p>
            <p className="text-gray-300 text-xs leading-relaxed">{data.insight}</p>
          </div>

          {/* Why */}
          <div className="mb-3">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Why</p>
            <p className="text-gray-400 text-xs leading-relaxed">{data.why}</p>
          </div>

          {/* Action */}
          <div className="p-2 rounded bg-[#0A0A0F] border border-white/5">
            <p className="text-[10px] text-[#00FF88] uppercase tracking-wider mb-1">Recommended Action</p>
            <p className="text-white text-xs leading-relaxed">{data.action}</p>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between"
        >
          {/* Mini Chart */}
          <div className="flex items-end gap-0.5 h-8">
            {data.chartData.map((value, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${value}%` }}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                className="w-3 rounded-t"
                style={{ 
                  backgroundColor: i === data.chartData.length - 1 ? color : `${color}40`,
                }}
              />
            ))}
          </div>

          {/* Metric */}
          <div className="text-right">
            <p className="text-[10px] text-gray-500">{data.metric.label}</p>
            <div className="flex items-center gap-1">
              {isNegativeTrend ? (
                <TrendingDown className="w-3 h-3 text-red-400" />
              ) : (
                <TrendingUp className="w-3 h-3 text-[#00FF88]" />
              )}
              <span 
                className="text-lg font-bold"
                style={{ color: isNegativeTrend ? "#FF4D4D" : "#00FF88" }}
              >
                {data.metric.value}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 p-3 border-t border-white/10 bg-[#0A0A0F]/80 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-[10px]">Click to explore this insight</span>
          <PreviewTooltip>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex items-center gap-1 text-[#00D4FF] text-xs cursor-pointer"
            >
              <span>Dive deeper</span>
              <ArrowRight className="w-3 h-3" />
            </motion.div>
          </PreviewTooltip>
        </div>
      </motion.div>
    </div>
  );
}
