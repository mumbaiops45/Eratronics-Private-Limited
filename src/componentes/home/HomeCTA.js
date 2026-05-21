"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";

export default function HomeCTA() {
  return (
    <section className="relative py-28 bg-[var(--primary)] overflow-hidden">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-400/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-white/50 text-xs font-semibold tracking-[4px] uppercase block mb-6">
              Start Your Project
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Build Mission-Critical{" "}
              <span className="text-white/70">Communication Infrastructure?</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Partner with Eratronics for end-to-end engineering, integration, and lifecycle support — engineered to the highest reliability standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:min-w-[220px]"
          >
            <Link
              href="/contact-us"
              className="group flex items-center justify-center gap-3 bg-[var(--secondary)] text-[var(--primary)] px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-300"
            >
              <FiPhoneCall size={16} />
              Contact Us Today
            </Link>
            {/* <Link
              href="/solutions"
              className="group flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Explore Solutions
              <FiArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link> */}
          </motion.div>

        </div>
      </div>

    </section>
  );
}
