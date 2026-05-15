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
  { value: "24×7", label: "Service Support" },
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Industry Sectors" },
];

const cards = [
  {
    title: "Vision",
    Icon: FiCompass,
    description:
      "To revolutionize the Indian Telecom Landscape, with our innovative solutions and state of art service delivery.",
  },

  {
    title: "Mission",
    Icon: FiTarget,
    description:
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