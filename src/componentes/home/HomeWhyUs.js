"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiCheckCircle, FiLayers, FiShield,
  FiHeadphones, FiTool, FiGlobe,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: FiCheckCircle, num: "01",
    title: "Single Point Accountability",
    description: "One partner for design, supply, integration, commissioning, and support, eliminating coordination gaps and reducing project risk.",
  },
  {
    icon: FiLayers, num: "02",
    title: "DARE and CARE Models",
    description: "Our proprietary frameworks drive structured delivery and lifecycle support, ensuring every phase meets operational and regulatory standards.",
  },
  {
    icon: FiShield, num: "03",
    title: "Mission Critical Reliability",
    description: "Systems engineered for zero compromise environments, hazardous zones, remote sites, and 24 7 critical operations.",
  },
  {
    icon: FiHeadphones, num: "04",
    title: "Through Life Support",
    description: "SLA based operations support from routine maintenance to emergency response, aligned with your availability requirements.",
  },
  {
    icon: FiTool, num: "05",
    title: "In House Integration Center",
    description: "All systems undergo rigorous pre deployment testing and customer witnessed FAT at our dedicated integration facility.",
  },
  {
    icon: FiGlobe, num: "06",
    title: "Multi Industry Expertise",
    description: "Proven track record across Oil and Gas, Power, and Metro Rail sectors, deep domain knowledge that generic integrators cannot replicate.",
  },
];

export default function HomeWhyUs() {
  const headerRef = useRef(null);
  const gridRef   = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 88%", once: true } }
    );

    const cards = gridRef.current?.querySelectorAll(".why-card");
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.09, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 88%", once: true } }
      );
    }
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="py-24" style={{ background: "var(--surface-off)" }}>
      <div className=" mx-auto px-6 lg:px-16">

        {/* Header */}
        <div ref={headerRef} className="mb-16 grid grid-cols-1 gap-10 items-end">
          <div>
            <div className="label-tag mb-5">Why Eratronics</div>
            <h2
              className="font-extrabold leading-tight"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "var(--primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Built for the Demands of Critical Infrastructure
            </h2>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
            We don't just deliver technology — we deliver outcomes that industrial operations
            depend on, every hour of every day.
          </p>
        </div>

        {/* 3×2 grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ border: "1px solid var(--border-light)" }}
        >
          {reasons.map((item, i) => {
            const Icon = item.icon;
            const col = i % 3;
            const row = Math.floor(i / 3);
            return (
              <div
                key={i}
                className="why-card group p-10 transition-all duration-400 cursor-default"
                style={{
                  borderRight: col < 2 ? "1px solid var(--border-light)" : "none",
                  borderBottom: row < 1 ? "1px solid var(--border-light)" : "none",
                  background: "var(--surface-light)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--primary)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "var(--surface-light)";
                }}
              >
                {/* Number */}
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-xs font-black tabular-nums tracking-[0.12em] transition-colors duration-400 group-hover:text-white/30"
                    style={{ color: "var(--secondary)", opacity: 0.5 }}
                  >
                    {item.num}
                  </span>
                  <div
                    className="w-10 h-10 flex items-center justify-center transition-all duration-400"
                    style={{
                      border: "1px solid var(--border-blue)",
                      background: "rgba(33,150,243,0.06)",
                    }}
                  >
                    <Icon size={18} style={{ color: "var(--secondary)" }} />
                  </div>
                </div>

                <h3
                  className="font-bold text-base mb-3 leading-snug transition-colors duration-400 group-hover:text-white"
                  style={{ color: "var(--primary)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm leading-relaxed transition-colors duration-400 group-hover:text-white/55"
                  style={{ color: "var(--text-muted-l)" }}
                >
                  {item.description}
                </p>

                {/* Blue underline grows on hover */}
                <div
                  className="mt-6 h-px w-0 group-hover:w-8 transition-all duration-500 ease-out"
                  style={{ background: "var(--secondary)" }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
