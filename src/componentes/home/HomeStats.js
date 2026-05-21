"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "99.95%", label: "Network Availability" },
  { value: "24×7", label: "NOC & Lifecycle Support" },
];

export default function HomeStats() {
  return (
    <section className="bg-[var(--primary)] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--primary)] px-8 py-10 flex flex-col items-center text-center"
            >
              <span className="text-4xl lg:text-5xl font-bold text-[var(--secondary)] mb-2">
                {stat.value}
              </span>
              <span className="text-xs text-white/60 uppercase tracking-[3px] font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
