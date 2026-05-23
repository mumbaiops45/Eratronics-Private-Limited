"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const data = {
  tag: "Metro Rail",

  heading:
    "Advanced Communication Infrastructure for Modern Metro Rail Networks",

  intro:
    "We deliver reliable and secure communication systems that support safe, efficient, and uninterrupted metro rail operations. Our solutions are engineered to enable real time coordination, passenger safety, and seamless connectivity across stations, tunnels, depots, and control centers.",

  solutions: [
    {
      title: "Station Systems",

      image: "/Metro Rail/Station Systems.png",

      paragraphs: [
        "At station level, we provide integrated communication and surveillance systems that enhance passenger safety and Operational control. Our solutions include CCTV, Public Address (PA) systems, Passenger Information Systems (PIS), and structured network infrastructure.",

        "Designed for high footfall environments, these systems enable real time monitoring, effective crowd management, and clear communication during both normal and emergency conditions.",
      ],

      points: [
        "CCTV surveillance systems",
        "Public Address (PA) systems",
        "Passenger Information Systems (PIS)",
        "Structured network infrastructure",
      ],
    },

    {
      title: "Line & Tunnel Systems",

      image: "/Metro Rail/Line & Tunnel Systems.png",

      paragraphs: [
        "For trackside and tunnel environments, we deploy robust communication networks built on Optical Fiber Cable (OFC) backbones, ensuring high speed, low latency connectivity across the corridor.",

        "Our solutions include OFC based intrusion detection systems for trackside security and Distributed Temperature Sensing (DTS) applications for tunnel safety, enabling early detection of abnormal conditions such as unauthorized access or fire incidents.",

        "We also implement leaky coaxial and wireless communication systems to ensure continuous connectivity between moving trains and control centers, even in confined underground environments.",
      ],

      points: [
        "Optical Fiber Cable (OFC) backbone",
        "Distributed Temperature Sensing (DTS)",
        "Trackside intrusion detection systems",
        "Leaky coaxial communication systems",
      ],
    },

    {
      title: "Control & Operations",

      image: "/Metro Rail/Control & Operations.jpg",

      paragraphs: [
        "At the core of metro operations, we enable centralized monitoring and control through integrated communication platforms. Our solutions support Operations Control Centers (OCC), enabling real time coordination across stations, trains, and field assets.",

        "We provide OFC based communication backbones for seamless integration with signaling systems, SCADA, and network management platforms ensuring efficient operations, rapid incident response, and overall system reliability.",
      ],

      points: [
        "Operations Control Center (OCC)",
        "SCADA integration",
        "Centralized communication platforms",
        "Real time operational coordination",
      ],
    },

    {
      title: "Depot & Support Infrastructure",

      image: "/Metro Rail/Depot & Support Infrastructure.jpg",

      paragraphs: [
        "For depots and maintenance facilities, we deliver communication systems that support operational efficiency, safety, and asset management. This includes surveillance systems, internal communication networks, and connectivity infrastructure aligned with the mainline network.",

        "Our solutions ensure seamless integration between depot operations and the broader metro ecosystem, enabling coordinated functioning and efficient maintenance workflows.",
      ],

      points: [
        "Depot surveillance systems",
        "Internal communication networks",
        "Maintenance facility connectivity",
        "Integrated metro ecosystem",
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
        <div className="label-tag mb-4">Urban Transit Infrastructure</div>
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
            style={{ background: "rgba(33,150,243,0.85)", color: "white" }}>
            Metro Rail
          </span>
          <h4 className="text-white font-extrabold text-xl leading-tight">{solution.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default function MetroRailSolutions() {
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

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24">
        <div ref={introRef}>
          <div className="label-tag mb-6">{data.tag}</div>
          <h2
            className="font-extrabold leading-tight mb-6"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "var(--primary)", letterSpacing: "-0.02em", maxWidth: "900px" }}
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
