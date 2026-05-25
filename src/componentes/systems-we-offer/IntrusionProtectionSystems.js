"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "24×7",   label: "Real-Time Monitoring" },
  { value: "2",      label: "Core Sensing Technologies" },
  { value: "100km+", label: "Long Distance Coverage" },
  { value: "AI",     label: "Smart Event Detection" },
];

const sensingData = [
  {
    title: "Distributed Acoustic Sensing (DAS)",
    description: [
      "DAS converts a standard fiber-optic cable into a continuous acoustic / vibration sensor, acting like thousands of virtual microphones along its length. It enables real-time detection of events, movement, and disturbances without installing discrete sensors.",
    ],
    subSections: [
      {
        heading: "DAS Applications in O&G",
        bullets: [
          "Intrusion & Third-party Interference (TPI) prevents damage or theft to the pipeline",
          "Pipeline rupture or leak detection",
          "Temperature Monitoring of pipeline wall (Heated Pipelines)",
          "Pig Tracking",
        ],
      },
      {
        heading: "DAS Application in Metro System",
        bullets: [
          "Train Tracking & Positioning — Real-time train location, Train speed estimation.",
          "Rail & Track condition monitoring — Wheel flats, Broken sleeper/ties, Rail cracks.",
          "Tunnel & Infrastructure Monitoring — Ground movement & settlement detection, Water ingress or leakage in tunnel.",
          "Security & Intrusion Detection — Unauthorized access to track, Tampering with cable duct.",
        ],
      },
    ],
  },
  {
    title: "Distributed Temperature Sensing (DTS)",
    description: [
      "DTS uses Raman Scattering in fiber-optic cables to continuously monitor temperature along power lines. It provides real-time thermal data for optimizing loading, improving reliability, and detecting faults early by identifying hotspots, insulation degradation, and temperature related issues.",
    ],
    subSections: [
      {
        heading: "DTS Application in Power Sector",
        bullets: [
          "Dynamic Line Rating (DLR)",
          "Hot Spot Detection",
          "Underground Cable Monitoring",
          "Fire, Smoke, & Arc Detection",
        ],
      },
      {
        heading: "DTS Application in Metro / Highway Tunnel",
        bullets: [
          "Fire Detection & Safety Monitoring",
          "Cable & Utility Tunnel monitoring",
          "Ventilation Management",
          "Structural health & Geotechnical Monitoring",
        ],
      },
    ],
  },
];

function ContentBlock({ item, index }) {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0, y: 25 }, {
      opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div
      ref={ref}
      className="overflow-hidden"
      style={{ border: "1px solid var(--border-light)" }}
    >
      <div
        className="px-8 lg:px-10 py-5"
        style={{
          borderLeft: "4px solid var(--secondary)",
          background: "rgba(33,150,243,0.04)",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        <span className="block text-[10px] font-bold uppercase tracking-[0.15em] mb-1" style={{ color: "var(--text-muted-l)" }}>
          Technology {String(index + 1).padStart(2, "0")}
        </span>
        <h2
          className="font-extrabold leading-snug"
          style={{ fontSize: "clamp(18px, 2.2vw, 26px)", color: "var(--primary)", letterSpacing: "-0.02em" }}
        >
          {item.title}
        </h2>
      </div>

      <div className="px-8 lg:px-10 py-8 lg:py-10" style={{ background: "var(--surface-light)" }}>
        {item.description && (
          <div className="flex flex-col gap-4 mb-6">
            {item.description.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>{para}</p>
            ))}
          </div>
        )}

        {item.subSections && (
          <div className="flex flex-col gap-8 mt-2">
            {item.subSections.map((sub, idx) => (
              <div
                key={idx}
                className="pl-6 lg:pl-8"
                style={{ borderLeft: "2px solid var(--border-blue)" }}
              >
                <h3
                  className="font-bold mb-4 leading-snug"
                  style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "var(--secondary)" }}
                >
                  {sub.heading}
                </h3>

                {sub.bullets && (
                  <ul className="flex flex-col gap-2.5">
                    {sub.bullets.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
                        <span className="mt-1.5 w-1 h-1 shrink-0" style={{ background: "var(--secondary)" }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function IntrusionProtectionSystems() {
  const heroRef  = useRef(null);
  const statsRef = useRef(null);
  const ctaRef   = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: heroRef.current, start: "top 85%", once: true },
    });

    const statEls = statsRef.current?.querySelectorAll(".stat-cell");
    if (statEls) {
      gsap.fromTo(statEls, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: statsRef.current, start: "top 85%", once: true },
      });
    }

    gsap.fromTo(ctaRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ctaRef.current, start: "top 85%", once: true },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section style={{ background: "var(--surface-off)" }}>

      {/* HERO */}
      <div style={{ background: "var(--surface-off)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="mx-auto px-6 lg:px-16 py-20 lg:py-24">
          <div ref={heroRef} className="max-w-3xl">
            <div className="label-tag mb-6">Intrusion & Sensing Systems</div>
            <h2
              className="font-extrabold leading-tight mb-6"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.02em" }}
            >
              Advanced Fiber Optic{" "}
              <span style={{ color: "var(--secondary)" }}>DAS & DTS Monitoring Systems</span>
            </h2>
            <div className="h-px w-14 mb-6" style={{ background: "var(--secondary)" }} />
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
              Real-time distributed sensing technologies for intrusion detection,
              pipeline monitoring, railway safety, and critical infrastructure protection.
            </p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div ref={statsRef} style={{ background: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-cell px-8 py-10 text-center"
                style={{ borderRight: i < 3 ? "1px solid var(--border-dark)" : "none" }}
              >
                <p className="text-4xl font-black mb-1" style={{ color: "var(--secondary)" }}>{stat.value}</p>
                <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto px-6 lg:px-16 py-20">
        <div className="flex flex-col gap-6">
          {sensingData.map((item, index) => (
            <ContentBlock key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div ref={ctaRef} className="py-20" style={{ background: "var(--primary)" }}>
        <div className="mx-auto px-6 lg:px-16">
          <div className="relative overflow-hidden p-10 lg:p-14" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <div className="label-tag mb-4">Smart Infrastructure Monitoring</div>
                <h3 className="font-bold text-white mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 30px)", letterSpacing: "-0.02em" }}>
                  Protect critical assets with real-time fiber sensing intelligence
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Deploy DAS & DTS solutions for predictive monitoring, intrusion detection, and safety assurance.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="flex items-center gap-2.5 px-8 py-4 font-bold text-sm shrink-0 transition-all duration-250"
                style={{ background: "var(--primary)", color: "white" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--secondary)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Get in Touch <FiArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
