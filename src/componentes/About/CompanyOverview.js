<<<<<<< HEAD
﻿"use client";

import { motion } from "framer-motion";
import { FiTarget, FiCompass, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const stats = [
  { value: "15+", label: "Years of Experience" },
=======
"use client";

import { motion } from "framer-motion";
import { FiTarget, FiCompass } from "react-icons/fi";

const companyData = {
  badge: "About Eratronics",
  description: [
    "Since inception, Eratronics Pvt. Ltd. has built over a decade of hands-on experience as a telecom systems integrator, specializing in advanced, reliable communication solutions for mission-critical environments. Headquartered in India, we serve leading organizations in the Oil & Gas sector and are steadily expanding our presence across Metro Rail, Power, and infrastructure domains.",

    "We are also strengthening our Engineering Services portfolio to support international markets, offering high-quality design, integration, commissioning, and life-cycle support. Backed by a dedicated 24×7 service team, we ensure operational continuity, system reliability, and long-term value for our clients.",
  ],
};

const stats = [
  { value: "10+", label: "Years of Experience" },
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
  { value: "24×7", label: "Service Support" },
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Industry Sectors" },
];

const cards = [
  {
    title: "Vision",
    Icon: FiCompass,
    description:
<<<<<<< HEAD
      "To revolutionize the Indian Telecom Landscape with innovative solutions and state-of-the-art service delivery.",
  },
=======
      "To revolutionize the Indian Telecom Landscape, with our innovative solutions and state of art service delivery.",
  },

>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
  {
    title: "Mission",
    Icon: FiTarget,
    description:
<<<<<<< HEAD
      "To be the most reliable and dependable turnkey solution providers in Communication and Advanced Security Systems.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function CompanyOverview() {
  return (
    <section className="bg-white overflow-hidden">

      {/* -- INTRO -- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
              <span className="block w-10 h-px bg-[var(--primary)]" />
              <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
                About Eratronics
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8"
            >
              A Decade of{" "}
              <span className="text-[var(--primary)]">Mission-Critical</span>{" "}
              Telecom Excellence
            </motion.h2>

            <motion.p variants={fadeUp} className="text-gray-500 text-sm leading-relaxed mb-5">
              Since inception, Eratronics Pvt. Ltd. has built over a decade of hands-on experience
              as a telecom systems integrator, specializing in advanced, reliable communication
              solutions for mission-critical environments. Headquartered in India, we serve leading
              organizations in the Oil &amp; Gas sector and are steadily expanding our presence
              across Metro Rail, Power, and infrastructure domains.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-500 text-sm leading-relaxed mb-10">
              We are strengthening our Engineering Services portfolio to support international
              markets — offering high-quality design, integration, commissioning, and lifecycle
              support. Backed by a dedicated 24×7 service team, we ensure operational continuity,
              system reliability, and long-term value.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 bg-[var(--primary)] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[var(--primary)]/90 transition-all duration-300"
              >
                Get In Touch
                <FiArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — vision & mission */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6 lg:pt-16"
          >
            {cards.map(({ title, Icon, description }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 hover:border-[var(--primary)]/30 hover:shadow-xl hover:shadow-[var(--primary)]/5 transition-all duration-500"
              >
                {/* Hover accent line */}
                <span className="absolute top-0 left-0 w-0 h-[3px] bg-[var(--primary)] group-hover:w-full transition-all duration-700 ease-out" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--primary)]/8 border border-[var(--primary)]/15 flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] transition-all duration-300">
                    <Icon className="text-[var(--primary)] group-hover:text-white transition-colors duration-300" size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {description}
                </p>

                {/* Watermark */}
                <span className="absolute bottom-4 right-6 text-[64px] font-black text-gray-50 leading-none select-none pointer-events-none">
                  {title[0]}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* -- STATS STRIP -- */}
      <div className="bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="py-12 px-8 text-center"
              >
                <p className="text-4xl lg:text-5xl font-black text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-white/50 uppercase tracking-[3px] font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
=======
      "To be the most reliable and dependable turnkey solution providers in the field of Communication and Advanced Security Systems.",
  },
];

export default function CompanyOverview() {
  return (
    <section className="pt-24 pb-20 bg-white overflow-hidden">
      <div className="mx-auto px-6 lg:px-16">

        {/* INTRO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="max-w-5xl mb-16"
        >

          <div className="flex items-center gap-3 mb-5">

            <span className="block w-8 h-px bg-[var(--primary)]" />

            <h2 className="text-[var(--primary)] font-semibold tracking-[4px] uppercase">
              {companyData.badge}
            </h2>

          </div>

          {companyData.description.map((text, i) => (
            <p
              key={i}
              className={`leading-relaxed text-gray-600 ${i !== 0 ? "mt-5" : ""}`}
            >
              {text}
            </p>
          ))}

        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-b border-gray-100 py-10 mb-20">

          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="text-center"
            >

              <p className="text-4xl lg:text-5xl font-black text-[var(--primary)]">
                {stat.value}
              </p>

              <p className="mt-2 text-gray-500 font-medium">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </div>

        {/* VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

          {cards.map(({ title, Icon, description }, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="bg-[var(--primary)] p-8 lg:p-10 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl [clip-path:polygon(12%_0,100%_0,88%_100%,0_100%)]"
            >

              {/* Background Circle */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-all duration-500 group-hover:scale-125" />

              

              <div className="relative z-10">

                {/* Icon + Heading */}
                <div className="flex items-cente justify-center gap-4 mb-6">

                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm shrink-0">
                    <Icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-3xl font-bold text-white flex items-center">
                    {title}
                  </h3>

                </div>

                {/* Description */}
                <p className="leading-relaxed text-white/80">
                  {description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
