"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiWifi,
  FiPhoneCall,
  FiVideo,
  FiRadio,
  FiMonitor,
  FiServer,
  FiShield,
  FiLock,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

const stats = [
  { value: "7+", label: "Integrated Systems" },
  { value: "5+", label: "Communication Domains" },
  { value: "24×7", label: "Mission-Critical Operation" },
  { value: "100%", label: "Industrial Grade Deployment" },
];

const systems = [
  {
    id: 1,
    icon: FiWifi,
    category: "Backbone Network",
    title: "OFC-Based Backbone Telecom Networks",
    desc:
      "We design and deploy mission-critical backbone telecom networks built on Optical Fiber Cable (OFC) infrastructure, leveraging proven technologies such as SDH, MPLS-TP, IP/MPLS, and DWDM. These networks deliver high reliability, deterministic performance, and scalable architecture for critical operations.",
    features: [
      "Seamless integration with SCADA, RTU, EPABX, CCTV, VCS, UHF/VHF, PAGA, Access Control",
      "Centralized NMS with FCAPS (Fault, Configuration, Accounting, Performance, Security)",
      "Temperature-hardened industrial-grade deployment for harsh environments",
    ],
  },

  {
    id: 2,
    icon: FiPhoneCall,
    category: "Communication Systems",
    title: "Communication Systems",
    desc:
      "We design integrated communication ecosystems ensuring reliable, real-time communication across industrial and metro environments.",
    features: [
      "EPABX System (IP / Digital / Analog)",
      "Video Conferencing Solutions",
      "Emergency Communication Systems",
    ],
  },

  {
    id: 3,
    icon: FiVideo,
    category: "EPABX & VCS",
    title: "EPABX System & Video Conferencing Solutions",
    desc:
      "Industrial-grade communication systems designed for secure and high-quality voice and video communication over private networks.",
    features: [
      "Hazardous-area compliant EPABX (Ex-proof & weatherproof)",
      "Acoustic booths, beacon sounders, emergency telephony",
      "Polycom & Avaya based Video Conferencing Systems",
      "Voice tracking cameras, microphones, speakers",
      "Meeting recording & archival for operational continuity",
    ],
  },

  {
    id: 4,
    icon: FiRadio,
    category: "Radio Communication",
    title: "UHF / VHF, TETRA & LTE-R Communication Systems",
    desc:
      "Mission-critical communication systems designed for pipelines, metro rail, and railway operations ensuring uninterrupted connectivity.",
    features: [
      "UHF/VHF Radio Systems for pipelines & water crossings",
      "TETRA for metro rail: secure trunked communication",
      "OCC coordination & emergency group calling",
      "LTE-R next-gen railway communication (voice, video, data)",
    ],
  },

  {
    id: 5,
    icon: FiMonitor,
    category: "Passenger Systems",
    title: "Passenger Information & Display Systems (PIDS)",
    desc:
      "Real-time passenger information systems ensuring accurate, timely and centralized communication across transit environments.",
    features: [
      "Real-time passenger information display",
      "Centralized monitoring & control system",
      "Emergency information broadcasting",
      "Improved passenger convenience & operational safety",
    ],
  },

  {
    id: 6,
    icon: FiServer,
    category: "Safety Systems",
    title: "Public Address & General Alarm (PAGA)",
    desc:
      "Safety-critical communication systems designed for real-time emergency alerts and operational announcements.",
    features: [
      "Zone-based communication system",
      "Integration with SCADA, Fire & Gas systems",
      "Emergency shutdown system integration",
      "Automated alert generation for critical events",
    ],
  },

  {
    id: 7,
    icon: FiShield,
    category: "Surveillance",
    title: "CCTV Surveillance Systems",
    desc:
      "Advanced surveillance solutions for continuous monitoring and enhanced security across industrial and metro environments.",
    features: [
      "HD video monitoring with centralized control",
      "AI-based analytics for intrusion detection",
      "Perimeter protection & incident investigation",
      "Scalable deployment for critical infrastructure",
    ],
  },

  {
    id: 8,
    icon: FiLock,
    category: "Security",
    title: "Access Control Systems (ACS)",
    desc:
      "Advanced access control systems ensuring secure entry management for high-security environments.",
    features: [
      "Role-based access (Smart card, biometric, MFA)",
      "Centralized monitoring & audit trails",
      "Integration with fire, safety & surveillance systems",
      "Deployment for stations, depots, control rooms",
    ],
  },
];

export default function CriticalTelecomSystems() {
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
              Telecom Infrastructure Systems
            </span>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              Mission Critical
              <span className="block text-[var(--primary)] mt-1">
                Telecom, Communication & Security Systems
              </span>
            </h2>

            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              End-to-end integrated solutions for OFC backbone networks,
              communication systems, surveillance, and safety infrastructure
              across Oil & Gas, Metro Rail, Power, and Industrial sectors.
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

                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/8 flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors duration-300">
                    <Icon size={20} className="text-[var(--primary)] group-hover:text-white" />
                  </div>

                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest pt-1">
                    {sys.category}
                  </span>
                </div>

                <h3 className="text-[15px] font-bold text-gray-900 mb-3 group-hover:text-[var(--primary)]">
                  {sys.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                  {sys.desc}
                </p>

                <ul className="space-y-2.5 mb-7">
                  {sys.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 mt-0.5 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                        <FiCheck size={10} className="text-[var(--primary)]" />
                      </span>
                      <span className="text-[13px] text-gray-600 font-medium">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-[13px] font-semibold text-[var(--primary)] group-hover:gap-3 transition-all pt-5 border-t border-gray-100">
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
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[var(--primary)]/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-[var(--primary)]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-widest text-white/40 mb-4">
                Ready to Deploy
              </p>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Build fully integrated telecom & security infrastructure
              </h3>

              <p className="text-white/50 text-sm">
                From backbone OFC networks to surveillance & access control systems.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-[var(--primary)] font-semibold text-sm px-7 py-3.5 rounded-xl"
            >
              Get in Touch
              <FiArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}