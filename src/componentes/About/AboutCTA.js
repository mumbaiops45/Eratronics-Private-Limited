"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function AboutCTA() {
  const sectionRef = useRef(null);
  const lineRef    = useRef(null);
  const leftRef    = useRef(null);
  const rightRef   = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
    });

    tl.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 0.7, ease: "power3.out" }
    )
    .fromTo(leftRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(rightRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--primary)" }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Corner glow — cyan top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 100% 0%, rgba(0,180,216,0.25) 0%, transparent 65%)",
        }}
      />

      {/* Corner glow — navy bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 100%, rgba(11,29,58,0.40) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto px-6 lg:px-16">

        {/* Top blue rule */}
        <div ref={lineRef} className="h-0.5 w-20 mb-10" style={{ background: "rgba(255,255,255,0.50)" }} />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          {/* Left */}
          <div ref={leftRef} className="max-w-2xl">
            <div
              className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 mb-6"
              style={{
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.20)",
              }}
            >
              Partner With Us
            </div>

            <h2
              className="font-extrabold leading-tight text-white mb-5"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.02em" }}
            >
              Let us Build Something{" "}
              <span style={{ color: "rgba(255,255,255,0.55)" }}>
                Mission Critical Together
              </span>
            </h2>

            <div className="h-px w-14 mb-6" style={{ background: "rgba(255,255,255,0.35)" }} />

            <p className="text-sm leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.60)" }}>
              Whether you are planning a new project or optimizing existing infrastructure,
              Eratronics brings the expertise, framework, and commitment to deliver.
            </p>
          </div>

          {/* Right — buttons */}
          <div ref={rightRef} className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:min-w-56">
            <Link
              href="/contact-us"
              className="group flex items-center justify-center gap-2.5 px-8 py-4 font-bold text-sm tracking-wide transition-all duration-300"
              style={{
                background: "var(--primary)",
                color: "white",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--secondary)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--primary)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FiPhoneCall size={14} />
              Contact Us Today
            </Link>

            <Link
              href="/services"
              className="flex items-center justify-center gap-2.5 px-8 py-4 font-bold text-sm tracking-wide transition-all duration-300"
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.35)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.60)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Our Services
              <FiArrowRight size={13} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
