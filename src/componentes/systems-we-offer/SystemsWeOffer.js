"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "7+",    label: "Integrated Systems" },
  { value: "5+",    label: "Communication Domains" },
  { value: "24×7",  label: "Mission-Critical Operation" },
  { value: "100%",  label: "Industrial Grade Deployment" },
];


const telecomData = [
{
title: "OFC-Based Backbone Telecom Networks",
description: [
"We design and deploys mission-critical backbone telecom networks built on Optical Fiber Cable (OFC) infrastructure, leveraging proven technologies such as SDH, MPLS-TP, IP/MPLS, and DWDM. These networks deliver high reliability, deterministic performance, and scalable architecture for critical operations.",

"Our solutions are field-proven and engineered for seamless integration with both legacy systems and third-party platforms, including SCADA, RTU, EPABX, CCTV, VCS, UHF/VHF radio, PAGA, and access control systems, ensuring unified, secure, and uninterrupted communication across the enterprise.",

"The backbone is supported by a centralized Network Management System (NMS) offering comprehensive FCAPS (Fault, Configuration, Accounting, Performance, and Security) functionality, enabling end-to-end visibility, control, and proactive network management. All deployed equipment is temperature-hardened and designed to operate reliably in harsh environmental conditions typical of industrial installations.",
],
},

{
title: "Communication Systems",

subSections: [
{
heading: "EPABX System",

paragraphs: [
"We design and deploy integrated EPABX-based communication systems supporting IP, digital, and legacy analog telephony. Our solutions include hazardous-area compliant (Ex-proof) and weatherproof telephones, along with accessories such as acoustic booths and beacon sounders to ensure effective communication in high-noise and critical environments. We also implement dedicated emergency communication systems, particularly suited for metro and other mass transit applications.",
],
},

{
heading: "Video Conferencing Solutions",

paragraphs: [
"Telecom Projects in Oil & Gas and Power sectors often require secure, high-definition audio-visual communication over private networks. Eratronics designs and deploys Video Conferencing Systems (VCS) using proven third-party platforms such as Polycom and Avaya, enabling seamless collaboration across geographically distributed locations.",

"These systems are equipped with voice-tracking cameras, high-fidelity speakers, and intelligent microphones to deliver clear and immersive communication experiences. The solutions also support meeting recording and archival, allowing users to store and retrieve sessions for future reference while ensuring operational continuity.",
],
},
],
},

{
title: "UHF / VHF, TETRA & LTE-R Communication Systems",

description: [
"Reliable, real-time communication is critical for safe and efficient operations in geographically challenging and mission-critical environments. We design and deploy robust radio communication systems using UHF/VHF, TETRA, and LTE-R technologies, tailored to specific operational requirements.",
],

subSections: [
{
heading: "UHF / VHF Radio Systems",

paragraphs: [
"For pipeline networks where OFC deployment is impractical, such as water crossings, UHF/VHF radio networks provide dependable data/voice communication.",
],
},

{
heading: "TETRA Communication Systems",

bullets: [
"For high-density and safety-critical environments such as metro rail systems, TETRA-based networks offer secure, digital trunked radio communication.",
"Continuous communication between train operators (metro pilots) and the Operations Control Center (OCC).",
"Instant group calling and priority-based communication during normal and emergency scenarios.",
"Dedicated handheld radios for key personnel to ensure coordinated emergency response.",
],
},

{
heading: "LTE-R (Long Term Evolution , Railways)",

paragraphs: [
"For next-generation railway communication, LTE-R provides high-bandwidth, IP-based communication supporting voice, video, and data applications, enabling advanced operational control and future-ready digital railway infrastructure.",
],
},

{
heading: "Passenger Information & Display Systems (PIDS)",

paragraphs: [
"Passenger Information & Display Systems (PIDS) are designed to deliver accurate, real-time information to passengers across stations and onboard environments, enhancing overall travel experience and operational efficiency.",

"With centralized monitoring and control, PIDS ensures Real time, consistent, reliable, and timely dissemination of Emergency information, improving passenger convenience while supporting smooth and safe transit operations.",
],
},
],
},

{
title: "Public Address & General Alarm Systems (PAGA)",

description: [
"Public Address & General Alarm (PAGA) Systems are engineered for safety-critical environments, enabling reliable, real-time zone-based communication for routine operations as well as emergency situations. Integration with fire & gas systems, SCADA, and emergency shutdown systems for automated alerts.",
],
},

{
title: "CCTV Surveillance Systems",

description: [
"We design and deploy advanced CCTV surveillance systems to provide continuous monitoring, enhanced situational awareness, and improved security across Oil & Gas facilities and Metro environments.",
],

subSections: [
{
heading: "Our solutions offer:",

bullets: [
"High-definition video monitoring with centralized viewing and recording",
"Intelligent video analytics for perimeter protection, intrusion detection, and incident investigation",
"Scalable architecture covering indoor, outdoor, and critical infrastructure areas",
"Integration with command and control systems for real-time monitoring and faster response",
],

footer:
"These systems enable proactive security management, helping operators detect, assess, and respond to potential threats effectively.",
},
],
},

{
title: "Access Control Systems (ACS)",

description: [
"Our Access Control Systems (ACS) ensure secure and controlled entry to critical areas, safeguarding personnel, assets, and infrastructure in high-security environments.",
],

subSections: [
{
heading: "Key capabilities include:",

bullets: [
"Role-based access control using smart cards, biometrics, or multi-factor authentication",
"Centralized access management with real-time monitoring and audit trails",
"Integration with surveillance, fire & safety, and building management systems",
"Scalable solutions for stations, depots, control rooms, and industrial facilities",
],

footer:
"ACS solutions enhance security governance by ensuring that only authorized personnel gain access, while maintaining complete visibility and traceability of movement across facilities.",
},
],
},
];
function ContentBlock({ item, index }) {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0, y: 25 }, {
      opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div
      ref={ref}
      className="overflow-hidden"
      style={{ border: "1px solid var(--border-light)" }}
    >
      {/* Section heading */}
      <div
        className="px-8 lg:px-10 py-5"
        style={{
          borderLeft: "4px solid var(--secondary)",
          background: "rgba(33,150,243,0.04)",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        <span className="block text-[10px] font-bold uppercase tracking-[0.15em] mb-1" style={{ color: "var(--text-muted-l)" }}>
          System {String(index + 1).padStart(2, "0")}
        </span>
        <h2
          className="font-extrabold leading-snug"
          style={{ fontSize: "clamp(18px, 2.2vw, 26px)", color: "var(--primary)", letterSpacing: "-0.02em" }}
        >
          {item.title}
        </h2>
      </div>

      <div className="px-8 lg:px-10 py-8 lg:py-10" style={{ background: "var(--surface-light)" }}>
        {item.description && (
          <div className="flex flex-col gap-4 mb-6">
            {item.description.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>{para}</p>
            ))}
          </div>
        )}

        {item.subSections && (
          <div className="flex flex-col gap-8">
            {item.subSections.map((sub, idx) => (
              <div
                key={idx}
                className="pl-6 lg:pl-8"
                style={{ borderLeft: "2px solid var(--border-blue)" }}
              >
                <h3
                  className="font-bold mb-4 leading-snug"
                  style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "var(--secondary)" }}
                >
                  {sub.heading}
                </h3>

                {sub.paragraphs && (
                  <div className="flex flex-col gap-3">
                    {sub.paragraphs.map((para, i) => (
                      <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>{para}</p>
                    ))}
                  </div>
                )}

                {sub.bullets && (
                  <ul className="flex flex-col gap-2.5">
                    {sub.bullets.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
                        <span className="mt-1.5 w-1 h-1 shrink-0" style={{ background: "var(--secondary)" }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sub.footer && (
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted-l)", fontStyle: "italic" }}>{sub.footer}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CriticalTelecomSystems() {
  const heroRef  = useRef(null);
  const statsRef = useRef(null);
  const ctaRef   = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: heroRef.current, start: "top 85%", once: true },
    });

    const statEls = statsRef.current?.querySelectorAll(".stat-cell");
    if (statEls) {
      gsap.fromTo(statEls, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: statsRef.current, start: "top 85%", once: true },
      });
    }

    gsap.fromTo(ctaRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ctaRef.current, start: "top 85%", once: true },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section style={{ background: "var(--surface-off)" }}>

      {/* HERO */}
      <div style={{ background: "var(--surface-off)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="mx-auto px-6 lg:px-16 py-20 lg:py-24">
          <div ref={heroRef} className="max-w-3xl">
            <div className="label-tag mb-6">Telecom Infrastructure Systems</div>
            <h2
              className="font-extrabold leading-tight mb-6"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.02em" }}
            >
              Mission Critical Telecom,{" "}
              <span style={{ color: "var(--secondary)" }}>Communication & Security Systems</span>
            </h2>
            <div className="h-px w-14 mb-6" style={{ background: "var(--secondary)" }} />
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
              End-to-end integrated solutions for OFC backbone networks, communication systems,
              surveillance, and safety infrastructure across Oil & Gas, Metro Rail, Power, and Industrial sectors.
            </p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div ref={statsRef} style={{ background: "var(--primary)" }}>
        <div className="mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-cell px-8 py-10 text-center"
                style={{ borderRight: i < 3 ? "1px solid var(--border-dark)" : "none" }}
              >
                <p className="text-4xl font-black mb-1" style={{ color: "var(--secondary)" }}>{stat.value}</p>
                <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto px-6 lg:px-16 py-20">
        <div className="flex flex-col gap-6">
          {telecomData.map((item, index) => (
            <ContentBlock key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div ref={ctaRef} className="py-20" style={{ background: "var(--primary)" }}>
        <div className="mx-auto px-6 lg:px-16">
          <div className="relative overflow-hidden p-10 lg:p-14" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <div className="label-tag mb-4">Ready to Deploy</div>
                <h3 className="font-bold text-white mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 30px)", letterSpacing: "-0.02em" }}>
                  Build fully integrated telecom & security infrastructure
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  From backbone OFC networks to surveillance & access control systems.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="flex items-center gap-2.5 px-8 py-4 font-bold text-sm shrink-0 transition-all duration-250"
                style={{ background: "var(--primary)", color: "white" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--secondary)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Get in Touch <FiArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
