"use client";

import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiLayers,
  FiShield,
  FiHeadphones,
  FiTool,
  FiGlobe,
} from "react-icons/fi";

const reasons = [
  {
    icon: FiCheckCircle,
    title: "Single Point Accountability",
    description:
      "One partner for design, supply, integration, commissioning, and support, eliminating coordination gaps and reducing project risk.",
  },
  {
    icon: FiLayers,
    title: "DARE and CARE Models",
    description:
      "Our proprietary frameworks drive structured delivery and lifecycle support, ensuring every phase meets operational and regulatory standards.",
  },
  {
    icon: FiShield,
    title: "Mission Critical Reliability",
    description:
      "Systems engineered for zero compromise environments, hazardous zones, remote sites, and 24 7 critical operations.",
  },
  {
    icon: FiHeadphones,
    title: "Through Life Support",
    description:
      "SLA based operations support from routine maintenance to emergency response, aligned with your availability requirements.",
  },
  {
    icon: FiTool,
    title: "In House Integration Center",
    description:
      "All systems undergo rigorous pre deployment testing and customer witnessed FAT at our dedicated integration facility.",
  },
  {
    icon: FiGlobe,
    title: "Multi Industry Expertise",
    description:
      "Proven track record across Oil and Gas, Power, and Metro Rail sectors, deep domain knowledge that generic integrators cannot replicate.",
  },
];

export default function HomeWhyUs() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-10">
            <div className="flex items-center gap-3 mb-0">
              <span className="block w-10 h-px bg-[var(--primary)]" />
              <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
                Why Eratronics
              </span>
            </div>
            <span className="hidden lg:block w-px h-20 bg-[var(--primary)]" />
            <div>

             <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
  <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
    Built for the Demands of Critical Infrastructure
  </span>
</h2> 
                   <p className="text-gray-500 text-sm leading-relaxed ">
              We don't just deliver technology — we deliver outcomes that industrial operations depend on, every hour of every day.
            </p>
            </div>
       
          </div>

        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white p-10 hover:bg-[var(--primary)] transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/8 border border-[var(--primary)]/15 flex items-center justify-center mb-6 group-hover:bg-white/15 group-hover:border-white/25 transition-all duration-500">
                  <Icon className="text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors duration-500" size={20} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
