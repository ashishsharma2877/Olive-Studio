"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface PreviewTooltipProps {
  children: ReactNode;
  position?: "top" | "left";
}

export function PreviewTooltip({ children, position = "left" }: PreviewTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="cursor-pointer">
        {children}
      </div>
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: position === "left" ? 5 : 0, y: position === "top" ? 5 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: position === "left" ? 5 : 0, y: position === "top" ? 5 : 0 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-[100] px-3 py-2 rounded-lg bg-[#1a1a24] border border-white/20 shadow-2xl whitespace-nowrap ${
              position === "top" 
                ? "bottom-full left-1/2 -translate-x-1/2 mb-2" 
                : "right-full top-1/2 -translate-y-1/2 mr-2"
            }`}
          >
            <p className="text-[10px] text-gray-300">
              Preview — <Link href="/contact" className="text-[#4ADE80] hover:underline">Get Started</Link>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
