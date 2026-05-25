"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiActivity,
  FiLayers,
  FiCpu,
  FiTrendingUp,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const engineeringServices = [
  {
    number: "01",
    title: "Technical Consulting Services",
    icon: FiActivity,
    description:
      "Telecommunication networks across Oil & Gas, Power, Transportation, and Defence sectors support mission critical operations, where system reliability and availability are non negotiable. The foundation for achieving this lies in robust architecture design during the planning phase. Eratronics leverages its deep domain expertise to develop telecom system architectures that are inherently resilient and engineered for high availability. Our consulting services focus on delivering comprehensive solution frameworks for integrated telecommunications and surveillance systems. This includes detailed design alternatives, technology and product evaluations, and well defined project execution methodologies ensuring optimal alignment with operational and business objectives.",
    tags: [
      "Architecture Design",
      "Technology Evaluation",
      "Execution Methodologies",
    ],
  },

  {
    number: "02",
    title: "FEED Engineering Services",
    icon: FiLayers,
    description:
      "Eratronics offers specialized Front End Engineering Design (FEED) services to support both end users and project stakeholders such as EPCs and PMCs. These services form a critical input for turnkey project execution and detailed engineering phases. Our engineering team develops complete FEED packages covering telecommunications and associated systems. This includes network sizing and scoping, evaluation of technology alternatives, architecture definition tailored to client requirements, and preparation of detailed technical specifications. The outcome is a structured, implementation ready design framework that minimizes project risks and enhances execution efficiency.",
    tags: [
      "Network Sizing",
      "Technology Alternatives",
      "Technical Specifications",
    ],
  },

  {
    number: "03",
    title: "Technology Assessment Services",
    icon: FiCpu,
    description:
      "Eratronics supports customers in evaluating emerging technologies and products prior to full scale deployment, enabling informed and risk mitigated decision making. In scenarios where adoption is constrained by unfamiliarity or concerns around integration with existing systems, we conduct structured assessments under realistic operating conditions. These may include controlled lab demonstrations, pilot deployments, or interoperability testing with live systems. Each evaluation program is developed in close collaboration with the customer, ensuring that performance, compatibility, and operational suitability are thoroughly validated before investment decisions are made.",
    tags: [
      "Lab Demonstrations",
      "Pilot Deployments",
      "Interoperability Testing",
    ],
  },

  {
    number: "04",
    title: "Gap Analysis Services",
    icon: FiTrendingUp,
    description:
      "Eratronics provides comprehensive gap analysis services to assess existing telecom and voice/video infrastructure against current and future operational requirements. Our approach involves an in depth review of existing systems, aligned with functional needs and evolving technology standards. Based on this assessment, we deliver a detailed strategic road map outlining upgrade paths, optimization opportunities, and expansion strategies. With a strong focus on innovation and practicality, we identify opportunities to enhance network capabilities through optimized system design, technology upgrades, and efficient integration ensuring that existing infrastructure continues to deliver maximum value.",
    tags: [
      "Infrastructure Assessment",
      "Upgrade Roadmaps",
      "Expansion Strategies",
    ],
  },
];

const capabilities = [
  "10+ years of domain expertise",
  "Collaborative execution models",
  "Disciplined project management",
  "Delivery agility at scale",
];

export default function EngineeringServices() {
  const introRef = useRef(null);
  const capRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      capRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: capRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );

    const cards = cardsRef.current?.querySelectorAll(".svc-card");

    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }

    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      {/* INTRO */}
      <section
        className="py-24 overflow-hidden"
        style={{ background: "var(--surface-off)" }}
      >
        <div className="mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div ref={introRef} className="max-w-2xl">
              <div className="label-tag mb-6">
                Engineering Excellence
              </div>

              <h2
                className="font-extrabold leading-tight mb-6"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                
                  letterSpacing: "-0.02em",
                }}
              >
                Engineering Services Built for{" "}
                <span style={{ color: "var(--secondary)" }}>
                  Mission Critical Infrastructure
                </span>
              </h2>

              <div
                className="h-px w-14 mb-6"
                style={{ background: "var(--secondary)" }}
              />

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-muted-l)" }}
              >
                Over the past decade, Eratronics has developed deep technical
                expertise in delivering telecom engineering solutions for
                mission critical industries. Through collaborative execution
                models, we operate as a seamless extension of our customers'
                teams, combining engineering depth with delivery agility.
              </p>
            </div>

            {/* Capabilities */}
            <div
              ref={capRef}
              className="grid grid-cols-2 shrink-0"
              style={{
                border: "1px solid var(--border-light)",
              }}
            >
              {capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="px-8 py-6"
                  style={{
                    borderRight:
                      i % 2 === 0
                        ? "1px solid var(--border-light)"
                        : "none",
                    borderBottom:
                      i < 2
                        ? "1px solid var(--border-light)"
                        : "none",
                    background: "var(--surface-light)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-5 h-5 flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(33,150,243,0.12)",
                        border: "1px solid var(--border-blue)",
                      }}
                    >
                      <FiCheck
                        size={10}
                        style={{ color: "var(--secondary)" }}
                      />
                    </div>

                    <span
                      className="text-xs uppercase tracking-[0.12em] font-bold"
                      style={{ color: "var(--secondary)" }}
                    >
                      Capability
                    </span>
                  </div>

                  <p
                    className="text-sm font-medium leading-relaxed"
                    style={{ color: "var(--primary)" }}
                  >
                    {cap}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
  {/* SERVICES */}
<section
  className="py-24 overflow-hidden"
  style={{ background: "var(--surface-light)" }}
>
  <div className="mx-auto px-6 lg:px-16">
    <div className="label-tag mb-12">
      Service Areas
    </div>

    <div
      ref={cardsRef}
      className="grid grid-cols-1 md:grid-cols-2"
      style={{
        border: "1px solid var(--border-light)",
      }}
    >
      {engineeringServices.map((svc, i) => {
        const Icon = svc.icon;

        return (
          <div
            key={svc.number}
            className="svc-card group relative p-8 transition-all duration-300 overflow-hidden"
            style={{
              borderRight:
                i % 2 === 0
                  ? "1px solid var(--border-light)"
                  : "none",
              borderBottom:
                i < 2
                  ? "1px solid var(--border-light)"
                  : "none",
              background: "transparent",
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
              e.currentTarget.style.borderLeft = "";
              e.currentTarget.style.paddingLeft = "";
            }}
          >
            {/* Top sweep */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
              style={{
                background: "var(--secondary)",
              }}
            />

            {/* TOP */}
            <div className="flex items-start gap-5 mb-5">
              <div
                className="shrink-0 w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(33,150,243,0.08)",
                  border: "1px solid var(--border-blue)",
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
                  Engineering Service
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
                  color: "rgba(33,150,243,0.15)",
                }}
              >
                {svc.number}
              </span>
            </div>

            {/* DESCRIPTION */}
            <p
              className="text-sm leading-relaxed mb-6"
              style={{
                color: "var(--text-muted-l)",
              }}
            >
              {svc.description}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              {svc.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-[0.08em] px-3 py-1.5"
                  style={{
                    border:
                      "1px solid var(--border-blue)",
                    color: "var(--secondary)",
                    background:
                      "rgba(33,150,243,0.05)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="py-20"
        style={{ background: "var(--primary)" }}
      >
        <div className="mx-auto px-6 lg:px-16">
          <div
            className="relative overflow-hidden p-10 lg:p-14"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {/* Dot grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h3
                  className="font-bold text-white mb-3"
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 30px)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Need Expert Engineering Support?
                </h3>

                <p
                  className="text-sm leading-relaxed max-w-lg"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  Our engineering team is ready to consult on your telecom
                  architecture, FEED package, or infrastructure gap analysis.
                </p>
              </div>

              <Link
                href="/contact-us"
                className="flex items-center gap-2.5 px-8 py-4 font-bold text-sm shrink-0 transition-all duration-250"
                style={{
                  background: "var(--primary)",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--accent)";
                  e.currentTarget.style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "var(--secondary)";
                  e.currentTarget.style.transform =
                    "translateY(0)";
                }}
              >
                Get in Touch
                <FiArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}