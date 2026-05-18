"use client";

import { motion } from "framer-motion";
import {
  FiPackage, FiFilter, FiShield, FiTruck,
  FiRefreshCw, FiCheckCircle, FiCheck, FiX, FiMapPin,
} from "react-icons/fi";

/* --- Data --------------------------------------------------- */

const policyItems = [
  {
    num: "01",
    icon: FiPackage,
    title: "Safe Collection of E-Waste",
    desc: "All obsolete, damaged, non-functional, or end-of-life electronic products are identified and collected separately from general waste to ensure proper disposal.",
  },
  {
    num: "02",
    icon: FiFilter,
    title: "Proper Segregation",
    desc: "Electronic waste is carefully segregated based on product type, material composition, and recycling requirements to facilitate safe handling and efficient recycling.",
  },
  {
    num: "03",
    icon: FiShield,
    title: "Environmentally Safe Storage",
    desc: "Collected e-waste is stored securely in designated areas to prevent leakage, contamination, and environmental damage before final disposal.",
  },
  {
    num: "04",
    icon: FiTruck,
    title: "Disposal Through Authorized Recycler",
    desc: "We ensure that all e-waste is handed over only to authorized recyclers, dismantlers, and certified waste management agencies approved by relevant government authorities.",
  },
  {
    num: "05",
    icon: FiRefreshCw,
    title: "Recycling and Resource Recovery",
    desc: "Wherever possible, valuable materials such as metals, plastics, and reusable components are recovered through proper recycling processes to reduce resource wastage.",
  },
  {
    num: "06",
    icon: FiCheckCircle,
    title: "Compliance with Statutory Regulations",
    desc: "We maintain compliance with all applicable environmental laws, government regulations, and industry standards related to electronic waste management.",
  },
];

const dos = [
  "Always check the product catalogue, user manual, or accompanying documentation for proper end-of-life handling and disposal instructions.",
  "Ensure that only authorized recyclers and certified service providers handle, repair, or recycle your electronic products.",
  "Always contact our authorized E-Waste collection centers for the safe disposal of products that have reached the end of their useful life.",
  "Dispose of used electronic products, batteries, accessories, and related components only at the nearest authorized E-Waste collection point.",
  "Before disposal, always disconnect batteries from the product and ensure that any glass components or fragile surfaces are properly protected against damage or breakage.",
];

const donts = [
  "Do not attempt to dismantle, repair, or dispose of electronic products on your own without proper authorization.",
  "Do not discard electronic products in bins marked with the \"Do Not Dispose\" or general waste disposal signs.",
  "Do not hand over e-waste to informal or unauthorized sectors such as local scrap dealers, rag pickers, or unorganized waste handlers.",
  "Do not dispose of electronic waste along with regular household or municipal waste, as it may eventually end up in landfills and cause environmental harm.",
];

/* --- Main component ----------------------------------------- */

export default function EWaste() {
  return (
    <div className="bg-white">

      {/* -- INTRO -------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-20 lg:py-24">
        <div className="grid lg:grid-cols-1 gap-14 lg:gap-20">

          {/* Left: intro text */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-[var(--seco)]" />
              <span className="text-[9px] font-bold uppercase tracking-[5px] text-[var(--seco)]">
                Environmental Responsibility
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-7">
              Our Commitment to<br />
              Responsible E-Waste Management
            </h2>
            <div className="space-y-4 text-[14px] text-gray-500 leading-relaxed">
              <p>
                At Eratronics, environmental responsibility is an integral part of our business philosophy. We are committed to implementing effective E-Waste Management practices to ensure the safe handling, disposal, recycling, and reuse of electronic waste generated through our operations and supplied products.
              </p>
              <p>
                Improper disposal of electronic waste can lead to serious environmental and health hazards. Therefore, responsible disposal and recycling are essential for protecting natural resources and maintaining environmental sustainability.
              </p>
              <p>
                We strictly follow the E-Waste Management Rules and comply with the guidelines issued by the <strong className="text-gray-700 font-semibold">Central Pollution Control Board (CPCB), Government of India</strong>, for safe disposal and environmentally sound recycling practices.
              </p>
            </div>
          </motion.div>

          {/* Right: compliance info cards */}
          {/* <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <FiCheckCircle size={17} className="text-green-600" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-green-600 mb-1">
                Certified Compliant
              </p>
              <p className="text-sm font-semibold text-gray-800 leading-snug">
                CPCB Guidelines — E-Waste Management Rules
              </p>
            </div>

            <div className="bg-[var(--primary)]/5 border border-[var(--primary)]/10 rounded-2xl p-6">
              <div className="w-9 h-9 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                <FiShield size={17} className="text-[var(--primary)]" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--seco)] mb-1">
                Government of India
              </p>
              <p className="text-sm font-semibold text-gray-800 leading-snug">
                Authorised Recyclers &amp; Certified Waste Management
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                Sectors Covered
              </p>
              <div className="flex flex-wrap gap-2">
                {["Government", "PSU", "Railways", "Oil & Gas", "Telecom", "Infrastructure"].map((s) => (
                  <span key={s} className="text-[10px] font-semibold px-2.5 py-1 bg-white border border-gray-200 rounded-md text-gray-600">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div> */}

        </div>
      </section>

      {/* -- POLICY SECTION ----------------------------------- */}
      <section className="bg-[#F8FAFC] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 lg:py-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[9px] font-bold uppercase tracking-[5px] text-[var(--seco)] mb-4">
              Policy Framework
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Our E-Waste Management Policy
            </h3>
          </motion.div>

          <div className="space-y-0">
            {policyItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-6 lg:gap-10 py-7 border-b border-gray-200 last:border-b-0 hover:bg-white/70 -mx-6 lg:-mx-20 px-6 lg:px-20 transition-colors duration-200"
                >
                  {/* Number */}
                  <span className="text-[11px] font-black text-gray-200 tabular-nums shrink-0 mt-1 w-6">
                    {item.num}
                  </span>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[var(--seco)] group-hover:border-[var(--seco)] transition-all duration-250">
                    <Icon size={16} className="text-gray-400 group-hover:text-white transition-colors duration-250" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[15px] text-gray-900 mb-2 group-hover:text-[var(--seco)] transition-colors duration-200">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* -- COMMITMENT --------------------------------------- */}
      <section className="bg-[var(--primary)] overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-[9px] font-bold uppercase tracking-[5px] text-white/30 mb-6">
              Our Commitment
            </p>
            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-6">
              A Responsible Partner for Environmental Stewardship
            </h3>
            <div className="space-y-4 text-[14px] text-white/50 leading-relaxed">
              <p>
                As a responsible supplier and system integrator serving Government, PSU, Railways, Oil & Gas, Telecom, and Infrastructure sectors, we recognize our duty to contribute toward environmental protection and sustainable development.
              </p>
              <p>
                We continuously strive to improve our waste management systems and work closely with our partners, vendors, and customers to promote responsible recycling practices.
              </p>
              <p>
                Our commitment to E-Waste Management reflects our dedication to environmental stewardship, operational excellence, and long-term sustainability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- DO'S AND DON'TS ---------------------------------- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-20 lg:py-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[9px] font-bold uppercase tracking-[5px] text-[var(--seco)] mb-4">
            Handling Guidelines
          </p>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Responsible E-Waste Handling
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* DO'S */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-green-100 bg-green-50/40 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-7 py-5 bg-green-600 ">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <FiCheck size={14} className="text-white" />
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-widest">
                Do's
              </span>
            </div>

            {/* Items */}
            <div className="divide-y divide-green-100">
              {dos.map((item, i) => (
                <div key={i} className="flex items-start gap-4 px-7 py-5">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <FiCheck size={11} className="text-green-600" />
                  </span>
                  <p className="text-[13px] text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* DON'TS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-100 bg-red-50/30 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-7 py-5 bg-red-600">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <FiX size={14} className="text-white" />
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-widest">
                Don'ts
              </span>
            </div>

            {/* Items */}
            <div className="divide-y divide-red-100">
              {donts.map((item, i) => (
                <div key={i} className="flex items-start gap-4 px-7 py-5">
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <FiX size={11} className="text-red-500" />
                  </span>
                  <p className="text-[13px] text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* -- COLLECTION POINTS -------------------------------- */}
      <section className="bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 lg:py-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <p className="text-[9px] font-bold uppercase tracking-[5px] text-[var(--seco)] mb-4">
              Collection Network
            </p>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              E-Waste Drop-Off Points
            </h3>
            <p className="text-sm text-gray-500 mb-10 max-w-xl leading-relaxed">
              Please drop your E-Waste at the nearest authorised collection point listed below. Our certified partners ensure responsible handling and processing.
            </p>

            {/* Placeholder notice */}
            <div className="relative border-2 border-dashed border-gray-200 rounded-2xl px-10 py-16 text-center bg-white">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-5">
                <FiMapPin size={22} className="text-gray-400" />
              </div>
              <p className="text-base font-semibold text-gray-700 mb-2">
                Collection Points Coming Soon
              </p>
              <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
                Details of collection points along with address and contact information will be updated here shortly.
              </p>
              <div className="mt-7">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[var(--seco)] bg-[var(--seco)]/8 border border-[var(--seco)]/15 px-5 py-2.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--seco)] animate-pulse" />
                  Information will be added soon
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* -- CONTACT CTA -------------------------------------- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="relative bg-[var(--primary)] rounded-3xl px-10 lg:px-16 py-14 overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 50%, #0B3D91 0%, transparent 55%)",
            }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[9px] font-bold uppercase tracking-[4px] text-white/30 mb-4">
                Need Assistance?
              </p>
              <h4 className="text-xl lg:text-2xl font-bold text-white leading-snug mb-3">
                For E-Waste disposal queries or to locate your nearest collection centre, contact us.
              </h4>
              <p className="text-white/40 text-sm leading-relaxed">
                Our team will guide you through the responsible disposal process in compliance with CPCB guidelines.
              </p>
            </div>
            <div className="shrink-0">
              <button className="inline-flex items-center gap-2 bg-white text-[var(--primary)] font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
