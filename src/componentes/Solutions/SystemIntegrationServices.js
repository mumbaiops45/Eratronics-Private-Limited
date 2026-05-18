<<<<<<< HEAD
﻿"use client";

import Link from "next/link";
=======
"use client";

>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
import { motion } from "framer-motion";
import {
  FiShoppingBag,
  FiServer,
  FiCheckSquare,
  FiPackage,
  FiSettings,
<<<<<<< HEAD
  FiArrowRight,
  FiPhoneCall,
=======
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
} from "react-icons/fi";

const integrationServices = [
  {
<<<<<<< HEAD
    number: "01",
    tag: "Procurement Phase",
    title: "Third-Party Procurement",
=======
    title: "Third-Party Procurement",
    tag: "Procurement Services",
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
    icon: FiShoppingBag,
    description:
      "For telecom projects, core network elements such as optical multiplexers, SDH, MPLS, DWDM, and Ethernet switches are typically supplied by the OEM or main contractor. Eratronics undertakes end-to-end procurement of all associated third-party components including cabinets, power and data cables, MCBs, power supplies, patch panels, and related accessories in line with the approved Bill of Materials.",
  },
  {
<<<<<<< HEAD
    number: "02",
    tag: "Integration Phase",
    title: "Cabinet Assembly & Integration",
    icon: FiServer,
    description:
      "Complete cabinet integration is executed in accordance with approved engineering drawings, including structural layouts, cabling schematics, power distribution, and network architecture diagrams.",
    points: [
      "Structured routing and termination of power and signal cables",
      "Installation of active and passive components",
      "Labelling and identification as per standards",
      "Mechanical works including drilling and gland plate installation",
    ],
  },
  {
    number: "03",
    tag: "Validation Phase",
    title: "Factory Acceptance Testing (FAT)",
=======
  title: "Cabinet Assembly & Integration",
  tag: "Integration Services",
  icon: FiServer,
  description:
    "Complete cabinet integration is executed in accordance with approved engineering drawings, including structural layouts, cabling schematics, power distribution, and network architecture diagrams.",
    
  scopeTitle: "The scope covers:",

  points: [
    "Structured routing and termination of power and signal cables",
    "Installation of active and passive components",
    "Labelling and identification as per standards",
    "Mechanical works including drilling and gland plate installation",
  ],
},
  {
    title: "Factory Acceptance Testing (FAT)",
    tag: "Validation Services",
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
    icon: FiCheckSquare,
    description:
      "Post-integration, each system undergoes rigorous validation through comprehensive pre-dispatch checks at our integration facility. Factory Acceptance Testing is conducted in the presence of the customer or their representatives to verify system performance, functionality, and compliance with project specifications.",
  },
  {
<<<<<<< HEAD
    number: "04",
    tag: "Dispatch Phase",
    title: "Packing & Dispatch",
    icon: FiPackage,
    description:
      "Upon receipt of dispatch clearance from the client, integrated systems are carefully dismantled where required and packed in accordance with export-grade standards to ensure safe transit. Standard scope includes handling up to loading of materials at the integration facility.",
  },
  {
    number: "05",
    tag: "Extended Scope",
    title: "Additional Services",
=======
    title: "Packing & Dispatch",
    tag: "Dispatch Services",
    icon: FiPackage,
    description:
      "Upon receipt of dispatch clearance from the client, integrated systems are carefully dismantled where required and packed in accordance with export-grade standards to ensure safe transit. Our standard scope includes handling up to loading of materials at the integration facility.",
  },
  {
    title: "Additional Services",
    tag: "Extended Scope",
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
    icon: FiSettings,
    description:
      "Eratronics can also provide end-to-end logistics support including transit insurance, transportation to site, unloading, and complete on-site installation and commissioning services under a separate project scope.",
  },
];

<<<<<<< HEAD
const highlights = [
  { value: "100%", label: "Customer Witnessed FAT" },
  { value: "ISO", label: "Grade Integration" },
  { value: "24×7", label: "Power Backup Facility" },
  { value: "E2E", label: "Project Execution" },
];

export default function SystemIntegrationServices() {
  return (
    <>
      {/* -- HERO INTRO -- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-7">
                <span className="block w-10 h-px bg-[var(--primary)]" />
                <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
                  System Integration Services
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Integrated Telecom Solutions with{" "}
                <span className="text-[var(--primary)]">
                  Precision Execution
                </span>
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed">
                Eratronics delivers complete telecom integration services for
                mission-critical infrastructure projects. From procurement and
                cabinet integration to FAT validation and deployment support,
                we ensure every subsystem is engineered, integrated, tested,
                and delivered with complete operational reliability.
              </p>
            </motion.div>

            {/* Highlight Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden shrink-0"
            >
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-white px-8 py-6 text-center"
                >
                  <p className="text-3xl font-black text-[var(--primary)] mb-1">
                    {item.value}
                  </p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-[2px] font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* -- SERVICE CARDS -- */}
      <section className="pb-0 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-16"
          >
            <span className="block w-10 h-px bg-[var(--primary)]" />
            <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
              Integration Workflow
            </span>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {integrationServices.map((svc, i) => {
              const Icon = svc.icon;

              return (
                <motion.div
                  key={svc.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-8 hover:border-[var(--primary)]/25 hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all duration-400 overflow-hidden"
                >
                  {/* Hover Accent */}
                  <span className="absolute top-0 left-0 w-0 h-[3px] bg-[var(--primary)] group-hover:w-full transition-all duration-600 ease-out" />

                  {/* Watermark */}
                  <span className="absolute -bottom-3 -right-2 text-[100px] font-black leading-none text-gray-50 select-none pointer-events-none">
                    {svc.number}
                  </span>

                  {/* Header */}
                  <div className="flex items-start gap-5 mb-5">

                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--primary)]/8 border border-[var(--primary)]/15 flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] transition-all duration-300">
                      <Icon
                        className="text-[var(--primary)] group-hover:text-white transition-colors duration-300"
                        size={18}
                      />
                    </div>

                    <div>
                      <span className="block text-[10px] text-gray-400 font-semibold tracking-[3px] uppercase mb-1">
                        {svc.tag}
                      </span>

                      <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[var(--primary)] transition-colors duration-300">
                        {svc.title}
                      </h3>
                    </div>

                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {svc.description}
                  </p>

                  {/* Points */}
                  {svc.points && (
                    <div className="grid grid-cols-1 gap-2">
                      {svc.points.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)]/50 shrink-0" />
                          <span className="text-sm text-gray-500 leading-relaxed">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
=======
export default function SystemIntegrationServices() {
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
                System Integration Services
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Complete Telecom Integration &{" "}
              <span className="text-[var(--primary)]">
                Turnkey Execution Services
              </span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed">
              Eratronics brings extensive experience in on-site Installation &
              Commissioning and execution of turnkey telecom projects across
              mission-critical environments. Our capabilities are supported by
              a fully equipped integration facility with industrial-grade power
              backup and advanced optical test equipment, enabling high-quality
              pre-deployment system integration.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="pb-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-x-4 md:gap-y-6">

            {integrationServices.map((service, index) => {
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
                  className="group flex flex-col h-full overflow-hidden rounded-b-[18px] border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-500"
                >

                  {/* ── HEADER ── */}
                  <div className="relative flex min-h-[145px] overflow-hidden bg-[var(--primary)] px-7 pt-8 pb-7">

                    {/* bg effect */}
                    <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-150" />

                    <div className="relative z-10 flex w-full items-start justify-between gap-6">

                      <div className="flex h-full flex-col justify-between">

                        <span className="mb-4 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[3px] text-white/70">
                          {service.tag}
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
                 {/* ── BODY ── */}
<div className="flex-1 px-7 pt-7 pb-8 bg-[linear-gradient(to_bottom,_#f5f5f4_0%,_rgba(255,255,255,0)_100%)]">

  <p className="text-[15px] leading-relaxed text-gray-600">
    {service.description}
  </p>

  {/* SCOPE TITLE */}
  {service.scopeTitle && (
    <h4 className="mt-6 mb-3 text-sm font-semibold text-gray-900">
      {service.scopeTitle}
    </h4>
  )}

  {/* BULLET POINTS */}
  {service.points && (
    <ul className="space-y-2">
      {service.points.map((point, idx) => (
        <li
          key={idx}
          className="flex items-start gap-3 text-sm leading-relaxed text-gray-600"
        >
          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--primary)] shrink-0" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  )}

</div>

>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
                </motion.div>
              );
            })}
          </div>
        </div>
<<<<<<< HEAD

        {/* -- CTA -- */}
        <div className="relative mt-16 mx-6 lg:mx-16 mb-16 rounded-2xl bg-[var(--primary)] px-10 py-14 overflow-hidden">

          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">

            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Need Integration & FAT Support?
              </h3>

              <p className="text-white/60 text-sm max-w-lg">
                Our integration team delivers seamless execution from cabinet
                assembly to customer witnessed FAT and final deployment support.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-300"
              >
                <FiPhoneCall size={15} /> Contact Us
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              >
                All Solutions <FiArrowRight size={13} />
              </Link>

            </div>

          </div>
        </div>
=======
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
      </section>
    </>
  );
}