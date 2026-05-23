"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiPackage, FiFilter, FiShield, FiTruck,
  FiRefreshCw, FiCheckCircle, FiCheck, FiX, FiMapPin, FiArrowRight,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const policyItems = [
  { num: "01", icon: FiPackage, title: "Safe Collection of E Waste",
    desc: "All obsolete, damaged, non functional, or end of life electronic products are identified and collected separately from general waste to ensure proper disposal." },
  { num: "02", icon: FiFilter, title: "Proper Segregation",
    desc: "Electronic waste is carefully segregated based on product type, material composition, and recycling requirements to facilitate safe handling and efficient recycling." },
  { num: "03", icon: FiShield, title: "Environmentally Safe Storage",
    desc: "Collected e waste is stored securely in designated areas to prevent leakage, contamination, and environmental damage before final disposal." },
  { num: "04", icon: FiTruck, title: "Disposal Through Authorized Recycler",
    desc: "We ensure that all e waste is handed over only to authorized recyclers, dismantlers, and certified waste management agencies approved by relevant government authorities." },
  { num: "05", icon: FiRefreshCw, title: "Recycling and Resource Recovery",
    desc: "Wherever possible, valuable materials such as metals, plastics, and reusable components are recovered through proper recycling processes to reduce resource wastage." },
  { num: "06", icon: FiCheckCircle, title: "Compliance with Statutory Regulations",
    desc: "We maintain compliance with all applicable environmental laws, government regulations, and industry standards related to electronic waste management." },
];

const dos = [
  "Always check the product catalogue, user manual, or accompanying documentation for proper end of life handling and disposal instructions.",
  "Ensure that only authorized recyclers and certified service providers handle, repair, or recycle your electronic products.",
  "Always contact our authorized E Waste collection centers for the safe disposal of products that have reached the end of their useful life.",
  "Dispose of used electronic products, batteries, accessories, and related components only at the nearest authorized E Waste collection point.",
  "Before disposal, always disconnect batteries from the product and ensure that any glass components or fragile surfaces are properly protected against damage or breakage.",
];

const donts = [
  "Do not attempt to dismantle, repair, or dispose of electronic products on your own without proper authorization.",
  "Do not discard electronic products in bins marked with the \"Do Not Dispose\" or general waste disposal signs.",
  "Do not hand over e waste to informal or unauthorized sectors such as local scrap dealers, rag pickers, or unorganized waste handlers.",
  "Do not dispose of electronic waste along with regular household or municipal waste, as it may eventually end up in landfills and cause environmental harm.",
];

export default function EWaste() {
  const introRef   = useRef(null);
  const policyRef  = useRef(null);
  const dosDontsRef = useRef(null);
  const collectionRef = useRef(null);
  const ctaRef     = useRef(null);

  useEffect(() => {
    [introRef, policyRef, dosDontsRef, collectionRef, ctaRef].forEach(ref => {
      if (!ref.current) return;
      gsap.fromTo(ref.current, { opacity: 0, y: 24 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      });
    });

    const policyRows = policyRef.current?.querySelectorAll(".policy-row");
    if (policyRows) {
      gsap.fromTo(policyRows, { opacity: 0, x: -20 }, {
        opacity: 1, x: 0, duration: 0.5, stagger: 0.07, ease: "power3.out",
        scrollTrigger: { trigger: policyRef.current, start: "top 85%", once: true },
      });
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div style={{ background: "var(--surface-off)" }}>

      {/* INTRO */}
      <section className="mx-auto px-6 lg:px-20 py-20">
        <div ref={introRef}>
          <div className="label-tag mb-6">Environmental Responsibility</div>
          <h2
            className="font-extrabold leading-snug mb-6"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "var(--primary)", letterSpacing: "-0.02em" }}
          >
            Our Commitment to Responsible{" "}
            <span style={{ color: "var(--secondary)" }}>E Waste Management</span>
          </h2>
          <div className="h-px w-14 mb-8" style={{ background: "var(--secondary)" }} />

          <div className="flex flex-col gap-4 max-w-3xl text-sm leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
            <p>At Eratronics, environmental responsibility is an integral part of our business philosophy. We are committed to implementing effective E Waste Management practices to ensure the safe handling, disposal, recycling, and reuse of electronic waste generated through our operations and supplied products.</p>
            <p>Improper disposal of electronic waste can lead to serious environmental and health hazards. Therefore, responsible disposal and recycling are essential for protecting natural resources and maintaining environmental sustainability.</p>
            <p>We strictly follow the E Waste Management Rules and comply with the guidelines issued by the <strong style={{ color: "var(--primary)", fontWeight: 600 }}>Central Pollution Control Board (CPCB), Government of India</strong>, for safe disposal and environmentally sound recycling practices.</p>
          </div>
        </div>
      </section>

      {/* POLICY */}
      <section style={{ background: "var(--surface-light)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="mx-auto px-6 lg:px-20 py-20">
          <div className="text-center mb-14">
            <div className="label-tag mb-4 inline-block">Policy Framework</div>
            <h2
              className="font-extrabold leading-snug"
              style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "var(--primary)", letterSpacing: "-0.02em" }}
            >
              Our E Waste Management Policy
            </h2>
          </div>

          <div ref={policyRef} style={{ border: "1px solid var(--border-light)" }}>
            {policyItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="policy-row group flex items-start gap-6 lg:gap-10 py-6 px-6 lg:px-10 transition-all duration-250"
                  style={{
                    borderBottom: i < policyItems.length - 1 ? "1px solid var(--border-light)" : "none",
                    background: "transparent",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(33,150,243,0.03)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                >
                  <span className="text-[11px] font-black tabular-nums shrink-0 mt-1 w-6" style={{ color: "rgba(33,150,243,0.25)" }}>
                    {item.num}
                  </span>
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0 transition-all duration-250 group-hover:scale-110"
                    style={{ background: "rgba(33,150,243,0.08)", border: "1px solid var(--border-blue)" }}
                  >
                    <Icon size={15} style={{ color: "var(--secondary)" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm mb-2 transition-colors duration-200 group-hover:text-(--secondary)" style={{ color: "var(--primary)" }}>
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "var(--text-muted-l)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMITMENT — dark */}
      <section className="relative overflow-hidden" style={{ background: "var(--primary)" }}>
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, rgba(33,150,243,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="relative z-10 mx-auto px-6 lg:px-20 py-20">
          <div className="h-0.5 w-full mb-10" style={{ background: "linear-gradient(90deg, var(--secondary), var(--accent), transparent)" }} />
          <div className="label-tag mb-6">Our Commitment</div>
          <h2
            className="font-extrabold leading-snug mb-6"
            style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "var(--text-bright)", letterSpacing: "-0.02em", maxWidth: "720px" }}
          >
            A Responsible Partner for Environmental Stewardship
          </h2>
          <div className="flex flex-col gap-4 text-sm leading-relaxed max-w-3xl" style={{ color: "var(--text-muted-d)" }}>
            <p>As a responsible supplier and system integrator serving Government, PSU, Railways, Oil & Gas, Telecom, and Infrastructure sectors, we recognize our duty to contribute toward environmental protection and sustainable development.</p>
            <p>We continuously strive to improve our waste management systems and work closely with our partners, vendors, and customers to promote responsible recycling practices.</p>
            <p>Our commitment to E Waste Management reflects our dedication to environmental stewardship, operational excellence, and long term sustainability.</p>
          </div>
        </div>
      </section>

      {/* DO'S AND DON'TS */}
      <section ref={dosDontsRef} className="mx-auto px-6 lg:px-20 py-20">
        <div className="text-center mb-12">
          <div className="label-tag mb-4 inline-block">Handling Guidelines</div>
          <h2
            className="font-extrabold leading-snug"
            style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "var(--primary)", letterSpacing: "-0.02em" }}
          >
            Responsible E Waste Handling
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {/* DO'S */}
          <div className="overflow-hidden" style={{ border: "1px solid rgba(34,197,94,0.25)" }}>
            <div className="flex items-center gap-3 px-7 py-5" style={{ background: "#16a34a" }}>
              <div className="w-7 h-7 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                <FiCheck size={14} color="white" />
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-widest">Do's</span>
            </div>
            <div style={{ background: "rgba(34,197,94,0.03)" }}>
              {dos.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 px-7 py-5"
                  style={{ borderBottom: i < dos.length - 1 ? "1px solid rgba(34,197,94,0.12)" : "none" }}
                >
                  <span className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(34,197,94,0.15)" }}>
                    <FiCheck size={11} color="#16a34a" />
                  </span>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-muted-l)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DON'TS */}
          <div className="overflow-hidden" style={{ border: "1px solid rgba(239,68,68,0.25)" }}>
            <div className="flex items-center gap-3 px-7 py-5" style={{ background: "#dc2626" }}>
              <div className="w-7 h-7 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                <FiX size={14} color="white" />
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-widest">Don'ts</span>
            </div>
            <div style={{ background: "rgba(239,68,68,0.03)" }}>
              {donts.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 px-7 py-5"
                  style={{ borderBottom: i < donts.length - 1 ? "1px solid rgba(239,68,68,0.12)" : "none" }}
                >
                  <span className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(239,68,68,0.12)" }}>
                    <FiX size={11} color="#dc2626" />
                  </span>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-muted-l)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION POINTS */}
      <section ref={collectionRef} style={{ background: "var(--surface-light)", borderTop: "1px solid var(--border-light)" }}>
        <div className="mx-auto px-6 lg:px-20 py-20">

          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16 mb-10">
            <div>
              <div className="label-tag mb-4">Collection Network</div>
              <h3
                className="font-extrabold"
                style={{ fontSize: "clamp(20px, 2.5vw, 30px)", color: "var(--primary)", letterSpacing: "-0.02em" }}
              >
                E Waste Drop Off Points
              </h3>
            </div>
            <div className="hidden lg:block w-px h-16" style={{ background: "var(--border-light)" }} />
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--text-muted-l)" }}>
              Please drop your E Waste at the nearest authorised collection point listed below. Our certified partners ensure responsible handling and processing.
            </p>
          </div>

          <div
            className="relative px-10 py-16 text-center"
            style={{
              border: "1px dashed var(--border-blue)",
              background: "rgba(33,150,243,0.03)",
            }}
          >
            <div
              className="w-14 h-14 flex items-center justify-center mx-auto mb-5"
              style={{ border: "1px solid var(--border-blue)", background: "rgba(33,150,243,0.08)" }}
            >
              <FiMapPin size={22} style={{ color: "var(--secondary)" }} />
            </div>
            <p className="text-base font-semibold mb-2" style={{ color: "var(--primary)" }}>
              Collection Points Coming Soon
            </p>
            <p className="text-sm max-w-sm mx-auto leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
              Details of collection points along with address and contact information will be updated here shortly.
            </p>
            <div className="mt-7">
              <span
                className="inline-flex items-center gap-2 text-[11px] font-semibold px-5 py-2.5"
                style={{ color: "var(--secondary)", border: "1px solid var(--border-blue)", background: "rgba(33,150,243,0.06)" }}
              >
                <span className="w-1.5 h-1.5 animate-pulse" style={{ background: "var(--secondary)" }} />
                Information will be added soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20" style={{ background: "var(--secondary)" }}>
        <div className="mx-auto px-6 lg:px-20">
          <div className="relative overflow-hidden p-10 lg:p-14" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <div className="label-tag mb-4">Need Assistance?</div>
                <h4
                  className="font-bold text-white mb-3"
                  style={{ fontSize: "clamp(18px, 2vw, 26px)", letterSpacing: "-0.02em" }}
                >
                  For E Waste disposal queries or to locate your nearest collection centre, contact us.
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
                  Our team will guide you through the responsible disposal process in compliance with CPCB guidelines.
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
      </section>

    </div>
  );
}
