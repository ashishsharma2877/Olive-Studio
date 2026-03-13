"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  DollarSign, 
  Zap,
  Target,
  AlertCircle,
  CheckCircle,
  BarChart3,
  Bell,
  TrendingUp
} from "lucide-react";

const dailyActions = [
  {
    day: "Monday",
    time: "9:00 AM",
    action: "Weekly Performance Summary",
    detail: "Surfaces last week's offer performance by segment. Highlights what beat forecast and what underperformed.",
    icon: BarChart3,
    type: "insight",
  },
  {
    day: "Monday",
    time: "2:00 PM",
    action: "Segment Elasticity Update",
    detail: "Price sensitivity scores updated for all player segments based on weekend behavior.",
    icon: TrendingUp,
    type: "analysis",
  },
  {
    day: "Tuesday",
    time: "10:30 AM",
    action: "Conversion Anomaly Alert",
    detail: "Detects $9.99 Starter Pack conversion dropped 18% vs. prior week. Flags 18-24 segment as driver.",
    icon: AlertCircle,
    type: "alert",
  },
  {
    day: "Tuesday",
    time: "11:00 AM",
    action: "Pricing Recommendation",
    detail: "Recommends testing $7.99 price point for 18-24 cohort. Shows expected +12% conversion lift.",
    icon: Target,
    type: "recommendation",
  },
  {
    day: "Wednesday",
    time: "9:00 AM",
    action: "Pre-Meeting Brief",
    detail: "Generates pricing meeting prep: segment performance, elasticity data, recommended adjustments.",
    icon: CheckCircle,
    type: "insight",
  },
  {
    day: "Thursday",
    time: "Continuous",
    action: "Live Event Monitoring",
    detail: "Tracks Battle Pass conversion in real-time. Surfaces early signals if performance deviates.",
    icon: Bell,
    type: "monitoring",
  },
  {
    day: "Friday",
    time: "4:00 PM",
    action: "Week-End Summary",
    detail: "Compiles what worked, what didn't, and what to adjust next week. No manual post-mortem.",
    icon: BarChart3,
    type: "insight",
  },
];

const exampleInsights = [
  {
    category: "Monetization",
    title: "Battle Pass conversion below target",
    insight: "Season 4 Battle Pass showing 12% lower conversion than Season 3 at same point in season.",
    why: "Price point $12.99 underperforming with 18-24 segment. Competitor launched similar pass at $9.99.",
    action: "Test $9.99 price point with 18-24 cohort.",
  },
  {
    category: "Offer Performance",
    title: "Weekend bundle outperforming",
    insight: "$4.99 Weekend Warrior bundle converting 34% above forecast.",
    why: "Strong resonance with casual segment (2-5 hrs/week). Limited-time framing driving urgency.",
    action: "Extend offer 48 hours. Consider similar bundle for mid-week.",
  },
  {
    category: "Segment Alert",
    title: "Whale segment price sensitivity shift",
    insight: "Top 1% spenders showing 22% lower conversion on $99 bundles vs. last month.",
    why: "Competitor released major content update. Attention and spend shifting.",
    action: "Consider value-add (exclusive cosmetic) rather than price reduction.",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "alert": return "text-red-400 bg-red-500/10 border-red-500/20";
    case "recommendation": return "text-[#4ADE80] bg-[#4ADE80]/10 border-[#4ADE80]/20";
    case "monitoring": return "text-[#00D4FF] bg-[#00D4FF]/10 border-[#00D4FF]/20";
    default: return "text-gray-300 bg-white/5 border-white/10";
  }
};

export default function PricingUseCasePage() {
  return (
    <div className="bg-[#0A0A0F]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4ADE80]/10 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex p-3 rounded-xl mb-6 bg-[#4ADE80]/10">
              <DollarSign className="w-8 h-8 text-[#4ADE80]" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Offer & Pricing{" "}
              <span className="gradient-text">Optimization</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              How Olive Studio helps monetization teams know what to price, when to offer, 
              and who to target — before they commit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Day-by-Day Actions */}
      <section className="py-16 md:py-24 bg-[#0d0d12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              A Week with Olive Studio
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              What Olive Studio does day-by-day for a monetization team.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {dailyActions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`p-5 rounded-xl border ${getTypeColor(item.type)}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-white font-semibold">{item.day}</span>
                        <span className="text-gray-500 text-sm">{item.time}</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          item.type === "alert" ? "bg-red-500/20 text-red-400" :
                          item.type === "recommendation" ? "bg-[#4ADE80]/20 text-[#4ADE80]" :
                          item.type === "monitoring" ? "bg-[#00D4FF]/20 text-[#00D4FF]" :
                          "bg-white/10 text-gray-400"
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <h4 className="text-white font-medium mb-1">{item.action}</h4>
                      <p className="text-gray-400 text-sm">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Example Insights */}
      <section className="py-16 md:py-24 bg-[#0d0d12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Example Insights
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Real examples of what Olive Studio surfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exampleInsights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[#14141A] border border-white/10"
              >
                <span className="text-[#4ADE80] text-xs font-semibold uppercase tracking-wider">{item.category}</span>
                <h3 className="text-white font-semibold mt-2 mb-4">{item.title}</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Insight</p>
                    <p className="text-gray-300">{item.insight}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Why</p>
                    <p className="text-gray-400">{item.why}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#4ADE80]/10 border border-[#4ADE80]/20">
                    <p className="text-[#4ADE80] text-xs font-semibold uppercase tracking-wider mb-1">Action</p>
                    <p className="text-white">{item.action}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to learn more?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-[#4ADE80] to-[#00D4FF] text-[#0A0A0F] hover:opacity-90 transition-all hover:scale-105"
              >
                Talk to Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/use-cases"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all"
              >
                See All Use Cases
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
