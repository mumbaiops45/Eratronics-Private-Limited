"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiHeart, FiUsers, FiStar, FiZap } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const culturePoints = [
  {
    Icon: FiUsers,
    title: "United Across Locations",
    text: "With teams working from offices, project sites, and remote environments, maintaining collaboration and unity is one of our highest priorities.",
  },
  {
    Icon: FiStar,
    title: "Annual Team Gatherings",
    text: "We organize annual employee gatherings where team members from different departments and locations celebrate, interact, and reconnect beyond daily work responsibilities.",
  },
  {
    Icon: FiZap,
    title: "Innovation Through People",
    text: "Stronger interpersonal relationships lead to better communication, improved teamwork, and a sense of belonging that drives innovation from the ground up.",
  },
  {
    Icon: FiHeart,
    title: "People First Philosophy",
    text: "A healthy work culture leads to better innovation, stronger teamwork, and long term success, for both our people and our company.",
  },
];

export default function OurCulture() {
  const headerRef = useRef(null);
  const quoteRef  = useRef(null);
  const cardsRef  = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current, { opacity: 0, x: -40 }, {
      opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
    });
    gsap.fromTo(quoteRef.current, { opacity: 0, x: 40 }, {
      opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: quoteRef.current, start: "top 85%", once: true },
    });

    const cards = cardsRef.current?.querySelectorAll(".culture-card");
    if (cards) {
      gsap.fromTo(cards, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 85%", once: true },
      });
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="py-24 overflow-hidden" style={{ background: "var(--surface-1)" }}>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(33,150,243,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto px-6 lg:px-16">

        {/* Header + Quote grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">

          {/* Left header */}
          <div ref={headerRef}>
            <div className="label-tag mb-5">Our Spirit</div>
            <h2
              className="font-extrabold leading-tight mb-5"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "var(--text-bright)", letterSpacing: "-0.02em" }}
            >
              A Culture Built on{" "}
              <span style={{ color: "var(--secondary)" }}>People & Purpose</span>
            </h2>
            <div className="h-px w-14 mb-6" style={{ background: "var(--secondary)" }} />
            <p className="text-sm leading-relaxed max-w-lg" style={{ color: "var(--text-muted-d)" }}>
              At Eratronics, we believe a successful organization is built not only on
              strong projects and technology, but on strong people and meaningful relationships.
            </p>
          </div>

          {/* Pull quote */}
          <div ref={quoteRef}>
            <div
              className="relative overflow-hidden p-10"
              style={{
                background: "var(--surface-3)",
                border: "1px solid var(--border-dark)",
              }}
            >
              {/* Blue left accent */}
              <div className="absolute top-0 left-0 bottom-0 w-0.5" style={{ background: "var(--secondary)" }} />

              {/* Top rule */}
              <div className="h-px w-full mb-8" style={{ background: "linear-gradient(90deg, var(--secondary), var(--accent), transparent)" }} />

              <span
                className="text-7xl font-serif leading-none block mb-3"
                style={{ color: "var(--secondary)", opacity: 0.3 }}
              >
                &ldquo;
              </span>

              <p
                className="text-base leading-relaxed font-medium mb-8"
                style={{ color: "var(--text-primary-d)" }}
              >
                When employees feel connected, valued, and supported, they perform with
                greater confidence, energy, and purpose.
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 flex items-center justify-center"
                  style={{
                    background: "rgba(33,150,243,0.12)",
                    border: "1px solid var(--border-blue)",
                  }}
                >
                  <FiHeart size={15} style={{ color: "var(--secondary)" }} />
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.15em]"
                  style={{ color: "var(--secondary)" }}
                >
                  Eratronics Culture
                </span>
              </div>

              {/* Watermark */}
              <span
                className="absolute bottom-2 right-4 text-[100px] font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.02)" }}
              >
                ❞
              </span>
            </div>
          </div>

        </div>

        {/* Culture points grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2" style={{ border: "1px solid var(--border-dark)" }}>
          {culturePoints.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              className="culture-card group relative p-8 transition-all duration-300 overflow-hidden"
              style={{
                background: "transparent",
                borderRight: i % 2 === 0 ? "1px solid var(--border-dark)" : "none",
                borderBottom: i < 2 ? "1px solid var(--border-dark)" : "none",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(33,150,243,0.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {/* Top sweep on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                style={{ background: "var(--secondary)" }}
              />

              <div
                className="w-10 h-10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  border: "1px solid var(--border-blue)",
                  background: "rgba(33,150,243,0.08)",
                }}
              >
                <Icon size={16} style={{ color: "var(--secondary)" }} />
              </div>

              <h3
                className="text-sm font-bold mb-3"
                style={{ color: "var(--text-bright)" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted-d)" }}>
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
