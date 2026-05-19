"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* --- Client badge styles ----------------------------------- */
const clientStyles = {
  GAIL: "bg-blue-50 text-blue-700 border-blue-100",
  BPCL: "bg-emerald-50 text-emerald-700 border-emerald-100",
  IOCL: "bg-orange-50 text-orange-700 border-orange-100",
  HPCL: "bg-violet-50 text-violet-700 border-violet-100",
};

/* --- Telecom project columns ------------------------------- */
const TELECOM_COLS = [
  "MPLS-TP / SDH + NMS",
  "Network Firewall",
  "CCTV",
  "ACS",
  "VCS",
  "EPABX",
  "VHF/UHF",
];

/* --- Telecom project data --------------------------------- */
const telecomProjects = [
  {
    id: 1,
    project: "Upgradation of SDH to MPLS-TP at 101 Locations",
    client: "GAIL",
    sys: [1, 1, 0, 0, 0, 0, 0],
    distance: 3196,
    note: "124 nos.",
  },

  {
    id: 2,
    project: "Mumbai Nagpur Jharsuguda Pipeline Project",
    client: "GAIL",
    sys: [1, 1, 1, 0, 0, 1, 0],
    distance: 700,
  },

  {
    id: 3,
    project: "Srikakulam Angul Pipeline",
    client: "BPCL",
    sys: [1, 1, 1, 0, 0, 1, 0],
    distance: 730,
  },

  {
    id: 4,
    project: "Krishnapatnam Hyderabad Pipeline",
    client: "BPCL",
    sys: [1, 1, 1, 1, 1, 1, 1],
    distance: 422,
  },

  {
    id: 5,
    project: "Bina - Panki Pipeline Project",
    client: "BPCL",
    sys: [1, 1, 1, 1, 0, 0, 1],
    distance: 355,
  },

  {
    id: 6,
    project: "Tundla – Gawaria Pipeline",
    client: "IOCL",
    sys: [1, 0, 1, 0, 0, 1, 0],
    distance: 253,
  },

  {
    id: 7,
    project: "Vijayapur – Dadri – Bawana Pipeline Project",
    client: "GAIL",
    sys: [1, 0, 0, 0, 0, 0, 0],
    distance: 146,
  },
];

/* --- PIDS project columns --------------------------------- */
const PIDS_COLS = [
  "Pipeline Intrusion",
  "Leak Detection",
  "Fence Intrusion",
];

/* --- PIDS project data ------------------------------------ */
const pidsProjects = [
  {
    id: 1,
    project: "Irugur Devangotri Pipeline",
    client: "BPCL",
    sys: [1, 1, 0],
    distance: 355,
  },

  {
    id: 2,
    project: "Krishnapatnam Hyderabad Pipeline",
    client: "BPCL",
    sys: [1, 1, 0],
    distance: 422,
  },

  {
    id: 3,
    project: "Bina - Panki Pipeline",
    client: "BPCL",
    sys: [1, 1, 1],
    distance: 356,
  },

  {
    id: 4,
    project: "Chennai Cochin Karur Pipeline",
    client: "BPCL",
    sys: [1, 0, 0],
    distance: 292,
  },

  {
    id: 5,
    project: "Haldia Panagarh Pipeline",
    client: "HPCL",
    sys: [1, 0, 0],
    distance: 215,
  },

  {
    id: 6,
    project: "National ‘Capital’ Region (NCR)",
    client: "GAIL",
    sys: [1, 0, 0],
    distance: 513,
  },
];

/* --- Square indicator ------------------------------------- */
function Dot({ active }) {
  return active ? (
    <span className="inline-block w-3.5 h-3.5 rounded-[3px] bg-[var(--primary)] shadow-sm" />
  ) : (
    <span className="inline-block w-3.5 h-3.5 rounded-[3px] bg-gray-100 border border-gray-200" />
  );
}

/* --- Project table ---------------------------------------- */
function ProjectTable({ cols, projects }) {
  const maxDist = Math.max(...projects.map((p) => p.distance));
  const total = projects.reduce((s, p) => s + p.distance, 0);

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full min-w-[860px] border-collapse text-sm">

        {/* Header */}
        <thead>
          <tr>
            <th className="bg-[var(--primary)] px-5 py-4 text-left text-[9px] font-semibold uppercase tracking-[3px] text-white/35 w-12">
              Sr.
            </th>

            <th className="bg-[var(--primary)] px-5 py-4 text-left text-[9px] font-semibold uppercase tracking-[3px] text-white/35">
              Project Details
            </th>

            <th className="bg-[var(--primary)] px-5 py-4 text-center text-[9px] font-semibold uppercase tracking-[3px] text-white/35 whitespace-nowrap">
              End Customer
            </th>

            {cols.map((col) => (
              <th
                key={col}
                className="bg-[var(--primary)] px-3 py-4 text-center text-[9px] font-semibold uppercase tracking-[2px] text-white/35 whitespace-nowrap"
              >
                {col}
              </th>
            ))}

            <th className="bg-[var(--primary)] px-5 py-4 text-right text-[9px] font-semibold uppercase tracking-[3px] text-white/35 whitespace-nowrap">
              Distance
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {projects.map((p) => (
            <tr
              key={p.id}
              className="group border-b border-gray-100 hover:bg-[var(--primary)]/[0.03] transition-colors duration-150"
            >
              {/* Sr */}
              <td className="px-5 py-5 align-middle">
                <span className="text-[11px] font-black text-gray-200 tabular-nums">
                  {String(p.id).padStart(2, "0")}
                </span>
              </td>

              {/* Project */}
              <td className="px-5 py-5 align-middle">
                <p className="font-semibold text-[13px] text-gray-800 leading-snug group-hover:text-[var(--primary)] transition-colors duration-200">
                  {p.project}
                </p>

                {p.note && (
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    {p.note}
                  </p>
                )}
              </td>

              {/* Client */}
              <td className="px-5 py-5 text-center align-middle whitespace-nowrap">
                <span
                  className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-md border ${
                    clientStyles[p.client] ??
                    "bg-gray-50 text-gray-600 border-gray-200"
                  }`}
                >
                  {p.client}
                </span>
              </td>

              {/* Systems */}
              {p.sys.map((active, si) => (
                <td
                  key={si}
                  className="px-3 py-5 text-center align-middle"
                >
                  <Dot active={!!active} />
                </td>
              ))}

              {/* Distance */}
              <td className="px-5 py-5 text-right align-middle">
                <p className="font-black text-gray-900 text-[14px] leading-none">
                  {p.distance.toLocaleString()}
                  <span className="text-[10px] font-medium text-gray-400 ml-1">
                    KM
                  </span>
                </p>

                <div className="mt-2 h-[3px] bg-gray-100 rounded-full overflow-hidden w-24 ml-auto">
                  <div
                    className="h-full bg-[var(--primary)]/50 rounded-full"
                    style={{
                      width: `${(p.distance / maxDist) * 100}%`,
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}

          {/* Total */}
          <tr className="bg-gray-50 border-t-2 border-gray-200">
            <td
              colSpan={cols.length + 3}
              className="px-5 py-4 align-middle"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Total Pipeline Coverage
              </span>
            </td>

            <td className="px-5 py-4 text-right align-middle">
              <span className="text-[var(--primary)] font-black text-base">
                {total.toLocaleString()}
              </span>

              <span className="text-[10px] text-gray-400 font-medium ml-1">
                KM
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* --- Legend ------------------------------------------------ */
function Legend({ clients }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">

      <div className="flex items-center gap-5">

        <span className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
          <span className="w-3.5 h-3.5 rounded-[3px] bg-[var(--primary)] shrink-0" />
          System Deployed
        </span>

        <span className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
          <span className="w-3.5 h-3.5 rounded-[3px] bg-gray-100 border border-gray-200 shrink-0" />
          Not Applicable
        </span>

      </div>

      <div className="w-px h-4 bg-gray-200 hidden sm:block" />

      <div className="flex flex-wrap gap-2">
        {clients.map((c) => (
          <span
            key={c}
            className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${
              clientStyles[c] ??
              "bg-gray-50 text-gray-600 border-gray-200"
            }`}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

/* --- Section intro ---------------------------------------- */
function SectionIntro({
  tag,
  label,
  stat,
  unit,
  title,
  description,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16 mb-10"
    >
      <div className="shrink-0">
        <p className="text-[9px] font-bold uppercase tracking-[4px] text-[var(--primary)] mb-2">
          {label}
        </p>

        <div className="flex items-baseline gap-2">
          <span className="text-6xl lg:text-7xl font-black text-gray-900 leading-none">
            {stat}
          </span>

          <span className="text-2xl font-black text-gray-300">
            {unit}
          </span>
        </div>

        <div className="mt-3 w-12 h-[3px] bg-[var(--primary)] rounded-full" />
      </div>

      <div className="lg:pb-2">
        <p className="text-[9px] font-bold uppercase tracking-[4px] text-gray-400 mb-3">
          {tag}
        </p>

        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-3 max-w-2xl">
          {title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* --- Main export ------------------------------------------ */
export default function OurPresence() {
  return (
    <div className="bg-white">

      {/* TELECOM */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20">

        <SectionIntro
          tag="Section 01 — Telecom Infrastructure"
          label="Delivered"
          stat="6,000+"
          unit="KM"
          title="Telecom Projects Span More than 6,000 KM Delivered"
          description="Our design and implementation capabilities range from simple point-to-point networks to fully converged telecom architectures, seamlessly integrating multiple systems to meet specific customer requirements."
        />

        <ProjectTable
          cols={TELECOM_COLS}
          projects={telecomProjects}
        />

        <Legend clients={["GAIL", "BPCL", "IOCL"]} />
      </div>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* PIDS */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20">

          <SectionIntro
            tag="Section 02 — Pipeline Intrusion Detection"
            label="Delivered"
            stat="2,200+"
            unit="KM"
            title="Our PIDS Implementation Spanning 2,200 KM Delivered"
            description="Our complete start-to-end Design, Implementation, and Commissioning of Pipeline Intrusion Detection Systems across major Government-regulated Oil & Gas pipelines, ensuring secure, intrusion-free operations in full compliance with statutory security standards and TPIs."
          />

          <ProjectTable
            cols={PIDS_COLS}
            projects={pidsProjects}
          />

          <Legend clients={["BPCL", "HPCL", "GAIL"]} />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20">

          <div className="relative bg-[var(--primary)] rounded-3xl px-10 lg:px-16 py-14 overflow-hidden">

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              <div className="max-w-xl">
                <p className="text-[9px] font-bold uppercase tracking-[4px] text-white/30 mb-4">
                  Partner With Us
                </p>

                <h3 className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-3">
                  Looking to deploy mission-critical telecom infrastructure?
                </h3>

                <p className="text-white/40 text-sm leading-relaxed">
                  Our engineering team brings proven experience across India's major PSU pipelines.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-white text-[var(--primary)] font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}