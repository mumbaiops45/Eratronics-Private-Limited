"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiShield, FiActivity, FiRefreshCw, FiAlertTriangle,
  FiArrowRight, FiPhoneCall,
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
    <section className="bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-(--primary)" />
              <span className="text-(--primary) text-xs font-semibold tracking-[4px] uppercase">
                Through-Life Support
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
              Lifecycle Support Across{" "}
              <span className="text-(--primary)">Every Phase</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm leading-relaxed max-w-sm lg:text-right"
          >
            Our framework ensures telecom systems remain reliable, secure, scalable,
            and efficient across every stage of their operational life.
          </motion.p>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {lifecycleServices.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl border border-gray-100 p-8 hover:border-(--primary)/25 hover:shadow-lg hover:shadow-(--primary)/5 transition-all duration-400 overflow-hidden"
              >
                {/* Top accent */}
                <span className="absolute top-0 left-0 w-0 h-0.75 bg-(--primary) group-hover:w-full transition-all duration-600 ease-out" />

                {/* Number watermark */}
                <span className="absolute -bottom-4 -right-2 text-[110px] font-black leading-none text-gray-50 select-none pointer-events-none">
                  {svc.number}
                </span>

                {/* Header row */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-(--primary)/8 border border-(--primary)/15 flex items-center justify-center shrink-0 group-hover:bg-(--primary) group-hover:border-(--primary) transition-all duration-300">
                    <Icon className="text-(--primary) group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 font-semibold tracking-[3px] uppercase mb-1">
                      {svc.tag}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-(--primary) transition-colors duration-300">
                      {svc.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {svc.description}
                </p>

                {/* Points */}
                <div className="grid grid-cols-1 gap-2 mb-2">
                  {svc.points.map((pt, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-(--primary)/50 shrink-0" />
                      <span className="text-sm text-gray-500 leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>

                {/* KPIs */}
                {svc.kpis && (
                  <div className="mt-5 border border-(--primary)/15 bg-(--primary)/5 rounded-xl p-5">
                    <span className="block text-[10px] font-semibold text-(--primary) uppercase tracking-[3px] mb-3">
                      Key KPIs
                    </span>
                    <div className="flex flex-col gap-2">
                      {svc.kpis.map((kpi, k) => (
                        <div key={k} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-(--primary) shrink-0" />
                          <span className="text-sm text-gray-600">{kpi}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="relative mx-6 lg:mx-16 my-16 rounded-2xl bg-(--primary) px-10 py-14 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Protect Your Infrastructure Investment
            </h3>
            <p className="text-white/60 text-sm max-w-lg">
              From go-live to end-of-life — our ETCP keeps your mission-critical systems
              running at full availability, every phase of the way.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-(--primary) px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-300"
            >
              <FiPhoneCall size={15} /> Contact Us
            </Link>
            {/* <Link
              href="/solutions"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              All Solutions <FiArrowRight size={13} />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
