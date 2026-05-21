"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const capabilities = [
  {
    tag: "End-to-End Delivery",
    title: "Turnkey Solutions",
    description:
      "Experience seamless end-to-end project delivery with single point accountability — from requirements analysis and design engineering to supply chain management, system integration, FAT/SAT, commissioning, documentation handover, and go-live support.",
    keywords: [
      "Requirements Analysis",
      "Design Engineering",
      "FAT / SAT",
      "Commissioning",
    ],
    href: "/turnkey-solutions",
    image: "/Turnkey Solutions.png",

    svg: (
      <svg width="130" height="130" viewBox="0 0 200 200" fill="none">
        <rect
          x="40"
          y="40"
          width="120"
          height="120"
          stroke="var(--secondary)"
          strokeWidth="2"
          opacity="0.5"
        />

        <path
          d="M60 100H140"
          stroke="white"
          strokeWidth="2"
          opacity="0.5"
        />

        <path
          d="M100 60V140"
          stroke="white"
          strokeWidth="2"
          opacity="0.5"
        />

        <circle
          cx="100"
          cy="100"
          r="18"
          fill="var(--secondary)"
          opacity="0.5"
        />
      </svg>
    ),
  },

  {
    tag: "Industrial Engineering",
    title: "Engineering Services",
    description:
      "We bring a structured engineering approach spanning concept and design to integration and commissioning ensuring operational reliability and long-term performance.",
    keywords: [
      "Oil & Gas",
      "Cyber Security",
      "Mission Critical",
      "Scalability",
    ],
    href: "/engineering-services",
    image: "/Engineering Services.png",

    svg: (
      <svg width="130" height="130" viewBox="0 0 200 200" fill="none">
        <circle
          cx="100"
          cy="100"
          r="65"
          stroke="var(--secondary)"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.5"
        />

        <circle
          cx="100"
          cy="100"
          r="35"
          stroke="white"
          strokeWidth="2"
          opacity="0.4"
        />

        <path
          d="M100 35V165"
          stroke="white"
          strokeWidth="2"
          opacity="0.4"
        />

        <path
          d="M35 100H165"
          stroke="var(--secondary)"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
    ),
  },

  {
    tag: "Advanced Communication",
    title: "Integration Excellence",
    description:
      "We enable communication networks for voice, surveillance, data, and Ethernet over fiber, radio, or copper with rigorous deployment validation.",
    keywords: [
      "Voice Networks",
      "Fiber & Radio",
      "Testing",
      "Customer FAT",
    ],
    href: "/integration-excellence",
    image: "/Integration Excellence.png",

    svg: (
      <svg width="130" height="130" viewBox="0 0 200 200" fill="none">
        <circle
          cx="100"
          cy="100"
          r="12"
          fill="white"
          opacity="0.5"
        />

        <circle
          cx="100"
          cy="100"
          r="35"
          stroke="var(--secondary)"
          strokeWidth="2"
          opacity="0.5"
        />

        <circle
          cx="100"
          cy="100"
          r="60"
          stroke="white"
          strokeWidth="2"
          opacity="0.3"
        />

        <path
          d="M40 100C60 70 140 70 160 100"
          stroke="var(--secondary)"
          strokeWidth="2"
          opacity="0.5"
        />

        <path
          d="M55 125C75 105 125 105 145 125"
          stroke="white"
          strokeWidth="2"
          opacity="0.4"
        />
      </svg>
    ),
  },

  {
    tag: "Lifecycle Support",
    title: "Through-Life Care",
    description:
      "Comprehensive operations support from troubleshooting to emergency response across the full system lifecycle with SLA-driven support models.",
    keywords: [
      "CARE Model",
      "SLA Services",
      "Emergency Response",
      "Lifecycle Support",
    ],
    href: "/through-life-care-program",
    image: "/Through-Life Care Program.png",

    svg: (
      <svg width="130" height="130" viewBox="0 0 200 200" fill="none">
        <path
          d="M100 30L160 70V130L100 170L40 130V70L100 30Z"
          stroke="var(--secondary)"
          strokeWidth="2"
          opacity="0.5"
        />

        <circle
          cx="100"
          cy="100"
          r="28"
          stroke="white"
          strokeWidth="2"
          opacity="0.4"
        />

        <path
          d="M100 82V118"
          stroke="white"
          strokeWidth="2"
          opacity="0.4"
        />

        <path
          d="M82 100H118"
          stroke="var(--secondary)"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
    ),
  },
];

export default function GlobalCapability() {
  return (
    <section className="py-24 bg-[var(--secondary)]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20 flex items-center gap-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-[var(--primary)]" />

            <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
              Eratronics
            </span>
          </div>
 <span className="block w-px h-20 bg-[var(--primary)]" />
 <div>
     <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Global Capability & Mission Critical Engineering
            </span>
          </h2>

          <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-3xl">
            Four integrated service pillars delivering precision, resilience,
            and single-point accountability across every phase of your project
            lifecycle.
          </p>
 </div>
       
        </motion.div>

        <div className="space-y-0">
          {capabilities.map((cap, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
              >

                {index !== 0 && (
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--secondary)]/40 to-transparent" />
                )}

                <Link
                  href={cap.href}
                  className={`group grid grid-cols-1 lg:grid-cols-5 min-h-[560px]
                  ${isReverse ? "lg:[&>*:first-child]:order-2" : ""}
                  `}
                >

                  {/* IMAGE */}
                  <div className="lg:col-span-2 relative overflow-hidden min-h-[320px] bg-gray-100">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                  </div>

                  {/* CONTENT */}
                  <div className="lg:col-span-3 bg-[var(--primary)] text-white relative flex flex-col justify-center p-8 lg:p-16 overflow-hidden">

                    {/* SVG */}
                    <div className="absolute top-8 right-8 opacity-80">
                      {cap.svg}
                    </div>

                    {/* TAG */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-px bg-white/40" />

                      <span className="text-xs uppercase tracking-[4px] font-semibold text-white/70">
                        {cap.tag}
                      </span>
                    </div>

                    {/* TITLE */}
                    <div className="inline-block w-fit">
                      <h3 className="text-3xl lg:text-5xl font-bold leading-tight relative z-10">
                        {cap.title}
                      </h3>

                      <div className="mt-4 h-[3px] w-[30%] group-hover:w-full transition-all duration-500 bg-[var(--secondary)]" />
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-10 text-white/70 leading-relaxed text-sm lg:text-base max-w-2xl">
                      {cap.description}
                    </p>

                    {/* KEYWORDS */}
                    <div className="flex flex-wrap gap-3 mt-8">
                      {cap.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="px-4 py-2 border border-white/15 bg-[var(--secondary)] rounded-md text-xs uppercase tracking-wide"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    {/* BUTTON */}
                    <div className="mt-10 flex items-center gap-4">

                      <span className="uppercase tracking-[3px] text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
                        Explore Service
                      </span>

                      <span className="w-11 h-11 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[var(--primary)] transition-all duration-300">

                        <svg
                          className="w-4 h-4 -rotate-45"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14M12 5l7 7-7 7"
                          />
                        </svg>

                      </span>
                    </div>

                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}