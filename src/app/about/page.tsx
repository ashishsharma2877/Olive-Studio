"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPage() {
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
              We&apos;ve Been in the{" "}
              <span className="gradient-text">Trenches</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Olive Studio was built by live ops and monetization leaders who spent
              decades in the gaming industry. We got tired of flying blind — so we
              built the system we always wished we had.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Part of Olive Labs */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <Image
              src="/images/logo-full-gaming.svg"
              alt="Olive Studio"
              width={200}
              height={48}
              className="h-12 w-auto"
            />
            <span className="text-gray-500 text-xl">·</span>
            <a 
              href="https://olivelabs.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-lg md:text-xl"
            >
              An Olive Labs product
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-8 md:p-12 rounded-2xl bg-[#14141A] border border-white/10">
              <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-gradient-to-r from-[#4ADE80] to-[#00D4FF] text-[#0A0A0F] text-sm font-bold">
                Why We Built Olive Studio
              </div>
              <div className="mt-4 space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  In gaming, we saw the same problem over and over: smart teams
                  making pricing, marketing, and product decisions based on gut,
                  spreadsheets, and post-mortems.
                </p>
                <p>
                  The data was there — buried across dozens of dashboards,
                  reports, and systems. But the intelligence wasn&apos;t. Teams
                  were discovering critical signals weeks too late, leaving
                  millions on the table.
                </p>
                <p>
                  We built Olive Studio to fix that. Not another dashboard. Not
                  another alert system. A real intelligence layer that tells you
                  what&apos;s happening, why, and what to do next.
                </p>
                <p className="text-white font-medium">
                  Players spend, churn, advocate, and rage-quit. Olive Studio
                  turns that behavior into revenue decisions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Founders CTA */}
      <section className="py-16 md:py-24 bg-[#0d0d12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <a
              href="https://olivelabs.ai/about"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 md:p-10 rounded-2xl bg-[#14141A] border border-white/10 hover:border-white/20 transition-all group text-center"
            >
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#00D4FF] flex items-center justify-center">
                  <span className="text-xl font-bold text-[#0A0A0F]">KR</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#4ADE80] flex items-center justify-center">
                  <span className="text-xl font-bold text-[#0A0A0F]">SS</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#4ADE80] transition-colors">
                Meet the Founders
              </h2>
              <p className="mt-3 text-gray-400">
                Decades of experience building player systems at scale.
              </p>
              <div className="mt-6 inline-flex items-center text-[#4ADE80] font-medium">
                Learn more at Olive Labs
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Values / What We Believe */}
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
              What We Believe
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Decisions Over Dashboards",
                description:
                  "The goal isn't more data visualization. It's better decisions, faster.",
              },
              {
                title: "Explainable AI",
                description:
                  "Every recommendation shows its reasoning. No black boxes. Trust is earned.",
              },
              {
                title: "Gaming DNA",
                description:
                  "We built this for live games because that's what we know. Depth over breadth.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="text-center p-6"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#4ADE80]/20 to-[#00D4FF]/20 flex items-center justify-center">
                  <span className="text-xl font-bold gradient-text">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
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
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80]/20 to-[#00D4FF]/20" />
            <div
              className="absolute inset-0 bg-[#14141A]"
              style={{ opacity: 0.9 }}
            />

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Want to work with us?
              </h2>
              <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
                We&apos;re always looking for people who are passionate about
                gaming, data, and building products that matter.
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
