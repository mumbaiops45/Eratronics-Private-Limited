"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TopHeading({ title }) {
  const lineRef  = useRef(null);
  const tagRef   = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const tl = gsap.timeline({ delay: 0.15 });

    tl.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 0.6, ease: "power3.out" }
    );
    tl.fromTo(tagRef.current,
      { opacity: 0, x: -16 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" },
      "-=0.3"
    );
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 24, clipPath: "inset(100% 0 0 0)" },
      { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 0.7, ease: "power4.out" },
      "-=0.3"
    );

    return () => tl.kill();
  }, [title]);

  return (
    <div
      className="relative w-full overflow-hidden py-12 px-6"
      style={{ background: "var(--surface-2)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(33,150,243,0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 80% 100% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Blue left border accent */}
      <div
        className="absolute top-0 left-0 bottom-0 w-0.5"
        style={{ background: "linear-gradient(to bottom, transparent, var(--secondary), transparent)" }}
      />

      {/* Bottom blue line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, var(--secondary), var(--accent), transparent)", opacity: 0.35 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Rule */}
        {/* <div
          ref={lineRef}
          className="h-px mb-6 w-16"
          style={{ background: "var(--secondary)" }}
        /> */}

        {/* Section tag */}
        <div ref={tagRef} className="label-tag mb-5">
          Eratronics
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="font-extrabold text-white"
          style={{ letterSpacing: "-0.025em" }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
