"use client";

import { motion } from "framer-motion";
<<<<<<< HEAD
import {
  FiLayers,
  FiGlobe,
  FiShield,
  FiSettings,
} from "react-icons/fi";
=======
import { FiLayers, FiGlobe, FiShield, FiSettings } from "react-icons/fi";
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187

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
<<<<<<< HEAD
      "We deliver holistic solutions that go far beyond the conventional 'fit it and forget it' approach — through the full system lifecycle.",
=======
      'It is essential for us to deliver holistic solutions that go far beyond the conventional "fit it and forget it" approach.',
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
  },
];

export default function DeliveryPhilosophy() {
  return (
<<<<<<< HEAD
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

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
              The{" "}
              <span className="text-white">
                DARE
              </span>{" "}
              Delivery Model
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
              className="group relative bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 hover:bg-white/15 transition-all duration-500 overflow-hidden"
            >

              {/* Top hover accent */}
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-700 ease-out" />

              {/* Large letter watermark */}
              <span className="absolute -bottom-4 -right-2 text-[120px] font-black leading-none text-white/[0.05] select-none pointer-events-none">
                {letter}
              </span>

              {/* Number */}
            

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">

                <Icon className="text-white" size={20} />

              </div>

              {/* Letter badge */}
              <div className="flex items-center gap-3 mb-4">

                <span className="text-4xl font-black text-white leading-none">
                  {letter}
                </span>

                <div className="h-px flex-1 bg-white/10" />

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
=======
    <section className="py-24 bg-gray-50">
      <div className=" mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 px-6 lg:px-16"
        >
          <div className="flex items-center gap-3 mb-4">
       
            <span className="px-4 py-2 rounded-full bg-[var(--primary)]/20 text- font-semibold tracking-[4px] uppercase text-sm">
              Our Framework
            </span>
          </div>
          <h2 className="text-[var(--primary)] ">
            Quality Commitment & Delivery Philosophy
          </h2>
          <p className="leading-relaxed text-gray-600  mt-4">
            Our project delivery framework is built on the <strong>DARE Model</strong>, ensuring quality, reliability, and long-term system performance.
          </p>
        </motion.div>

        {/* DARE CARDS */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-16">
            <div className="absolute top-1/3 -bottom-16 right-0 left-0 bg-[var(--primary)]"/>
          {dareData.map(({ letter, title, Icon, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group z-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-6xl font-black leading-none select-none text-(--primary)/10">
                  {letter}
                </span>
                <div className="w-10 h-10 rounded-lg bg-(--primary)/10 flex items-center justify-center group-hover:bg-(--primary) transition-colors duration-300">
                  <Icon size={18} className="text-(--primary) group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h4 className="font-bold text-[#0B1D3A] mb-3">{title}</h4>
              <p className="text-sm leading-relaxed text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
