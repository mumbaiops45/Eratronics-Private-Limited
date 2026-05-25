"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FiArrowRight, FiPhone } from "react-icons/fi";

export default function Hero() {
  const eyebrowRef = useRef(null);
  const lineRef = useRef(null);
  const h1Ref = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const numRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    /* Animated grid fades in */
    tl.fromTo(gridRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power2.out" });

    /* Big decorative number counts up */
    tl.fromTo(numRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }, "-=1");

    /* Horizontal rule draws */
    tl.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 0.6, ease: "power3.out" },
      "-=0.6"
    );

    /* Eyebrow label */
    tl.fromTo(eyebrowRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }, "-=0.3");

    /* Heading — lines stagger */
    const lines = h1Ref.current.querySelectorAll(".hero-line");
    tl.fromTo(lines,
      { opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" },
      { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 0.7, stagger: 0.12, ease: "power4.out" },
      "-=0.3"
    );

    /* Paragraph */
    tl.fromTo(paraRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.35");

    /* CTAs */
    const btns = ctaRef.current.children;
    tl.fromTo(btns, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }, "-=0.35");

    /* Stats strip */
    const items = statsRef.current.querySelectorAll(".stat-item");
    tl.fromTo(items, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.10, ease: "power3.out" }, "-=0.25");

    return () => tl.kill();
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col" style={{ background: "var(--surface-1)" }}>

      {/* ── VIDEO ── */}
      <video
        autoPlay muted loop playsInline preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/hero (1).mp4" type="video/mp4" />
      </video>

      {/* ── DARK GRADIENT OVERLAY ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(3,11,23,0.42) 0%, rgba(6,15,30,0.28) 55%, rgba(11,29,58,0.15) 100%)",
        }}
      />

      {/* ── DOT GRID ── */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(33,150,243,0.12) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 80% at 20% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* ── LARGE DECORATIVE NUMBER ── */}
      <div
        ref={numRef}
        className="absolute right-0 top-0 bottom-0 flex items-center justify-end pr-8 pointer-events-none select-none"
        style={{ opacity: 0 }}
      >
        <span
          className="text-[clamp(200px,28vw,380px)] font-black leading-none"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(33,150,243,0.06)",
            letterSpacing: "-0.05em",
          }}
        >
          ERA
        </span>
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full mx-auto px-6 lg:px-16 py-0">
          <div className="max-w-3xl">

            {/* Horizontal rule */}
            <div ref={lineRef} className="blue-rule w-32 mb-8" />

            {/* Eyebrow */}
            <div ref={eyebrowRef} className="label-tag mb-7">
              Mission Critical Engineering
            </div>

            {/* Heading */}
            <h1
              ref={h1Ref}
              className="text-white font-extrabold leading-[1.05] mb-8"
              style={{ fontSize: "clamp(38px, 5.5vw, 72px)", letterSpacing: "-0.03em" }}
            >
              <span className="hero-line block">Reliable Industrial</span>
              <span
                className="hero-line block"
                style={{
                  background: "linear-gradient(90deg, var(--secondary) 0%, var(--accent) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Telecom Solutions
              </span>
              <span className="hero-line block text-white/50" style={{ fontSize: "0.55em", fontWeight: 400, letterSpacing: 0 }}>
                for India's Critical Infrastructure
              </span>
            </h1>

            {/* Paragraph */}
            <p
              ref={paraRef}
              className="text-base leading-relaxed mb-10 max-w-xl"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Delivering turnkey engineering, telecom integration, and lifecycle support
              for industrial operations across Oil &amp; Gas, Power, and Metro Rail sectors.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-16">
              <Link href="/contact-us" className="btn-primary">
                Get In Touch <FiArrowRight size={14} />
              </Link>
              <Link href="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>

           

          </div>
           {/* Stats strip */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-0 pt-8 pb-16"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {[
                { val: "15+", label: "Years Experience" },
                { val: "50+", label: "Projects Delivered" },
                { val: "99.95%", label: "Network Uptime" },
                { val: "24×7", label: "NOC Support" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="start-item pr-8 mr-8"
                  style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}
                >
                  <div
                    className="text-2xl font-extrabold tabular-nums leading-none mb-1"
                    style={{ color: "var(--secondary)" }}
                  >
                    {s.val}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.15em] font-semibold"
                    style={{ color: "rgba(255,255,255,0.35)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>

 
    </section>
  );
}
