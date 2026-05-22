"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FiShield,
    FiActivity,
    FiThermometer,
    FiRadio,
    FiMap,
    FiAlertTriangle,
    FiArrowRight,
    FiCheck,
} from "react-icons/fi";

const stats = [
    { value: "24×7", label: "Real-Time Monitoring" },
    { value: "2", label: "Core Sensing Technologies" },
    { value: "100km+", label: "Long Distance Coverage" },
    { value: "AI", label: "Smart Event Detection" },
];

// const systems = [
//     {
//         id: 1,
//         icon: FiActivity,
//         category: "DAS",
//         title: "Distributed Acoustic Sensing (DAS)",
//         desc:
//             "DAS converts a standard fiber-optic cable into a continuous acoustic/vibration sensor, acting like thousands of virtual microphones along its length. It enables real-time detection of events, movement, and disturbances without installing discrete sensors.",
//         features: [
//             "Pipeline Intrusion & TPI Detection",
//             "Leak & Rupture Monitoring",
//             "Train Tracking & Positioning",
//         ],
//     },

//     {
//         id: 2,
//         icon: FiShield,
//         category: "DAS Applications",
//         title: "Oil & Gas Pipeline Monitoring",
//         desc:
//             "DAS enables real-time protection of critical pipeline infrastructure by detecting intrusion, leakage, rupture, and external interference with high accuracy.",
//         features: [
//             "Intrusion & Third-Party Interference (TPI)",
//             "Pipeline Leak & Rupture Detection",
//             "Heated Pipeline Temperature Monitoring",
//             "Pig Tracking",
//         ],
//     },

//     {
//         id: 3,
//         icon: FiRadio,
//         category: "Metro Applications",
//         title: "Railway & Metro Infrastructure Monitoring",
//         desc:
//             "Advanced DAS-based monitoring ensures safe metro operations through continuous tracking of trains, rails, tunnels, and underground infrastructure conditions.",
//         features: [
//             "Train Tracking & Speed Estimation",
//             "Rail Crack & Track Condition Monitoring",
//             "Tunnel Movement & Water Leakage Detection",
//             "Track Intrusion Detection",
//         ],
//     },

//     {
//         id: 4,
//         icon: FiThermometer,
//         category: "DTS",
//         title: "Distributed Temperature Sensing (DTS)",
//         desc:
//             "DTS uses Raman scattering in fiber-optic cables to monitor temperature along long distances in real-time, detecting hotspots, fire risks, and insulation failures.",
//         features: [
//             "Hotspot Detection",
//             "Dynamic Line Rating (DLR)",
//             "Fire, Smoke & Arc Detection",
//         ],
//     },

//     {
//         id: 5,
//         icon: FiMap,
//         category: "Power Sector Applications",
//         title: "Power Transmission Monitoring",
//         desc:
//             "DTS-based monitoring improves reliability of power networks by enabling real-time thermal visibility and fault detection across transmission systems.",
//         features: [
//             "Dynamic Line Rating (DLR)",
//             "Underground Cable Monitoring",
//             "Hotspot Detection",
//             "Fire & Arc Fault Monitoring",
//         ],
//     },

//     {
//         id: 6,
//         icon: FiAlertTriangle,
//         category: "Tunnel & Safety",
//         title: "Metro & Tunnel Safety Systems",
//         desc:
//             "Integrated DAS & DTS systems provide structural health monitoring, fire detection, and geotechnical safety for tunnels and underground infrastructure.",
//         features: [
//             "Fire & Smoke Detection",
//             "Ventilation Monitoring",
//             "Structural Health Monitoring",
//             "Water Ingress Detection",
//         ],
//     },
// ];
const sensingData = [
  {
    title: "Distributed Acoustic Sensing (DAS)",

    description: [
      "DAS converts a standard fiber-optic cable into a continuous acoustic / vibration sensor, acting like thousands of virtual microphones along its length. It enables real-time detection of events, movement, and disturbances without installing discrete sensors.",
    ],

    subSections: [
      {
        heading: "DAS Applications in O&G",

        bullets: [
          "Intrusion & Third-party Interference (TPI) prevents damage or theft to the pipeline",
          "Pipeline rupture or leak detection",
          "Temperature Monitoring of pipeline wall (Heated Pipelines)",
          "Pig Tracking",
        ],
      },

      {
        heading: "DAS Application in Metro System",

        bullets: [
          "Train Tracking & Positioning, Real-time train location, Train speed estimation.",
          "Rail & Track condition monitoring, Wheel flats, Broken sleeper/ties, Rail cracks.",
          "Tunnel & Infrastructure Monitoring, Ground movement & settlement detection, Water ingress or leakage in tunnel.",
          "Security & Intrusion Detection, Unauthorized access to track, Tampering with cable duct.",
        ],
      },
    ],
  },

  {
    title: "Distributed Temperature Tensing (DTS)",

    description: [
      "DTS uses Raman Scattering in fiber-optic cables to continuously monitor temperature along power lines. It provides real-time thermal data for optimizing loading, improving reliability, and detecting faults early by identifying hotspots, insulation degradation, and temperature related issues.",
    ],

    subSections: [
      {
        heading: "DTS Application in Power Sector",

        bullets: [
          "Dynamic Line Rating (DLR)",
          "Hot Spot Detection",
          "Underground Cable Monitoring",
          "Fire, Smoke, & Arc Detection",
        ],
      },

      {
        heading: "DTS Application in Metro / Highway Tunnel",

        bullets: [
          "Fire Detection & Safety Monitoring",
          "Cable & Utility Tunnel monitoring",
          "Ventilation Management",
          "Structural health & Geotechnical Monitoring",
        ],
      },
    ],
  },
];
export default function IntrusionProtectionSystems() {
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
                            Intrusion & Sensing Systems
                        </span>

                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
                            Advanced Fiber Optic
                            <span className="block text-[var(--primary)] mt-1">
                                DAS & DTS Monitoring Systems
                            </span>
                        </h2>

                        <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
                            Real-time distributed sensing technologies for intrusion detection,
                            pipeline monitoring, railway safety, and critical infrastructure protection.
                        </p>

                    </motion.div>

                </div>

            </div>

            {/* STATS */}
            <div className="bg-[var(--primary)] border-b border-gray-100">

                <div className="max-w-7xl mx-auto px-6 lg:px-16">

                    <div className="grid grid-cols-2 lg:grid-cols-4">

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

            {/* GRID */}
            {/* <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-24">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {systems.map((sys, i) => {

                        const Icon = sys.icon;

                        return (
                            <motion.article
                                key={sys.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: i * 0.07 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-2xl border border-gray-200 p-7 flex flex-col hover:border-[var(--primary)]/30 hover:shadow-xl hover:shadow-[var(--primary)]/5 transition-all duration-300"
                            >

                                <span className="absolute top-0 left-6 right-6 h-[2px] bg-[var(--primary)] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                                <div className="flex items-start justify-between mb-6">

                                    <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/8 flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors duration-300">

                                        <Icon
                                            size={20}
                                            className="text-[var(--primary)] group-hover:text-white"
                                        />

                                    </div>

                                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest pt-1">
                                        {sys.category}
                                    </span>

                                </div>

                                <h3 className="text-[15px] font-bold text-gray-900 mb-3 group-hover:text-[var(--primary)]">
                                    {sys.title}
                                </h3>

                                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                                    {sys.desc}
                                </p>

                                <ul className="space-y-2.5 mb-7">

                                    {sys.features.map((feat, fi) => (
                                        <li key={fi} className="flex items-center gap-2.5">

                                            <span className="w-4 h-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                                                <FiCheck size={10} className="text-[var(--primary)]" />
                                            </span>

                                            <span className="text-[13px] text-gray-600 font-medium">
                                                {feat}
                                            </span>

                                        </li>
                                    ))}

                                </ul>

                                <div className="flex items-center gap-2 text-[13px] font-semibold text-[var(--primary)] group-hover:gap-3 transition-all pt-5 border-t border-gray-100">
                                    Explore System
                                    <FiArrowRight size={13} />
                                </div>

                            </motion.article>
                        );
                    })}

                </div>

            </div> */}
            <section className="bg-white py-14 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">

    <div className="space-y-10 lg:space-y-14">

      {sensingData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-hidden"
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
                                Smart Infrastructure Monitoring
                            </p>

                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                                Protect critical assets with real-time fiber sensing intelligence
                            </h3>

                            <p className="text-white/50 text-sm">
                                Deploy DAS & DTS solutions for predictive monitoring, intrusion detection, and safety assurance.
                            </p>

                        </div>

                        <Link
                            href="/contact-us"
                            className="inline-flex bg-[var(--secondary)] items-center gap-2 text-[var(--primary)] font-semibold text-sm px-7 py-3.5 rounded-xl"
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