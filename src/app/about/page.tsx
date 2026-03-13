"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, ExternalLink } from "lucide-react";

const founders = [
  {
    name: "Krish Ravikumar",
    role: "CEO & Co-Founder",
    bio: "Spent years as a senior executive in gaming, building and scaling platforms, leading large teams, and tackling complex monetization problems. Known for spotting patterns early and turning complexity into systems teams actually use.",
    focus: "Product, vision & turning signals into decisions",
    education: "Georgia State University · Mensa",
  },
  {
    name: "Siddhartha Sharma",
    role: "CTO & Co-Founder",
    bio: "25+ years designing and scaling systems across gaming and enterprise. Deep expertise in architecture, AI systems, and player data infrastructure. The calm force behind the code.",
    focus: "Architecture, AI systems & technical excellence",
    education: "IIT Kanpur · University of Maryland · Stanford University",
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
      <section className="py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <a 
              href="https://olivelabs.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
            >
              <Image
                src="/olivelabs-icon.svg"
                alt="Olive Labs"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-gray-300 group-hover:text-white transition-colors">From Olive Labs</span>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
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
                Our Story
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

      {/* Founders */}
      <section className="py-20 md:py-32 bg-[#0d0d12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Meet the Founders
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Decades of experience building player systems at scale.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {founders.map((founder) => (
              <motion.div
                key={founder.name}
                variants={fadeInUp}
                className="p-8 rounded-xl bg-[#14141A] border border-white/10"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#00D4FF] flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-[#0A0A0F]">
                    {founder.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">{founder.name}</h3>
                <p className="text-[#4ADE80] font-medium mb-4">{founder.role}</p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {founder.bio}
                </p>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Focus: </span>
                    <span className="text-gray-300">{founder.focus}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Education: </span>
                    <span className="text-gray-300">{founder.education}</span>
                  </div>
                </div>
              </motion.div>
            ))}
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
