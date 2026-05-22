"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiWifi,
  FiPhoneCall,
  FiVideo,
  FiRadio,
  FiMonitor,
  FiServer,
  FiShield,
  FiLock,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

const stats = [
  { value: "7+", label: "Integrated Systems" },
  { value: "5+", label: "Communication Domains" },
  { value: "24×7", label: "Mission-Critical Operation" },
  { value: "100%", label: "Industrial Grade Deployment" },
];

// const systems = [
//   {
//     id: 1,
//     icon: FiWifi,
//     category: "Backbone Network",
//     title: "OFC-Based Backbone Telecom Networks",
//     desc:
//       "We design and deploy mission-critical backbone telecom networks built on Optical Fiber Cable (OFC) infrastructure, leveraging proven technologies such as SDH, MPLS-TP, IP/MPLS, and DWDM. These networks deliver high reliability, deterministic performance, and scalable architecture for critical operations.",
//     features: [
//       "Seamless integration with SCADA, RTU, EPABX, CCTV, VCS, UHF/VHF, PAGA, Access Control",
//       "Centralized NMS with FCAPS (Fault, Configuration, Accounting, Performance, Security)",
//       "Temperature-hardened industrial-grade deployment for harsh environments",
//     ],
//   },

//   {
//     id: 2,
//     icon: FiPhoneCall,
//     category: "Communication Systems",
//     title: "Communication Systems",
//     desc:
//       "We design integrated communication ecosystems ensuring reliable, real-time communication across industrial and metro environments.",
//     features: [
//       "EPABX System (IP / Digital / Analog)",
//       "Video Conferencing Solutions",
//       "Emergency Communication Systems",
//     ],
//   },

//   {
//     id: 3,
//     icon: FiVideo,
//     category: "EPABX & VCS",
//     title: "EPABX System & Video Conferencing Solutions",
//     desc:
//       "Industrial-grade communication systems designed for secure and high-quality voice and video communication over private networks.",
//     features: [
//       "Hazardous-area compliant EPABX (Ex-proof & weatherproof)",
//       "Acoustic booths, beacon sounders, emergency telephony",
//       "Polycom & Avaya based Video Conferencing Systems",
//       "Voice tracking cameras, microphones, speakers",
//       "Meeting recording & archival for operational continuity",
//     ],
//   },

//   {
//     id: 4,
//     icon: FiRadio,
//     category: "Radio Communication",
//     title: "UHF / VHF, TETRA & LTE-R Communication Systems",
//     desc:
//       "Mission-critical communication systems designed for pipelines, metro rail, and railway operations ensuring uninterrupted connectivity.",
//     features: [
//       "UHF/VHF Radio Systems for pipelines & water crossings",
//       "TETRA for metro rail: secure trunked communication",
//       "OCC coordination & emergency group calling",
//       "LTE-R next-gen railway communication (voice, video, data)",
//     ],
//   },

//   {
//     id: 5,
//     icon: FiMonitor,
//     category: "Passenger Systems",
//     title: "Passenger Information & Display Systems (PIDS)",
//     desc:
//       "Real-time passenger information systems ensuring accurate, timely and centralized communication across transit environments.",
//     features: [
//       "Real-time passenger information display",
//       "Centralized monitoring & control system",
//       "Emergency information broadcasting",
//       "Improved passenger convenience & operational safety",
//     ],
//   },

//   {
//     id: 6,
//     icon: FiServer,
//     category: "Safety Systems",
//     title: "Public Address & General Alarm (PAGA)",
//     desc:
//       "Safety-critical communication systems designed for real-time emergency alerts and operational announcements.",
//     features: [
//       "Zone-based communication system",
//       "Integration with SCADA, Fire & Gas systems",
//       "Emergency shutdown system integration",
//       "Automated alert generation for critical events",
//     ],
//   },

//   {
//     id: 7,
//     icon: FiShield,
//     category: "Surveillance",
//     title: "CCTV Surveillance Systems",
//     desc:
//       "Advanced surveillance solutions for continuous monitoring and enhanced security across industrial and metro environments.",
//     features: [
//       "HD video monitoring with centralized control",
//       "AI-based analytics for intrusion detection",
//       "Perimeter protection & incident investigation",
//       "Scalable deployment for critical infrastructure",
//     ],
//   },

//   {
//     id: 8,
//     icon: FiLock,
//     category: "Security",
//     title: "Access Control Systems (ACS)",
//     desc:
//       "Advanced access control systems ensuring secure entry management for high-security environments.",
//     features: [
//       "Role-based access (Smart card, biometric, MFA)",
//       "Centralized monitoring & audit trails",
//       "Integration with fire, safety & surveillance systems",
//       "Deployment for stations, depots, control rooms",
//     ],
//   },
// ];
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

export default function CriticalTelecomSystems() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <div className="bg-[#F8FAFD] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--primary)] bg-[var(--primary)]/8 border border-[var(--primary)]/15 px-4 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
              Telecom Infrastructure Systems
            </span>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              Mission Critical
              <span className="block text-[var(--primary)] mt-1">
                Telecom, Communication & Security Systems
              </span>
            </h2>

            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              End-to-end integrated solutions for OFC backbone networks,
              communication systems, surveillance, and safety infrastructure
              across Oil & Gas, Metro Rail, Power, and Industrial sectors.
            </p>
          </motion.div>
        </div>
      </div>

      {/* STATS */}
      <div className="bg-[var(--primary)] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 ">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="px-8 py-8 text-center"
              >
                <p className="text-3xl lg:text-4xl font-black text-[var(--secondary)] mb-1">
                  {stat.value}
                </p>
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-white py-14 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">

          <div className="space-y-10 lg:space-y-14">

            {telecomData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=" overflow-hidden"
              >

                {/* Heading */}
                <div className="inline-block border-l-[5px] border-[var(--primary)] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent px-5 sm:px-5 lg:px-5 py-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                    {item.title}
                  </h2>
                </div>

                <div className="px-5 sm:px-7 lg:px-10 py-6 lg:py-8">

                  {/* Main Paragraphs */}
                  {item.description && (
                    <div className="space-y-5">
                      {item.description.map((para, i) => (
                        <p
                          key={i}
                          className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Sub Sections */}
                  {item.subSections && (
                    <div className="mt-4 space-y-8">

                      {item.subSections.map((sub, idx) => (
                        <div
                          key={idx}
                          className="pl-4 sm:pl-6 lg:pl-10 border-l border-gray-200"
                        >

                          {/* Sub Heading */}
                          <h3 className="text-lg sm:text-xl font-bold text-[var(--secondary)] mb-4 leading-snug">
                            {sub.heading}
                          </h3>

                          {/* Paragraphs */}
                          {sub.paragraphs && (
                            <div className="space-y-4">
                              {sub.paragraphs.map((para, i) => (
                                <p
                                  key={i}
                                  className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed"
                                >
                                  {para}
                                </p>
                              ))}
                            </div>
                          )}

                          {/* Bullet Points */}
                          {sub.bullets && (
                            <ul className="space-y-3">
                              {sub.bullets.map((point, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed"
                                >
                                  <span className="w-2 h-2 rounded-full bg-[var(--secondary)] mt-2 shrink-0" />

                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Footer Text */}
                          {sub.footer && (
                            <p className="mt-5 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                              {sub.footer}
                            </p>
                          )}
                        </div>
                      ))}

                    </div>
                  )}

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-[var(--primary)] px-8 lg:px-16 py-14 lg:py-16"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[var(--primary)]/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-[var(--primary)]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-widest text-white/40 mb-4">
                Ready to Deploy
              </p>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Build fully integrated telecom & security infrastructure
              </h3>

              <p className="text-white/50 text-sm">
                From backbone OFC networks to surveillance & access control systems.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[var(--secondary)] text-[var(--primary)] font-semibold text-sm px-7 py-3.5 rounded-xl"
            >
              Get in Touch
              <FiArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}