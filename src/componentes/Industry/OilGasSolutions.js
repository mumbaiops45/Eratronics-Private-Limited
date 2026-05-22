"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";

const industryData = {
  smallText: "Oil & Gas Industry",

  heading:
    "Reliable Telecom Solutions for Critical Energy Operations",

  intro:
    "We deliver advanced communication and monitoring solutions designed to support the full spectrum of upstream, midstream, and downstream operations. Our systems are engineered to enhance safety, ensure operational continuity, and enable seamless, real time connectivity across critical energy infrastructure.",

  solutions: [
    {
      title: "Upstream Solutions",

      image: "/Oil & Gas Industry/Upstream Solutions.png",

      paragraphs: [
        "In upstream environments, where operations are often remote and hazardous, reliable communication is essential. Eratronics provides robust data transmission systems that support control room operations, enabling secure wireless communication and real time remote surveillance.",

        "Our solutions are designed for both offshore and onshore deployments, with high availability architectures and backup power integration to ensure uninterrupted operation even during power outages. This enables continuous monitoring, improved safety, and efficient field coordination in challenging conditions.",
      ],

      points: [
        "Remote surveillance systems",
        "Secure wireless communication",
        "Backup power integration",
        "High availability architecture",
      ],
    },

    {
      title: "Midstream Solutions",

      image: "/Oil & Gas Industry/Midstream Solutions.png",

      paragraphs: [
        "For midstream operations, we deliver integrated communication infrastructure that supports pipeline monitoring and control. Our expertise includes deployment of unified communication systems, along with reliable backbones for SCADA, CCTV, and other critical applications.",

        "We also design and implement communication networks for crude oil and gas pipelines, both intrastate and cross country ensuring scalability and future readiness. Our solutions are built to accommodate long asset life cycles, with provisions for seamless upgrades to evolving technologies without disrupting ongoing operations.",
      ],

      points: [
        "Pipeline monitoring networks",
        "SCADA & CCTV integration",
        "Cross country communication systems",
        "Future ready infrastructure",
      ],
    },
  ],
};

export default function OilGasSolutions() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[var(--primary)]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[var(--secondary)]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">

        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mb-14 lg:mb-28"
        >

          {/* Label */}
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-10 h-px bg-[var(--primary)]" />

            <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
              {industryData.smallText}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-black leading-[1.1] mb-8 max-w-5xl">
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              {industryData.heading}
            </span>
          </h2>

          {/* Intro */}
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-3xl">
            {industryData.intro}
          </p>

        </motion.div>

        {/* SOLUTIONS */}
        <div className="space-y-20 lg:space-y-32">

          {industryData.solutions.map((item, index) => {

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* CONTENT */}
                <div>

                  {/* Tag */}
                  <div className="inline-flex items-center gap-2 bg-[var(--secondary)]/10 border border-[var(--primary)]/15 px-5 py-2 rounded-full mb-7">
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />

                    <span className="text-[11px] font-semibold tracking-[3px] uppercase text-[var(--primary)]">
                      Energy Infrastructure
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-5xl font-black text-gray-900 mb-2 leading-tight">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-16 h-[2px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full mb-8" />

                  {/* Paragraphs */}
                  <div className="space-y-6 mb-10">
                    {item.paragraphs.map((para, i) => (
                      <p
                        key={i}
                        className="text-gray-500 leading-relaxed text-sm lg:text-base"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {item.points.map((point, i) => (

                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="group flex items-start gap-3 bg-[var(--secondary)]/5 border border-gray-100 rounded-2xl px-5 py-4 hover:border-[var(--primary)]/20 hover:bg-[var(--secondary)]/10 transition-all duration-300"
                      >

                        <div className="mt-1 w-5 h-5 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">

                          <FiArrowRight
                            size={11}
                            className="text-[var(--primary)]"
                          />

                        </div>

                        <span className="text-sm text-gray-700 font-medium leading-relaxed">
                          {point}
                        </span>

                      </motion.div>

                    ))}

                  </div>

                </div>

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="relative"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 bg-[var(--primary)]/10 blur-3xl scale-90 rounded-[40px]" />

                  <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-gray-100 h-[440px] lg:h-[520px]">

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />

                    {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />

                    {/* Floating top badge */}
                    <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">

                      <FiCpu className="text-white" size={14} />

                      <span className="text-white text-xs font-medium">
                        Smart Communication
                      </span>

                    </div>

                    {/* Floating bottom badge */}
                    <div className="absolute bottom-24 right-6 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">

                      <FiShield className="text-white" size={14} />

                      <span className="text-white text-xs font-medium">
                        Mission Critical
                      </span>

                    </div>

                    {/* Bottom title */}
                    <div className="absolute bottom-8 left-8 z-20">

                      <span className="block text-white/60 text-[11px] uppercase tracking-[3px] font-semibold mb-3">
                        Oil & Gas Infrastructure
                      </span>

                      <h4 className="text-white text-2xl lg:text-4xl font-black leading-tight max-w-sm">
                        {item.title}
                      </h4>

                    </div>

                  </div>

                </motion.div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}