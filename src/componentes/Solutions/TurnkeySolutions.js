"use client";

import { motion } from "framer-motion";
import {
    FiSearch,
    FiPenTool,
    FiPackage,
    FiCpu,
    FiTool,
    FiCheckSquare,
    FiBookOpen,
    FiFileText,
} from "react-icons/fi";

const services = [
    {
        number: "01",
        tag: "Requirement Phase",
        title: "Tender Requirement Analysis",
        icon: FiSearch,
        description:
            "Detailed evaluation of the customer's operational processes, technical requirements, site and environmental constraints, and applicable regulatory and compliance obligations.",
    },
    {
        number: "02",
        tag: "Design Phase",
        title: "Detailed Design Engineering",
        icon: FiPenTool,
        description:
            "Our design team brings years of hands-on engineering experience, enabling precise project mapping and system planning. We specialize in translating customer functional requirements into detailed drawings and layouts with exceptional accuracy.",
    },
    {
        number: "03",
        tag: "Procurement Phase",
        title: "Multi Vendor Supply Chain Management",
        icon: FiPackage,
        description:
            "We streamline multi-vendor supply chain management by coordinating sourcing, procurement, and logistics across multiple partners while ensuring timely availability of quality components.",
    },
    {
        number: "04",
        tag: "Integration Phase",
        title: "System Integration and FAT",
        icon: FiCpu,
        description:
            "From voice and data to video surveillance and Ethernet networks across fibre, radio, or copper, we seamlessly bring technologies together into one cohesive system.",
    },
    {
        number: "05",
        tag: "Installation Phase",
        title: "Site Installation and Commissioning",
        icon: FiTool,
        description:
            "Our Project team ensures precise on-site installation and efficient commissioning, aligning every component with the approved design and system requirements.",
    },
    {
        number: "06",
        tag: "Validation Phase",
        title: "Site Acceptance and End-to-End System Testing",
        icon: FiCheckSquare,
        description:
            "Our Engineers rigorously validate every aspect of the deployed system through structured site acceptance and comprehensive end-to-end testing.",
    },
    {
        number: "07",
        tag: "Knowledge Transfer",
        title: "Training",
        icon: FiBookOpen,
        description:
            "Provision of structured, end-user training programs tailored to client requirements, covering operations, maintenance, troubleshooting, and emergency response procedures.",
    },
    {
        number: "08",
        tag: "Handover Phase",
        title: "As Built Documentation and Handover",
        icon: FiFileText,
        description:
            "We deliver comprehensive as-built documentation with a structured and transparent handover process for complete operational clarity and confidence.",
    },
];

export default function TurnkeySolutions() {
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
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="block w-10 h-px bg-[var(--primary)]" />
                            <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
                                End-to-End Delivery
                            </span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Your Partner in Building and Operating{" "}
                            <span className="text-[var(--primary)]">
                                Critical Infrastructure
                            </span>{" "}
                            Safely and Reliably
                        </h2>

                        <p className="text-gray-500 text-base leading-relaxed ">
                            From concept to commissioning, we deliver seamless turnkey
                            solutions combining design engineering, robust system integration
                            with precise testing and flawless execution.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── SERVICES GRID ── */}
            <section className="pb-28 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-x-4 md:gap-y-6">
                        {services.map((svc, index) => {
                            const Icon = svc.icon;

                            return (
                                <motion.div
                                    key={svc.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    className="group flex flex-col h-full overflow-hidden rounded-b-[18px] border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-500"
                                >

                                  {/* ── HEADER ── */}
<div className="relative flex min-h-[145px] overflow-hidden bg-[var(--primary)] px-6 pt-7 pb-6">

  {/* bg blur circle */}
  <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-150" />

  <div className="relative z-10 flex w-full items-start justify-between gap-5">

    <div className="flex h-full flex-col justify-between">

      {/* TAG */}
      <span className="mb-4 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[3px] text-white/70">
        {svc.tag}
      </span>

      {/* TITLE */}
      <h3 className="max-w-[260px] text-xl font-bold leading-snug text-white">
        {svc.title}
      </h3>

    </div>

    {/* ICON */}
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 group-hover:bg-white/20">
      <Icon className="text-white" size={20} />
    </div>

  </div>
</div>

                                    {/* ── BODY ── */}
                                    <div className="flex-1 px-6 pt-6 pb-7 bg-[linear-gradient(to_bottom,_#f5f5f4_0%,_rgba(255,255,255,0)_100%)]">
                                        <p className="text-sm leading-relaxed text-gray-600">
                                            {svc.description}
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