"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function HomeCTA() {
  const innerRef = useRef(null);
  const lineRef  = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: innerRef.current, start: "top 85%", once: true },
    });

    tl.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 0.7, ease: "power3.out" }
    );
    tl.fromTo(innerRef.current.querySelectorAll(".cta-el"),
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" },
      "-=0.3"
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--primary)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Corner geometric accent */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        style={{
          background: "linear-gradient(225deg, rgba(0,180,216,0.25) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, rgba(11,29,58,0.30) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10  mx-auto px-6 lg:px-16" ref={innerRef}>

        {/* Top rule */}
        <div
          ref={lineRef}
          className="h-px mb-12"
          style={{ background: "rgba(255,255,255,0.30)" }}
        />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          {/* Copy */}
          <div className="max-w-2xl">
            <span className="cta-el block text-[10px] font-bold uppercase tracking-[0.20em] text-white/70 mb-5">
              Start Your Project
            </span>

            <h2
              className="cta-el font-extrabold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(28px, 4.5vw, 54px)", letterSpacing: "-0.025em" }}
            >
              Ready to Build Mission Critical Communication Infrastructure
            </h2>

            <p className="cta-el text-white/70 text-sm leading-relaxed">
              Partner with Eratronics for end to end engineering, integration, and lifecycle support,
              engineered to the highest reliability standards.
            </p>
          </div>

          {/* Actions */}
          <div className="cta-el flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
            <Link
              href="/contact-us"
              className="flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-[0.06em] transition-all duration-250"
              style={{
                background: "var(--primary)",
                color: "#fff",
                border: "1px solid var(--primary)",
                borderRadius: "2px",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--secondary)";
                e.currentTarget.style.boxShadow = "0 0 28px rgba(11,29,58,0.50)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--primary)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <FiPhoneCall size={15} />
              Contact Us Today
            </Link>

            <Link
              href="/services"
              className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-[0.06em] transition-all duration-250"
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: "2px",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.80)";
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              View Services <FiArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="h-px mt-12" style={{ background: "rgba(255,255,255,0.20)" }} />
      </div>
    </section>
  );
}
