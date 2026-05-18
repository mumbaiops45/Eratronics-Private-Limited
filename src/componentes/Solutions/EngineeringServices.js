<<<<<<< HEAD
﻿"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiActivity, FiLayers, FiCpu, FiTrendingUp,
  FiArrowRight, FiPhoneCall,
=======
"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiLayers,
  FiCpu,
  FiTrendingUp,
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
} from "react-icons/fi";

const engineeringServices = [
  {
<<<<<<< HEAD
    number: "01",
=======
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
    title: "Technical Consulting Services",
    icon: FiActivity,
    description:
      "Telecommunication networks across Oil & Gas, Power, Transportation, and Defence sectors support mission-critical operations where system reliability and availability are essential. Eratronics develops highly resilient telecom architectures and delivers integrated solution frameworks including technology evaluation, design alternatives, and execution methodologies aligned with operational and business objectives.",
<<<<<<< HEAD
    tags: ["Architecture Design", "Technology Evaluation", "Risk Assessment"],
  },
  {
    number: "02",
=======
  },
  {
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
    title: "FEED Engineering Services",
    icon: FiLayers,
    description:
      "Eratronics provides specialized Front-End Engineering Design (FEED) services for EPCs, PMCs, and end-users. Our engineering team prepares complete FEED packages covering network sizing, architecture definition, technology evaluations, and detailed technical specifications to create implementation-ready frameworks that reduce execution risks.",
<<<<<<< HEAD
    tags: ["Network Sizing", "Architecture Definition", "Technical Specifications"],
  },
  {
    number: "03",
=======
  },
  {
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
    title: "Technology Assessment Services",
    icon: FiCpu,
    description:
      "We help customers evaluate emerging technologies and products before deployment through structured assessments including lab demonstrations, pilot implementations, and interoperability testing. Each evaluation program is tailored collaboratively to validate compatibility, operational suitability, and long-term performance.",
<<<<<<< HEAD
    tags: ["Lab Demonstrations", "Pilot Implementations", "Interoperability Testing"],
  },
  {
    number: "04",
=======
  },
  {
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
    title: "Gap Analysis Services",
    icon: FiTrendingUp,
    description:
      "Our gap analysis services assess existing telecom and voice/video infrastructure against current and future operational requirements. We deliver strategic upgrade road maps, optimization recommendations, and integration strategies that maximize infrastructure value while enabling future scalability and innovation.",
<<<<<<< HEAD
    tags: ["Infrastructure Assessment", "Upgrade Roadmaps", "Scalability Planning"],
  },
];

const capabilities = [
  "10+ years of domain expertise",
  "Collaborative execution models",
  "Disciplined project management",
  "Delivery agility at scale",
];

export default function EngineeringServices() {
  return (
    <>
      {/* -- INTRO -- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-7">
                <span className="block w-10 h-px bg-(--primary)" />
                <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
                  Engineering Excellence
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Engineering Services Built for{" "}
                <span className="text-[var(--primary)]">Mission-Critical Infrastructure</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Over the past decade, Eratronics has developed deep technical expertise in
                delivering telecom engineering solutions for mission-critical industries.
                Through collaborative execution models, we operate as a seamless extension
                of our customers' teams — combining engineering depth with delivery agility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-(--primary) rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
              <div className="relative z-10">
                <span className="block text-white/50 text-xs font-semibold tracking-[3px] uppercase mb-6">
                  Our Capabilities
                </span>
                <div className="flex flex-col gap-4">
                  {capabilities.map((cap, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--seco)] shrink-0" />
                      <span className="text-sm text-white/80 font-medium">{cap}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -- SERVICES -- */}
      <section className="bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-16"
          >
            <span className="block w-10 h-px bg-(--primary)" />
            <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
              Service Areas
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {engineeringServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-10 hover:border-(--primary)/25 hover:shadow-lg hover:shadow-(--primary)/5 transition-all duration-400 overflow-hidden"
                >
                  <span className="absolute top-0 left-0 w-0 h-[3px] bg-(--primary) group-hover:w-full transition-all duration-600 ease-out" />
                  <span className="absolute -bottom-4 -right-2 text-[110px] font-black leading-none text-gray-50 select-none pointer-events-none">
                    {svc.number}
                  </span>

                  {/* Icon + Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-(--primary)/8 border border-(--primary)/15 flex items-center justify-center group-hover:bg-(--primary) group-hover:border-(--primary) transition-all duration-300">
                      <Icon className="text-[var(--primary)] group-hover:text-white transition-colors duration-300" size={20} />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 tracking-[3px] uppercase">
                      {svc.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-[var(--primary)] transition-colors duration-300">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed mb-7">
                    {svc.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold text-[var(--primary)]/70 bg-(--primary)/6 border border-(--primary)/15 px-3 py-1 rounded-full uppercase tracking-[2px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
=======
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

>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
                </motion.div>
              );
            })}
          </div>
        </div>
<<<<<<< HEAD

        {/* CTA */}
        <div className="relative mx-6 lg:mx-16 my-16 rounded-2xl bg-(--primary) px-10 py-14 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Need Expert Engineering Support?
              </h3>
              <p className="text-white/60 text-sm max-w-lg">
                Our engineering team is ready to consult on your telecom architecture, FEED package, or infrastructure gap analysis.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-300">
                <FiPhoneCall size={15} /> Get in Touch
              </Link>
              <Link href="/solutions" className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300">
                All Solutions <FiArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
=======
      </section>
    </>
  );
}
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
