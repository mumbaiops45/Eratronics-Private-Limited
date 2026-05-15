"use client";

import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";

const cultureText = [
  "At Eratronics, we believe that a successful organization is built not only on strong projects and technology, but also on strong people and meaningful relationships.",
  "With teams working from offices, project sites, remote locations, and hybrid environments, maintaining collaboration and unity is one of our highest priorities.",
  "To strengthen this bond, we organize annual employee get-together events where team members from different departments and locations come together to celebrate, interact, and reconnect beyond daily work responsibilities.",
  "These gatherings help create stronger interpersonal relationships, improve communication, and foster a sense of belonging across the organization.",
  "We believe that a healthy work culture leads to better innovation, stronger teamwork, and long-term success — for both our people and our company.",
];

export default function OurCulture() {
  return (
    <section className="py-24 bg-[var(--primary)]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — HEADING + PULL QUOTE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
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

        </div>

      </div>
    </section>
  );
}
