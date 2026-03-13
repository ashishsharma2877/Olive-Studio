"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, X, Check, AlertTriangle, TrendingDown, Clock, BarChart3, Zap, Target, Eye, Bell } from "lucide-react";

const weekToday = [
  {
    icon: AlertTriangle,
    pain: "Monday: Last week's event underperformed. You find out now.",
  },
  {
    icon: TrendingDown,
    pain: "Tuesday: Whales are churning. Nobody flagged it.",
  },
  {
    icon: Clock,
    pain: "Wednesday: Pricing meeting. You bring a spreadsheet and a hunch.",
  },
  {
    icon: BarChart3,
    pain: "Thursday: Dashboard says revenue is down. No idea why.",
  },
  {
    icon: X,
    pain: "Friday: Post-mortem. Again. 'We'll do better next time.'",
  },
];

const weekWithOlive = [
  {
    icon: Eye,
    joy: "Monday: You already knew the event was soft — adjusted mid-flight.",
  },
  {
    icon: Bell,
    joy: "Tuesday: Olive flagged whale risk last week. You intervened.",
  },
  {
    icon: Target,
    joy: "Wednesday: Pricing signals in hand. You walk in with a plan.",
  },
  {
    icon: Zap,
    joy: "Thursday: Revenue dipped because of segment X. Olive told you why.",
  },
  {
    icon: Check,
    joy: "Friday: No post-mortem needed. You optimized in real-time.",
  },
];

const comparison = [
  {
    traditional: "Generic across industries",
    aiAnalytics: "Horizontal / any industry",
    olivestudio: "Built for monetization & live ops",
  },
  {
    traditional: "Black-box AI",
    aiAnalytics: "General-purpose AI",
    olivestudio: "Player behavior intelligence",
  },
  {
    traditional: "Post-mortem insights",
    aiAnalytics: "Faster answers to queries",
    olivestudio: "Monday insights, not Friday post-mortems",
  },
  {
    traditional: "Dashboards you have to check",
    aiAnalytics: "Chat-based interface",
    olivestudio: "Offer & pricing signals pushed to you",
  },
  {
    traditional: "You ask questions",
    aiAnalytics: "AI answers your questions",
    olivestudio: "Surfaces what's hurting conversion",
  },
];

export default function WhyPage() {
  return (
    <div className="bg-[#0A0A0F]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4ADE80]/10 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Why{" "}
              <span className="gradient-text">Olive Studio</span>
            </h1>
            <div className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto space-y-2">
              <p>Not another dashboard.</p>
              <p>Not another chatbot.</p>
              <p className="text-white font-medium">Turn player signals into revenue decisions.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your Week: Pain vs Joy */}
      <section className="py-20 md:py-32 bg-[#0d0d12] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4ADE80]/5 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Your Week Today */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl" />
              <div className="relative p-8 rounded-2xl bg-[#14141A] border border-red-500/20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Every Studio Knows This Week</h3>
                </div>
                
                <div className="space-y-4">
                  {weekToday.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                        <item.icon className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.pain}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-gray-500 text-sm italic text-center">
                    Rinse. Repeat. Leave money on the table.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Your Week with Olive */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4ADE80]/20 to-[#00D4FF]/20 rounded-2xl blur-xl" />
              <div className="relative p-8 rounded-2xl bg-[#14141A] border border-[#4ADE80]/20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#4ADE80]/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#4ADE80]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Olive Studio Ends It</h3>
                </div>
                
                <div className="space-y-4">
                  {weekWithOlive.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#4ADE80]/30 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#4ADE80]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4ADE80]/20 transition-colors">
                        <item.icon className="w-4 h-4 text-[#4ADE80]" />
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.joy}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-[#4ADE80] text-sm font-medium text-center">
                    Proactive. Informed. In control.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Olive Studio Different - Combined Section */}
      <section className="py-20 md:py-32 relative">
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
              What Makes Olive Studio Different
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
              <div className="w-12 h-12 rounded-lg bg-[#4ADE80]/10 flex items-center justify-center mb-6">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Built for Live Ops
              </h3>
              <p className="text-gray-400">
                Weekly offer cycles, seasonal events, real-time player behavior — we understand your cadence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-xl bg-[#14141A] border border-white/10"
            >
              <div className="w-12 h-12 rounded-lg bg-[#4ADE80]/10 flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Speaks Your Language
              </h3>
              <p className="text-gray-400">
                ARPU, LTV, conversion, churn — the metrics on your P&L, not generic KPIs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-xl bg-[#14141A] border border-white/10"
            >
              <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                From Guessing to Knowing
              </h3>
              <p className="text-gray-400">
                Stop finding out what worked in the post-mortem. Know before you commit.
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
                  <th className="py-4 px-6 text-left text-sm font-semibold text-[#4ADE80] uppercase tracking-wider">
                    Olive Studio
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
                      {row.olivestudio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Tagline after table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-gray-400">
              From a <span className="text-white font-medium">5-person indie</span> to a <span className="text-white font-medium">5000-person HD title</span> —
            </p>
            <p className="text-xl text-white font-medium mt-2">
              the pain is the same. The fix is Olive Studio.
            </p>
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
              Let&apos;s talk about how Olive Studio can work for your team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-[#4ADE80] to-[#00D4FF] text-[#0A0A0F] hover:opacity-90 transition-all hover:scale-105"
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
