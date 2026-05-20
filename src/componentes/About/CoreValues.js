"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: 1,
    number: "01",
    tag: "Leadership & Ownership",
    title: "Empower Individuals",
    description:
      "Empowerment is the best lubricant to the exercise of learning. We enable our employees to make more and bigger decisions. Involve team members in taking important decisions. Encouraging employees to play a more active role.",
    keywords: ["Team Ownership", "Leadership", "Collaboration", "Growth"],
  },
  {
    id: 2,
    number: "02",
    tag: "Continuous Improvement",
    title: "Constantly Improve",
    description:
      "Our goals are aggressive and they demand improvement. it's in our nature. And it's the only way we're going to accomplish everything.",
    keywords: ["Innovation", "Performance", "Improvement", "Efficiency"],
  },
  {
    id: 3,
    number: "03",
    tag: "Positive Mindset",
    title: "Face Challenges With Optimism",
    description:
      "We value challenges because they produce innovations. We commit to approaching problems with enthusiasm and optimism.",
    keywords: ["Optimism", "Problem Solving", "Innovation", "Confidence"],
  },
  {
    id: 4,
    number: "04",
    tag: "Precision & Reliability",
    title: "Be Diligent — Get It Right",
    description:
      "To be diligent means to be very thorough and accurate when it comes to deploying mission critical network. Hence to get it right.",
    keywords: ["Accuracy", "Quality", "Reliability", "Excellence"],
  },
];

export default function CoreValues() {
  const [activeId, setActiveId] = useState(1);
  const activeTab = tabs.find((t) => t.id === activeId);

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-[var(--primary)]" />
            <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
              What We Stand For
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our <span className="text-[var(--primary)]">Core Values</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* -- LEFT: Tab list -- */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {tabs.map((tab, i) => {
              const isActive = activeId === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveId(tab.id)}
                  className={`group relative text-left px-6 py-5 rounded-xl border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "bg-[var(--primary)] border-[var(--primary)] shadow-lg shadow-[var(--primary)]/20"
                      : "bg-white border-gray-100 hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/3"
                  }`}
                >
                  {/* Accent line for active */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/40 rounded-r-full" />
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className={`block text-[10px] font-semibold tracking-[3px] uppercase mb-1 ${isActive ? "text-white/50" : "text-gray-400"}`}>
                        {tab.number}
                      </span>
                      <span className={`block text-sm font-bold leading-snug ${isActive ? "text-white" : "text-gray-800"}`}>
                        {tab.title}
                      </span>
                    </div>
                    <span className={`text-xs font-medium transition-all duration-300 ${isActive ? "text-white/60" : "text-[var(--primary)] opacity-0 group-hover:opacity-100"}`}>
                      →
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* -- RIGHT: Content panel -- */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative h-full rounded-2xl border border-gray-100 p-10 lg:p-12 overflow-hidden bg-white"
              >
                {/* BG watermark */}
                <span className="absolute bottom-0 right-4 text-[180px] font-black text-gray-50 leading-none select-none pointer-events-none">
                  {activeTab.number}
                </span>

                {/* Accent top line */}
                <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--primary)] to-[var(--seco)]" />

                <div className="relative z-10">
                  {/* Tag */}
                  <span className="inline-block text-[var(--primary)] text-xs font-semibold tracking-[3px] uppercase bg-[var(--primary)]/8 border border-[var(--primary)]/15 px-4 py-1.5 rounded-full mb-6">
                    {activeTab.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {activeTab.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-12 h-px bg-[var(--primary)] mb-6" />

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-2xl">
                    {activeTab.description}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-3">
                    {activeTab.keywords.map((keyword, i) => (
                      <motion.span
                        key={keyword}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.06 }}
                        className="px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 text-xs text-[var(--primary)] font-semibold"
                      >
                        {keyword}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
