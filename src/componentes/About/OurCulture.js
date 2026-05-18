<<<<<<< HEAD
﻿"use client";

import { motion } from "framer-motion";
import { FiHeart, FiUsers, FiStar, FiZap } from "react-icons/fi";

const culturePoints = [
  {
    Icon: FiUsers,
    title: "United Across Locations",
    text: "With teams working from offices, project sites, and remote environments, maintaining collaboration and unity is one of our highest priorities.",
  },
  {
    Icon: FiStar,
    title: "Annual Team Gatherings",
    text: "We organize annual employee get-together events where team members from different departments and locations celebrate, interact, and reconnect beyond daily work responsibilities.",
  },
  {
    Icon: FiZap,
    title: "Innovation Through People",
    text: "Stronger interpersonal relationships lead to better communication, improved teamwork, and a sense of belonging that drives innovation from the ground up.",
  },
  {
    Icon: FiHeart,
    title: "People-First Philosophy",
    text: "A healthy work culture leads to better innovation, stronger teamwork, and long-term success — for both our people and our company.",
  },
=======
"use client";

import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";

const cultureText = [
  "At Eratronics, we believe that a successful organization is built not only on strong projects and technology, but also on strong people and meaningful relationships.",
  "With teams working from offices, project sites, remote locations, and hybrid environments, maintaining collaboration and unity is one of our highest priorities.",
  "To strengthen this bond, we organize annual employee get-together events where team members from different departments and locations come together to celebrate, interact, and reconnect beyond daily work responsibilities.",
  "These gatherings help create stronger interpersonal relationships, improve communication, and foster a sense of belonging across the organization.",
  "We believe that a healthy work culture leads to better innovation, stronger teamwork, and long-term success — for both our people and our company.",
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
];

export default function OurCulture() {
  return (
<<<<<<< HEAD
    <section className="py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* -- HEADER -- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
=======
    <section className="py-24 bg-[var(--primary)]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — HEADING + PULL QUOTE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-[var(--primary)]" />
              <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
                Our Spirit
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              A Culture Built on{" "}
              <span className="text-[var(--primary)]">People & Purpose</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
              At Eratronics, we believe a successful organization is built not only on
              strong projects and technology — but on strong people and meaningful relationships.
            </p>
          </motion.div>

          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-[var(--primary)] rounded-2xl p-10 overflow-hidden">
              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/5" />

              <div className="relative z-10">
                <span className="text-6xl text-white/20 font-serif leading-none block mb-4">&ldquo;</span>
                <p className="text-white text-lg leading-relaxed font-medium mb-6">
                  When employees feel connected, valued, and supported, they perform with
                  greater confidence, energy, and purpose.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                    <FiHeart className="text-white" size={16} />
                  </div>
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-[3px]">
                    Eratronics Culture
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* -- CULTURE POINTS GRID -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {culturePoints.map(({ Icon, title, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex gap-6 bg-white rounded-2xl border border-gray-100 p-8 hover:border-[var(--primary)]/30 hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all duration-400"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--primary)]/8 border border-[var(--primary)]/15 flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] transition-all duration-300">
                <Icon className="text-[var(--primary)] group-hover:text-white transition-colors duration-300" size={18} />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
=======
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px" style={{ background: "#7BAAF7" }} />
              <span className="font-semibold tracking-[4px] uppercase text-sm" style={{ color: "#7BAAF7" }}>
                Our Spirit
              </span>
            </div>
            <h2 className="text-black mb-8">Our Culture</h2>

            <div className="border-l-4 border-[#0B3D91] pl-6 py-2 mb-10">
              <p className="text-black/75 text-lg leading-relaxed italic">
                &ldquo;When employees feel connected, valued, and supported, they perform with greater confidence, energy, and purpose.&rdquo;
              </p>
            </div>

            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(11,61,145,0.25)" }}>
              <FiHeart size={24} color="#7BAAF7" />
            </div>
          </motion.div>

          {/* RIGHT — BODY TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {cultureText.map((text, i) => (
              <p key={i} className="leading-relaxed text-black">
                {text}
              </p>
            ))}
          </motion.div>

>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
        </div>

      </div>
    </section>
  );
}
