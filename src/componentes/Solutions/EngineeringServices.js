"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiLayers,
  FiCpu,
  FiTrendingUp,
} from "react-icons/fi";

const engineeringServices = [
  {
    title: "Technical Consulting Services",
    icon: FiActivity,
    description:
      "Telecommunication networks across Oil & Gas, Power, Transportation, and Defence sectors support mission-critical operations where system reliability and availability are essential. Eratronics develops highly resilient telecom architectures and delivers integrated solution frameworks including technology evaluation, design alternatives, and execution methodologies aligned with operational and business objectives.",
  },
  {
    title: "FEED Engineering Services",
    icon: FiLayers,
    description:
      "Eratronics provides specialized Front-End Engineering Design (FEED) services for EPCs, PMCs, and end-users. Our engineering team prepares complete FEED packages covering network sizing, architecture definition, technology evaluations, and detailed technical specifications to create implementation-ready frameworks that reduce execution risks.",
  },
  {
    title: "Technology Assessment Services",
    icon: FiCpu,
    description:
      "We help customers evaluate emerging technologies and products before deployment through structured assessments including lab demonstrations, pilot implementations, and interoperability testing. Each evaluation program is tailored collaboratively to validate compatibility, operational suitability, and long-term performance.",
  },
  {
    title: "Gap Analysis Services",
    icon: FiTrendingUp,
    description:
      "Our gap analysis services assess existing telecom and voice/video infrastructure against current and future operational requirements. We deliver strategic upgrade road maps, optimization recommendations, and integration strategies that maximize infrastructure value while enabling future scalability and innovation.",
  },
];

export default function EngineeringServices() {
  return (
    <>
      {/* ── INTRO ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.15 }}
            className="max-w-5xl"
          >

            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-[var(--primary)]" />

              <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
                Engineering Excellence
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Engineering Services Built for{" "}
              <span className="text-[var(--primary)]">
                Mission-Critical Infrastructure
              </span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed">
              Over the past decade, Eratronics has developed deep technical
              expertise in delivering telecom engineering solutions for
              mission-critical industries. Through collaborative execution
              models, we operate as a seamless extension of our customers’
              teams, combining engineering depth with delivery agility backed
              by disciplined project management and reliable execution.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="pb-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-4 md:gap-y-6">

            {engineeringServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="group flex flex-col h-full overflow-hidden rounded-b-[18px] border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500"
                >

                  {/* ── HEADER ── */}
                  <div className="relative flex min-h-[145px] overflow-hidden bg-[var(--primary)] px-7 pt-8 pb-7">

                    {/* bg effect */}
                    <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-150" />

                    <div className="relative z-10 flex w-full items-start justify-between gap-6">

                      <div className="flex h-full flex-col justify-between">

                        <span className="mb-4 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[3px] text-white/70">
                          Engineering Services
                        </span>

                        <h3 className="max-w-[360px] text-2xl font-bold leading-snug text-white">
                          {service.title}
                        </h3>

                      </div>

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                        <Icon className="text-white" size={24} />
                      </div>

                    </div>
                  </div>

                  {/* ── BODY ── */}
                  <div className="flex-1 px-7 pt-7 pb-8 bg-[linear-gradient(to_bottom,_#f5f5f4_0%,_rgba(255,255,255,0)_100%)]">

                    <p className="text-[15px] leading-relaxed text-gray-600">
                      {service.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}