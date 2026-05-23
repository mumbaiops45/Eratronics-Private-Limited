"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiTarget, FiCompass, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { end: 15,    suffix: "+",  label: "Years of Experience" },
  { raw: "24/7",              label: "Service Support" },
  { end: 50,    suffix: "+",  label: "Projects Delivered" },
  { end: 3,     suffix: "+",  label: "Industry Sectors" },
];

const cards = [
  {
    title: "Vision", Icon: FiCompass,
    description: "To revolutionize the Indian Telecom Landscape with innovative solutions and state of the art service delivery.",
  },
  {
    title: "Mission", Icon: FiTarget,
    description: "To be the most reliable and dependable turnkey solution providers in Communication and Advanced Security Systems.",
  },
];

export default function CompanyOverview() {
  const leftRef   = useRef(null);
  const rightRef  = useRef(null);
  const statsRef  = useRef(null);
  const countRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(leftRef.current, { opacity: 0, x: -40 }, {
      opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: leftRef.current, start: "top 85%", once: true },
    });
    gsap.fromTo(rightRef.current, { opacity: 0, x: 40 }, {
      opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: rightRef.current, start: "top 85%", once: true },
    });

    stats.forEach((s, i) => {
      if (!s.end) return;
      const el = countRefs.current[i];
      if (!el) return;
      const proxy = { v: 0 };
      gsap.to(proxy, {
        v: s.end, duration: 2, ease: "power2.out",
        scrollTrigger: { trigger: statsRef.current, start: "top 85%", once: true },
        onUpdate() { el.textContent = Math.round(proxy.v) + s.suffix; },
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section style={{ background: "var(--surface-off)" }}>

      {/* ── INTRO ── */}
      <div className=" mx-auto px-6 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div ref={leftRef}>
            <div className="label-tag mb-6">About Eratronics</div>

            <h2
              className="font-extrabold leading-tight mb-7"
              style={{
                fontSize: "clamp(26px, 3.5vw, 44px)",
                color: "var(--primary)",
                letterSpacing: "-0.02em",
              }}
            >
              A Decade of Mission Critical Telecom Excellence
            </h2>

            <div
              className="h-px w-14 mb-7"
              style={{ background: "var(--secondary)" }}
            />

            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted-l)" }}>
              Since inception, Eratronics Pvt. Ltd. has built over a decade of hands on experience
              as a telecom systems integrator, specializing in advanced, reliable communication
              solutions for mission critical environments. Headquartered in India, we serve leading
              organizations in the Oil and Gas sector and are steadily expanding our presence
              across Metro Rail, Power, and infrastructure domains.
            </p>

            <p className="text-sm leading-relaxed mb-10" style={{ color: "var(--text-muted-l)" }}>
              We are strengthening our Engineering Services portfolio to support international
              markets, offering high quality design, integration, commissioning, and lifecycle
              support. Backed by a dedicated 24/7 service team, we ensure operational continuity,
              system reliability, and long term value.
            </p>

            <Link href="/contact-us" className="btn-primary">
              Get In Touch <FiArrowRight size={14} />
            </Link>
          </div>

          {/* Right — Vision / Mission */}
          <div ref={rightRef} className="flex flex-col gap-5 lg:pt-8">
            {cards.map(({ title, Icon, description }) => (
              <div
                key={title}
                className="group relative overflow-hidden p-8 transition-all duration-400"
                style={{
                  background: "var(--surface-light)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "2px",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--secondary)";
                  e.currentTarget.style.boxShadow = "0 8px 40px rgba(33,150,243,0.10)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border-light)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Blue left accent on hover */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-0.5 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-400"
                  style={{ background: "var(--secondary)" }}
                />

                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{
                      background: "rgba(33,150,243,0.08)",
                      border: "1px solid var(--border-blue)",
                    }}
                  >
                    <Icon size={18} style={{ color: "var(--secondary)" }} />
                  </div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "var(--primary)" }}
                  >
                    {title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
                  {description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div ref={statsRef} style={{ background: "var(--primary)", borderTop: "1px solid rgba(33,150,243,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="py-12 px-8 text-center"
                style={{ borderRight: i < 3 ? "1px solid var(--border-dark)" : "none" }}
              >
                {s.end ? (
                  <p
                    ref={el => (countRefs.current[i] = el)}
                    className="text-5xl font-extrabold tabular-nums mb-2"
                    style={{ color: "var(--secondary)" }}
                  >
                    0{s.suffix}
                  </p>
                ) : (
                  <p className="text-5xl font-extrabold mb-2" style={{ color: "var(--secondary)" }}>
                    {s.raw}
                  </p>
                )}
                <p className="text-[10px] uppercase tracking-[0.15em] font-semibold" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
