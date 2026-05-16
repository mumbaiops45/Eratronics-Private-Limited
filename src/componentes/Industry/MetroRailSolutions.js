"use client";

import { motion } from "framer-motion";

const metroRailData = {
  smallText: "Metro Rail",

  intro:
    "We deliver reliable and secure communication systems that support safe, efficient, and uninterrupted metro rail operations. Our solutions are designed to enable real-time coordination, passenger safety, and seamless connectivity across stations, tunnels, depots, and control centers—ensuring high availability in demanding urban transit environments.",

  solutions: [
    {
      title: "Station Systems",

      paragraphs: [
        "At station level, we provide integrated communication and surveillance systems that enhance passenger safety and operational control. Our solutions include CCTV, Public Address (PA) systems, Passenger Information Systems (PIS), and structured network infrastructure.",

        "Designed for high footfall environments, these systems enable real-time monitoring, effective crowd management, and clear communication during both normal and emergency conditions.",
      ],
    },

    {
      title: "Line & Tunnel Systems",

      paragraphs: [
        "For trackside and tunnel environments, we deploy robust communication networks built on Optical Fiber Cable (OFC) backbones, ensuring high-speed, low-latency connectivity across the corridor.",

        "Our solutions include OFC-based intrusion detection systems for trackside security and Distributed Temperature Sensing (DTS) applications for tunnel safety, enabling early detection of abnormal conditions such as unauthorized access or fire incidents.",

        "We also implement leaky coaxial and wireless communication systems to ensure continuous connectivity between moving trains and control centers, even in confined underground environments.",
      ],
    },

    {
      title: "Control & Operations",

      paragraphs: [
        "At the core of metro operations, we enable centralized monitoring and control through integrated communication platforms. Our solutions support Operations Control Centers (OCC), enabling real-time coordination across stations, trains, and field assets.",

        "We provide OFC-based communication backbones for seamless integration with signaling systems, SCADA, and network management platforms—ensuring efficient operations, rapid incident response, and overall system reliability.",
      ],
    },

    {
      title: "Depot & Support Infrastructure",

      paragraphs: [
        "For depots and maintenance facilities, we deliver communication systems that support operational efficiency, safety, and asset management. This includes surveillance systems, internal communication networks, and connectivity infrastructure aligned with the mainline network.",

        "Our solutions ensure seamless integration between depot operations and the broader metro ecosystem, enabling coordinated functioning and efficient maintenance workflows.",
      ],
    },
  ],
};

export default function MetroRailSolutions() {
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
            {metroRailData.smallText}
          </p>

          {/* intro */}
          <p className="text-gray-600 text-base leading-relaxed">
            {metroRailData.intro}
          </p>

        </motion.div>

        {/* ── SOLUTIONS ── */}
        <div className="space-y-20">

          {metroRailData.solutions.map((item, index) => (

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