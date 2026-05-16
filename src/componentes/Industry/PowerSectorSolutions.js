"use client";

import { motion } from "framer-motion";

const powerSectorData = {
  smallText: "Power Sector",

  intro:
    "We deliver reliable and secure communication systems that support generation, transmission, and distribution networks across the power sector. Our solutions are designed to enable real-time monitoring, grid stability, and efficient energy management, while ensuring high availability and resilience for critical infrastructure.",

  solutions: [
    {
      title: "Generation Solutions",

      paragraphs: [
        "In power generation facilities, uninterrupted communication is essential for safe and efficient plant operations. Eratronics provides integrated telecom and surveillance systems that support control room operations, enabling seamless coordination across plant units.",

        "Our solutions include high-reliability communication backbones, CCTV, PA/GA systems, and network infrastructure designed to operate in demanding industrial environments. With built-in redundancy and backup power integration, we ensure continuous operation even under adverse conditions.",
      ],
    },

    {
      title: "Transmission Solutions",

      paragraphs: [
        "For transmission networks, we deploy robust communication systems that form the backbone of grid operations. Our expertise includes optical fiber networks such as OPGW/ADSS, along with SDH/MPLS-based communication systems to support SCADA, teleprotection, and load dispatch functions.",

        "These systems are engineered for ultra-high availability and low latency, ensuring reliable data exchange between substations and control centers, which is critical for grid stability and fault management.",
      ],
    },
  ],
};

export default function PowerSectorSolutions() {
  return (
    <section className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* ── TOP SECTION ── */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.15 }}
          className="mb-20"
        >

          {/* small text */}
          <p className="text-[var(--primary)] text-sm font-semibold tracking-[4px] uppercase mb-5">
            {powerSectorData.smallText}
          </p>

          {/* intro */}
          <p className="text-gray-600 text-base leading-relaxed">
            {powerSectorData.intro}
          </p>

        </motion.div>

        {/* ── SOLUTIONS ── */}
        <div className="space-y-20">

          {powerSectorData.solutions.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.1 }}
            >

              {/* heading */}
              <div className="inline-block border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--primary)]/20 to-transparent px-4 py-3 mb-6">

                <h3 className="text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>

              </div>

              {/* paragraphs */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                viewport={{ once: true }}
                className="space-y-6"
              >

                {item.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-600 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}