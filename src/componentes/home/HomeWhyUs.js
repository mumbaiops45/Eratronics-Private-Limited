"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiCheckCircle,
  FiLayers,
  FiShield,
  FiHeadphones,
  FiTool,
  FiGlobe,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: FiCheckCircle,
    num: "01",
    title: "Single Point Accountability",
    description:
      "One partner for design, supply, integration, commissioning, and support, eliminating coordination gaps and reducing project risk.",
  },
  {
    icon: FiLayers,
    num: "02",
    title: "DARE and CARE Models",
    description:
      "Our proprietary frameworks drive structured delivery and lifecycle support, ensuring every phase meets operational and regulatory standards.",
  },
  {
    icon: FiShield,
    num: "03",
    title: "Mission Critical Reliability",
    description:
      "Systems engineered for zero compromise environments, hazardous zones, remote sites, and 24 7 critical operations.",
  },
  {
    icon: FiHeadphones,
    num: "04",
    title: "Through Life Support",
    description:
      "SLA based operations support from routine maintenance to emergency response, aligned with your availability requirements.",
  },
  {
    icon: FiTool,
    num: "05",
    title: "In House Integration Center",
    description:
      "All systems undergo rigorous pre deployment testing and customer witnessed FAT at our dedicated integration facility.",
  },
  {
    icon: FiGlobe,
    num: "06",
    title: "Multi Industry Expertise",
    description:
      "Proven track record across Oil and Gas, Power, and Metro Rail sectors, deep domain knowledge that generic integrators cannot replicate.",
  },
];

export default function HomeWhyUs() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 88%",
          once: true,
        },
      }
    );

    const cards = gridRef.current?.querySelectorAll(".why-card");

    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="py-24 bg-[var(--surface-off)]">
      <div className="mx-auto px-6 lg:px-16">

        {/* Header */}
        <div
          ref={headerRef}
          className="mb-16 grid grid-cols-1 gap-10 items-end"
        >
          <div>
            <div className="label-tag mb-5">
              Why Eratronics
            </div>

            <h2
              className="font-extrabold leading-tight text-[var(--primary)]"
              style={{
                fontSize: "clamp(28px,4vw,48px)",
                letterSpacing: "-0.02em",
              }}
            >
              Built for the Demands of Critical Infrastructure
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-[var(--text-muted-l)]">
            We don't just deliver technology , we deliver outcomes that industrial operations
            depend on, every hour of every day.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[var(--border-light)]"
        >
          {reasons.map((item, i) => {
            const Icon = item.icon;

            const col = i % 3;
            const row = Math.floor(i / 3);

            return (
              <div
                key={i}
                className={`
                  why-card
                  group
                  relative
                  overflow-hidden
                  p-10
                  cursor-default
                  bg-[var(--surface-light)]
                  transition-all
                  duration-500
                  hover:bg-[var(--primary)]
                  hover:-translate-y-1.5
                  hover:translate-x-1
                  ${col < 2 ? "lg:border-r border-[var(--border-light)]" : ""}
                  ${row < 1 ? "border-b border-[var(--border-light)]" : ""}
                `}
              >
                {/* Top Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--secondary)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                {/* Number + Icon */}
                <div className="flex items-center justify-between mb-8">

                  <span className="text-xs font-black tracking-[0.12em] text-[var(--secondary)] opacity-50 transition-all duration-300 group-hover:text-white/30">
                    {item.num}
                  </span>

                  <div className="w-10 h-10 flex items-center justify-center border border-[var(--border-blue)] bg-[rgba(33,150,243,0.06)] transition-all duration-300 group-hover:scale-110">
                    <Icon
                      size={18}
                      className="text-[var(--secondary)]"
                    />
                  </div>

                </div>

                {/* Title */}
                <h3 className="mb-3 text-base font-bold leading-snug text-[var(--primary)] transition-colors duration-300 group-hover:text-[var(--secondary)]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[var(--text-muted-l)] transition-colors duration-300 group-hover:text-white">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-px w-0 bg-[var(--secondary)] transition-all duration-500 ease-out group-hover:w-8" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}