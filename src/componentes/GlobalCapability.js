"use client";

import Link from "next/link";
import { useState } from "react";

const tabs = [
  {
    id: 1,
    tag: "End-to-End Delivery",
    title: "Turnkey Solutions",
    description:
      "Experience seamless end-to-end project delivery with single point accountability from requirements analysis and design engineering to supply chain management, system integration, FAT/SAT, commissioning, documentation handover, and go-live support. Our proven DARE model — Design Engineering, All-Weather Integration, Rigorous Testing, Effective Maintenance — guarantees precision and reliability at every stage.",
    keywords: ["Requirements Analysis", "Design Engineering", "FAT / SAT", "Commissioning", "DARE Model"],
    href: "/solutions",
  },
  {
    id: 2,
    tag: "Industrial Engineering",
    title: "Engineering Services",
    description:
      "Your engineering services are not just about deploying telecom systems — they are about enabling safe, reliable, and future-ready operations in some of the most demanding industrial environments. At Eratronics, we bring a structured, end-to-end engineering approach that spans from concept and design to integration and commissioning, ensuring that every solution is aligned with operational criticality, regulatory requirements, and long-term performance objectives. With deep domain expertise in Oil & Gas and a focus on system resilience, cyber security, and scalability, we deliver telecom infrastructure that forms the backbone of mission-critical operations.",
    keywords: ["Oil & Gas", "Cyber Security", "System Resilience", "Mission Critical", "Scalability"],
    href: "/engineering-services",
  },
  {
    id: 3,
    tag: "Advanced Communication",
    title: "Integration Excellence",
    description:
      "Beyond integration, we enable complex communication networks for voice, video surveillance, data, and Ethernet over fiber, radio, or copper. Custom solutions from past projects boost efficiency, minimize downtime, and serve as proven references. All systems undergo rigorous pre-deployment testing at our integration center, plus customer-witnessed FAT.",
    keywords: ["Voice Networks", "Video Surveillance", "Fiber & Radio", "Pre-Deployment Testing", "Customer FAT"],
    href: "/integration-excellence",
  },
  {
    id: 4,
    tag: "Lifecycle Support",
    title: "Through-Life Care Program",
    description:
      "We deliver comprehensive operations support from routine troubleshooting to emergency response — across the full system lifecycle aligned with our CARE Model approach. Tailored SLA-based options meet your exact needs. Our resource-optimized, methodical approach handles unforeseen challenges and evolving goals with precision.",
    keywords: ["CARE Model", "SLA Services", "Emergency Response", "Lifecycle Support", "Operations Support"],
    href: "/etcp",
  },
];

// clip-path logic
const getClipPath = (index, total) => {
  if (index === 0) return "polygon(0 0, 100% 0, 88% 100%, 0 100%)";
  if (index === total - 1) return "polygon(12% 0, 100% 0, 100% 100%, 0 100%)";
  return "polygon(12% 0, 100% 0, 88% 100%, 0 100%)";
};

export default function GlobalCapability() {
  const [activeId, setActiveId] = useState(1);
  const activeTab = tabs.find((t) => t.id === activeId);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[var(--primary)]" />
            <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
              Eratronics
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
            Global Capability &{" "}
            <span className="text-[var(--primary)]">Mission Critical Engineering</span>
          </h2>
        </div>

        {/* TABS */}
        <div className="flex w-full">
          {tabs.map((tab, index) => {
            const isActive = activeId === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={`
                  flex-1
                  h-[58px]
                  text-sm
                  font-semibold
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  whitespace-nowrap
                  cursor-pointer
                  select-none
                  ${
                    isActive
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)]/20"
                  }
                `}
                style={{
                  clipPath: getClipPath(index, tabs.length),
                  marginRight: index !== tabs.length - 1 ? "-18px" : "0",
                  zIndex: isActive ? tabs.length + 10 : tabs.length - index,
                }}
              >
                <span
                  style={{
                    paddingLeft: index === 0 ? "0" : "20px",
                    paddingRight: index === tabs.length - 1 ? "0" : "20px",
                  }}
                >
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* DETAIL CARD (DIV NOW) */}
        <div
          key={activeId}
          className="
            mt-0
            border border-[var(--primary)]/20
            rounded-b-3xl rounded-tr-3xl
            p-8 lg:p-12
            transition-all duration-300
            hover:border-[var(--primary)]/50
            hover:shadow-xl
            cursor-pointer
            group
            relative
            overflow-hidden
            bg-white
          "
        >
          {/* decorative glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[var(--primary)]/5 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[var(--primary)]/3 pointer-events-none" />

          <div className="relative z-10">

            {/* TAG */}
            <span className="inline-block text-[var(--primary)] text-xs font-semibold tracking-[3px] uppercase bg-[var(--primary)]/10 px-4 py-1.5 rounded-full">
              {activeTab.tag}
            </span>

            {/* TITLE */}
            <h3 className="text-3xl font-bold text-black mt-5 transition-colors duration-300 group-hover:text-[var(--primary)]">
              {activeTab.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-600 leading-relaxed mt-5 max-w-4xl">
              {activeTab.description}
            </p>

            {/* KEYWORDS */}
            <div className="flex flex-wrap gap-3 mt-8">
              {activeTab.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="
                    px-4 py-2 rounded-full
                    border border-[var(--primary)]/20
                    bg-[var(--primary)]/5
                    text-sm text-[var(--primary)] font-medium
                    transition-all duration-300
                    group-hover:bg-[var(--primary)]/10
                    group-hover:border-[var(--primary)]/40
                  "
                >
                  {keyword}
                </span>
              ))}
            </div>

            {/* BUTTON LINK (ONLY NAVIGATION HERE) */}
            <div className="mt-10">
              <Link
                href={activeTab.href}
                className="primary-btn inline-block px-6 py-3 rounded-md"
              >
                Know More
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}