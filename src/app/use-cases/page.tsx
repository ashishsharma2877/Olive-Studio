"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  BarChart3,
  Heart,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Zap,
  AlertCircle,
} from "lucide-react";
import { UseCaseMockup } from "@/components/mockups";

const useCases = [
  {
    id: "pricing",
    icon: DollarSign,
    color: "#00D4FF",
    title: "Offer & Pricing Optimization",
    subtitle: "Stop leaving money on the table every event",
    personas: ["Monetization PM", "Live Ops Director", "Game Economist"],
    pain: "Your Monday morning offer slate is based on last quarter's intuition. Segment elasticity changes weekly. You're leaving revenue on the table and finding out in the post-mortem.",
    solution: [
      "Continuously analyzes offer performance by segment, timing, and price point",
      "Surfaces underperforming bundles in real time",
      "Recommends or automates pricing adjustments mid-event",
    ],
    outcomes: [
      "Higher ARPU",
      "Better event revenue",
      "Fewer post-mortem surprises",
    ],
  },
  {
    id: "roas",
    icon: TrendingUp,
    color: "#00FF88",
    title: "Marketing ROAS & Funnel Intelligence",
    subtitle: "Tie UA spend to LTV, not vanity metrics",
    personas: ["VP Digital Marketing", "UA Lead", "Growth Team"],
    pain: "You're spending millions on UA but can't connect spend to downstream LTV by cohort. Channel mix decisions are based on top-of-funnel vanity metrics.",
    solution: [
      "Connects marketing spend to in-game behavior and revenue by cohort",
      "Shows which channels, campaigns, and creatives drive real LTV",
      "Recommends reallocation toward highest-ROI levers",
    ],
    outcomes: [
      "Higher ROAS",
      "Smarter budget allocation",
      "LTV-based decisions",
    ],
  },
  {
    id: "feature-roi",
    icon: BarChart3,
    color: "#8B5CF6",
    title: "Feature ROI & Engagement",
    subtitle: "Know which features actually move revenue",
    personas: ["Studio GM", "Product Lead", "Executive Team"],
    pain: "You shipped 12 features last quarter. Which ones moved retention? Which ones moved spend? You're guessing.",
    solution: [
      "Ties feature releases to engagement, retention, and revenue impact",
      "Surfaces which investments are paying off — and which aren't",
      "Gives product and studio leads data to prioritize roadmap",
    ],
    outcomes: [
      "Smarter roadmap decisions",
      "Clear feature ROI",
      "Less guesswork",
    ],
  },
  {
    id: "sentiment",
    icon: Heart,
    color: "#F472B6",
    title: "Fan Sentiment & Health",
    subtitle: "Catch sentiment shifts before Reddit does",
    personas: ["Community Lead", "Brand Marketing", "Live Ops"],
    pain: "Fan sentiment is shifting — frustration with matchmaking, excitement about a new mode — and you're finding out on Reddit or Twitter, not in your data.",
    solution: [
      "Monitors behavioral signals that indicate sentiment shifts",
      "Correlates with external signals (social, reviews, community)",
      "Alerts you before sentiment becomes a crisis",
    ],
    outcomes: [
      "Earlier intervention",
      "Better community health",
      "Protected brand",
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function UseCasesPage() {
  return (
    <div className="bg-[#0A0A0F]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#00D4FF]/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Start Here.{" "}
              <span className="gradient-text">Go Further.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Win more fans. Keep them longer. With a platform that learns you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-32">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                id={useCase.id}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                  {/* Left: Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    {/* Icon & Title */}
                    <div
                      className="inline-flex p-3 rounded-xl mb-6"
                      style={{ backgroundColor: `${useCase.color}15` }}
                    >
                      <useCase.icon
                        className="w-8 h-8"
                        style={{ color: useCase.color }}
                      />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {useCase.title}
                    </h2>
                    <p
                      className="text-lg font-medium mb-6"
                      style={{ color: useCase.color }}
                    >
                      {useCase.subtitle}
                    </p>

                    {/* Personas */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {useCase.personas.map((persona) => (
                        <span
                          key={persona}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-[#14141A] border border-white/10 text-sm text-gray-300"
                        >
                          <Users className="w-3 h-3 mr-2 text-gray-500" />
                          {persona}
                        </span>
                      ))}
                    </div>

                    {/* The Pain */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                        <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                          The Pain
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed italic">
                        &ldquo;{useCase.pain}&rdquo;
                      </p>
                    </div>

                    {/* How FanMint Solves It */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-5 h-5 text-[#00D4FF]" />
                        <h3 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider">
                          How FanMint Solves It
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {useCase.solution.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#00FF88] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-[#00FF88]" />
                        <h3 className="text-sm font-semibold text-[#00FF88] uppercase tracking-wider">
                          Outcome
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {useCase.outcomes.map((outcome) => (
                          <span
                            key={outcome}
                            className="px-3 py-1 rounded-full text-sm font-medium"
                            style={{
                              backgroundColor: `${useCase.color}15`,
                              color: useCase.color,
                            }}
                          >
                            {outcome}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Interactive Mockup */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <UseCaseMockup 
                      type={useCase.id as "pricing" | "roas" | "feature-roi" | "sentiment"} 
                      color={useCase.color} 
                    />
                  </div>
                </div>

                {/* Divider */}
                {index < useCases.length - 1 && (
                  <div className="mt-20 md:mt-32 border-t border-white/5" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Vision */}
      <section className="py-20 md:py-32 bg-[#0d0d12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              This is just the start
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              FanMint is built to expand with your needs — from churn
              prediction to content optimization to competitive intelligence.
              One intelligence layer. Many decisions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-[#0A0A0F] hover:opacity-90 transition-all hover:scale-105"
            >
              Let&apos;s Talk
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
