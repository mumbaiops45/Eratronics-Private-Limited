"use client";

import { motion } from "framer-motion";
import {
  FiLayers,
  FiGlobe,
  FiShield,
  FiSettings,
} from "react-icons/fi";

const dareData = [
  {
    letter: "D",
    title: "Design Engineering",
    Icon: FiLayers,
    description:
      "The core of our all-encompassing solution that meets even the most stringent customer requirements with precision, innovation, and reliability.",
  },
  {
    letter: "A",
    title: "All Weather Integration",
    Icon: FiGlobe,
    description:
      "Systems Integration is the robust framework which supports our core to deliver multiple different components as part of a unified solution.",
  },
  {
    letter: "R",
    title: "Rigorous Testing",
    Icon: FiShield,
    description:
      "It ensures that, along with optimum safety, rigorous testing, and faster delivery, we also provide our customers with complete peace of mind.",
  },
  {
    letter: "E",
    title: "Effective Maintenance",
    Icon: FiSettings,
    description:
      "We deliver holistic solutions that go far beyond the conventional 'fit it and forget it' approach — through the full system lifecycle.",
  },
];

export default function DeliveryPhilosophy() {
  return (
    <section className="relative py-28 bg-[var(--primary)] overflow-hidden">

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-white/60" />

              <span className="text-white/70 text-xs font-semibold tracking-[4px] uppercase">
                Our Framework
              </span>
            </div>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
  <span className="bg-gradient-to-r from-white to-[var(--secondary)] bg-clip-text text-transparent">
    The DARE Delivery Model
  </span>
</h2>

          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-white/70 text-sm leading-relaxed max-w-sm lg:text-right"
          >
            Our project delivery framework ensures quality, reliability, and long-term
            system performance at every phase.
          </motion.p>

        </div>

        {/* DARE Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {dareData.map(({ letter, title, Icon, description }, i) => (

            <motion.div
              key={letter}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/10 hover:bg-[var(--secondary)]/15 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10  transition-all duration-500 overflow-hidden"
            >

              {/* Top hover accent */}
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-[var(--secondary)] group-hover:w-full transition-all duration-700 ease-out" />

              {/* Large letter watermark */}
              <span className="absolute -bottom-4 -right-2 text-[120px] font-black leading-none text-white/[0.05] select-none pointer-events-none">
                {letter}
              </span>

              {/* Number */}


              {/* Icon */}


              {/* Letter badge */}
              <div className="flex items-center gap-3 mb-4">

                <span className="text-4xl font-black text-white leading-none">
                  {letter}
                </span>

                <div className="h-px flex-1 bg-white/10" />
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center  group-hover:bg-white/20 transition-all duration-300">

                  <Icon className="text-white" size={20} />

                </div>
              </div>

              <h3 className="text-base font-bold text-white mb-4 leading-snug">
                {title}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                {description}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Bottom connector strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >

          {dareData.map(({ letter, title }, i) => (

            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-3"
            >

              <span className="text-2xl font-black text-white">
                {letter}
              </span>

              <span className="text-[10px] text-white/60 uppercase tracking-widest hidden lg:block">
                {title}
              </span>

            </div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}
