"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiLayers, FiGlobe, FiShield, FiSettings } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const dareData = [
  { letter: "D", title: "Design Engineering",     Icon: FiLayers,
    description: "The core of our comprehensive solution that meets even the most stringent customer requirements with precision, innovation, and reliability." },
  { letter: "A", title: "All Weather Integration", Icon: FiGlobe,
    description: "Systems Integration is the robust framework which supports our core to deliver multiple different components as part of a unified solution." },
  { letter: "R", title: "Rigorous Testing",         Icon: FiShield,
    description: "It ensures that along with optimum safety, rigorous testing, and faster delivery, we also provide our customers with complete peace of mind." },
  { letter: "E", title: "Effective Maintenance",    Icon: FiSettings,
    description: "We deliver holistic solutions that go far beyond the conventional fit it and forget it approach, through the full system lifecycle." },
];

export default function DeliveryPhilosophy() {
  const headerRef = useRef(null);
  const cardsRef  = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
    });

    const cards = cardsRef.current?.querySelectorAll(".dare-card");
    if (cards) {
      gsap.fromTo(cards, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.65, stagger: 0.10, ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 85%", once: true },
      });
    }
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="py-24" style={{ background: "var(--surface-1)" }}>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(33,150,243,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto px-6 lg:px-16">

        {/* Header */}
        <div
          ref={headerRef}
          className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <div className="label-tag mb-5">Our Framework</div>
            <h2
              className="font-extrabold leading-tight text-white"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.02em" }}
            >
              The{" "}
              <span style={{ color: "var(--secondary)" }}>DARE</span>
              {" "}Delivery Model
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs lg:text-right" style={{ color: "rgba(255,255,255,0.40)" }}>
            Our project delivery framework ensures quality, reliability, and long term
            system performance at every phase.
          </p>
        </div>

        {/* DARE cards — horizontal strip */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ border: "1px solid var(--border-dark)" }}
        >
          {dareData.map(({ letter, title, Icon, description }, i) => (
            <div
              key={letter}
              className="dare-card group relative p-8 lg:p-10 transition-all duration-400 overflow-hidden"
              style={{
                borderRight: i < 3 ? "1px solid var(--border-dark)" : "none",
                background: "transparent",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(33,150,243,0.07)";
                e.currentTarget.querySelector(".dare-top")?.style && (e.currentTarget.querySelector(".dare-top").style.transform = "scaleX(1)");
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {/* Top sweep */}
              <div
                className="dare-top absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                style={{ background: "var(--secondary)" }}
              />

              {/* Letter */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-5xl font-black tabular-nums leading-none transition-colors duration-300"
                  style={{ color: "var(--secondary)" }}
                >
                  {letter}
                </span>
                <div
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    border: "1px solid var(--border-dark)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <Icon size={18} className="text-white/50 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              <h3
                className="text-base font-bold text-white mb-3 leading-snug"
              >
                {title}
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.40)" }}>
                {description}
              </p>

              {/* Watermark */}
              <span
                className="absolute bottom-2 right-2 text-[90px] font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.02)" }}
              >
                {letter}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom acronym strip */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 mt-4"
          style={{ border: "1px solid var(--border-dark)" }}
        >
          {dareData.map(({ letter, title }, i) => (
            <div
              key={letter}
              className="px-6 py-4 flex items-center gap-3"
              style={{ borderRight: i < 3 ? "1px solid var(--border-dark)" : "none" }}
            >
              <span className="font-black text-xl" style={{ color: "var(--secondary)" }}>{letter}</span>
              <span className="text-[10px] uppercase tracking-widest hidden lg:block" style={{ color: "rgba(255,255,255,0.30)" }}>
                {title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
