"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, Target, DollarSign, Zap, ExternalLink } from "lucide-react";

export default function InvestorsPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/20 mb-8">
              <span className="text-[#4ADE80] text-sm font-medium">Investor Overview</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Player Intelligence for{" "}
              <span className="gradient-text">Live Games</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              The decision layer studios have been missing. Built by EA veterans. 
              Focused on monetization & live ops.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Wedge */}
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
              The Wedge
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Start narrow. Expand everywhere.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4ADE80]/20 to-[#00D4FF]/20 rounded-2xl blur-xl" />
            <Link 
              href="/use-cases/pricing"
              className="relative block p-8 md:p-12 rounded-2xl bg-[#14141A] border border-[#4ADE80]/20 text-center hover:border-[#4ADE80]/40 transition-all group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#4ADE80] to-[#00D4FF] flex items-center justify-center">
                <Target className="w-8 h-8 text-[#0A0A0F]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#4ADE80] transition-colors">
                Offer & Pricing Optimization
              </h3>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Help monetization teams know what to price, when to offer, and who to target — 
                before they commit. The most painful, highest-ROI decision studios make weekly.
              </p>
              <div className="mt-6 inline-flex items-center text-[#4ADE80] font-medium">
                See how it works
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Market & ICP */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Market Opportunity
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-xl bg-[#14141A] border border-white/10 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#4ADE80]/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-[#4ADE80]" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">$200B+</div>
              <p className="text-gray-400">Global gaming market</p>
              <p className="text-sm text-gray-500 mt-2">80% F2P / live service</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-xl bg-[#14141A] border border-white/10 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#4ADE80]/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#4ADE80]" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <p className="text-gray-400">F2P studios globally</p>
              <p className="text-sm text-gray-500 mt-2">Mobile, PC, Console</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-xl bg-[#14141A] border border-white/10 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#4ADE80]/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#4ADE80]" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">ICP</div>
              <p className="text-gray-400">Monetization PM</p>
              <p className="text-sm text-gray-500 mt-2">Head of Live Ops</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Now */}
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
              Why Now
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#4ADE80]/20 to-[#00D4FF]/20 flex items-center justify-center">
                <span className="text-xl font-bold gradient-text">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">F2P Dominance</h3>
              <p className="text-gray-400 text-sm">
                80% of mobile gaming revenue is F2P. Live ops is the business model.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#4ADE80]/20 to-[#00D4FF]/20 flex items-center justify-center">
                <span className="text-xl font-bold gradient-text">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Data Rich, Decision Poor</h3>
              <p className="text-gray-400 text-sm">
                Studios have more data than ever. Zero synthesis. Zero proactive intelligence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#4ADE80]/20 to-[#00D4FF]/20 flex items-center justify-center">
                <span className="text-xl font-bold gradient-text">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">No Gaming-Native Solution</h3>
              <p className="text-gray-400 text-sm">
                Generic BI tools don't understand player behavior. We do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Traction
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#4ADE80] to-[#00D4FF] rounded-full" />
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4ADE80] border-4 border-[#0A0A0F]" />
                  <div className="w-1/2 pr-8 text-right">
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Today</div>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="p-4 rounded-xl bg-[#14141A] border border-[#4ADE80]/20">
                      <div className="text-2xl font-bold text-[#4ADE80]">$100K</div>
                      <div className="text-gray-400 text-sm">Contracted ARR</div>
                      <div className="text-gray-500 text-xs mt-1">Pilot programs active</div>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#00D4FF] border-4 border-[#0A0A0F]" />
                  <div className="w-1/2 pr-8 text-right">
                    <div className="p-4 rounded-xl bg-[#14141A] border border-white/10">
                      <div className="text-2xl font-bold text-white">$575K</div>
                      <div className="text-gray-400 text-sm">Committed Pipeline</div>
                      <div className="text-gray-500 text-xs mt-1">Expanded partnerships</div>
                    </div>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Q2 2026</div>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#00D4FF] border-4 border-[#0A0A0F]" />
                  <div className="w-1/2 pr-8 text-right">
                    <div className="text-sm text-gray-500 uppercase tracking-wider">2026</div>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="p-4 rounded-xl bg-[#14141A] border border-white/10">
                      <div className="text-2xl font-bold text-white">$1M+</div>
                      <div className="text-gray-400 text-sm">Projected ARR</div>
                      <div className="text-gray-500 text-xs mt-1">Scaling for market</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
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
              Team
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Built by EA veterans with 25+ years in gaming
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <a
              href="https://olivelabs.ai/about"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl bg-[#14141A] border border-white/10 hover:border-white/20 transition-all group text-center"
            >
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#00D4FF] flex items-center justify-center">
                  <span className="text-xl font-bold text-[#0A0A0F]">KR</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#4ADE80] flex items-center justify-center">
                  <span className="text-xl font-bold text-[#0A0A0F]">SS</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#4ADE80] transition-colors">
                Meet the Founders
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                Former EA executives. Deep expertise in monetization, live ops, and player systems.
              </p>
              <div className="mt-4 inline-flex items-center text-[#4ADE80] font-medium text-sm">
                Learn more at Olive Labs
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80]/20 to-[#00D4FF]/20" />
            <div className="absolute inset-0 bg-[#14141A]" style={{ opacity: 0.9 }} />

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Let's Talk
              </h2>
              <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
                Interested in learning more about Olive Studio and our vision for player intelligence?
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-[#4ADE80] to-[#00D4FF] text-[#0A0A0F] hover:opacity-90 transition-all hover:scale-105"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
