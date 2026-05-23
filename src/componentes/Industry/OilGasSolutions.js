"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const data = {
  tag: "Oil & Gas Industry",
  heading: "Reliable Telecom Solutions for Critical Energy Operations",
  intro: "We deliver advanced communication and monitoring solutions designed to support the full spectrum of upstream, midstream, and downstream operations. Our systems are engineered to enhance safety, ensure operational continuity, and enable seamless, real time connectivity across critical energy infrastructure.",
  solutions: [
    {
      title: "Upstream Solutions",
      image: "/Oil & Gas Industry/Upstream Solutions.png",
      paragraphs: [
        "In upstream environments, where operations are often remote and hazardous, reliable communication is essential. Eratronics provides robust data transmission systems that support control room operations, enabling secure wireless communication and real time remote surveillance.",
        "Our solutions are designed for both offshore and onshore deployments, with high availability architectures and backup power integration to ensure uninterrupted operation even during power outages.",
      ],
      points: ["Remote surveillance systems", "Secure wireless communication", "Backup power integration", "High availability architecture"],
    },
    {
      title: "Midstream Solutions",
      image: "/Oil & Gas Industry/Midstream Solutions.png",
      paragraphs: [
        "For midstream operations, we deliver integrated communication infrastructure that supports pipeline monitoring and control. Our expertise includes deployment of unified communication systems, along with reliable backbones for SCADA, CCTV, and other critical applications.",
        "We also design and implement communication networks for crude oil and gas pipelines, both intrastate and cross country ensuring scalability and future readiness.",
      ],
      points: ["Pipeline monitoring networks", "SCADA & CCTV integration", "Cross country communication systems", "Future ready infrastructure"],
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
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}
      style={{ borderBottom: isLast ? "none" : "1px solid var(--border-light)" }}
    >
      {/* Content panel */}
      <div
        className={`p-10 lg:p-14 flex flex-col justify-center ${reversed ? "lg:order-2" : ""}`}
        style={{
          borderRight: reversed ? "none" : "1px solid var(--border-light)",
          borderLeft: reversed ? "1px solid var(--border-light)" : "none",
          background: "var(--surface-light)",
        }}
      >
        <div className="label-tag mb-4">Energy Infrastructure</div>
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
              className="flex items-center gap-3 px-4 py-3 transition-all duration-200"
              style={{ border: "1px solid var(--border-light)", background: "var(--surface-off)" }}
            >
              <FiArrowRight size={12} style={{ color: "var(--secondary)", flexShrink: 0 }} />
              <span className="text-sm font-medium" style={{ color: "var(--text-muted-l)" }}>{pt}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image panel */}
      <div className={`relative h-80 lg:h-auto ${reversed ? "lg:order-1" : ""}`} style={{ minHeight: "400px" }}>
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(11,29,58,0.65) 0%, rgba(11,29,58,0.15) 50%, transparent 100%)" }}
        />
        {/* Bottom label */}
        <div className="absolute bottom-6 left-6 z-10">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 mb-2"
            style={{ background: "rgba(33,150,243,0.85)", color: "white" }}
          >
            Oil & Gas
          </span>
          <h4 className="text-white font-extrabold text-xl leading-tight">{solution.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default function OilGasSolutions() {
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

      {/* Intro */}
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

      {/* Solutions */}
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
