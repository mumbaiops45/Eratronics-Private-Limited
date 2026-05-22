"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const industries = [
  {
    tag: "Energy Sector",
    title: "Oil & Gas Industry",
    description:
      "Rugged telecom and communication infrastructure for upstream, midstream, and downstream oil and gas operations engineered for hazardous zones, remote sites, and mission critical reliability.",
    points: ["ATEX Rated Equipment", "SCADA Integration", "Ex proof Communication"],
    href: "/industries-we-serve/oil-and-gas-industry",
    accent: "from-amber-900/20 to-transparent",
    dot: "bg-amber-500",
  },
  {
    tag: "Utilities",
    title: "Power Sector",
    description:
      "Integrated communication solutions for power generation, transmission, and distribution networks supporting grid automation, protection relaying, and substation telecom infrastructure.",
    points: ["Grid Communication", "Protection Relaying", "Substation Telecom"],
    href: "/industries-we-serve/power-sector",
    accent: "from-blue-900/20 to-transparent",
    dot: "bg-blue-400",
  },
  {
    tag: "Urban Transport",
    title: "Metro Rail",
    description:
      "End to end communication systems for metro rail networks including TETRA and LTE R radio, CCTV, PIDS, and OFC backbone ensuring safe, efficient, and passenger centric transit operations.",
    points: ["TETRA and LTE R Radio", "PIDS Systems", "Integrated CCTV and ACS"],
    href: "/industries-we-serve/metro-rail",
    accent: "from-emerald-900/20 to-transparent",
    dot: "bg-emerald-400",
  },
];
export default function HomeIndustries() {
  return (
    <section className="py-28 bg-[var(--primary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-18"
        >
          <div className="flex items-center gap-3 mb-0">
            <span className="block w-10 h-px bg-white/30" />
            <span className="text-white/70 text-xs font-semibold tracking-[4px] uppercase">
              Industries We Serve
            </span>
          </div>
           <span className="hidden lg:block w-px h-20 bg-white/30" />
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
              <span className="bg-gradient-to-r from-white to-[var(--secondary)] bg-clip-text text-transparent">
                Precision Engineered for Critical Sectors
              </span>
            </h2>

            <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-xl">
              Deep domain expertise across high stakes industries where communication failure is never an option.
            </p>
          </div>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.50 }}
              viewport={{ once: true }}
            >
              <Link
                href={ind.href}
                className="group relative flex flex-col h-full bg-[var(--secondary)]/5 hover:bg-[var(--secondary)]/15 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 p-8"
              >
                {/* Top accent */}
                <span className="absolute top-0 left-0 w-0 h-[2px] bg-[var(--secondary)]/70 group-hover:w-full transition-all duration-700 ease-out" />

                {/* Tag */}
                <span className="text-xs font-semibold text-white/50 tracking-[3px] uppercase mb-4">
                  {ind.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                  {ind.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">
                  {ind.description}
                </p>

                {/* Points */}
                <div className="flex flex-col gap-2 mb-8">
                  {ind.points.map((pt, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />
                      <span className="text-xs text-white/50 font-medium">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-white/70 text-sm group-hover:text-[var(--secondary)] font-semibold">
                  <span>Explore Industry</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/industries-we-serve"
            className="inline-flex items-center gap-2 text-sm bg-[var(--secondary)] text-white/80 hover:text-white font-medium transition-colors duration-300 border border-white/10 hover:border-white/30 px-6 py-3 rounded-full"
          >
            View All Industries
            <FiArrowRight size={14} />
          </Link>
        </motion.div> */}

      </div>
    </section>
  );
}
