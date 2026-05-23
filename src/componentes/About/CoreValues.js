"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  {
    id: 1, number: "01",
    tag: "Leadership and Ownership",
    title: "Empower Individuals",
    description: "Empowerment is the best lubricant to the exercise of learning. We enable our employees to make more and bigger decisions. Involve team members in taking important decisions. Encouraging employees to play a more active role.",
    keywords: ["Team Ownership", "Leadership", "Collaboration", "Growth"],
  },
  {
    id: 2, number: "02",
    tag: "Continuous Improvement",
    title: "Constantly Improve",
    description: "Our goals are aggressive and they demand improvement. It is in our nature. And it is the only way we are going to accomplish everything.",
    keywords: ["Innovation", "Performance", "Improvement", "Efficiency"],
  },
  {
    id: 3, number: "03",
    tag: "Positive Mindset",
    title: "Face Challenges With Optimism",
    description: "We value challenges because they produce innovations. We commit to approaching problems with enthusiasm and optimism.",
    keywords: ["Optimism", "Problem Solving", "Innovation", "Confidence"],
  },
  {
    id: 4, number: "04",
    tag: "Precision and Reliability",
    title: "Be Diligent, Get It Right",
    description: "To be diligent means to be very thorough and accurate when it comes to deploying mission critical networks. Hence to get it right.",
    keywords: ["Accuracy", "Quality", "Reliability", "Excellence"],
  },
];

export default function CoreValues() {
  const [activeId, setActiveId] = useState(1);
  const activeTab = tabs.find(t => t.id === activeId);
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="py-24" style={{ background: "var(--surface-off)" }}>
      <div className=" mx-auto px-6 lg:px-16">

        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <div className="label-tag mb-5">What We Stand For</div>
          <h2
            className="font-extrabold leading-tight"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "var(--primary)", letterSpacing: "-0.02em" }}
          >
            Our Core Values
          </h2>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-0"
          style={{ border: "1px solid var(--border-light)" }}
        >

          {/* LEFT — tabs */}
          <div
            className="lg:col-span-4 flex flex-col"
            style={{ borderRight: "1px solid var(--border-light)" }}
          >
            {tabs.map((tab) => {
              const on = activeId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className="text-left px-7 py-6 transition-all duration-250 flex items-center gap-4"
                  style={{
                    borderBottom: "1px solid var(--border-light)",
                    borderLeft: on ? `3px solid var(--secondary)` : "3px solid transparent",
                    background: on ? "rgba(33,150,243,0.05)" : "var(--surface-light)",
                  }}
                  onMouseEnter={e => {
                    if (!on) e.currentTarget.style.background = "var(--surface-off)";
                  }}
                  onMouseLeave={e => {
                    if (!on) e.currentTarget.style.background = "var(--surface-light)";
                  }}
                >
                  <span
                    className="text-2xl font-black tabular-nums shrink-0"
                    style={{ color: on ? "var(--secondary)" : "var(--text-muted-l)", opacity: on ? 1 : 0.4 }}
                  >
                    {tab.number}
                  </span>
                  <div>
                    <span
                      className="block text-[10px] font-bold uppercase tracking-[0.12em] mb-1"
                      style={{ color: on ? "var(--secondary)" : "var(--text-muted-l)" }}
                    >
                      {tab.tag}
                    </span>
                    <span
                      className="block text-sm font-bold"
                      style={{ color: on ? "var(--primary)" : "var(--text-muted-l)" }}
                    >
                      {tab.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT — content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.30, ease: "easeOut" }}
                className="p-10 lg:p-14 h-full relative"
                style={{ background: "var(--surface-light)" }}
              >
                {/* Blue top rule */}
                <div className="h-0.5 w-full mb-8" style={{ background: "linear-gradient(90deg, var(--secondary), var(--accent), transparent)" }} />

                {/* Tag */}
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 mb-6"
                  style={{
                    color: "var(--secondary)",
                    background: "rgba(33,150,243,0.06)",
                    border: "1px solid var(--border-blue)",
                  }}
                >
                  {activeTab.tag}
                </span>

                {/* Title */}
                <h3
                  className="font-extrabold leading-tight mb-5"
                  style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "var(--primary)", letterSpacing: "-0.02em" }}
                >
                  {activeTab.title}
                </h3>

                {/* Divider */}
                <div className="h-px w-10 mb-5" style={{ background: "var(--secondary)" }} />

                {/* Description */}
                <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "var(--text-muted-l)" }}>
                  {activeTab.description}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2">
                  {activeTab.keywords.map((kw, i) => (
                    <motion.span
                      key={kw}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                      className="text-[10px] font-bold uppercase tracking-[0.08em] px-3 py-1.5"
                      style={{
                        border: "1px solid var(--border-blue)",
                        color: "var(--secondary)",
                        background: "rgba(33,150,243,0.05)",
                      }}
                    >
                      {kw}
                    </motion.span>
                  ))}
                </div>

                {/* Watermark number */}
                <span
                  className="absolute bottom-4 right-6 text-[120px] font-black leading-none select-none pointer-events-none"
                  style={{ color: "var(--surface-muted)" }}
                >
                  {activeTab.number}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
