"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiArrowRight, FiWifi, FiPhoneCall, FiVideo, FiRadio,
  FiShield, FiMonitor, FiLock, FiServer
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const systems = [
  { icon: FiWifi, name: "OFC Backbone Networks", num: "01" },
  { icon: FiPhoneCall, name: "EPABX Communication", num: "02" },
  { icon: FiVideo, name: "Video Conferencing", num: "03" },
  { icon: FiRadio, name: "UHF / VHF & TETRA", num: "04" },
  { icon: FiMonitor, name: "Passenger Info Systems", num: "05" },
  { icon: FiServer, name: "PAGA Systems", num: "06" },
  { icon: FiShield, name: "CCTV Surveillance", num: "07" },
  { icon: FiLock, name: "Access Control", num: "08" },
];

export default function HomeSystemsTeaser() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 88%", once: true }
      }
    );

    const cards = gridRef.current?.querySelectorAll(".sys-card");
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 24, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.06, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 88%", once: true }
        }
      );
    }
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);


  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0B1D3A 0%, #102347 55%, #0F213F 100%)",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('/system-we-offer.png')",
          filter: "brightness(0.48)",
        }}
      />

      {/* Ultra Light Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,15,28,0.18) 0%, rgba(10,20,40,0.70) 45%, rgba(8,15,30,0.62) 100%)",
        }}
      />



      <div className="relative z-10 px-6 lg:px-16">

        {/* Header */}
        <div
          ref={headerRef}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div className="">
            <div className="label-tag mb-5">
              Systems We Offer
            </div>

            <h2
              className="font-extrabold leading-[1.05]"
              style={{
                fontSize: "clamp(34px, 4vw, 56px)",
                color: "#fff",
                letterSpacing: "-0.03em",
              }}
            >
              Intelligent Telecom &
              <span
                style={{
                  background:
                    "linear-gradient(90deg,var(--secondary),var(--accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                Security Systems
              </span>
            </h2>

            <p
              className="mt-6 text-lg leading-8"
              style={{
                color: "rgba(255,255,255,0.88)",
              }}
            >
              Mission critical telecom infrastructure,
              surveillance, sensing and communication systems
              engineered for Oil & Gas, Power and Metro Rail operations.
            </p>
          </div>

          {/* <Link
            href="/systems-we-offer"
            className="btn-outline self-start lg:self-auto"
          >
            View All Systems
            <FiArrowRight size={14} />
          </Link> */}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {systems.map((sys, i) => {
            const Icon = sys.icon;

            const descriptions = [
              "OFC backbone networks using SDH, MPLS TP, IP MPLS & DWDM technologies.",
              "Integrated IP, digital and analog communication systems for critical operations.",
              "Secure HD collaboration systems with voice tracking and recording support.",
              "Reliable radio communication systems for industrial and metro infrastructure.",
              "Real time passenger information and centralized display systems.",
              "Public address and emergency alarm systems integrated with safety infrastructure.",
              "Advanced surveillance systems with centralized monitoring and analytics.",
              "Role based secure access systems with monitoring and audit capabilities.",
            ];

            return (
              <div
                key={i}

                className="bg-[var(--primary)]/5 sys-card group relative overflow-hidden p-7 transition-all duration-500"
                style={{
                
                  border: "1px solid rgba(255,255,255,0.16)",
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                }}
              >
                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(33,150,243,0.12), transparent 70%)",
                  }}
                />

                {/* Number */}
                <span className="sec-num relative z-10">
                  {sys.num}
                </span>

                {/* Icon */}
                <div
                  className="relative z-10 w-14 h-14 mt-5 mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(33,150,243,0.16), rgba(0,180,216,0.10))",
                    border:
                      "1px solid rgba(33,150,243,0.20)",
                  }}
                >
                  <Icon
                    size={22}
                    style={{
                      color: "var(--secondary)",
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="relative z-10 text-[20px] font-bold leading-snug mb-4"
                  style={{
                    color: "#fff",
                  }}
                >
                  {sys.name}
                </h3>

                {/* Description */}
                <p
                  className="relative z-10 text-sm leading-7"
                  style={{
                    color: "rgba(255,255,255,0.60)",
                  }}
                >
                  {descriptions[i]}
                </p>

                {/* CTA */}
                {/* <div className="relative z-10 mt-8 flex items-center gap-2">
                  <span
                    className="text-xs font-bold uppercase tracking-[0.12em]"
                    style={{
                      color: "var(--secondary)",
                    }}
                  >
                    Explore System
                  </span>

                  <FiArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      color: "var(--secondary)",
                    }}
                  />
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );


}
