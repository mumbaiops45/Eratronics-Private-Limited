"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiShield,
} from "react-icons/fi";

const powerSectorData = {
  smallText: "Power Sector",

  heading:
    "Reliable Telecom Solutions for Modern Power Infrastructure",

  intro:
    "We deliver reliable and secure communication systems that support generation, transmission, and distribution networks across the power sector. Our solutions are designed to enable real-time monitoring, grid stability, and efficient energy management, while ensuring high availability and resilience for critical infrastructure.",

  solutions: [
    {
      title: "Generation Solutions",

      image: "/Power Sector/Generation Solutions.png",

      paragraphs: [
        "In power generation facilities, uninterrupted communication is essential for safe and efficient plant operations. Eratronics provides integrated telecom and surveillance systems that support control room operations, enabling seamless coordination across plant units.",

        "Our solutions include high-reliability communication backbones, CCTV, PA/GA systems, and network infrastructure designed to operate in demanding industrial environments. With built-in redundancy and backup power integration, we ensure continuous operation even under adverse conditions.",
      ],

      points: [
        "Integrated plant communication",
        "Industrial surveillance systems",
        "PA/GA & control room integration",
        "Redundant communication architecture",
      ],
    },

    {
      title: "Transmission Solutions",

      image: "/Power Sector/Transmission Solutions.png",

      paragraphs: [
        "For transmission networks, we deploy robust communication systems that form the backbone of grid operations. Our expertise includes optical fiber networks such as OPGW/ADSS, along with SDH/MPLS-based communication systems to support SCADA, teleprotection, and load dispatch functions.",

        "These systems are engineered for ultra-high availability and low latency, ensuring reliable data exchange between substations and control centers, which is critical for grid stability and fault management.",
      ],

      points: [
        "OPGW & ADSS fiber networks",
        "SCADA & teleprotection support",
        "Ultra-low latency communication",
        "Substation connectivity systems",
      ],
    },
  ],
};

export default function PowerSectorSolutions() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">

        {/* -- TOP SECTION -- */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="max-w-4xl mb-24"
        >

          {/* Small text */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-[var(--primary)]" />
            <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
              {powerSectorData.smallText}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            {powerSectorData.heading}
          </h2>

          {/* Intro */}
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-3xl">
            {powerSectorData.intro}
          </p>

        </motion.div>

        {/* -- SOLUTIONS -- */}
        <div className="space-y-28">

          {powerSectorData.solutions.map((item, index) => {

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* Content */}
                <div>

                  {/* Tag */}
                  <div className="inline-flex items-center gap-2 bg-[var(--primary)]/8 border border-[var(--primary)]/15 px-4 py-2 rounded-full mb-6">
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                    <span className="text-[11px] font-semibold tracking-[3px] uppercase text-[var(--primary)]">
                      Power Infrastructure
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {item.title}
                  </h3>

                  {/* Paragraphs */}
                  <div className="space-y-5 mb-8">
                    {item.paragraphs.map((para, i) => (
                      <p
                        key={i}
                        className="text-gray-500 leading-relaxed text-sm lg:text-base"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.points.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />

                        <span className="text-sm text-gray-600 leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="relative"
                >

                  <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 h-[420px]">

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />

                    {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    {/* Floating top badge */}
                    <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
                      <FiCpu className="text-white" size={14} />
                      <span className="text-white text-xs font-medium">
                        Smart Communication
                      </span>
                    </div>

                    {/* Floating bottom badge */}
                    <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
                      <FiShield className="text-white" size={14} />
                      <span className="text-white text-xs font-medium">
                        Mission Critical
                      </span>
                    </div>

                    {/* Bottom title */}
                    <div className="absolute bottom-8 left-8 z-20">
                      <h4 className="text-white text-2xl lg:text-3xl font-bold">
                        {item.title}
                      </h4>
                    </div>

                  </div>

                </motion.div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}