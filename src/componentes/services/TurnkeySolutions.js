"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiSearch, FiPenTool, FiPackage, FiCpu,
  FiTool, FiCheckSquare, FiBookOpen, FiFileText,
  FiArrowRight,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    tag: "Requirement Phase",
    title: "Tender Requirement Analysis",
    icon: FiSearch,
    description:
      "Detailed evaluation of the customer’s operational processes, technical requirements, site and environmental constraints, and applicable regulatory and compliance obligations.",
  },

  {
    number: "02",
    tag: "Design Phase",
    title: "Detailed Design Engineering",
    icon: FiPenTool,
    description:
      "Our design team brings years of hands on engineering experience, enabling precise project mapping and system planning. We specialize in translating customer functional requirements into detailed drawings and layouts with exceptional accuracy, ensuring clarity, efficiency, and seamless execution at every stage.",
  },

  {
    number: "03",
    tag: "Procurement Phase",
    title: "Multi Vendor Supply Chain Management",
    icon: FiPackage,
    description:
      "We streamline multi vendor supply chain management by coordinating sourcing, procurement, and logistics across multiple partners. Our approach ensures timely availability of quality components, maintains consistency across systems, and enables smooth integration keeping projects on schedule and aligned with design and execution requirements.",
  },

  {
    number: "04",
    tag: "Integration Phase",
    title: "System Integration and FAT",
    icon: FiCpu,
    description:
      "We go beyond traditional telecom system integration we enable complete, high performance communication ecosystems. From voice and data to video surveillance and Ethernet networks across fibre, radio, or copper, we seamlessly bring technologies together into one cohesive system. Every solution is rigorously validated through extensive pre deployment checks at our integration centre, followed by thorough Factory Acceptance Tests (FAT) witnessed by the end user ensuring reliability, performance, and complete confidence before deployment.",
  },

  {
    number: "05",
    tag: "Installation Phase",
    title: "Site Installation and Commissioning",
    icon: FiTool,
    description:
      "Our Project team ensures precise on site installation and efficient commissioning, aligning every component with the approved design and system requirements. With a focus on quality, safety, and coordination, we bring the integrated system to life ensuring smooth deployment, optimal performance, and readiness for seamless operation.",
  },

  {
    number: "06",
    tag: "Validation Phase",
    title: "Site Acceptance and End to End System Testing",
    icon: FiCheckSquare,
    description:
      "Our Engineers rigorously validate every aspect of the deployed system through structured site acceptance and comprehensive end to end testing. Each component is checked for performance, reliability, and seamless interoperability across the network. With a meticulous, no compromise approach, we ensure the entire solution functions as a unified system, fully optimized, compliant, and ready for real world operations.",
  },

  {
    number: "07",
    tag: "Knowledge Transfer",
    title: "Training",
    icon: FiBookOpen,
    description:
      "Provision of structured, end user training programs tailored to client requirements, encompassing system operation, routine and preventive maintenance practices, fault diagnosis and troubleshooting methodologies, as well as defined emergency handling and response procedures.",
  },

  {
    number: "08",
    tag: "Handover Phase",
    title: "As Built Documentation and Handover",
    icon: FiFileText,
    description:
      "We deliver comprehensive as built documentation that accurately reflects the final deployed system, capturing every detail for future reference and maintenance. With a structured and transparent handover process, we ensure clients have complete clarity, control, and confidence to operate and manage the system effectively from day one.",
  },
];

const highlights = [
  { value: "8",    label: "Delivery Phases" },
  { value: "1",    label: "Point of Accountability" },
  { value: "100%", label: "FAT Coverage" },
  { value: "24×7", label: "Post Go Live Support" },
];

export default function TurnkeySolutions() {
  const introRef  = useRef(null);
  const statsRef  = useRef(null);
  const cardsRef  = useRef(null);
  const ctaRef    = useRef(null);

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
        opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out",
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
              <div className="label-tag mb-6">End to End Delivery</div>
              <h2
                className="font-extrabold leading-tight mb-6"
                style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "var(--primary)", letterSpacing: "-0.02em" }}
              >
                Your Partner in Building Critical Infrastructure{" "}
                <span style={{ color: "var(--secondary)" }}>Safely and Reliably</span>
              </h2>
              <div className="h-px w-14 mb-6" style={{ background: "var(--secondary)" }} />
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
                From concept to commissioning, we deliver seamless turnkey solutions combining
                design engineering, robust system integration, rigorous testing, and flawless
                execution, under a single point of accountability.
              </p>
            </div>

            {/* Stats grid */}
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

      {/* SERVICE STEPS */}
      <section className="py-24 overflow-hidden" style={{ background: "var(--surface-light)" }}>
        <div className=" mx-auto px-6 lg:px-16">
          <div className="label-tag mb-12">Delivery Process</div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2" style={{ border: "1px solid var(--border-light)" }}>
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.number}
                  className="svc-card group relative p-8 transition-all duration-300 overflow-hidden"
                  style={{
                    borderRight: i % 2 === 0 ? "1px solid var(--border-light)" : "none",
                    borderBottom: i < 6 ? "1px solid var(--border-light)" : "none",
                    background: "transparent",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(33,150,243,0.03)";
                    e.currentTarget.style.borderLeft = "3px solid var(--secondary)";
                    e.currentTarget.style.paddingLeft = "calc(2rem - 2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderLeft = "";
                    e.currentTarget.style.paddingLeft = "";
                  }}
                >
                  {/* Top sweep */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    style={{ background: "var(--secondary)" }}
                  />

                  <div className="flex items-start gap-5 mb-4">
                    <div
                      className="shrink-0 w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(33,150,243,0.08)",
                        border: "1px solid var(--border-blue)",
                      }}
                    >
                      <Icon size={16} style={{ color: "var(--secondary)" }} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: "var(--text-muted-l)" }}>
                        {svc.tag}
                      </span>
                      <h3 className="text-sm font-bold leading-snug" style={{ color: "var(--primary)" }}>
                        {svc.title}
                      </h3>
                    </div>
                    <span className="ml-auto text-2xl font-black tabular-nums shrink-0" style={{ color: "rgba(33,150,243,0.15)" }}>
                      {svc.number}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
                    {svc.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-20" style={{ background: "var(--secondary)" }}>
        <div className=" mx-auto px-6 lg:px-16">
          <div
            className="relative overflow-hidden p-10 lg:p-14"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            {/* Dot grid */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h3 className="font-bold text-white mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 30px)", letterSpacing: "-0.02em" }}>
                  Ready to Start Your Turnkey Project?
                </h3>
                <p className="text-sm leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Talk to our engineering team — we will scope your requirements and define a delivery plan tailored to your infrastructure.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="flex items-center gap-2.5 px-8 py-4 font-bold text-sm shrink-0 transition-all duration-250"
                style={{ background: "var(--primary)", color: "white" }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--surface-0)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "var(--primary)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
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
