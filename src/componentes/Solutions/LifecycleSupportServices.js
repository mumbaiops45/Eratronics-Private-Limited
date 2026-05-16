"use client";

import { motion } from "framer-motion";
import {
  FiShield,
  FiActivity,
  FiRefreshCw,
  FiAlertTriangle,
} from "react-icons/fi";

const lifecycleServices = [
  {
    number: "01",
    tag: "Early Life Phase",
    title: "Stabilization & Warranty Support",
    icon: FiShield,
    description:
      "Ensure system reliability and operational stability immediately after commissioning through structured hypercare and performance optimization.",
    points: [
      "Hypercare support (first 3–6 months)",
      "Performance tuning",
      "Root cause analysis for early failures",
      "Documentation handover & training",
    ],
  },

  {
    number: "02",
    tag: "Mid-Life Phase",
    title: "Operations & Managed Services",
    icon: FiActivity,
    description:
      "Maintain maximum uptime and predictable system performance through continuous monitoring and SLA-driven operational support.",
    points: [
      "24×7 NOC monitoring",
      "SLA-driven incident & problem management",
      "Preventive & predictive maintenance",
      "Spares lifecycle management",
    ],

    kpis: [
      "Network availability (≥99.95%)",
      "MTTR (Mean Time to Repair)",
      "SLA compliance %",
    ],
  },

  {
    number: "03",
    tag: "Maturity Phase",
    title: "Optimization & Upgrade",
    icon: FiRefreshCw,
    description:
      "Keep systems technologically relevant and operationally efficient across long infrastructure life cycles.",
    points: [
      "Technology refresh planning",
      "Capacity augmentation",
      "Software/firmware lifecycle management",
      "Cybersecurity upgrades",
    ],
  },

  {
    number: "04",
    tag: "End-of-Life Phase",
    title: "Obsolescence & Replacement",
    icon: FiAlertTriangle,
    description:
      "Reduce operational risks caused by aging infrastructure through planned migrations and lifecycle replacement strategies.",
    points: [
      "OEM obsolescence tracking",
      "Last-time-buy planning",
      "Migration roadmap",
      "Decommissioning strategy",
    ],
  },
];

export default function LifecycleSupportServices() {
  return (
    <>
      {/* ── INTRO ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.15 }}
          >

            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-[var(--primary)]" />

              <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
                Through-Life Support
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Lifecycle Support for{" "}
              <span className="text-[var(--primary)]">
                Mission-Critical Telecom Infrastructure
              </span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed">
              Our through-life support framework ensures telecom systems remain
              reliable, secure, scalable, and operationally efficient across
              every phase of the infrastructure lifecycle.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="pb-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-4 md:gap-y-6">

            {lifecycleServices.map((svc, index) => {
              const Icon = svc.icon;

              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="group flex flex-col h-full overflow-hidden rounded-b-[18px] border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-500"
                >

                  {/* ── HEADER ── */}
                  <div className="relative flex min-h-[150px] overflow-hidden bg-[var(--primary)] px-6 pt-7 pb-6">

                    {/* bg blur */}
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-150" />

                  

                    <div className="relative z-10 flex w-full items-start justify-between gap-5">

                      <div className="flex h-full flex-col justify-between">

                        {/* tag */}
                        <span className="mb-4 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[3px] text-white/70">
                          {svc.tag}
                        </span>

                        {/* title */}
                        <h3 className="text-2xl font-bold leading-snug text-white">
                          {svc.title}
                        </h3>

                      </div>

                      {/* icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                        <Icon className="text-white" size={22} />
                      </div>

                    </div>
                  </div>

                  {/* ── BODY ── */}
                  <div className="flex-1 px-6 pt-6 pb-7 bg-[linear-gradient(to_bottom,_#f5f5f4_0%,_rgba(255,255,255,0)_100%)]">

                    <p className="text-sm leading-relaxed text-gray-600 mb-6">
                      {svc.description}
                    </p>

                    {/* points */}
                    <div className="space-y-3">

                      {svc.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]" />

                          <p className="text-sm leading-relaxed text-gray-700">
                            {point}
                          </p>
                        </div>
                      ))}

                    </div>

                    {/* KPIs */}
                    {svc.kpis && (
                      <div className="mt-7 rounded-2xl border border-[var(--primary)]/10 bg-[var(--primary)]/5 p-5">

                        <h4 className="mb-4 text-sm font-bold uppercase tracking-[2px] text-[var(--primary)]">
                          Key KPIs
                        </h4>

                        <div className="space-y-3">

                          {svc.kpis.map((kpi) => (
                            <div
                              key={kpi}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]" />

                              <p className="text-sm text-gray-700">
                                {kpi}
                              </p>
                            </div>
                          ))}

                        </div>

                      </div>
                    )}

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>
    </>
  );
}