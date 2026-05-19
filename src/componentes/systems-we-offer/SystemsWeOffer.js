"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiWifi, FiPhoneCall, FiVideo, FiRadio,
  FiMonitor, FiServer, FiShield, FiLock,
  FiArrowRight, FiCheck,
} from "react-icons/fi";

const stats = [
  { value: "8+", label: "Integrated Systems" },
  { value: "3", label: "Core Industries Served" },
  { value: "24×7", label: "Lifecycle Support" },
  { value: "100%", label: "FAT Tested Delivery" },
];

const systems = [
  {
    id: 1,
    icon: FiWifi,
    category: "Network",
    title: "OFC-Based Backbone Telecom Networks",
    desc: "Mission-critical OFC backbone using SDH, MPLS-TP, IP/MPLS, and DWDM for secure, scalable communication across distributed industrial sites.",
    features: ["SCADA & RTU Integration", "FCAPS Based NMS", "Deterministic Performance"],
  },
  {
    id: 2,
    icon: FiPhoneCall,
    category: "Communication",
    title: "EPABX Communication Systems",
    desc: "Integrated EPABX supporting IP, digital, and analog telephony for industrial and metro environments with explosion-proof handset support.",
    features: ["Ex-Proof Telephones", "Emergency Communication", "Acoustic Booths"],
  },
  {
    id: 3,
    icon: FiVideo,
    category: "Collaboration",
    title: "Video Conferencing Solutions",
    desc: "Secure HD collaboration for geographically distributed industrial facilities, control centers, and remote operations — on private networks.",
    features: ["Polycom & Avaya", "Voice Tracking Cameras", "Private Network Systems"],
  },
  {
    id: 4,
    icon: FiRadio,
    category: "Radio",
    title: "UHF / VHF, TETRA & LTE-R Systems",
    desc: "Reliable radio communication engineered for metro rail, industrial, and mission-critical operations with priority call handling.",
    features: ["Long Range Coverage", "TETRA Radio Systems", "Priority Communication"],
  },
  {
    id: 5,
    icon: FiMonitor,
    category: "Display",
    title: "Passenger Information & Display Systems",
    desc: "Real-time passenger information for smooth transit operations and emergency communication, integrated with central control infrastructure.",
    features: ["Centralized Monitoring", "Emergency Updates", "Station Integration"],
  },
  {
    id: 6,
    icon: FiServer,
    category: "Safety",
    title: "PAGA Systems",
    desc: "Public Address & General Alarm systems for industrial safety and emergency response with zone-based control and SCADA connectivity.",
    features: ["Zone Based Alerts", "SCADA Integration", "Emergency Broadcasting"],
  },
  {
    id: 7,
    icon: FiShield,
    category: "Surveillance",
    title: "CCTV Surveillance Systems",
    desc: "Advanced surveillance delivering situational awareness and infrastructure security with AI-assisted video analytics and centralised VMS.",
    features: ["HD Monitoring", "Video Analytics", "Intrusion Detection"],
  },
  {
    id: 8,
    icon: FiLock,
    category: "Security",
    title: "Access Control Systems (ACS)",
    desc: "Secure access management protecting critical facilities and personnel with multi-factor authentication and full audit trail reporting.",
    features: ["Biometric Access", "Audit Trails", "Centralized Control"],
  },
];

export default function SystemWeOffer() {
  return (
    <section className="bg-white">

      {/* -- HERO HEADER -- */}
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
              Systems Portfolio
            </span>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              Enterprise Telecom Systems
              <span className="block text-[var(--primary)] mt-1">
                for Every Layer
              </span>
            </h2>

            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              End-to-end communication, surveillance, and safety systems engineered
              for Oil&nbsp;&amp;&nbsp;Gas, Power Sector, and Metro Rail operations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* -- STAT STRIP -- */}
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

      {/* -- SYSTEMS GRID -- */}
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

                {/* Top accent line on hover */}
                <span className="absolute top-0 left-6 right-6 h-[2px] bg-[var(--primary)] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                {/* Icon + category */}
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

                {/* Title */}
                <h3 className="text-[15px] font-bold text-gray-900 mb-3 leading-snug group-hover:text-[var(--primary)] transition-colors duration-300">
                  {sys.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                  {sys.desc}
                </p>

                {/* Feature list */}
                <ul className="space-y-2.5 mb-7">
                  {sys.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                        <FiCheck size={10} className="text-[var(--primary)]" />
                      </span>
                      <span className="text-[13px] text-gray-600 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer link */}
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[var(--primary)] group-hover:gap-3 transition-all duration-200 pt-5 border-t border-gray-100">
                  Explore System
                  <FiArrowRight size={13} />
                </div>

              </motion.article>
            );
          })}
        </div>
      </div>

      {/* -- BOTTOM CTA -- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-[var(--primary)] px-8 lg:px-16 py-14 lg:py-16"
        >
          {/* Subtle orbs */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[var(--primary)]/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-[var(--primary)]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-widest text-white/40 font-semibold mb-4">
                Ready to Deploy?
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-3">
                Let's build your mission-critical infrastructure together.
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Our engineering team will scope your requirements and define the right system architecture — from design to commissioning.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-white text-[var(--primary)] font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                Get in Touch
                <FiArrowRight size={14} />
              </Link>

              {/* <Link
                href="/solutions"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-white/8 hover:border-white/35 transition-all duration-200"
              >
                View All Solutions
              </Link> */}
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}