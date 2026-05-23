"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiShoppingBag, FiServer, FiCheckSquare, FiPackage, FiSettings, FiArrowRight,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const integrationServices = [
  {
    number: "01",
    tag: "Procurement Phase",
    title: "Third Party Procurement",
    icon: FiShoppingBag,
    description:
      "For telecom projects, core network elements such as optical multiplexers (SDH / MPLS / DWDM / Ethernet Switches) are typically supplied by the OEM or main contractor. Eratronics undertakes end to end procurement of all associated third party components including cabinets, power and data cables, MCBs, power supplies, patch panels, and related accessories in line with the approved Bill of Materials (BoM).",
  },

  {
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
    icon: FiCheckSquare,
    description:
      "Post integration, each system undergoes rigorous validation through comprehensive pre dispatch checks at our integration facility. This is followed by Factory Acceptance Testing (FAT), conducted in the presence of the end customer or their representatives, to verify system performance, functionality, and compliance with project specifications.",
  },

  {
    number: "04",
    tag: "Dispatch Phase",
    title: "Packing & Dispatch",
    icon: FiPackage,
    description:
      "Upon receipt of dispatch clearance from the client, integrated systems are carefully dismantled where required and packed in accordance with export grade standards to ensure safe transit. Eratronics standard scope includes handling up to loading of materials at our integration facility.",
  },

  {
    number: "05",
    tag: "Extended Scope",
    title: "Additional Services (Under Separate Scope)",
    icon: FiSettings,
    description:
      "Eratronics can also provide end to end logistics support, including transit insurance, transportation to site, unloading, and on site installation & commissioning services.",
  },
];

const highlights = [
  { value: "100%", label: "Customer Witnessed FAT" },
  { value: "ISO",  label: "Grade Integration" },
  { value: "24×7", label: "Power Backup Facility" },
  { value: "E2E",  label: "Project Execution" },
];

export default function SystemIntegrationServices() {
  const introRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef   = useRef(null);

  useEffect(() => {
    gsap.fromTo(introRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: introRef.current, start: "top 85%", once: true },
    });
    gsap.fromTo(statsRef.current, { opacity: 0, x: 40 }, {
      opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: statsRef.current, start: "top 85%", once: true },
    });
    const cards = cardsRef.current?.querySelectorAll(".svc-card");
    if (cards) {
      gsap.fromTo(cards, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 85%", once: true },
      });
    }
    gsap.fromTo(ctaRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ctaRef.current, start: "top 85%", once: true },
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <>
      {/* INTRO */}
      <section className="py-24 overflow-hidden" style={{ background: "var(--surface-off)" }}>
        <div className="mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

            <div ref={introRef} className="max-w-2xl">
              <div className="label-tag mb-6">System Integration Services</div>
              <h2
                className="font-extrabold leading-tight mb-6"
                style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "var(--primary)", letterSpacing: "-0.02em" }}
              >
                Integrated Telecom Solutions with{" "}
                <span style={{ color: "var(--secondary)" }}>Precision Execution</span>
              </h2>
              <div className="h-px w-14 mb-6" style={{ background: "var(--secondary)" }} />
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
                Eratronics delivers complete telecom integration services for mission critical
                infrastructure projects. From procurement and cabinet integration to FAT
                validation and deployment support, we ensure every subsystem is engineered,
                integrated, tested, and delivered with complete operational reliability.
              </p>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 shrink-0" style={{ border: "1px solid var(--border-light)" }}>
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="px-8 py-6 text-center"
                  style={{
                    borderRight: i % 2 === 0 ? "1px solid var(--border-light)" : "none",
                    borderBottom: i < 2 ? "1px solid var(--border-light)" : "none",
                    background: "var(--surface-light)",
                  }}
                >
                  <p className="text-3xl font-black mb-1" style={{ color: "var(--secondary)" }}>{h.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.15em] font-medium" style={{ color: "var(--text-muted-l)" }}>{h.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      {/* SERVICE CARDS */}
<section
  className="py-24 overflow-hidden"
  style={{ background: "var(--surface-light)" }}
>
  <div className="mx-auto px-6 lg:px-16">
    <div className="label-tag mb-12">
      Integration Workflow
    </div>

    <div
      ref={cardsRef}
      className="grid grid-cols-1 md:grid-cols-2"
      style={{
        border: "1px solid var(--border-light)",
      }}
    >
      {integrationServices.map((svc, i) => {
        const Icon = svc.icon;

        const isLast =
          i === integrationServices.length - 1;

        const isOdd =
          integrationServices.length % 2 !== 0;

        return (
          <div
            key={svc.number}
            className="svc-card group relative p-8 transition-all duration-300 overflow-hidden"
            style={{
              borderRight:
                i % 2 === 0 && !isLast
                  ? "1px solid var(--border-light)"
                  : "none",

              borderBottom:
                i <
                integrationServices.length -
                  (isOdd ? 1 : 2)
                  ? "1px solid var(--border-light)"
                  : "none",

              background: "transparent",

              gridColumn:
                isLast && isOdd
                  ? "1 / -1"
                  : "auto",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "rgba(33,150,243,0.03)";

              e.currentTarget.style.borderLeft =
                "3px solid var(--secondary)";

              e.currentTarget.style.paddingLeft =
                "calc(2rem - 2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "transparent";

              e.currentTarget.style.borderLeft =
                "";

              e.currentTarget.style.paddingLeft =
                "";
            }}
          >
            {/* Top sweep */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
              style={{
                background: "var(--secondary)",
              }}
            />

            {/* TOP SECTION */}
            <div className="flex items-start gap-5 mb-4">
              <div
                className="shrink-0 w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background:
                    "rgba(33,150,243,0.08)",

                  border:
                    "1px solid var(--border-blue)",
                }}
              >
                <Icon
                  size={16}
                  style={{
                    color: "var(--secondary)",
                  }}
                />
              </div>

              <div className="flex-1">
                <span
                  className="block text-[10px] font-bold uppercase tracking-[0.12em] mb-1"
                  style={{
                    color: "var(--text-muted-l)",
                  }}
                >
                  {svc.tag}
                </span>

                <h3
                  className="text-sm font-bold leading-snug"
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  {svc.title}
                </h3>
              </div>

              <span
                className="ml-auto text-2xl font-black tabular-nums shrink-0"
                style={{
                  color:
                    "rgba(33,150,243,0.15)",
                }}
              >
                {svc.number}
              </span>
            </div>

            {/* DESCRIPTION */}
            <p
              className="text-sm leading-relaxed mb-4"
              style={{
                color: "var(--text-muted-l)",
              }}
            >
              {svc.description}
            </p>

            {/* POINTS */}
            {svc.points && (
              <div className="flex flex-col gap-2 mt-3">
                {svc.points.map((pt, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-2.5"
                  >
                    <span
                      className="mt-1.5 w-1 h-1 shrink-0"
                      style={{
                        background:
                          "var(--secondary)",
                      }}
                    />

                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        color:
                          "var(--text-muted-l)",
                      }}
                    >
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* CTA */}
      <section ref={ctaRef} className="py-20" style={{ background: "var(--secondary)" }}>
        <div className="mx-auto px-6 lg:px-16">
          <div className="relative overflow-hidden p-10 lg:p-14" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h3 className="font-bold text-white mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 30px)", letterSpacing: "-0.02em" }}>
                  Need Integration & FAT Support?
                </h3>
                <p className="text-sm leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Our integration team delivers seamless execution from cabinet assembly to customer witnessed FAT and final deployment support.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="flex items-center gap-2.5 px-8 py-4 font-bold text-sm shrink-0 transition-all duration-250"
                style={{ background: "var(--primary)", color: "white" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--surface-0)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Contact Us <FiArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
