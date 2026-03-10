"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  BarChart3,
  Heart,
  Zap,
  Search,
  Target,
  ArrowRight,
  Brain,
} from "lucide-react";

const useCases = [
  {
    icon: DollarSign,
    title: "Offer & Pricing Optimization",
    description: "Your Monday offer slate is a guess. You find out it was wrong in the post-mortem.",
    href: "/use-cases#pricing",
    color: "from-[#4ADE80] to-[#4ADE80]",
  },
  {
    icon: TrendingUp,
    title: "Marketing ROAS & Funnel Intelligence",
    description: "You're spending millions on UA. You can't tell which dollars actually worked.",
    href: "/use-cases#roas",
    color: "from-[#4ADE80] to-[#4ADE80]",
  },
  {
    icon: BarChart3,
    title: "Feature ROI & Engagement",
    description: "You shipped 12 features last quarter. Which ones moved the needle? You're guessing.",
    href: "/use-cases#feature-roi",
    color: "from-[#00D4FF] to-[#00D4FF]",
  },
  {
    icon: Heart,
    title: "Fan Sentiment & Health",
    description: "Your fans are frustrated. You're finding out on Reddit, not in your data.",
    href: "/use-cases#sentiment",
    color: "from-[#F472B6] to-[#F472B6]",
  },
];

const howItWorks = [
  {
    step: "01",
    icon: Zap,
    title: "Connect",
    description:
      "Ingest player behavior, spend, marketing, and engagement data from your existing stack.",
  },
  {
    step: "02",
    icon: Search,
    title: "Surface",
    description:
      "Insights come to you — personalized to your role and priorities. No dashboards to check.",
  },
  {
    step: "03",
    icon: Target,
    title: "Act",
    description:
      "Run scenarios, trigger automations, or build custom apps. Measure impact in real-time.",
  },
  {
    step: "04",
    icon: Brain,
    title: "Learn",
    description:
      "Living Context — it learns your priorities, not just your data.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="bg-[#0A0A0F]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4ADE80]/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D4FF]/20 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Fan Intelligence</span>
              <br />
              <span className="text-white">for Live Services</span>
            </h1>
            <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Turn fan behavior into revenue decisions — across marketing,
              monetization, and engagement. Built by gaming AI veterans
              who&apos;ve done this at scale.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/product"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-[#4ADE80] to-[#00D4FF] text-[#0A0A0F] hover:opacity-90 transition-all hover:scale-105"
              >
                See How It Works
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all"
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Start Here. Go Further.
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Win more fans. Keep them longer. With a platform that learns you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={useCase.href}
                  className="block h-full p-6 md:p-8 rounded-xl bg-[#14141A] border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${useCase.color} bg-opacity-10`}
                    style={{
                      background: `linear-gradient(135deg, ${useCase.color.includes("00D4FF") ? "#4ADE80" : useCase.color.includes("00FF88") ? "#4ADE80" : useCase.color.includes("8B5CF6") ? "#00D4FF" : "#F472B6"}20, transparent)`,
                    }}
                  >
                    <useCase.icon
                      className="w-6 h-6"
                      style={{
                        color: useCase.color.includes("00D4FF")
                          ? "#4ADE80"
                          : useCase.color.includes("00FF88")
                            ? "#4ADE80"
                            : useCase.color.includes("8B5CF6")
                              ? "#00D4FF"
                              : "#F472B6",
                      }}
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-[#4ADE80] transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{useCase.description}</p>
                  <div className="mt-4 flex items-center text-[#4ADE80] text-sm font-medium">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-[#0d0d12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              How It Works
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Connect once. Then watch the cycle compound.
            </p>
          </motion.div>

          {/* Connect - Foundation Step */}
          <div className="mb-16">
            <div className="relative p-8 rounded-xl bg-[#14141A] border border-white/10 max-w-md mx-auto">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#4ADE80] to-[#00D4FF] text-[#0A0A0F] text-sm font-bold">
                Connect
              </div>
              <div className="mt-4 flex justify-center">
                <Zap className="w-10 h-10 text-[#4ADE80]" />
              </div>
              <p className="mt-4 text-gray-400 leading-relaxed text-center">
                Your data. Our intelligence layer.
              </p>
            </div>
          </div>

          {/* The Cycle Label */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#14141A] border border-white/10 text-sm text-gray-400">
              <span className="mr-2">Then the cycle begins</span>
              <span className="text-[#4ADE80]">↻</span>
            </span>
          </div>

          {/* Cycle: Surface → Act → Learn */}
          <div className="relative">
            {/* The three cycle steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Surface */}
              <div className="relative p-8 rounded-xl bg-[#14141A] border-2 border-[#4ADE80]/30">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#4ADE80] text-[#0A0A0F] text-sm font-bold">
                  Surface
                </div>
                <div className="mt-4 flex justify-center">
                  <Search className="w-10 h-10 text-[#4ADE80]" />
                </div>
                <p className="mt-4 text-gray-400 leading-relaxed text-center">
                  Insights come to you — personalized to your role and priorities. No dashboards to check.
                </p>
                {/* Arrow to next */}
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-[#4ADE80]" />
                </div>
              </div>

              {/* Act */}
              <div className="relative p-8 rounded-xl bg-[#14141A] border-2 border-[#4ADE80]/30">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#4ADE80] text-[#0A0A0F] text-sm font-bold">
                  Act
                </div>
                <div className="mt-4 flex justify-center">
                  <Target className="w-10 h-10 text-[#4ADE80]" />
                </div>
                <p className="mt-4 text-gray-400 leading-relaxed text-center">
                  Run scenarios, trigger automations, or build custom apps. Measure impact in real-time.
                </p>
                {/* Arrow to next */}
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-[#4ADE80]" />
                </div>
              </div>

              {/* Learn */}
              <div className="relative p-8 rounded-xl bg-[#14141A] border-2 border-[#00D4FF]/30">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00D4FF] text-[#0A0A0F] text-sm font-bold">
                  Learn
                </div>
                <div className="mt-4 flex justify-center">
                  <Brain className="w-10 h-10 text-[#00D4FF]" />
                </div>
                <p className="mt-4 text-gray-400 leading-relaxed text-center">
                  Living Context — it learns your priorities, not just your data.
                </p>
              </div>
            </div>

            {/* Cycle back indicator */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#00D4FF]/20 to-[#4ADE80]/20 border border-white/10">
                <span className="text-[#00D4FF]">↰</span>
                <span className="text-sm text-gray-300">The more you use it, the smarter it gets</span>
                <span className="text-[#4ADE80]">↱</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living Context Callout */}
      <section className="py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="relative rounded-2xl overflow-hidden p-8 md:p-12 bg-gradient-to-r from-[#4ADE80]/10 to-[#00D4FF]/10 border border-white/10"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                One Platform. Many Lenses.
              </h2>
              <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                A marketing exec sees campaign performance and ROAS. A studio lead sees feature impact and engagement. Same data, different lens — automatically tuned to what you care about.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#14141A] border border-white/10 mb-8">
              <span className="text-sm text-gray-400">Built by veterans</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
              Built by former{" "}
              <span className="gradient-text">Electronic Arts</span> leaders
              with 25+ years turning player data into decisions for studios,
              marketing, and CX teams.
            </h2>
            <div className="mt-12">
              <Link
                href="/about"
                className="inline-flex items-center text-[#4ADE80] font-medium hover:underline"
              >
                Meet the team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80]/20 to-[#00D4FF]/20" />
            <div className="absolute inset-0 bg-[#14141A]" style={{ opacity: 0.9 }} />

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Let&apos;s Talk
              </h2>
              <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
                Whether you&apos;re running a flagship title or scaling a new
                game, we&apos;d love to hear what you&apos;re working on.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex px-8 py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-[#4ADE80] to-[#00D4FF] text-[#0A0A0F] hover:opacity-90 transition-all hover:scale-105"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
