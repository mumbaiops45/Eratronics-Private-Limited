"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    num: "01",
    tag: "Energy Sector",
    title: "Oil & Gas Industry",
    description:
      "Rugged telecom and communication infrastructure for upstream, midstream, and downstream oil and gas operations engineered for hazardous zones, remote sites, and mission critical reliability.",
    points: ["ATEX Rated Equipment", "SCADA Integration", "Ex proof Communication"],
    href: "/industries-we-serve/oil-and-gas-industry",
  },
  {
    num: "02",
    tag: "Utilities",
    title: "Power Sector",
    description:
      "Integrated communication solutions for power generation, transmission, and distribution networks supporting grid automation, protection relaying, and substation telecom infrastructure.",
    points: ["Grid Communication", "Protection Relaying", "Substation Telecom"],
    href: "/industries-we-serve/power-sector",
  },
  {
    num: "03",
    tag: "Urban Transport",
    title: "Metro Rail",
    description:
      "End to end communication systems for metro rail networks including TETRA and LTE R radio, CCTV, PIDS, and OFC backbone ensuring safe, efficient, and passenger centric transit operations.",
    points: ["TETRA and LTE R Radio", "PIDS Systems", "Integrated CCTV and ACS"],
    href: "/industries-we-serve/metro-rail",
  },
];

export default function HomeIndustries() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef(null);
  const leftRef    = useRef(null);
  const rightRef   = useRef(null);

  useEffect(() => {
    gsap.fromTo(leftRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true } }
    );
    gsap.fromTo(rightRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true } }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const active = industries[activeIdx];

  return (
    <section ref={sectionRef} className="py-24" style={{ background: "var(--surface-2)" }}>
      <div className=" mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="mb-14  gap-6">
          <div>
            <div className="label-tag mb-5">Industries We Serve</div>
            <h2
              className="font-extrabold leading-tight text-white mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em" }}
            >
              Precision Engineered for Critical Sectors
            </h2>
          </div>
          <p className="text-sm leading-relaxed " style={{ color: "rgba(255,255,255,0.40)" }}>
            Deep domain expertise across high stakes industries where communication failure is never an option.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ border: "1px solid var(--border-dark)" }}>

          {/* LEFT — selector list */}
          <div
            ref={leftRef}
            className="flex flex-col"
            style={{ borderRight: "1px solid var(--border-dark)" }}
          >
            {industries.map((ind, i) => {
              const on = activeIdx === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="group text-left px-8 py-8 transition-all duration-300 flex items-start gap-5 cursor-pointer"
                  style={{
                    borderBottom: i < industries.length - 1 ? "1px solid var(--border-dark)" : "none",
                    background: on ? "rgba(33,150,243,0.08)" : "transparent",
                    borderLeft: on ? "3px solid var(--secondary)" : "3px solid transparent",
                  }}
                >
                  {/* Number */}
                  <span
                    className="text-2xl font-black tabular-nums mt-1 transition-colors duration-300"
                    style={{ color: on ? "var(--secondary)" : "rgba(255,255,255,0.12)" }}
                  >
                    {ind.num}
                  </span>

                  <div>
                    <span
                      className="block text-[10px] font-bold uppercase tracking-[0.15em] mb-2"
                      style={{ color: on ? "var(--accent)" : "rgba(255,255,255,0.28)" }}
                    >
                      {ind.tag}
                    </span>
                    <span
                      className="block text-lg font-extrabold leading-snug transition-colors duration-300"
                      style={{ color: on ? "#fff" : "rgba(255,255,255,0.50)" }}
                    >
                      {ind.title}
                    </span>

                    {/* Points shown inline when active on mobile */}
                    {on && (
                      <div className="mt-4 flex flex-col gap-2 lg:hidden">
                        {ind.points.map((pt, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <div className="w-4 h-px" style={{ background: "var(--secondary)" }} />
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT — detail panel */}
          <div
            ref={rightRef}
            className="p-10 hidden lg:flex flex-col justify-between"
            style={{ minHeight: "360px" }}
          >
            <div>
              <div className="label-tag mb-6" style={{ color: "var(--accent)" }}>
                {active.tag}
              </div>

              <h3
                className="font-extrabold text-white leading-tight mb-6"
                style={{ fontSize: "clamp(22px, 2.8vw, 34px)", letterSpacing: "-0.02em" }}
              >
                {active.title}
              </h3>

              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                {active.description}
              </p>

              <div className="flex flex-col gap-3 mb-10">
                {active.points.map((pt, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-6 h-px shrink-0" style={{ background: "var(--secondary)" }} />
                    <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={active.href}
              className="btn-primary self-start"
            >
              Explore Industry <FiArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
