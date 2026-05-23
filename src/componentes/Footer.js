"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

const cols = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about-us" },
       { name: "Services", href: "/services" },
      { name: "Our Presence", href: "/our-presence" },
      { name: "E-Waste", href: "/e-waste" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "Turnkey Solutions", href: "/turnkey-solutions" },
      { name: "Engineering Services", href: "/engineering-services" },
      { name: "Integration Excellence", href: "/integration-excellence" },
      { name: "Through-Life Care", href: "/through-life-care-program" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "Oil & Gas Industry", href: "/industries-we-serve/oil-and-gas-industry" },
      { name: "Power Sector", href: "/industries-we-serve/power-sector" },
      { name: "Metro Rail", href: "/industries-we-serve/metro-rail" },
    ],
  },
];

const socials = [
  { icon: <FaFacebookF size={13} />, href: "https://facebook.com", label: "Facebook" },
  { icon: <FaInstagram size={13} />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FaXTwitter size={13} />, href: "https://x.com", label: "X/Twitter" },
  { icon: <FaYoutube size={13} />, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer style={{ background: "var(--surface-0)", borderTop: "1px solid var(--border-dark)" }}>

      {/* Blue top accent */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, var(--secondary), var(--accent), transparent)" }}
      />

      {/* ── MAIN BODY ── */}
      <div className=" mx-auto px-6 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr_1fr_1fr_1.3fr] gap-12">

          {/* Brand column */}
          <div>
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 flex items-center justify-center text-white font-black text-sm shrink-0"
                style={{
                  background: "var(--secondary)",
                  clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
                }}
              >
                E
              </div>
              <div>
                <div className="text-white font-extrabold text-[14px] tracking-[0.06em] uppercase leading-none">
                  Eratronics
                </div>
                <div className="text-[8px] font-semibold tracking-[0.18em] uppercase leading-none mt-0.5"
                  style={{ color: "var(--secondary)" }}>
                  Private Limited
                </div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-7 max-w-xs"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Delivering reliable telecom infrastructure, engineering services, and
              mission-critical industrial communication solutions with precision and scalability.
            </p>

            {/* Contact info */}
            {/* <div className="flex flex-col gap-3 text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>
              <div className="flex items-start gap-2.5">
                <HiOutlineLocationMarker className="text-base shrink-0 mt-0.5" style={{ color: "var(--secondary)" }} />
                <span>Raheja Tesla Industrial, Juinagar, Navi Mumbai, Maharashtra – 400705</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HiOutlinePhone className="text-base shrink-0" style={{ color: "var(--secondary)" }} />
                <a href="tel:+91222087774" className="hover:text-white transition-colors duration-200">+91 22 2087774</a>
              </div>
              <div className="flex items-center gap-2.5">
                <HiOutlineMail className="text-base shrink-0" style={{ color: "var(--secondary)" }} />
                <a href="mailto:sales@eratronics.in" className="hover:text-white transition-colors duration-200">sales@eratronics.in</a>
              </div>
            </div> */}

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center transition-all duration-250"
                  style={{
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "rgba(255,255,255,0.45)",
                    borderRadius: "2px",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--secondary)";
                    e.currentTarget.style.borderColor = "var(--secondary)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4
                className="text-[10px] font-bold uppercase tracking-[0.18em] mb-5"
                style={{ color: "var(--secondary)" }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 group"
                        style={{ color: active ? "var(--secondary)" : "rgba(255,255,255,0.40)" }}
                        onMouseEnter={e => { e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={e => { e.currentTarget.style.color = active ? "var(--secondary)" : "rgba(255,255,255,0.40)"; }}
                      >
                        <FiArrowRight
                          size={10}
                          className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                          style={{ color: "var(--secondary)" }}
                        />
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          <div>
             <h4
                className="text-[10px] font-bold uppercase tracking-[0.18em] mb-5"
                style={{ color: "var(--secondary)" }}
              >
                contact us
              </h4>
             <div className="flex flex-col gap-3 text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>
          
            <div className="flex items-start gap-2.5">
              <HiOutlineLocationMarker className="text-base shrink-0 mt-0.5" style={{ color: "var(--secondary)" }} />
              <span>Raheja Tesla Industrial, Juinagar, Navi Mumbai, Maharashtra – 400705</span>
            </div>
            <div className="flex items-center gap-2.5">
              <HiOutlinePhone className="text-base shrink-0" style={{ color: "var(--secondary)" }} />
              <a href="tel:+91222087774" className="hover:text-white transition-colors duration-200">+91 22 2087774</a>
            </div>
            <div className="flex items-center gap-2.5">
              <HiOutlineMail className="text-base shrink-0" style={{ color: "var(--secondary)" }} />
              <a href="mailto:sales@eratronics.in" className="hover:text-white transition-colors duration-200">sales@eratronics.in</a>
            </div>
          </div>
          </div>
         
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        className="px-6 lg:px-16 py-5"
        style={{
          borderTop: "1px solid var(--border-dark)",
          background: "rgba(0,0,0,0.25)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-2 text-xs"
          style={{ color: "rgba(255,255,255,0.25)" }}>
          <span>© {new Date().getFullYear()} Eratronics Private Limited. All Rights Reserved.</span>
          <span>
            Developed by{" "}
            <a
              href="https://www.nakshatranamahacreations.com/website-developers-in-mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Nakshatra Namaha Creations
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
