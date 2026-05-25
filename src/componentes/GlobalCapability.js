"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    num: "01",
    tag: "End to End Delivery",
    title: "Turnkey Solutions",
    description:
      "o	Experience seamless end-to-end project delivery with single point accountability from requirements analysis and design engineering to supply chain management, system integration, FAT/SAT, commissioning, documentation handover, and go-live support. Our proven DARE model - Design Engineering, All-Weather Integration, Rigorous Testing, Effective Maintenance guarantees precision and reliability at every stage. ",
    keywords: ["Requirements Analysis", "Design Engineering", "FAT / SAT", "Commissioning"],
    href: "/turnkey-solutions",
  },
  {
    num: "02",
    tag: "Industrial Engineering",
    title: "Engineering Services",
    description:
      "o	Your engineering services are not just about deploying telecom systems—they are about enabling safe, reliable, and future-ready operations in some of the most demanding industrial environments. At Eratronics, we bring a structured, end-to-end engineering approach that spans from concept and design to integration and commissioning, ensuring that every solution is aligned with operational criticality, regulatory requirements, and long-term performance objectives. With deep domain expertise in Oil & Gas and a focus on system resilience, cyber security, and scalability, we deliver telecom infrastructure that forms the backbone of mission-critical operations.",
    keywords: ["Oil & Gas", "Cyber Security", "Mission Critical", "Scalability"],
    href: "/engineering-services",
  },
  {
    num: "03",
    tag: "Advanced Communication",
    title: "Integration Excellence",
    description:
      "o	Beyond integration, we enable complex communication networks for voice, video surveillance, data, and Ethernet over fiber, radio, or copper. Custom solutions from past projects boost efficiency, minimize downtime, and serve as proven references. All systems undergo rigorous pre-deployment testing at our integration center, plus customer-witnessed FAT.",
    keywords: ["Voice Networks", "Fiber & Radio", "Testing", "Customer FAT"],
    href: "/integration-excellence",
  },
  {
    num: "04",
    tag: "Lifecycle Support",
    title: "Through Life Care",
    description:
      "o	We deliver comprehensive operations support from routine troubleshooting to emergency response—across the full system lifecycle aligned with our CARE Model approach. Tailored SLA-based options meet your exact needs. Our resource-optimized, methodical approach handles unforeseen challenges and evolving goals with precision.",
    keywords: ["CARE Model", "SLA Services", "Emergency Response", "Lifecycle Support"],
    href: "/through-life-care-program",
  },
];

export default function GlobalCapability() {
  const headerRef = useRef(null);
  const rowRefs   = useRef([]);

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 88%", once: true } }
    );

    rowRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: i * 0.08,
          scrollTrigger: { trigger: el, start: "top 90%", once: true } }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      className="py-24"
      style={{ background: "var(--surface-off)" }}
    >
      <div className=" mx-auto px-6 lg:px-16">

        {/* ── HEADER ── */}
        <div ref={headerRef} className="mb-16 grid grid-cols-1 gap-4">
          <div>
            <div className="label-tag mb-5">What We Do</div>
            <h2
              className="font-extrabold leading-tight"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "var(--primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Global Capability &amp; Mission Critical Engineering
            </h2>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
            Four integrated service pillars delivering precision, resilience,
            and single point accountability across every phase of your project lifecycle.
          </p>
        </div>

        {/* ── NUMBERED ROWS ── */}
        <div>
          {capabilities.map((cap, i) => (
            <div
              key={cap.num}
              ref={el => (rowRefs.current[i] = el)}
              style={{ borderTop: "1px solid var(--border-light)" }}
            >
              <Link
                href={cap.href}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 transition-all duration-300"
                onMouseEnter={e => {
                  e.currentTarget.style.paddingLeft = "16px";
                  e.currentTarget.style.borderLeft = "2px solid var(--secondary)";
                  e.currentTarget.style.background = "rgba(33,150,243,0.03)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.borderLeft = "2px solid transparent";
                  e.currentTarget.style.background = "transparent";
                }}
                style={{ borderLeft: "2px solid transparent", transition: "all 0.3s ease" }}
              >
                {/* Number */}
                <div className="lg:col-span-1 flex items-start pt-1">
                  <span
                    className="text-3xl font-black tabular-nums leading-none"
                    style={{ color: "var(--secondary)", opacity: 0.25,
                      transition: "opacity 0.3s" }}
                    ref={el => {
                      if (el) {
                        el.closest("a")?.addEventListener("mouseenter", () => { el.style.opacity = "1"; });
                        el.closest("a")?.addEventListener("mouseleave", () => { el.style.opacity = "0.25"; });
                      }
                    }}
                  >
                    {cap.num}
                  </span>
                </div>

                {/* Tag + Title */}
                <div className="lg:col-span-3">
                  <span className="sec-num block mb-2">{cap.tag}</span>
                  <h3
                    className="font-extrabold leading-tight transition-colors duration-300 group-hover:text-[var(--secondary)]"
                    style={{
                      fontSize: "clamp(18px, 2.2vw, 26px)",
                      color: "var(--primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cap.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
                    {cap.description}
                  </p>
                </div>

                {/* Tags + Arrow */}
                <div className="lg:col-span-3 flex flex-col justify-between items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {cap.keywords.map(kw => (
                      <span
                        key={kw}
                        className="text-[10px] font-bold uppercase tracking-[0.08em] px-3 py-1"
                        style={{
                          border: "1px solid var(--border-blue)",
                          color: "var(--secondary)",
                          background: "rgba(33,150,243,0.05)",
                        }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] transition-all duration-300 group-hover:gap-3"
                    style={{ color: "var(--secondary)" }}
                  >
                    Explore <FiArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid var(--border-light)" }} />
        </div>

      </div>
    </section>
  );
}
