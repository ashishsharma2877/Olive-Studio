"use client";

import { motion } from "framer-motion";
import { Database, CheckCircle } from "lucide-react";
import { PreviewTooltip } from "./PreviewTooltip";

const connections = [
  {
    name: "Player Telemetry",
    source: "Snowflake",
    status: "Active",
    tables: 45,
    freshness: "15 minutes ago",
  },
  {
    name: "UA Platform",
    source: "BigQuery",
    status: "Active",
    tables: 32,
    freshness: "1 hour ago",
  },
  {
    name: "Live Ops Events",
    source: "PostgreSQL",
    status: "Active",
    tables: 12,
    freshness: "5 minutes ago",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

const pulseAnimation = {
  scale: [1, 1.2, 1],
  opacity: [1, 0.8, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export function DataHubMockup() {
  return (
    <div className="relative w-full h-full min-h-[300px] bg-[#0A0A0F] rounded-xl border border-white/10 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-semibold text-sm">Data Hub</h3>
          <p className="text-gray-500 text-xs">Connect and manage your data sources</p>
        </div>
        <PreviewTooltip>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-[#0A0A0F]"
          >
            + New Connection
          </motion.button>
        </PreviewTooltip>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-white/10 pb-2">
        <span className="text-[#00D4FF] text-xs font-medium border-b-2 border-[#00D4FF] pb-2">Connections</span>
        <span className="text-gray-500 text-xs">Domains</span>
      </div>

      {/* Connection Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 gap-3"
      >
        {connections.map((conn, index) => (
          <motion.div
            key={conn.name}
            variants={cardVariants}
            className="p-3 rounded-lg bg-[#14141A] border border-white/10 hover:border-[#00D4FF]/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center">
                  <Database className="w-4 h-4 text-[#00D4FF]" />
                </div>
                <div>
                  <p className="text-white text-xs font-medium">{conn.name}</p>
                  <p className="text-gray-500 text-[10px]">{conn.source}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1 mb-2">
              <motion.div
                animate={pulseAnimation}
                className="w-2 h-2 rounded-full bg-[#00FF88]"
              />
              <span className="text-[#00FF88] text-[10px]">{conn.status}</span>
            </div>

            <div className="space-y-1 text-[10px] text-gray-400">
              <p>{conn.tables} tables</p>
              <p>Data freshness: {conn.freshness}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] text-gray-500"
      >
        <span>3 active connections</span>
        <span>89 tables synced</span>
        <span className="flex items-center gap-1">
          <CheckCircle className="w-3 h-3 text-[#00FF88]" />
          All systems healthy
        </span>
      </motion.div>
    </div>
  );
}
