"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiShield, FiActivity, FiRefreshCw, FiCheck } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    letter: "A",
    title: "Assure",
    icon: FiShield,
    description: "Guaranteeing design integrity, regulatory compliance, and baseline cybersecurity across all deployed systems.",
    points: ["Design integrity", "Compliance & safety", "Cybersecurity baseline"],
  },
  {
    letter: "S",
    title: "Sustain",
    icon: FiActivity,
    description: "Keeping systems at peak performance through continuous monitoring, managed maintenance, and SLA-governed operations.",
    points: ["24×7 monitoring", "Maintenance & spares", "SLA governance"],
  },
  {
    letter: "E",
    title: "Evolve",
    icon: FiRefreshCw,
    description: "Ensuring long-term relevance through planned upgrades, capacity scaling, and technology refresh programs.",
    points: ["Upgrades", "Capacity scaling", "Technology refresh"],
  },
];

export default function ServicePillars() {
  const headerRef = useRef(null);
  const cardsRef  = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
    });
    const cards = cardsRef.current?.querySelectorAll(".pillar-card");
    if (cards) {
      gsap.fromTo(cards, { opacity: 0, y: 40, scale: 0.97 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 85%", once: true },
      });
    }
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="py-24 overflow-hidden" style={{ background: "var(--surface-off)" }}>
      <div className="mx-auto px-6 lg:px-16">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="label-tag mb-6">Service Framework</div>
            <h2
              className="font-extrabold leading-tight"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "var(--primary)", letterSpacing: "-0.02em" }}
            >
              Positioned Around{" "}
              <span style={{ color: "var(--secondary)" }}>3 Core Pillars</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-sm lg:text-right" style={{ color: "var(--text-muted-l)" }}>
            Our lifecycle support strategy is structured around three pillars focused on
            reliability, operational continuity, and long-term infrastructure growth.
          </p>
        </div>

        {/* Pillars grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3" style={{ border: "1px solid var(--border-light)" }}>
          {pillars.map(({ letter, title, icon: Icon, description, points }, i) => (
            <div
              key={letter}
              className="pillar-card group relative p-8 lg:p-10 overflow-hidden transition-all duration-300"
              style={{
                borderRight: i < 2 ? "1px solid var(--border-light)" : "none",
                background: "transparent",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(33,150,243,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
            >
              {/* Top sweep */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                style={{ background: "var(--secondary)" }}
              />

              {/* Watermark letter */}
              <span
                className="absolute bottom-4 right-6 text-[100px] font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(33,150,243,0.06)" }}
              >
                {letter}
              </span>

              {/* Icon */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(33,150,243,0.08)", border: "1px solid var(--border-blue)" }}
                >
                  <Icon size={16} style={{ color: "var(--secondary)" }} />
                </div>
                <span
                  className="text-3xl font-black tabular-nums"
                  style={{ color: "rgba(33,150,243,0.20)" }}
                >
                  {letter}
                </span>
              </div>

              <h3 className="text-base font-bold mb-3 leading-snug" style={{ color: "var(--primary)" }}>
                {title}
              </h3>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted-l)" }}>
                {description}
              </p>

              <div className="flex flex-col gap-2.5">
                {points.map(pt => (
                  <div key={pt} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 flex items-center justify-center shrink-0"
                      style={{ background: "rgba(33,150,243,0.08)", border: "1px solid var(--border-blue)" }}
                    >
                      <FiCheck size={10} style={{ color: "var(--secondary)" }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "var(--text-muted-l)" }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
