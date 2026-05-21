"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";

export default function AboutCTA() {
  return (
    <section className="relative py-28 bg-[var(--primary)] overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-blue-300/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="block text-white/40 text-xs font-semibold tracking-[4px] uppercase mb-6">
              Partner With Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Let's Build Something{" "}
              <span className="text-white/60">Mission-Critical Together</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Whether you're planning a new project or optimizing existing infrastructure,
              Eratronics brings the expertise, framework, and commitment to deliver.
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
              <FiPhoneCall size={15} />
              Contact Us Today
            </Link>
            {/* <Link
              href="/solutions"
              className="group flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Explore Solutions
              <FiArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
