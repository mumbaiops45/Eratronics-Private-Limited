"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiActivity, FiLayers, FiCpu, FiTrendingUp,
  FiArrowRight, FiPhoneCall,
} from "react-icons/fi";

const engineeringServices = [
  {
    number: "01",
    title: "Technical Consulting Services",
    icon: FiActivity,
    description:
      "Telecommunication networks across Oil & Gas, Power, Transportation, and Defence sectors support mission-critical operations, where system reliability and availability are non-negotiable. The foundation for achieving this lies in robust architecture design during the planning phase. Eratronics leverages its deep domain expertise to develop telecom system architectures that are inherently resilient and engineered for high availability. Our consulting services focus on delivering comprehensive solution frameworks for integrated telecommunications and surveillance systems. This includes detailed design alternatives, technology and product evaluations, and well-defined project execution methodologies ensuring optimal alignment with operational and business objectives.",
    tags: ["Architecture Design", "Technology Evaluation", "Risk Assessment"],
  },
  {
    number: "02",
    title: "FEED Engineering Services",
    icon: FiLayers,
    description:
      "Eratronics offers specialized Front-End Engineering Design (FEED) services to support both end-users and project stakeholders such as EPCs and PMCs. These services form a critical input for turnkey project execution and detailed engineering phases. Our engineering team develops complete FEED packages covering telecommunications and associated systems. This includes network sizing and scoping, evaluation of technology alternatives, architecture definition tailored to client requirements, and preparation of detailed technical specifications. The outcome is a structured, implementation-ready design framework that minimizes project risks and enhances execution efficiency.",
    tags: ["Network Sizing", "Architecture Definition", "Technical Specifications"],
  },
  {
    number: "03",
    title: "Technology Assessment Services",
    icon: FiCpu,
    description:
      "Eratronics supports customers in evaluating emerging technologies and products prior to full-scale deployment, enabling informed and risk-mitigated decision-making. In scenarios where adoption is constrained by unfamiliarity or concerns around integration with existing systems, we conduct structured assessments under realistic operating conditions. These may include controlled lab demonstrations, pilot deployments, or interoperability testing with live systems. Each evaluation program is developed in close collaboration with the customer, ensuring that performance, compatibility, and operational suitability are thoroughly validated before investment decisions are made.",
    tags: ["Lab Demonstrations", "Pilot Implementations", "Interoperability Testing"],
  },
  {
    number: "04",
    title: "Gap Analysis Services",
    icon: FiTrendingUp,
    description:
      "Eratronics provides comprehensive gap analysis services to assess existing telecom and voice/video infrastructure against current and future operational requirements. Our approach involves an in-depth review of existing systems, aligned with functional needs and evolving technology standards. Based on this assessment, we deliver a detailed strategic road map outlining upgrade paths, optimization opportunities, and expansion strategies. With a strong focus on innovation and practicality, we identify opportunities to enhance network capabilities through optimized system design, technology upgrades, and efficient integration ensuring that existing infrastructure continues to deliver maximum value.",
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
  <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
    Mission-Critical Infrastructure
  </span>
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
                      className="flex items-center gap-3 "
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
                  className="group relative bg-[var(--secondary)]/5 rounded-2xl border border-gray-100 p-10 hover:border-(--primary)/25 hover:shadow-lg hover:shadow-(--primary)/5 transition-all duration-400 overflow-hidden"
                >
                  <span className="absolute top-0 left-0 w-0 h-[3px] bg-(--primary) group-hover:w-full transition-all duration-600 ease-out" />
                  <span className="absolute -bottom-4 -right-2 text-[110px] font-black leading-none text-gray-50 select-none pointer-events-none">
                    {svc.number}
                  </span>

                  {/* Icon + Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-(--primary)/8 border border-(--primary)/15 flex items-center justify-center group-hover:bg-(--primary) group-hover:border-(--primary) transition-all duration-300">
                      <Icon className="text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors duration-300" size={20} />
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
                        className="text-[10px] font-semibold text-[var(--primary)]/70 bg-[var(--secondary)]/30 border border-(--primary)/15 px-3 py-1 rounded-full uppercase tracking-[2px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

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
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[var(--secondary)] text-[var(--primary)] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-300">
                <FiPhoneCall size={15} /> Get in Touch
              </Link>
              {/* <Link href="/solutions" className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300">
                All Solutions <FiArrowRight size={13} />
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
