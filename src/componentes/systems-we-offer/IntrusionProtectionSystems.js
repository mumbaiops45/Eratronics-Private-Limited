"use client";

import { motion } from "framer-motion";

import {
  FiShield,
  FiActivity,
  FiThermometer,
  FiRadio,
  FiMap,
  FiAlertTriangle,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

const stats = [
  { value: "24×7", label: "Real-Time Monitoring" },
  { value: "2", label: "Core Sensing Technologies" },
  { value: "100km+", label: "Long Distance Coverage" },
  { value: "AI", label: "Smart Event Detection" },
];

const systems = [
  {
    id: 1,
    icon: FiActivity,
    category: "DAS",
    title: "Distributed Acoustic Sensing",
    desc:
      "Fiber-optic based acoustic sensing solution enabling real-time intrusion detection, leak monitoring, train tracking, and infrastructure protection across mission-critical environments.",
    features: [
      "Pipeline Intrusion Detection",
      "Leak & Rupture Monitoring",
      "Train Tracking & Positioning",
    ],
  },

  {
    id: 2,
    icon: FiShield,
    category: "Security",
    title: "Intrusion & Third-Party Interference Detection",
    desc:
      "Advanced sensing systems detect unauthorized excavation, tampering, and external interference activities before critical infrastructure is compromised.",
    features: [
      "Unauthorized Access Detection",
      "Tampering Alerts",
      "Perimeter Monitoring",
    ],
  },

  {
    id: 3,
    icon: FiRadio,
    category: "Rail Monitoring",
    title: "Metro Rail Monitoring Systems",
    desc:
      "Continuous monitoring of rail tracks, train movement, and tunnel conditions for improved operational safety and predictive maintenance.",
    features: [
      "Train Speed Estimation",
      "Rail Crack Detection",
      "Tunnel Monitoring",
    ],
  },

  {
    id: 4,
    icon: FiThermometer,
    category: "DTS",
    title: "Distributed Temperature Sensing",
    desc:
      "Real-time thermal monitoring using Raman Scattering technology for detecting hotspots, fire risks, insulation failures, and thermal anomalies.",
    features: [
      "Hotspot Detection",
      "Dynamic Line Rating",
      "Fire & Smoke Detection",
    ],
  },

  {
    id: 5,
    icon: FiMap,
    category: "Infrastructure",
    title: "Tunnel & Utility Monitoring",
    desc:
      "Smart sensing infrastructure designed for metro tunnels, utility corridors, and underground networks with continuous environmental monitoring.",
    features: [
      "Water Leakage Detection",
      "Ventilation Monitoring",
      "Geotechnical Monitoring",
    ],
  },

  {
    id: 6,
    icon: FiAlertTriangle,
    category: "Safety",
    title: "Critical Safety & Fault Detection",
    desc:
      "Integrated safety systems providing early warning for fire, arc faults, cable overheating, and structural abnormalities in critical facilities.",
    features: [
      "Arc Detection",
      "Cable Monitoring",
      "Structural Health Analysis",
    ],
  },
];

export default function IntrusionProtectionSystems() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <div className="bg-[#F8FAFD] border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-24">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >

            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--primary)] bg-[var(--primary)]/8 border border-[var(--primary)]/15 px-4 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
              Intrusion Protection Systems
            </span>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              Advanced Intrusion  
              <span className="block text-[var(--primary)] mt-1">
               Detection Systems for Prevention & Protection
              </span>
            </h2>

            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Distributed Acoustic Sensing (DAS) and Distributed Temperature
              Sensing (DTS) solutions engineered for real-time monitoring,
              intrusion prevention, and infrastructure protection.
            </p>

          </motion.div>

        </div>

      </div>

      {/* STATS */}
      <div className="border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">

            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="px-8 py-8 text-center"
              >

                <p className="text-3xl lg:text-4xl font-black text-gray-900 mb-1">
                  {stat.value}
                </p>

                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-widest">
                  {stat.label}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {systems.map((sys, i) => {

            const Icon = sys.icon;

            return (
              <motion.article
                key={sys.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl border border-gray-200 p-7 flex flex-col hover:border-[var(--primary)]/30 hover:shadow-xl hover:shadow-[var(--primary)]/5 transition-all duration-300"
              >

                <span className="absolute top-0 left-6 right-6 h-[2px] bg-[var(--primary)] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                {/* ICON */}
                <div className="flex items-start justify-between mb-6">

                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/8 flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors duration-300">

                    <Icon
                      size={20}
                      className="text-[var(--primary)] group-hover:text-white transition-colors duration-300"
                    />

                  </div>

                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest pt-1">
                    {sys.category}
                  </span>

                </div>

                {/* TITLE */}
                <h3 className="text-[15px] font-bold text-gray-900 mb-3 leading-snug group-hover:text-[var(--primary)] transition-colors duration-300">
                  {sys.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                  {sys.desc}
                </p>

                {/* FEATURES */}
                <ul className="space-y-2.5 mb-7">

                  {sys.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-2.5">

                      <span className="w-4 h-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">

                        <FiCheck
                          size={10}
                          className="text-[var(--primary)]"
                        />

                      </span>

                      <span className="text-[13px] text-gray-600 font-medium">
                        {feat}
                      </span>

                    </li>
                  ))}

                </ul>

                {/* FOOTER */}
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[var(--primary)] group-hover:gap-3 transition-all duration-200 pt-5 border-t border-gray-100">
                  Explore System
                  <FiArrowRight size={13} />
                </div>

              </motion.article>
            );
          })}

        </div>

      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-20 lg:pb-24">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-[var(--primary)] px-8 lg:px-16 py-14 lg:py-16"
        >

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[var(--primary)]/30 blur-3xl pointer-events-none" />

          <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-[var(--primary)]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div className="max-w-xl">

              <p className="text-[11px] uppercase tracking-widest text-white/40 font-semibold mb-4">
                Infrastructure Protection
              </p>

              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-3">
                Secure your critical infrastructure with intelligent sensing systems.
              </h3>

              <p className="text-white/50 text-sm leading-relaxed">
                Deploy advanced DAS & DTS technologies for proactive monitoring,
                real-time alerts, and predictive infrastructure protection.
              </p>

            </div>

            <div className="flex flex-wrap gap-3 shrink-0">

              <button className="inline-flex items-center gap-2 bg-white text-[var(--primary)] font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                Get in Touch
                <FiArrowRight size={14} />
              </button>

              <button className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-white/8 hover:border-white/35 transition-all duration-200">
                Explore Solutions
              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}