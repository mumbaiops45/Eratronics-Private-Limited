"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { HiOutlineMenuAlt3, HiOutlineX, HiChevronDown } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

const solutionsDropdown = [
  { name: "Turnkey Solutions", href: "/turnkey-solutions" },
  { name: "Engineering Services", href: "/engineering-services" },
  { name: "System Integration Services", href: "/integration-excellence" },
  { name: "Eratronics Through-Life Care Program", href: "/through-life-care-program" },
];

const industriesDropdown = [
  { name: "Oil & Gas Industry", href: "/industries-we-serve/oil-and-gas-industry" },
  { name: "Power Sector", href: "/industries-we-serve/power-sector" },
  { name: "Metro Rail", href: "/industries-we-serve/metro-rail" },
];

const systemsDropdown = [
  { name: "Telecom Systems", href: "/systems-we-offer/critical-telecom-systems" },
  { name: "Intrusion Security", href: "/systems-we-offer/intrusion-protection" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/services", dropdown: solutionsDropdown },
  { name: "Industries", href: "#", dropdown: industriesDropdown },
  { name: "Systems we Offer", href: "#", dropdown: systemsDropdown },
  { name: "Presence", href: "/our-presence" },
  { name: "E-Waste", href: "/e-waste" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef(null);

  /* Scroll detection */
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  /* GSAP entrance */
  useEffect(() => {
    if (!barRef.current) return;
    gsap.fromTo(barRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.15 }
    );
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        ref={barRef}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-400"
        style={{
          background: scrolled
            ? "rgba(6,15,30,0.98)"
            : "rgba(6,15,30,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(33,150,243,0.18)"
            : "1px solid rgba(255,255,255,0.05)",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.50)" : "none",
        }}
      >
        {/* Thin blue top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--secondary), var(--accent), transparent)" }}
        />

        <div className="mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[70px]">

            {/* ── LOGO ── */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Monogram badge */}
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
                <div className="text-white font-extrabold text-[15px] tracking-[0.06em] leading-none uppercase">
                  Eratronics
                </div>
                <div
                  className="text-[8px] font-semibold tracking-[0.18em] uppercase leading-none mt-0.5"
                  style={{ color: "var(--secondary)" }}
                >
                  Private Limited
                </div>
              </div>
            </Link>
            <div className="flex gap-4">
              {/* ── DESKTOP NAV ── */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <div key={link.name} className="relative group">
                      <Link
                        href={link.href}
                        className="flex items-center gap-1 px-3.5 py-2 text-[12.5px] font-semibold tracking-[0.04em] uppercase transition-colors duration-200 rounded-sm"
                        style={{
                          color: active ? "var(--secondary)" : "rgba(255,255,255,0.70)",
                        }}
                        onMouseEnter={e => {
                          if (!active) e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={e => {
                          if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.70)";
                        }}
                      >
                        {link.name}
                        {link.dropdown && (
                          <HiChevronDown className="text-sm transition-transform duration-300 group-hover:rotate-180" />
                        )}
                      </Link>

                      {/* Active underline */}
                      {active && (
                        <div
                          className="absolute bottom-0 left-3.5 right-3.5 h-px"
                          style={{ background: "var(--secondary)" }}
                        />
                      )}

                      {/* ── DROPDOWN ── */}
                      {link.dropdown && (
                        <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-250">
                          <div
                            className="w-72 overflow-hidden"
                            style={{
                              background: "rgba(6,15,30,0.98)",
                              border: "1px solid rgba(33,150,243,0.20)",
                              boxShadow: "0 20px 60px rgba(0,0,0,0.60), 0 0 0 1px rgba(255,255,255,0.03)",
                            }}
                          >
                            <div className="h-px w-full" style={{ background: "var(--secondary)" }} />
                            {link.dropdown.map((item) => {
                              const sub = pathname === item.href;
                              return (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center justify-between px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.05em] transition-all duration-150 border-b"
                                  style={{
                                    borderColor: "rgba(255,255,255,0.04)",
                                    color: sub ? "var(--secondary)" : "rgba(255,255,255,0.65)",
                                    background: sub ? "rgba(33,150,243,0.08)" : "transparent",
                                  }}
                                  onMouseEnter={e => {
                                    e.currentTarget.style.background = "rgba(33,150,243,0.12)";
                                    e.currentTarget.style.color = "#fff";
                                    e.currentTarget.style.paddingLeft = "24px";
                                  }}
                                  onMouseLeave={e => {
                                    e.currentTarget.style.background = sub ? "rgba(33,150,243,0.08)" : "transparent";
                                    e.currentTarget.style.color = sub ? "var(--secondary)" : "rgba(255,255,255,0.65)";
                                    e.currentTarget.style.paddingLeft = "20px";
                                  }}
                                >
                                  {item.name}
                                  <FiArrowRight size={11} className="opacity-40" />
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* ── CTA ── */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/contact-us"
                  className="flex items-center gap-2 px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.05em] transition-all duration-250"
                  style={{
                    background: "var(--secondary)",
                    color: "#fff",
                    borderRadius: "2px",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#1E87E0";
                    e.currentTarget.style.boxShadow = "0 0 24px rgba(33,150,243,0.40)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "var(--secondary)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Contact Us
                  <FiArrowRight size={12} />
                </Link>
              </div>

            </div>

            {/* ── HAMBURGER ── */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden text-2xl text-white/70 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-400"
        style={{
          background: "rgba(3,11,23,0.97)",
          backdropFilter: "blur(16px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="pt-24 px-8 flex flex-col gap-1 overflow-y-auto h-full pb-12">

          {/* Top blue line */}
          <div className="h-px w-full mb-6" style={{ background: "var(--secondary)", opacity: 0.4 }} />

          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => !link.dropdown && setMobileOpen(false)}
                  className="flex items-center justify-between py-4 text-lg font-bold uppercase tracking-[0.06em] border-b transition-colors duration-200"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    color: active ? "var(--secondary)" : "rgba(255,255,255,0.80)",
                  }}
                >
                  {link.name}
                  {link.dropdown && <HiChevronDown className="text-base opacity-50" />}
                </Link>

                {link.dropdown && (
                  <div className="pl-4 flex flex-col gap-0 mb-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 py-2.5 text-sm font-semibold border-b transition-colors duration-200"
                        style={{
                          borderColor: "rgba(255,255,255,0.04)",
                          color: pathname === item.href ? "var(--secondary)" : "rgba(255,255,255,0.50)",
                        }}
                      >
                        <span className="w-4 h-px" style={{ background: "var(--secondary)", opacity: 0.5 }} />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="mt-8">
            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center py-4 text-sm"
            >
              Contact Us  <FiArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
