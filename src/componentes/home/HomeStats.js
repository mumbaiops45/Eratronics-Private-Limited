"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { end: 15,     suffix: "+",  label: "Years of Industry Experience", note: "Est. 2009" },
  { end: 50,     suffix: "+",  label: "Projects Successfully Delivered", note: "Nationwide" },
  { end: 99.95,  suffix: "%",  label: "Network Availability Guaranteed", note: "SLA Backed", decimal: true },
  { end: null,   raw: "24×7",  label: "NOC & Lifecycle Support", note: "Round the Clock" },
];

export default function HomeStats() {
  const sectionRef = useRef(null);
  const countRefs  = useRef([]);
  const cardRefs   = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    /* Line draw then cards stagger in */
    gsap.fromTo(cardRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      }
    );

    /* Counters */
    stats.forEach((s, i) => {
      if (s.end === null) return;
      const el = countRefs.current[i];
      if (!el) return;
      const proxy = { v: 0 };
      gsap.to(proxy, {
        v: s.end, duration: 2.2, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        onUpdate() {
          el.textContent = (s.decimal ? proxy.v.toFixed(2) : Math.round(proxy.v)) + s.suffix;
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-0"
      style={{ background: "var(--surface-2)", borderTop: "1px solid var(--border-dark)" }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              ref={el => (cardRefs.current[i] = el)}
              className="relative py-12 px-8 flex flex-col items-start"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid var(--border-dark)" : "none",
              }}
            >
              {/* Blue left accent on first */}
              {i === 0 && (
                <div className="absolute left-0 top-8 bottom-8 w-px" style={{ background: "var(--secondary)" }} />
              )}

              {/* Note label */}
              <span className="sec-num mb-3">{s.note}</span>

              {/* Value */}
              {s.end !== null ? (
                <span
                  ref={el => (countRefs.current[i] = el)}
                  className="text-5xl lg:text-6xl font-extrabold tabular-nums leading-none mb-3"
                  style={{ color: "var(--secondary)" }}
                >
                  0{s.suffix}
                </span>
              ) : (
                <span
                  className="text-5xl lg:text-6xl font-extrabold leading-none mb-3"
                  style={{ color: "var(--secondary)" }}
                >
                  {s.raw}
                </span>
              )}

              {/* Label */}
              <span
                className="text-xs font-semibold leading-snug"
                style={{ color: "rgba(255,255,255,0.40)" }}
              >
                {s.label}
              </span>

              {/* Bottom blue mark */}
              <div
                className="absolute bottom-0 left-8 right-8 h-px opacity-20"
                style={{ background: "var(--secondary)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
