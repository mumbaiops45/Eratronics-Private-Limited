"use client";

import { motion } from "framer-motion";
import { FiLayers, FiGlobe, FiShield, FiSettings } from "react-icons/fi";

const dareData = [
  {
    letter: "D",
    title: "Design Engineering",
    Icon: FiLayers,
    description:
      "The core of our all-encompassing solution that meets even the most stringent customer requirements with precision, innovation, and reliability.",
  },
  {
    letter: "A",
    title: "All Weather Integration",
    Icon: FiGlobe,
    description:
      "Systems Integration is the robust framework which supports our core to deliver multiple different components as part of a unified solution.",
  },
  {
    letter: "R",
    title: "Rigorous Testing",
    Icon: FiShield,
    description:
      "It ensures that, along with optimum safety, rigorous testing, and faster delivery, we also provide our customers with complete peace of mind.",
  },
  {
    letter: "E",
    title: "Effective Maintenance",
    Icon: FiSettings,
    description:
      'It is essential for us to deliver holistic solutions that go far beyond the conventional "fit it and forget it" approach.',
  },
];

export default function DeliveryPhilosophy() {
  return (
    <section className="py-24 bg-gray-50">
      <div className=" mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 px-6 lg:px-16"
        >
          <div className="flex items-center gap-3 mb-4">
       
            <span className="px-4 py-2 rounded-full bg-[var(--primary)]/20 text- font-semibold tracking-[4px] uppercase text-sm">
              Our Framework
            </span>
          </div>
          <h2 className="text-[var(--primary)] ">
            Quality Commitment & Delivery Philosophy
          </h2>
          <p className="leading-relaxed text-gray-600  mt-4">
            Our project delivery framework is built on the <strong>DARE Model</strong>, ensuring quality, reliability, and long-term system performance.
          </p>
        </motion.div>

        {/* DARE CARDS */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-16">
            <div className="absolute top-1/3 -bottom-16 right-0 left-0 bg-[var(--primary)]"/>
          {dareData.map(({ letter, title, Icon, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group z-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-6xl font-black leading-none select-none text-(--primary)/10">
                  {letter}
                </span>
                <div className="w-10 h-10 rounded-lg bg-(--primary)/10 flex items-center justify-center group-hover:bg-(--primary) transition-colors duration-300">
                  <Icon size={18} className="text-(--primary) group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h4 className="font-bold text-[#0B1D3A] mb-3">{title}</h4>
              <p className="text-sm leading-relaxed text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
