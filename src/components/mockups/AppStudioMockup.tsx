"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Mic, Send, Sparkles } from "lucide-react";

const appConfigs = [
  {
    prompt: "Show me my top spenders at risk of churning",
    title: "Whale Churn Risk Monitor",
  },
  {
    prompt: "Which channels drive the best players?",
    title: "UA Channel Performance",
  },
  {
    prompt: "Compare Battle Pass conversion across seasons",
    title: "Battle Pass Performance",
  },
];

// Mini bar chart component
function MiniBarChart({ data, color, labels }: { data: number[], color: string, labels?: string[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-[2px] h-full">
      {data.map((val, i) => (
        <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${(val / max) * 100}%` }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            className="w-full rounded-sm"
            style={{ backgroundColor: color, minHeight: 2 }}
          />
          {labels && <span className="text-[6px] text-gray-600 mt-0.5 truncate">{labels[i]}</span>}
        </div>
      ))}
    </div>
  );
}

// Mini line chart component
function MiniLineChart({ data, color }: { data: number[], color: string }) {
  const max = Math.max(...data);
  const points = data.map((val, i) => `${(i / (data.length - 1)) * 100},${100 - (val / max) * 90}`).join(' ');
  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.polyline
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.6 }}
        fill={color}
        d={`M0,100 L${points.split(' ').map(p => p).join(' L')} L100,100 Z`}
      />
    </svg>
  );
}

// Mini donut chart
function MiniDonut({ value, color, label }: { value: number, color: string, label: string }) {
  const circumference = 2 * Math.PI * 16;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="flex flex-col items-center">
      <svg className="w-10 h-10 -rotate-90">
        <circle cx="20" cy="20" r="16" fill="none" stroke="#1a1a24" strokeWidth="4" />
        <motion.circle
          cx="20" cy="20" r="16" fill="none" stroke={color} strokeWidth="4"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </svg>
      <span className="text-[7px] text-gray-500 mt-0.5">{label}</span>
    </div>
  );
}

// Result screen for each prompt
function ChurnRiskResult() {
  return (
    <div className="h-full flex flex-col gap-2">
      {/* KPIs */}
      <div className="flex gap-1.5">
        {[
          { label: "At Risk", value: "12", color: "#FF4D4D" },
          { label: "Revenue", value: "$18K", color: "#FFB800" },
          { label: "Avg LTV", value: "$1.2K", color: "#4ADE80" },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex-1 p-1.5 rounded bg-[#0A0A0F] border border-white/5"
          >
            <p className="text-[7px] text-gray-500">{kpi.label}</p>
            <p className="text-[11px] font-bold" style={{ color: kpi.color }}>{kpi.value}</p>
          </motion.div>
        ))}
      </div>
      {/* Charts row */}
      <div className="flex-1 flex gap-1.5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="flex-[2] p-1.5 rounded bg-[#0A0A0F] border border-white/5"
        >
          <p className="text-[7px] text-gray-500 mb-1">Risk by Spend Tier</p>
          <div className="h-[calc(100%-14px)]">
            <MiniBarChart data={[85, 62, 45, 28, 15]} color="#FF4D4D" labels={["$5K+", "$2K", "$1K", "$500", "$100"]} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex-1 p-1.5 rounded bg-[#0A0A0F] border border-white/5"
        >
          <p className="text-[7px] text-gray-500 mb-1">Churn Trend</p>
          <div className="h-[calc(100%-14px)]">
            <MiniLineChart data={[20, 25, 22, 35, 42, 38, 55]} color="#FF4D4D" />
          </div>
        </motion.div>
      </div>
      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="flex gap-1.5"
      >
        <div className="flex-1 p-1.5 rounded bg-[#0A0A0F] border border-white/5 flex items-center justify-around">
          <MiniDonut value={72} color="#FF4D4D" label="High" />
          <MiniDonut value={45} color="#FFB800" label="Med" />
          <MiniDonut value={18} color="#4ADE80" label="Low" />
        </div>
      </motion.div>
    </div>
  );
}

function UAChannelResult() {
  return (
    <div className="h-full flex flex-col gap-2">
      {/* KPIs */}
      <div className="flex gap-1.5">
        {[
          { label: "Best Channel", value: "TikTok", color: "#4ADE80" },
          { label: "Avg LTV", value: "$142", color: "#4ADE80" },
          { label: "ROAS", value: "3.2x", color: "#00D4FF" },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex-1 p-1.5 rounded bg-[#0A0A0F] border border-white/5"
          >
            <p className="text-[7px] text-gray-500">{kpi.label}</p>
            <p className="text-[11px] font-bold" style={{ color: kpi.color }}>{kpi.value}</p>
          </motion.div>
        ))}
      </div>
      {/* Charts */}
      <div className="flex-1 flex gap-1.5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="flex-1 p-1.5 rounded bg-[#0A0A0F] border border-white/5"
        >
          <p className="text-[7px] text-gray-500 mb-1">LTV by Channel</p>
          <div className="h-[calc(100%-14px)]">
            <MiniBarChart data={[142, 118, 95, 82, 64]} color="#4ADE80" labels={["TikTok", "Meta", "Google", "Unity", "Apple"]} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex-1 p-1.5 rounded bg-[#0A0A0F] border border-white/5"
        >
          <p className="text-[7px] text-gray-500 mb-1">D7 Retention</p>
          <div className="h-[calc(100%-14px)]">
            <MiniBarChart data={[38, 32, 28, 24, 18]} color="#4ADE80" labels={["TikTok", "Meta", "Google", "Unity", "Apple"]} />
          </div>
        </motion.div>
      </div>
      {/* Trend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="p-1.5 rounded bg-[#0A0A0F] border border-white/5"
      >
        <p className="text-[7px] text-gray-500 mb-1">Weekly Spend Efficiency</p>
        <div className="h-8">
          <MiniLineChart data={[2.1, 2.4, 2.8, 3.0, 2.9, 3.2, 3.4]} color="#00D4FF" />
        </div>
      </motion.div>
    </div>
  );
}

function BattlePassResult() {
  return (
    <div className="h-full flex flex-col gap-2">
      {/* KPIs */}
      <div className="flex gap-1.5">
        {[
          { label: "S4 Conv.", value: "12.4%", color: "#4ADE80" },
          { label: "vs S3", value: "+2.1%", color: "#4ADE80" },
          { label: "Revenue", value: "$2.1M", color: "#FFB800" },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex-1 p-1.5 rounded bg-[#0A0A0F] border border-white/5"
          >
            <p className="text-[7px] text-gray-500">{kpi.label}</p>
            <p className="text-[11px] font-bold" style={{ color: kpi.color }}>{kpi.value}</p>
          </motion.div>
        ))}
      </div>
      {/* Season comparison */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="flex-1 p-1.5 rounded bg-[#0A0A0F] border border-white/5"
      >
        <p className="text-[7px] text-gray-500 mb-1">Conversion by Season</p>
        <div className="h-[calc(100%-14px)]">
          <MiniBarChart data={[8.2, 9.5, 10.3, 12.4]} color="#4ADE80" labels={["S1", "S2", "S3", "S4"]} />
        </div>
      </motion.div>
      {/* Bottom charts */}
      <div className="flex gap-1.5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex-1 p-1.5 rounded bg-[#0A0A0F] border border-white/5"
        >
          <p className="text-[7px] text-gray-500 mb-1">By Tier</p>
          <div className="h-10">
            <MiniBarChart data={[42, 35, 23]} color="#00D4FF" labels={["Basic", "Premium", "Ultimate"]} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex-1 p-1.5 rounded bg-[#0A0A0F] border border-white/5"
        >
          <p className="text-[7px] text-gray-500 mb-1">D7 Completion</p>
          <div className="h-10">
            <MiniLineChart data={[15, 28, 42, 55, 68, 75, 82]} color="#4ADE80" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function AppStudioMockup() {
  const [displayText, setDisplayText] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState<"typing" | "building" | "result">("typing");

  const currentConfig = appConfigs[promptIndex];
  const currentPrompt = currentConfig.prompt;

  // Typing animation
  useEffect(() => {
    if (phase !== "typing") return;
    if (displayText.length < currentPrompt.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentPrompt.slice(0, displayText.length + 1));
      }, 35 + Math.random() * 20);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setPhase("building"), 500);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentPrompt, phase]);

  // Building phase
  useEffect(() => {
    if (phase !== "building") return;
    const timeout = setTimeout(() => setPhase("result"), 1000);
    return () => clearTimeout(timeout);
  }, [phase]);

  // Result phase - then reset
  useEffect(() => {
    if (phase !== "result") return;
    const timeout = setTimeout(() => {
      setDisplayText("");
      setPromptIndex((prev) => (prev + 1) % appConfigs.length);
      setPhase("typing");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [phase]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[320px] bg-[#0A0A0F] rounded-xl border border-white/10 p-3 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#FFB800]" />
          <h3 className="text-white font-semibold text-sm">App Studio</h3>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/20">
          <Sparkles className="w-3 h-3 text-[#FFB800]" />
          <span className="text-[#FFB800] text-[9px] font-medium">AI-Powered</span>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 rounded-lg bg-[#14141A] border border-white/5 mb-2 overflow-hidden">
        <AnimatePresence mode="wait">
          {phase === "typing" && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex items-center justify-center"
            >
              <div className="text-center px-4">
                <Sparkles className="w-6 h-6 text-[#FFB800]/30 mx-auto mb-2" />
                <p className="text-gray-500 text-[10px] mb-0.5">Describe what you want to know</p>
                <p className="text-gray-600 text-[9px]">Olive Studio builds what you need — and more</p>
              </div>
            </motion.div>
          )}

          {phase === "building" && (
            <motion.div
              key="building"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="h-full flex items-center justify-center"
            >
              <div className="text-center px-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-[#FFB800]/30 border-t-[#FFB800] rounded-full mx-auto mb-2"
                />
                <p className="text-[#FFB800] text-[10px]">Building your app...</p>
              </div>
            </motion.div>
          )}

          {phase === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="h-full p-2 flex flex-col"
            >
              {/* App Title */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-between mb-1.5"
              >
                <span className="text-white text-[10px] font-semibold">{currentConfig.title}</span>
                <span className="text-[#4ADE80] text-[8px]">✓ Built</span>
              </motion.div>

              {/* Dynamic Result Content */}
              <div className="flex-1">
                {promptIndex === 0 && <ChurnRiskResult />}
                {promptIndex === 1 && <UAChannelResult />}
                {promptIndex === 2 && <BattlePassResult />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Input */}
      <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#14141A] border border-white/10">
        <div className="flex-1 min-h-[16px]">
          <span className="text-white text-[10px]">
            {displayText}
            {phase === "typing" && (
              <span className={`inline-block w-[1.5px] h-[10px] bg-[#4ADE80] ml-[1px] align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            )}
          </span>
          {displayText.length === 0 && phase === "typing" && (
            <span className="text-gray-500 text-[10px]">Ask anything...</span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <Mic className="w-3 h-3 text-gray-500" />
          <Send className={`w-3 h-3 ${displayText.length > 0 ? 'text-[#4ADE80]' : 'text-gray-500'}`} />
        </div>
      </div>
    </div>
  );
}
