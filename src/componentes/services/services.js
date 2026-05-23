"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiArrowRight,
  FiLayers,
  FiSettings,
  FiCpu,
  FiShield,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Turnkey Solutions",
    slug: "/turnkey-solutions",
    icon: FiLayers,
    description:
      "From concept to commissioning, we deliver seamless turnkey telecom solutions covering design engineering, integration, testing, installation, training, and final handover with single point accountability.",
  },
  {
    number: "02",
    title: "Engineering Services",
    slug: "/engineering-services",
    icon: FiSettings,
    description:
      "Technical consulting, FEED engineering, technology assessment, and infrastructure gap analysis services for mission critical telecom and communication networks.",
  },
  {
    number: "03",
    title: "System Integration Services",
    slug: "/integration-excellence",
    icon: FiCpu,
    description:
      "Industrial grade integration services including cabinet assembly, FAT validation, third party procurement, packing, dispatch, and deployment support.",
  },
  {
    number: "04",
    title: "Eratronics Through Life Care Program",
    slug: "/through-life-care-program",
    icon: FiShield,
    description:
      "Lifecycle support program covering monitoring, maintenance, upgrades, cybersecurity, capacity scaling, and long term telecom infrastructure optimization.",
  },
];

export default function CoreServices() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".service-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--surface-off) 0%, #ffffff 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] rounded-full blur-3xl opacity-30"
        style={{
          background: "var(--glow-blue)",
        }}
      />

      <div className="relative z-10 px-6 lg:px-16">

        {/* Heading */}
        <div className="max-w-3xl mb-20">
          <div className="label-tag mb-5">
            Core Expertise
          </div>

          <h2
            className="font-extrabold leading-tight mb-6"
            style={{
              fontSize: "clamp(34px,4vw,56px)",
              color: "var(--primary)",
              letterSpacing: "-0.03em",
            }}
          >
            Services Built for{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg,var(--secondary),var(--accent))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Critical Infrastructure
            </span>
          </h2>

          <p
            className="text-sm lg:text-base leading-8"
            style={{
              color: "var(--text-muted-l)",
            }}
          >
            Delivering telecom engineering, system integration,
            lifecycle support, and turnkey execution for complex
            industrial environments.
          </p>
        </div>

        {/* Services Layout */}
        <div
          ref={sectionRef}
          className="space-y-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="service-card group relative overflow-hidden"
              >
                <div
                  className="grid lg:grid-cols-[140px_1fr_220px] items-center"
                  style={{
                    borderTop: "1px solid var(--border-light)",
                    borderBottom: "1px solid var(--border-light)",
                  }}
                >

                  {/* Left Number */}
                  <div
                    className="h-full flex items-center justify-center py-10"
                    style={{
                      background: "rgba(33,150,243,0.03)",
                      borderRight: "1px solid var(--border-light)",
                    }}
                  >
                    <span
                      className="font-black leading-none"
                      style={{
                        fontSize: "clamp(42px,5vw,72px)",
                        color: "rgba(33,150,243,0.28)",
                      }}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="px-8 lg:px-12 py-10">

                    <div className="flex items-center gap-4 mb-5">

                      <div
                        className="w-12 h-12 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                        style={{
                          background: "rgba(33,150,243,0.08)",
                          border: "1px solid var(--border-blue)",
                        }}
                      >
                        <Icon
                          size={20}
                          style={{
                            color: "var(--secondary)",
                          }}
                        />
                      </div>

                      <h3
                        className="font-bold"
                        style={{
                          fontSize: "clamp(22px,2vw,32px)",
                          color: "var(--primary)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <p
                      className="max-w-3xl text-sm lg:text-base leading-8"
                      style={{
                        color: "var(--text-muted-l)",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="px-8 py-10 flex lg:justify-center">
                    <Link
                      href={service.slug}
                      className="group/link inline-flex items-center gap-3 text-sm font-bold"
                      style={{
                        color: "var(--secondary)",
                      }}
                    >
                      Know More

                      <div
                        className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 group-hover/link:translate-x-1"
                        style={{
                          border: "1px solid var(--border-blue)",
                        }}
                      >
                        <FiArrowRight size={14} />
                      </div>
                    </Link>
                  </div>

                  {/* Hover Gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(33,150,243,0.03), transparent 40%)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}