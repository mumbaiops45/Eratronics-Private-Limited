"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

/* Client badge colors aligned to new design */
const clientColor = {
  GAIL: { bg: "rgba(33,150,243,0.12)", color: "var(--secondary)", border: "var(--border-blue)" },
  BPCL: { bg: "rgba(0,180,216,0.12)", color: "var(--accent)", border: "rgba(0,180,216,0.25)" },
  IOCL: { bg: "rgba(11,29,58,0.10)", color: "var(--primary)", border: "var(--border-light)" },
  HPCL: { bg: "rgba(33,150,243,0.08)", color: "var(--secondary)", border: "var(--border-blue)" },
};

const TELECOM_COLS = ["MPLS TP / SDH + NMS", "Network Firewall", "CCTV", "ACS", "VCS", "EPABX", "VHF/UHF"];

const telecomProjects = [
  { id: 1, project: "Upgradation of SDH to MPLS TP at 101 Locations", client: "GAIL", sys: [1,1,0,0,0,0,0], distance: 3196, note: "124 nos." },
  { id: 2, project: "Mumbai Nagpur Jharsuguda Pipeline Project", client: "GAIL", sys: [1,1,1,0,0,1,0], distance: 700 },
  { id: 3, project: "Srikakulam Angul Pipeline", client: "BPCL", sys: [1,1,1,0,0,1,0], distance: 730 },
  { id: 4, project: "Krishnapatnam Hyderabad Pipeline", client: "BPCL", sys: [1,1,1,1,1,1,1], distance: 422 },
  { id: 5, project: "Bina Panki Pipeline Project", client: "BPCL", sys: [1,1,1,1,0,0,1], distance: 355 },
  { id: 6, project: "Tundla Gawaria Pipeline", client: "IOCL", sys: [1,0,1,0,0,1,0], distance: 253 },
  { id: 7, project: "Vijayapur Dadri Bawana Pipeline Project", client: "GAIL", sys: [1,0,0,0,0,0,0], distance: 146 },
];

const PIDS_COLS = ["Pipeline Intrusion", "Leak Detection", "Fence Intrusion"];

const pidsProjects = [
  { id: 1, project: "Irugur Devangotri Pipeline", client: "BPCL", sys: [1,1,0], distance: 355 },
  { id: 2, project: "Krishnapatnam Hyderabad Pipeline", client: "BPCL", sys: [1,1,0], distance: 422 },
  { id: 3, project: "Bina Panki Pipeline", client: "BPCL", sys: [1,1,1], distance: 356 },
  { id: 4, project: "Chennai Cochin Karur Pipeline", client: "BPCL", sys: [1,0,0], distance: 292 },
  { id: 5, project: "Haldia Panagarh Pipeline", client: "HPCL", sys: [1,0,0], distance: 215 },
  { id: 6, project: "National Capital Region (NCR)", client: "GAIL", sys: [1,0,0], distance: 513 },
];

function Dot({ active }) {
  return active ? (
    <span
      className="inline-block w-3.5 h-3.5"
      style={{ background: "var(--secondary)" }}
    />
  ) : (
    <span
      className="inline-block w-3.5 h-3.5"
      style={{ background: "transparent", border: "1px solid var(--border-light)" }}
    />
  );
}

function ClientBadge({ client }) {
  const style = clientColor[client] || { bg: "rgba(11,29,58,0.06)", color: "var(--primary)", border: "var(--border-light)" };
  return (
    <span
      className="inline-block text-[10px] font-bold px-2.5 py-1"
      style={{ background: style.bg, color: style.color, border: `1px solid ${style.border}` }}
    >
      {client}
    </span>
  );
}

function ProjectTable({ cols, projects }) {
  const maxDist = Math.max(...projects.map(p => p.distance));
  const total = projects.reduce((s, p) => s + p.distance, 0);

  return (
    <div className="overflow-x-auto" style={{ border: "1px solid var(--border-light)" }}>
      <table className="w-full min-w-[860px] border-collapse text-sm">
        <thead>
          <tr style={{ background: "var(--primary)" }}>
            <th className="px-5 py-4 text-left text-[9px] font-semibold uppercase tracking-[3px] w-12"
              style={{ color: "rgba(255,255,255,0.60)" }}>
              Sr.
            </th>
            <th className="px-5 py-4 text-left text-[9px] font-semibold uppercase tracking-[3px]"
              style={{ color: "rgba(255,255,255,0.60)" }}>
              Project Details
            </th>
            <th className="px-5 py-4 text-center text-[9px] font-semibold uppercase tracking-[3px] whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.60)" }}>
              End Customer
            </th>
            {cols.map(col => (
              <th key={col}
                className="px-3 py-4 text-center text-[9px] font-semibold uppercase tracking-[2px] whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.60)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
              >
                {col}
              </th>
            ))}
            <th className="px-5 py-4 text-right text-[9px] font-semibold uppercase tracking-[3px] whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.60)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
              Distance
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p, rowIndex) => (
            <tr
              key={p.id}
              className="group transition-colors duration-150"
              style={{
                borderBottom: "1px solid var(--border-light)",
                background: rowIndex % 2 === 0 ? "var(--surface-light)" : "var(--surface-off)",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(33,150,243,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = rowIndex % 2 === 0 ? "var(--surface-light)" : "var(--surface-off)"; }}
            >
              <td className="px-5 py-5 align-middle">
                <span className="text-[11px] font-black tabular-nums" style={{ color: "rgba(33,150,243,0.25)" }}>
                  {String(p.id).padStart(2, "0")}
                </span>
              </td>
              <td className="px-5 py-5 align-middle">
                <p className="font-semibold text-[13px] leading-snug transition-colors duration-200" style={{ color: "var(--primary)" }}>
                  {p.project}
                </p>
                {p.note && (
                  <p className="text-[10px] mt-0.5" style={{ color: "var(--text-muted-l)" }}>{p.note}</p>
                )}
              </td>
              <td className="px-5 py-5 text-center align-middle whitespace-nowrap">
                <ClientBadge client={p.client} />
              </td>
              {p.sys.map((active, si) => (
                <td key={si} className="px-3 py-5 text-center align-middle" style={{ borderLeft: "1px solid var(--border-light)" }}>
                  <Dot active={!!active} />
                </td>
              ))}
              <td className="px-5 py-5 text-right align-middle" style={{ borderLeft: "1px solid var(--border-light)" }}>
                <p className="font-black text-[14px] leading-none" style={{ color: "var(--primary)" }}>
                  {p.distance.toLocaleString()}
                  <span className="text-[10px] font-medium ml-1" style={{ color: "var(--text-muted-l)" }}>KM</span>
                </p>
                <div className="mt-2 h-0.5 w-24 ml-auto" style={{ background: "var(--border-light)" }}>
                  <div
                    className="h-full"
                    style={{ width: `${(p.distance / maxDist) * 100}%`, background: "var(--secondary)" }}
                  />
                </div>
              </td>
            </tr>
          ))}
          <tr style={{ background: "rgba(33,150,243,0.04)", borderTop: "2px solid var(--border-blue)" }}>
            <td colSpan={cols.length + 3} className="px-5 py-4 align-middle">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted-l)" }}>
                Total Pipeline Coverage
              </span>
            </td>
            <td className="px-5 py-4 text-right align-middle" style={{ borderLeft: "1px solid var(--border-light)" }}>
              <span className="font-black text-base" style={{ color: "var(--secondary)" }}>
                {total.toLocaleString()}
              </span>
              <span className="text-[10px] font-medium ml-1" style={{ color: "var(--text-muted-l)" }}>KM</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Legend({ clients }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
      <div className="flex items-center gap-5">
        <span className="flex items-center gap-2 text-[11px] font-medium" style={{ color: "var(--text-muted-l)" }}>
          <span className="w-3.5 h-3.5 shrink-0" style={{ background: "var(--secondary)" }} />
          System Deployed
        </span>
        <span className="flex items-center gap-2 text-[11px] font-medium" style={{ color: "var(--text-muted-l)" }}>
          <span className="w-3.5 h-3.5 shrink-0" style={{ border: "1px solid var(--border-light)" }} />
          Not Applicable
        </span>
      </div>
      <div className="w-px h-4 hidden sm:block" style={{ background: "var(--border-light)" }} />
      <div className="flex flex-wrap gap-2">
        {clients.map(c => <ClientBadge key={c} client={c} />)}
      </div>
    </div>
  );
}

function SectionIntro({ tag, label, stat, unit, title, description }) {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0, y: 24 }, {
      opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div ref={ref} className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16 mb-10">
      {/* Stat */}
      <div className="shrink-0">
        <p className="text-[9px] font-bold uppercase tracking-[4px] mb-2" style={{ color: "var(--text-muted-l)" }}>{label}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl lg:text-6xl font-black leading-none" style={{ color: "var(--secondary)" }}>{stat}</span>
          <span className="text-xl font-black" style={{ color: "var(--border-light)" }}>{unit}</span>
        </div>
        <div className="mt-3 h-0.5 w-12" style={{ background: "var(--secondary)" }} />
      </div>

      {/* Text */}
      <div className="lg:pb-2">
        <div className="label-tag mb-3">{tag}</div>
        <h3
          className="font-extrabold leading-snug mb-3"
          style={{ fontSize: "clamp(20px, 2.5vw, 30px)", color: "var(--primary)", letterSpacing: "-0.02em", maxWidth: "680px" }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--text-muted-l)" }}>{description}</p>
      </div>
    </div>
  );
}

export default function OurPresence() {
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(ctaRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ctaRef.current, start: "top 85%", once: true },
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div style={{ background: "var(--surface-off)" }}>

      {/* TELECOM */}
      <div className=" mx-auto px-6 lg:px-20 py-20">
        <SectionIntro
          tag="Section 01 — Telecom Infrastructure"
          label="Delivered"
          stat="6,000+"
          unit="KM"
          title="Telecom Projects Spanning More than 6,000 KM Delivered"
          description="Our design and implementation capabilities range from simple point to point networks to fully converged telecom architectures, seamlessly integrating multiple systems to meet specific customer requirements."
        />
        <ProjectTable cols={TELECOM_COLS} projects={telecomProjects} />
        <Legend clients={["GAIL", "BPCL", "IOCL"]} />
      </div>

      {/* Divider */}
      <div className="mx-auto px-6 lg:px-20">
        <div className="h-px" style={{ background: "var(--border-light)" }} />
      </div>

      {/* PIDS */}
      <div style={{ background: "var(--surface-light)" }}>
        <div className="mx-auto px-6 lg:px-20 py-20">
          <SectionIntro
            tag="Section 02 — Pipeline Intrusion Detection"
            label="Delivered"
            stat="2,200+"
            unit="KM"
            title="Our PIDS Implementation Spanning 2,200 KM Delivered"
            description="Our complete start to end Design, Implementation, and Commissioning of Pipeline Intrusion Detection Systems across major Government regulated Oil & Gas pipelines, ensuring secure, intrusion free operations in full compliance with statutory security standards and TPIs."
          />
          <ProjectTable cols={PIDS_COLS} projects={pidsProjects} />
          <Legend clients={["BPCL", "HPCL", "GAIL"]} />
        </div>
      </div>

      {/* CTA */}
      <div ref={ctaRef} className="py-20" style={{ background: "var(--secondary)" }}>
        <div className="mx-auto px-6 lg:px-20">
          <div
            className="relative overflow-hidden p-10 lg:p-14"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <div className="label-tag mb-4">Partner With Us</div>
                <h3 className="font-bold text-white mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 30px)", letterSpacing: "-0.02em" }}>
                  Looking to deploy mission critical telecom infrastructure?
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
                  Our engineering team brings proven experience across India's major PSU pipelines.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="flex items-center gap-2.5 px-8 py-4 font-bold text-sm shrink-0 transition-all duration-250"
                style={{ background: "var(--primary)", color: "white" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--surface-0)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Contact Us <FiArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
