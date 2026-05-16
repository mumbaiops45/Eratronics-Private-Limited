"use client";

import { motion } from "framer-motion";

const industryData = {
  smallText: "Oil & Gas Industry",

  heading:
    "Reliable Telecom Solutions for Critical Energy Operations",

  intro:
    "We deliver advanced communication and monitoring solutions designed to support the full spectrum of upstream, midstream, and downstream operations. Our systems are engineered to enhance safety, ensure operational continuity, and enable seamless, real-time connectivity across critical energy infrastructure.",

  solutions: [
    {
      title: "Upstream Solutions",

      paragraphs: [
        "In upstream environments, where operations are often remote and hazardous, reliable communication is essential. Eratronics provides robust data transmission systems that support control room operations, enabling secure wireless communication and real-time remote surveillance.",

        "Our solutions are designed for both offshore and onshore deployments, with high availability architectures and backup power integration to ensure uninterrupted operation even during power outages. This enables continuous monitoring, improved safety, and efficient field coordination in challenging conditions.",
      ],
    },

    {
      title: "Midstream Solutions",

      paragraphs: [
        "For midstream operations, we deliver integrated communication infrastructure that supports pipeline monitoring and control. Our expertise includes deployment of unified communication systems, along with reliable backbones for SCADA, CCTV, and other critical applications.",

        "We also design and implement communication networks for crude oil and gas pipelines—both intrastate and cross-country ensuring scalability and future readiness. Our solutions are built to accommodate long asset life-cycles, with provisions for seamless upgrades to evolving technologies without disrupting ongoing operations.",
      ],
    },
  ],
};

export default function OilGasSolutions() {
  return (
    <section className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* ── TOP SECTION ── */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.15 }}
          className="mb-20"
        >

          {/* small text */}
          <p className="text-[var(--primary)] text-sm font-semibold tracking-[4px] uppercase mb-5">
            {industryData.smallText}
          </p>

    

          {/* intro */}
          <p className="text-gray-600 text-base leading-relaxed">
            {industryData.intro}
          </p>

        </motion.div>

        {/* ── SOLUTIONS ── */}
        <div className="space-y-20">

          {industryData.solutions.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.1 }}
            >

              {/* heading */}
              <div className="inline-block border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--primary)]/20 to-transparent px-4 py-3 mb-6">

                <h3 className="text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>

              </div>

              {/* paragraphs */}
              <motion.div
                initial={{ opacity: 0, y: 40  }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                viewport={{ once: true }}
                className="space-y-6"
              >

                {item.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-600 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}