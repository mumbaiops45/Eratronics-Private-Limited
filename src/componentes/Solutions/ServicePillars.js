"use client";

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
  },
];

export default function ServicePillars() {
  return (
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