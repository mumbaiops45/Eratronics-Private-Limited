"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiMap,
  FiWifi,
  FiMonitor,
  FiTool,
  FiShield,
  FiCpu,
} from "react-icons/fi";

const metroRailData = {
  smallText: "Metro Rail",

  heading:
    "Advanced Communication Infrastructure for Modern Metro Rail Networks",

  intro:
    "We deliver reliable and secure communication systems that support safe, efficient, and uninterrupted metro rail operations. Our solutions are engineered to enable real-time coordination, passenger safety, and seamless connectivity across stations, tunnels, depots, and control centers.",

  solutions: [
    {
      title: "Station Systems",

      image: "/Metro Rail/Station Systems.png",

      paragraphs: [
        "At station level, we provide integrated communication and surveillance systems that enhance passenger safety and operational control. Our solutions include CCTV, Public Address (PA) systems, Passenger Information Systems (PIS), and structured network infrastructure.",

        "Designed for high footfall environments, these systems enable real-time monitoring, effective crowd management, and clear communication during both normal and emergency conditions.",
      ],

      points: [
        "Passenger Information Systems",
        "Public Address integration",
        "Station surveillance systems",
        "Real-time operational monitoring",
      ],
    },

    {
      title: "Line & Tunnel Systems",

      image: "/Metro Rail/Line & Tunnel Systems.png",

      paragraphs: [
        "For trackside and tunnel environments, we deploy robust communication networks built on Optical Fiber Cable (OFC) backbones, ensuring high-speed, low-latency connectivity across the corridor.",

        "Our solutions include OFC-based intrusion detection systems for trackside security and Distributed Temperature Sensing (DTS) applications for tunnel safety.",

        "We also implement leaky coaxial and wireless communication systems to ensure continuous connectivity between moving trains and control centers, even in confined underground environments.",
      ],

      points: [
        "OFC backbone communication",
        "Tunnel safety monitoring",
        "Intrusion detection systems",
        "Leaky coaxial communication",
      ],
    },

    {
      title: "Control & Operations",

      image: "/Metro Rail/Control & Operations.jpg",

      paragraphs: [
        "At the core of metro operations, we enable centralized monitoring and control through integrated communication platforms. Our solutions support Operations Control Centers (OCC), enabling real-time coordination across stations, trains, and field assets.",

        "We provide OFC-based communication backbones for seamless integration with signaling systems, SCADA, and network management platforms ensuring efficient operations and rapid incident response.",
      ],

      points: [
        "Operations Control Center (OCC)",
        "SCADA integration",
        "Centralized network management",
        "Real-time operational coordination",
      ],
    },

    {
      title: "Depot & Support Infrastructure",

      image: "/Metro Rail/Depot & Support Infrastructure.jpg",

      paragraphs: [
        "For depots and maintenance facilities, we deliver communication systems that support operational efficiency, safety, and asset management. This includes surveillance systems, internal communication networks, and connectivity infrastructure aligned with the mainline network.",

        "Our solutions ensure seamless integration between depot operations and the broader metro ecosystem, enabling coordinated functioning and efficient maintenance workflows.",
      ],

      points: [
        "Depot surveillance systems",
        "Internal communication networks",
        "Maintenance connectivity",
        "Integrated metro ecosystem",
      ],
    },
  ],
};

export default function MetroRailSolutions() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-[120px] rounded-full pointer-events-none" />

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
              {metroRailData.smallText}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            {metroRailData.heading}
          </h2>

          {/* Intro */}
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-3xl">
            {metroRailData.intro}
          </p>

        </motion.div>

        {/* -- SOLUTIONS -- */}
        <div className="space-y-28">

          {metroRailData.solutions.map((item, index) => {

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
                  <div className="inline-flex items-center gap-2 bg-[var(--secondary)]/10 border border-[var(--primary)]/15 px-4 py-2 rounded-full mb-6">
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                    <span className="text-[11px] font-semibold tracking-[3px] uppercase text-[var(--primary)]">
                      Urban Transit Infrastructure
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10" />

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
                        Smart Connectivity
                      </span>
                    </div>

                    {/* Floating bottom badge */}
                    <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
                      <FiShield className="text-white" size={14} />
                      <span className="text-white text-xs font-medium">
                        Secure Operations
                      </span>
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-8 left-8 z-20">
                      <h4 className="text-white text-2xl font-bold">
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