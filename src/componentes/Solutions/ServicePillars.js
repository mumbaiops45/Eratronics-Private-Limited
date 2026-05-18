"use client";

<<<<<<< HEAD
import { motion } from "framer-motion";
import { FiShield, FiActivity, FiRefreshCw, FiCheck } from "react-icons/fi";

const pillars = [
  {
    letter: "A",
    title: "Assure",
    icon: FiShield,
    description:
      "Guaranteeing design integrity, regulatory compliance, and baseline cybersecurity across all deployed systems.",
    points: ["Design integrity", "Compliance & safety", "Cybersecurity baseline"],
  },
  {
    letter: "S",
    title: "Sustain",
    icon: FiActivity,
    description:
      "Keeping systems at peak performance through continuous monitoring, managed maintenance, and SLA-governed operations.",
    points: ["24×7 monitoring", "Maintenance & spares", "SLA governance"],
  },
  {
    letter: "E",
    title: "Evolve",
    icon: FiRefreshCw,
    description:
      "Ensuring long-term relevance through planned upgrades, capacity scaling, and technology refresh programs.",
    points: ["Upgrades", "Capacity scaling", "Technology refresh"],
=======
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiShield,
  FiActivity,
  FiRefreshCw,
  FiCheck,
} from "react-icons/fi";

const pillars = [
  {
    title: "Assure",
    icon: FiShield,
    points: [
      "Design integrity",
      "Compliance & safety",
      "Cybersecurity baseline",
    ],
  },
  {
    title: "Sustain",
    icon: FiActivity,
    points: [
      "24×7 monitoring",
      "Maintenance & spares",
      "SLA governance",
    ],
  },
  {
    title: "Evolve",
    icon: FiRefreshCw,
    points: [
      "Upgrades",
      "Capacity scaling",
      "Technology refresh",
    ],
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
  },
];

export default function ServicePillars() {
  return (
<<<<<<< HEAD
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-(--primary)" />
              <span className="text-(--primary) text-xs font-semibold tracking-[4px] uppercase">
                Service Framework
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
              Positioned Around{" "}
              <span className="text-(--primary)">3 Core Pillars</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm leading-relaxed max-w-sm lg:text-right"
          >
            Our lifecycle support strategy is structured around three pillars focused on
            reliability, operational continuity, and long-term infrastructure growth.
          </motion.p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map(({ letter, title, icon: Icon, description, points }, i) => (
            <motion.div
              key={letter}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-gray-100 bg-white p-8 hover:border-(--primary)/30 hover:shadow-xl hover:shadow-(--primary)/5 transition-all duration-500 overflow-hidden"
            >
              {/* Top accent */}
              <span className="absolute top-0 left-0 w-0 h-0.75 bg-(--primary) group-hover:w-full transition-all duration-700 ease-out" />

              {/* Letter watermark */}
              <span className="absolute bottom-4 right-6 text-[100px] font-black text-gray-50 leading-none select-none pointer-events-none group-hover:text-(--primary)/5 transition-colors duration-500">
                {letter}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-(--primary)/8 border border-(--primary)/15 flex items-center justify-center mb-6 group-hover:bg-(--primary) group-hover:border-(--primary) transition-all duration-300">
                <Icon className="text-(--primary) group-hover:text-white transition-colors duration-300" size={22} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-(--primary) transition-colors duration-300">
                {title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {description}
              </p>

              {/* Points */}
              <div className="flex flex-col gap-2.5">
                {points.map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-(--primary)/8 border border-(--primary)/15 flex items-center justify-center shrink-0 group-hover:bg-(--primary) group-hover:border-(--primary) transition-all duration-300">
                      <FiCheck className="text-(--primary) group-hover:text-white transition-colors duration-300" size={10} />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
=======
    <section className="py-24 bg-[var(--primary)]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT IMAGE ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div
              className="overflow-hidden"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 88%, 90% 100%, 0 100%)",
                borderRadius: "20px",
              }}
            >
              <Image
                src="/solution/new.png"
                alt="Service Pillars"
                width={900}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

          </motion.div>

          {/* ── RIGHT CONTENT ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* small heading */}
            {/* <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[var(--primary)]" />

              <span className="text-xs font-semibold tracking-[4px] uppercase text-[var(--primary)]">
                Service Framework
              </span>
            </div> */}

            {/* clip heading */}
            <div
              className="inline-block bg-[var(--primary)] px-8 py-5 mb-4"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 92% 100%, 0 100%)",
              }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white pr-8">
               Positions around 3 pillars
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our lifecycle support strategy is structured around three
              key pillars focused on reliability, operational continuity,
              and long-term infrastructure growth.
            </p>

            {/* pillars */}
            <div className="space-y-2">

              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="p-2  hover:shadow-lg transition-all duration-500"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 90%, 96% 100%, 0 100%)",
                    }}
                  >

                    <div className="flex items-start gap-5">

                      {/* icon */}
                      <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                        <Icon
                          className="text-[var(--primary)]"
                          size={24}
                        />

                        
                      </div>

                      {/* content */}
                      <div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {pillar.title}
                        </h3>

                        <div className="">

                          {pillar.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-center gap-3"
                            >
                              <FiCheck
                                className="text-[var(--primary)]"
                                size={16}
                              />

                              <p className="text-gray-600">
                                {point}
                              </p>
                            </div>
                          ))}

                        </div>

                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
