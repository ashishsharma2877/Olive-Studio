"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const comparison = [
  {
    traditional: "Generic across industries",
    aiAnalytics: "Horizontal / any industry",
    fanmint: "Built for live games",
  },
  {
    traditional: "Black-box AI",
    aiAnalytics: "General-purpose AI",
    fanmint: "Gaming-specific intelligence",
  },
  {
    traditional: "Post-mortem insights",
    aiAnalytics: "Faster answers to queries",
    fanmint: "Real-time detection",
  },
  {
    traditional: "Dashboards you have to check",
    aiAnalytics: "Chat-based interface",
    fanmint: "Decisions pushed to you",
  },
  {
    traditional: "You ask questions",
    aiAnalytics: "AI answers your questions",
    fanmint: "It tells you where to look",
  },
];

export default function WhyPage() {
  return (
    <div className="bg-[#0A0A0F]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Why{" "}
              <span className="gradient-text">FanMint</span>
            </h1>
            <div className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto space-y-2">
              <p>Not another dashboard.</p>
              <p>Not another chatbot.</p>
              <p className="text-white font-medium">We help you build what players love.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes FanMint Different - Combined Section */}
      <section className="py-20 md:py-32 bg-[#0d0d12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What Makes FanMint Different
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Three things that set us apart.
            </p>
          </motion.div>

          {/* Three Differentiator Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-xl bg-[#14141A] border border-white/10"
            >
              <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Gaming-Native
              </h3>
              <p className="text-gray-400">
                Built by game industry veterans. We understand live ops, player
                behavior, and the metrics that actually matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-xl bg-[#14141A] border border-white/10"
            >
              <div className="w-12 h-12 rounded-lg bg-[#00FF88]/10 flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Finds You First
              </h3>
              <p className="text-gray-400">
                You don&apos;t hunt for insights. They come to you — before you
                know to look.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-xl bg-[#14141A] border border-white/10"
            >
              <div className="w-12 h-12 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Learns You
              </h3>
              <p className="text-gray-400">
                Your priorities, not just your data. The more you use it, the
                smarter it gets.
              </p>
            </motion.div>
          </div>

          {/* Transition to Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 mt-8"
          >
            <p className="text-gray-400 text-lg">
              See how we compare to traditional analytics and AI tools.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Traditional Analytics
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    AI Analytics
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-[#00D4FF] uppercase tracking-wider">
                    FanMint
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-6 text-gray-400">
                      {row.traditional}
                    </td>
                    <td className="py-4 px-6 text-gray-400">
                      {row.aiAnalytics}
                    </td>
                    <td className="py-4 px-6 text-white font-medium">
                      {row.fanmint}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#0d0d12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to see the difference?
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Let&apos;s talk about how FanMint can work for your team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-[#0A0A0F] hover:opacity-90 transition-all hover:scale-105"
              >
                Talk to Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
