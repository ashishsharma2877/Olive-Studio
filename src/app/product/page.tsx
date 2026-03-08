"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Search,
  Target,
  Database,
  GitBranch,
  Shield,
  ArrowRight,
  CheckCircle,
  Eye,
  Brain,
  Gauge,
} from "lucide-react";
import { DataHubMockup, NuggetsFeedMockup, AppsGalleryMockup, LearnMockup, AppStudioMockup } from "@/components/mockups";

const foundationStep = {
  icon: Zap,
  title: "Connect",
  description: "Your data. Our intelligence layer.",
  features: [
    "Integrates with game telemetry, live ops tooling, UA/marketing systems",
    "No data warehouse required — works with your existing stack",
    "Secure, encrypted data pipelines",
  ],
};

const cycleSteps = [
  {
    icon: Search,
    title: "Surface",
    color: "#00D4FF",
    description: "Insights come to you — personalized to your role and priorities",
    features: [
      "No dashboards to check — alerts find you",
      "Prioritized by impact and urgency",
      "Context-aware recommendations",
    ],
  },
  {
    icon: Target,
    title: "Act",
    color: "#00FF88",
    description: "Run scenarios, trigger automations, or build custom apps",
    features: [
      "One-click actions or human-in-the-loop",
      "Measure impact in real-time",
      "Explainable AI — see why every recommendation is made",
    ],
  },
  {
    icon: Brain,
    title: "Learn",
    color: "#8B5CF6",
    description: "Living Context — it learns your priorities, not just your data",
    features: [
      "Adapts to your role and decision patterns",
      "Gets smarter with every interaction",
      "Personalized insights that compound over time",
    ],
  },
];

const capabilities = [
  {
    icon: Database,
    title: "Data Ingestion",
    description: "Connect any data source — game telemetry, marketing platforms, CRM, and more.",
  },
  {
    icon: Brain,
    title: "Pattern Recognition",
    description: "ML models trained on gaming-specific signals and player behavior patterns.",
  },
  {
    icon: Eye,
    title: "Anomaly Detection",
    description: "Catch revenue drops, churn spikes, and engagement shifts before they escalate.",
  },
  {
    icon: GitBranch,
    title: "Scenario Modeling",
    description: "Test pricing changes, offer variations, and campaign strategies before launch.",
  },
  {
    icon: Shield,
    title: "Explainable AI",
    description: "Every recommendation shows its reasoning — no black boxes.",
  },
  {
    icon: Gauge,
    title: "Impact Measurement",
    description: "Track the revenue impact of every decision FanCortex helps you make.",
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

export default function ProductPage() {
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
              How FanCortex Works
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              One intelligence layer that plugs into your data and delivers
              decisions — not dashboards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Connect - Foundation Step */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-[#0A0A0F] text-sm font-bold mb-4">
              Foundation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {foundationStep.title}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {foundationStep.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ul className="space-y-4">
                {foundationStep.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00FF88] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] rounded-xl">
                <DataHubMockup />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Cycle Label */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-[#14141A] border border-white/10 text-sm text-gray-400">
              <span className="mr-2">Then the cycle begins</span>
              <span className="text-[#00D4FF]">↻</span>
            </span>
          </div>
        </div>
      </section>

      {/* Cycle Steps: Surface → Act → Learn */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {cycleSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div 
                    className="inline-flex px-4 py-2 rounded-full text-[#0A0A0F] text-sm font-bold mb-6"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.title}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-gray-400 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: step.color }} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] rounded-xl">
                    {step.title === "Surface" && <NuggetsFeedMockup />}
                    {step.title === "Act" && <AppsGalleryMockup />}
                    {step.title === "Learn" && <LearnMockup />}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Grow - inline with cycle steps (index 3, so normal order: text-left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-12 items-center mt-24"
          >
            {/* Content */}
            <div className="flex-1">
              <div className="inline-flex px-4 py-2 rounded-full bg-[#FFB800] text-[#0A0A0F] text-sm font-bold mb-6">
                Grow
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Build Custom Apps
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                Need something specific? Describe what you want in plain English and FanCortex builds it for you.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFB800] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Natural language app builder — no code required</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFB800] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Combine any data sources, models, and visualizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFB800] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Share with your team or keep it personal</span>
                </li>
              </ul>
            </div>

            {/* Visual */}
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-xl">
                <AppStudioMockup />
              </div>
            </div>
          </motion.div>

          {/* Cycle back indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-16"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#8B5CF6]/20 to-[#00D4FF]/20 border border-white/10">
              <span className="text-[#8B5CF6]">↰</span>
              <span className="text-sm text-gray-300">The more you use it, the smarter it gets</span>
              <span className="text-[#00D4FF]">↱</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Platform Capabilities
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Built for the complexity of live games and the speed of real-time decisions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {capabilities.map((capability) => (
              <motion.div
                key={capability.title}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-[#14141A] border border-white/10 hover:border-white/20 transition-colors"
              >
                <capability.icon className="w-10 h-10 text-[#00D4FF] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-400 text-sm">{capability.description}</p>
              </motion.div>
            ))}
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
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See the use cases in action
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Explore how FanCortex solves specific problems for monetization,
              marketing, product, and community teams.
            </p>
            <Link
              href="/use-cases"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-[#0A0A0F] hover:opacity-90 transition-all hover:scale-105"
            >
              Explore Use Cases
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
