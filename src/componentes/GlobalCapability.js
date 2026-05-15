"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const capabilities = [
  {
    id: "01",
    tag: "End-to-End Delivery",
    title: "Turnkey Solutions",
    description:
      "Experience seamless end-to-end project delivery with single point accountability — from requirements analysis and design engineering to supply chain management, system integration, FAT/SAT, commissioning, documentation handover, and go-live support. Our proven DARE model guarantees precision and reliability at every stage.",
    keywords: ["Requirements Analysis", "Design Engineering", "FAT / SAT", "Commissioning", "DARE Model"],
    href: "/turnkey-solutions",
  },
  {
    id: "02",
    tag: "Industrial Engineering",
    title: "Engineering Services",
    description:
      "At Eratronics, we bring a structured end-to-end engineering approach spanning concept and design to integration and commissioning — ensuring every solution is aligned with operational criticality, regulatory requirements, and long-term performance. With deep domain expertise in Oil & Gas, we deliver telecom infrastructure that forms the backbone of mission-critical operations.",
    keywords: ["Oil & Gas", "Cyber Security", "System Resilience", "Mission Critical", "Scalability"],
    href: "/engineering-services",
  },
  {
    id: "03",
    tag: "Advanced Communication",
    title: "Integration Excellence",
    description:
      "We enable complex communication networks for voice, video surveillance, data, and Ethernet over fiber, radio, or copper. Custom solutions from past projects boost efficiency and minimize downtime. All systems undergo rigorous pre-deployment testing at our integration center, plus customer-witnessed FAT.",
    keywords: ["Voice Networks", "Video Surveillance", "Fiber & Radio", "Pre-Deployment Testing", "Customer FAT"],
    href: "/integration-excellence",
  },
  {
    id: "04",
    tag: "Lifecycle Support",
    title: "Through-Life Care Program",
    description:
      "We deliver comprehensive operations support from routine troubleshooting to emergency response — across the full system lifecycle aligned with our CARE Model. Tailored SLA-based options meet your exact needs, while our resource-optimized approach handles unforeseen challenges and evolving goals with precision.",
    keywords: ["CARE Model", "SLA Services", "Emergency Response", "Lifecycle Support", "Operations Support"],
    href: "/through-life-care-program",
  },
];

export default function GlobalCapability() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-(--primary)" />
            <span className="text-(--primary) text-xs font-semibold tracking-[4px] uppercase">
              Eratronics
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
            Global Capability &{" "}
            <span className="text-[var(--primary)]">Mission Critical Engineering</span>
          </h2>

          <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-xl">
            Four integrated service pillars delivering precision, resilience, and single-point accountability across every phase of your project lifecycle.
          </p>
        </motion.div>

        {/* Capabilities List */}
        <div className="divide-y divide-gray-100">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <Link
                href={cap.href}
                className="group flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-20 py-12 transition-all duration-300"
              >

                {/* Left: Number + Tag */}
                <div className="lg:w-56 shrink-0">
                  <span className="block text-7xl font-bold leading-none select-none text-gray-100 group-hover:text-(--primary)/20 transition-colors duration-500 mb-4">
                    {cap.id}
                  </span>
                  <span className="inline-flex items-center gap-2 text-(--primary) text-xs font-semibold tracking-[3px] uppercase">
                    <span className="block w-4 h-px bg-(--primary)" />
                    {cap.tag}
                  </span>
                </div>

                {/* Right: Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-(--primary) transition-colors duration-300 leading-snug">
                      {cap.title}
                    </h3>

                    {/* Arrow Icon */}
                    <span className="shrink-0 mt-1 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-(--primary) group-hover:border-(--primary) transition-all duration-300">
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300 -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-2xl">
                    {cap.description}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {cap.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 text-xs font-medium text-(--primary) bg-(--primary)/5 border border-(--primary)/15 rounded-full group-hover:bg-(--primary)/10 transition-colors duration-300"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
