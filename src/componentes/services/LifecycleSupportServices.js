"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiShield, FiActivity, FiRefreshCw, FiAlertTriangle, FiArrowRight,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const lifecycleServices = [
  {
    number: "01",
    tag: "Early Life Phase",
    title: "Stabilization & Warranty Support",
    icon: FiShield,
    description: "Objective: Ensure system reliability post commissioning.",
    points: [
      "Hypercare support, first 3 to 6 months",
      "Performance tuning",
      "Root cause analysis for early failures",
      "Documentation handover & training",
    ],
  },
  {
    number: "02",
    tag: "Mid Life Phase",
    title: "Operations & Managed Services",
    icon: FiActivity,
    description: "Objective: Maintain uptime and predictable performance.",
    points: [
      "24×7 NOC monitoring",
      "SLA driven incident & problem management",
      "Preventive & predictive maintenance",
      "Spares lifecycle management, critical in remote O&G sites",
    ],
    kpis: [
      "Network availability ≥99.95%",
      "MTTR — Mean Time to Repair",
      "SLA compliance %",
    ],
  },
  {
    number: "03",
    tag: "Maturity Phase",
    title: "Optimization & Upgrade",
    icon: FiRefreshCw,
    description: "Objective: Keep systems relevant over long asset life.",
    points: [
      "Technology refresh planning (SDH to MPLS TP / IP MPLS)",
      "Capacity augmentation",
      "Software / firmware lifecycle management",
      "Cybersecurity upgrades, patching, vulnerability management",
    ],
  },
  {
    number: "04",
    tag: "End of Life Phase",
    title: "Obsolescence & Replacement",
    icon: FiAlertTriangle,
    description: "Objective: Avoid operational risk due to aging systems.",
    points: [
      "OEM obsolescence tracking",
      "Last time buy planning",
      "Migration roadmap — zero downtime transition",
      "Decommissioning strategy",
    ],
  },
];

export default function LifecycleSupportServices() {
  const headerRef = useRef(null);
  const cardsRef  = useRef(null);
  const ctaRef    = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
    });
    const cards = cardsRef.current?.querySelectorAll(".lc-card");
    if (cards) {
      gsap.fromTo(cards, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 85%", once: true },
      });
    }
    gsap.fromTo(ctaRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ctaRef.current, start: "top 85%", once: true },
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="overflow-hidden" style={{ background: "var(--surface-light)" }}>

      <div className="mx-auto px-6 lg:px-16 pt-24">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="label-tag mb-6">Through Life Support</div>
            <h2
              className="font-extrabold leading-tight"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "var(--primary)", letterSpacing: "-0.02em" }}
            >
              Lifecycle Support Across{" "}
              <span style={{ color: "var(--secondary)" }}>Every Phase</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs lg:text-right" style={{ color: "var(--text-muted-l)" }}>
            Our framework ensures telecom systems remain reliable, secure, scalable,
            and efficient across every stage of their operational life.
          </p>
        </div>

        {/* Phase cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2" style={{ border: "1px solid var(--border-light)" }}>
          {lifecycleServices.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.number}
                className="lc-card group relative p-8 overflow-hidden transition-all duration-300"
                style={{
                  borderRight: i % 2 === 0 ? "1px solid var(--border-light)" : "none",
                  borderBottom: i < 2 ? "1px solid var(--border-light)" : "none",
                  background: "transparent",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(33,150,243,0.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                  style={{ background: "var(--secondary)" }}
                />

                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(33,150,243,0.08)", border: "1px solid var(--border-blue)" }}
                  >
                    <Icon size={16} style={{ color: "var(--secondary)" }} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: "var(--text-muted-l)" }}>
                      {svc.tag}
                    </span>
                    <h3 className="text-sm font-bold leading-snug" style={{ color: "var(--primary)" }}>
                      {svc.title}
                    </h3>
                  </div>
                  <span className="ml-auto text-xl font-black tabular-nums shrink-0" style={{ color: "rgba(33,150,243,0.15)" }}>
                    {svc.number}
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted-l)", fontStyle: "italic" }}>
                  {svc.description}
                </p>

                <div className="flex flex-col gap-2 mb-4">
                  {svc.points.map((pt, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1 h-1 shrink-0" style={{ background: "var(--secondary)" }} />
                      <span className="text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>{pt}</span>
                    </div>
                  ))}
                </div>

                {svc.kpis && (
                  <div
                    className="p-5 mt-2"
                    style={{ background: "rgba(33,150,243,0.05)", border: "1px solid var(--border-blue)" }}
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--secondary)" }}>
                      Key KPIs
                    </span>
                    <div className="flex flex-col gap-2">
                      {svc.kpis.map((kpi, k) => (
                        <div key={k} className="flex items-center gap-2.5">
                          <span className="w-1 h-1 shrink-0" style={{ background: "var(--secondary)" }} />
                          <span className="text-sm" style={{ color: "var(--text-muted-l)" }}>{kpi}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div ref={ctaRef} className="py-20 mt-24" style={{ background: "var(--secondary)" }}>
        <div className="mx-auto px-6 lg:px-16">
          <div className="relative overflow-hidden p-10 lg:p-14" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h3 className="font-bold text-white mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 30px)", letterSpacing: "-0.02em" }}>
                  Protect Your Infrastructure Investment
                </h3>
                <p className="text-sm leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
                  From go live to end of life, our ETCP keeps your mission critical systems
                  running at full availability, every phase of the way.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="flex items-center gap-2.5 px-8 py-4 font-bold text-sm shrink-0 transition-all duration-250"
                style={{ background: "var(--primary)", color: "white" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--surface-0)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Contact Us <FiArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
