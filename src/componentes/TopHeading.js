"use client";

import { motion } from "framer-motion";

export default function TopHeading({ title }) {
  return (
    <div className="relative w-full overflow-hidden bg-[var(--primary)]/95 py-18 px-6 text-center">

      {/* Background Glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse at 20% 60%,
              rgba(255,255,255,0.15) 0%,
              transparent 55%
            ),
            radial-gradient(
              ellipse at 80% 20%,
              rgba(255,255,255,0.12) 0%,
              transparent 50%
            )
          `,
        }}
      />

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10"
      >

        {/* Heading */}
        <h1 className="text-white font-bold">
          {title}
        </h1>

        {/* Decorative Lines */}
        <div className="mt-6 flex items-center justify-center gap-3">

          <span className="block w-16 h-px bg-white/20" />

          <span className="block w-2 h-2 rounded-full bg-white" />

          <span className="block w-16 h-px bg-white/20" />

        </div>

      </motion.div>
    </div>
  );
}