"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import {
  FiWifi, FiPhoneCall, FiVideo, FiRadio,
  FiShield, FiMonitor, FiLock, FiServer,
} from "react-icons/fi";

const systems = [
  { icon: FiWifi, name: "OFC Backbone Networks" },
  { icon: FiPhoneCall, name: "EPABX Communication" },
  { icon: FiVideo, name: "Video Conferencing" },
  { icon: FiRadio, name: "UHF / VHF & TETRA" },
  { icon: FiMonitor, name: "Passenger Info Systems" },
  { icon: FiServer, name: "PAGA Systems" },
  { icon: FiShield, name: "CCTV Surveillance" },
  { icon: FiLock, name: "Access Control" },
];

export default function HomeSystemsTeaser() {
  return (
    <section className="py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-[var(--primary)]" />
              <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
                Systems We Offer
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                Intelligent Telecom Systems for Every Layer
              </span>
            </h2>
          </div>
          <Link
            href="#"
            className="group inline-flex items-center gap-2 bg-[var(--secondary)] text-sm font-semibold text-[var(--primary)] border border-[var(--primary)]/30 px-6 py-3 rounded-full hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-300 self-start lg:self-auto"
          >
            View All Systems
            <FiArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {systems.map((sys, i) => {
            const Icon = sys.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/systems-we-offer"
                  className="group flex flex-col items-center text-center p-8 bg-[var(--secondary)]/5 border border-gray-100 rounded-xl hover:border-[var(--primary)]/30 hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--primary)] flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-all duration-300">
                    <Icon className="text-white group-hover:text-white transition-colors duration-300" size={22} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-[var(--primary)] transition-colors duration-300">
                    {sys.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
