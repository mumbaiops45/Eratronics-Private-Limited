"use client";

import { motion } from "framer-motion";
import {
  FiShoppingBag,
  FiServer,
  FiCheckSquare,
  FiPackage,
  FiSettings,
} from "react-icons/fi";

const integrationServices = [
  {
    title: "Third-Party Procurement",
    tag: "Procurement Services",
    icon: FiShoppingBag,
    description:
      "For telecom projects, core network elements such as optical multiplexers, SDH, MPLS, DWDM, and Ethernet switches are typically supplied by the OEM or main contractor. Eratronics undertakes end-to-end procurement of all associated third-party components including cabinets, power and data cables, MCBs, power supplies, patch panels, and related accessories in line with the approved Bill of Materials.",
  },
  {
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
    icon: FiCheckSquare,
    description:
      "Post-integration, each system undergoes rigorous validation through comprehensive pre-dispatch checks at our integration facility. Factory Acceptance Testing is conducted in the presence of the customer or their representatives to verify system performance, functionality, and compliance with project specifications.",
  },
  {
    title: "Packing & Dispatch",
    tag: "Dispatch Services",
    icon: FiPackage,
    description:
      "Upon receipt of dispatch clearance from the client, integrated systems are carefully dismantled where required and packed in accordance with export-grade standards to ensure safe transit. Our standard scope includes handling up to loading of materials at the integration facility.",
  },
  {
    title: "Additional Services",
    tag: "Extended Scope",
    icon: FiSettings,
    description:
      "Eratronics can also provide end-to-end logistics support including transit insurance, transportation to site, unloading, and complete on-site installation and commissioning services under a separate project scope.",
  },
];

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

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}