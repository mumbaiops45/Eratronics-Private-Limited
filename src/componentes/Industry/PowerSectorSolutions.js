"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

// const data = {
//   tag: "Power Sector",
//   heading: "Reliable Telecom Solutions for Modern Power Infrastructure",
//   intro: "We deliver reliable and secure communication systems that support generation, transmission, and distribution networks across the power sector. Our solutions are designed to enable real time monitoring, grid stability, and efficient energy management, while ensuring high availability and resilience for critical infrastructure.",
//   solutions: [
//     {
//       title: "Generation Solutions",
//       image: "/Power Sector/Generation Solutions.png",
//       paragraphs: [
//         "In power generation facilities, uninterrupted communication is essential for safe and efficient plant operations. Eratronics provides integrated telecom and surveillance systems that support control room operations, enabling seamless coordination across plant units.",
//         "Our solutions include high reliability communication backbones, CCTV, PA/GA systems, and network infrastructure designed to operate in demanding industrial environments.",
//       ],
//       points: ["Integrated plant communication", "Industrial surveillance systems", "PA/GA & control room integration", "Redundant communication architecture"],
//     },
//     {
//       title: "Transmission Solutions",
//       image: "/Power Sector/Transmission Solutions.png",
//       paragraphs: [
//         "For transmission networks, we deploy robust communication systems that form the backbone of grid operations. Our expertise includes optical fiber networks such as OPGW/ADSS, along with SDH/MPLS based communication systems to support SCADA, teleprotection, and load dispatch functions.",
//         "These systems are engineered for ultra high availability and low latency, ensuring reliable data exchange between substations and control centers, which is critical for grid stability and fault management.",
//       ],
//       points: ["OPGW & ADSS fiber networks", "SCADA & teleprotection support", "Ultra low latency communication", "Substation connectivity systems"],
//     },
//   ],
// };
const data = {
  tag: "Power Sector",

  heading: "Reliable Telecom Solutions for Modern Power Infrastructure",

  intro:
    "We deliver reliable and secure communication systems that support generation, transmission, and distribution networks across the power sector. Our solutions are designed to enable real time monitoring, grid stability, and efficient energy management, while ensuring high availability and resilience for critical infrastructure. We also help utilities improve operational efficiency, network visibility, and seamless coordination across power facilities.",

  solutions: [
    {
      title: "Generation Solutions",

      image: "/Power Sector/Generation Solutions.png",

      paragraphs: [
        "In power generation facilities, uninterrupted communication is essential for safe and efficient plant operations. Eratronics provides integrated telecom and surveillance systems that support control room operations, enabling seamless coordination across plant units. Our systems improve operational visibility and support reliable plant communication in critical environments.",

        "Our solutions include high reliability communication backbones, CCTV, PA/GA systems, and network infrastructure designed to operate in demanding industrial environments. We ensure stable performance, secure connectivity, and continuous communication for uninterrupted plant operations.",
      ],

      points: [
        "Integrated plant communication",
        "Industrial surveillance systems",
        "PA/GA & control room integration",
        "Redundant communication architecture",
      ],
    },

    {
      title: "Transmission Solutions",

      image: "/Power Sector/Transmission Solutions.png",

      paragraphs: [
        "For transmission networks, we deploy robust communication systems that form the backbone of grid operations. Our expertise includes optical fiber networks such as OPGW/ADSS, along with SDH/MPLS based communication systems to support SCADA, teleprotection, and load dispatch functions. These systems enhance reliability and ensure efficient coordination across substations and control centers.",

        "These systems are engineered for ultra high availability and low latency, ensuring reliable data exchange between substations and control centers, which is critical for grid stability and fault management. Our infrastructure is designed to support scalable, future ready, and secure power communication networks.",
      ],

      points: [
        "OPGW & ADSS fiber networks",
        "SCADA & teleprotection support",
        "Ultra low latency communication",
        "Substation connectivity systems",
      ],
    },
  ],
};
function SolutionRow({ solution, index, isLast }) {
  const rowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(rowRef.current, { opacity: 0, y: 60 }, {
      opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: rowRef.current, start: "top 85%", once: true },
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const reversed = index % 2 !== 0;

  return (
    <div
      ref={rowRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-0"
      style={{ borderBottom: isLast ? "none" : "1px solid var(--border-light)" }}
    >
      <div
        className={`p-10 lg:p-14 flex flex-col justify-center ${reversed ? "lg:order-2" : ""}`}
        style={{
          borderRight: reversed ? "none" : "1px solid var(--border-light)",
          borderLeft: reversed ? "1px solid var(--border-light)" : "none",
          background: "var(--surface-light)",
        }}
      >
        <div className="label-tag mb-4">Power Infrastructure</div>
        <h3
          className="font-extrabold leading-tight mb-4"
          style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "var(--primary)", letterSpacing: "-0.02em" }}
        >
          {solution.title}
        </h3>
        <div className="h-0.5 w-10 mb-6" style={{ background: "var(--secondary)" }} />

        {solution.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed mb-4 last:mb-8" style={{ color: "var(--text-muted-l)" }}>{p}</p>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {solution.points.map((pt, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-3"
              style={{ border: "1px solid var(--border-light)", background: "var(--surface-off)" }}
            >
              <FiArrowRight size={12} style={{ color: "var(--secondary)", flexShrink: 0 }} />
              <span className="text-sm font-medium" style={{ color: "var(--text-muted-l)" }}>{pt}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`relative ${reversed ? "lg:order-1" : ""}`} style={{ minHeight: "400px" }}>
        <Image src={solution.image} alt={solution.title} fill className="object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(11,29,58,0.65) 0%, rgba(11,29,58,0.15) 50%, transparent 100%)" }}
        />
        <div className="absolute bottom-6 left-6 z-10">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 mb-2"
            style={{ background: "var(--secondary)", color: "white" }}>
            Power Sector
          </span>
          <h4 className="text-white font-extrabold text-xl leading-tight">{solution.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default function PowerSectorSolutions() {
  const introRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(introRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: introRef.current, start: "top 85%", once: true },
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="overflow-hidden" style={{ background: "var(--surface-off)" }}>

      <div className="mx-auto px-6 lg:px-16 py-24">
        <div ref={introRef}>
          <div className="label-tag mb-6">{data.tag}</div>
          <h2
            className="font-extrabold leading-tight mb-6"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "var(--primary)", letterSpacing: "-0.02em", maxWidth: "780px" }}
          >
            {data.heading}
          </h2>
          <div className="h-px w-14 mb-7" style={{ background: "var(--secondary)" }} />
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "var(--text-muted-l)" }}>
            {data.intro}
          </p>
        </div>
      </div>

      <div style={{ border: "1px solid var(--border-light)" }}>
        {data.solutions.map((solution, i) => (
          <SolutionRow
            key={solution.title}
            solution={solution}
            index={i}
            isLast={i === data.solutions.length - 1}
          />
        ))}
      </div>

    </section>
  );
}
