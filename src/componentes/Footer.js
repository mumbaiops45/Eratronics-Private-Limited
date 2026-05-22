// src/components/Footer.jsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

export default function Footer() {

  const pathname = usePathname();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Systems We Offer", href: "#" },
    { name: "Our Presence", href: "/our-presence" },
    { name: "E-Waste", href: "/e-waste" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const serviceLinks = [
    { name: "Turnkey Solutions", href: "/solutions" },
    { name: "Engineering Services", href: "/engineering-services" },
    { name: "Integration Excellence", href: "/integration-excellence" },
    { name: "Through-Life Care", href: "/etcp" },
  ];

  const industriesLinks = [
    {
      name: "Oil & Gas Industry",
      href: "/industries-we-serve/oil-and-gas-industry",
    },
    {
      name: "Power Sector",
      href: "/industries-we-serve/power-sector",
    },
    {
      name: "Metro Rail",
      href: "/industries-we-serve/metro-rail",
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaXTwitter />, href: "https://x.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
  ];

  return (
    <footer className="w-full bg-[var(--primary)] text-white">

      {/* TOP FOOTER */}
      <div className="px-6 md:px-10 lg:px-16 pt-16 pb-12">

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1.5fr] gap-10">

          {/* COMPANY INFO */}
          <div>

            <Link href="/" className="text-[22px] font-bold">
              Eratronics{" "}
              <span className="text-white/80">
                Private Limited
              </span>
            </Link>

            <p className="text-white/80 mt-5 leading-relaxed text-sm">
              Delivering reliable telecom infrastructure,
              engineering services, and mission-critical
              industrial communication solutions with
              precision and scalability.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-white">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-2">

              {quickLinks.map((link, index) => {

                const isActive = pathname === link.href;

                return (
                  <li key={index}>

                    <Link
                      href={link.href}
                      className={`
                        text-sm font-medium transition-all duration-300
                        ${
                          isActive
                            ? "text-white underline underline-offset-4 decoration-white"
                            : "text-white/70 hover:text-white"
                        }
                      `}
                    >
                      {link.name}
                    </Link>

                  </li>
                );
              })}

            </ul>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-white">
              Our Services
            </h3>

            <ul className="flex flex-col gap-2">

              {serviceLinks.map((link, index) => {

                const isActive = pathname === link.href;

                return (
                  <li key={index}>

                    <Link
                      href={link.href}
                      className={`
                        text-sm font-medium transition-all duration-300
                        ${
                          isActive
                            ? "text-white underline underline-offset-4"
                            : "text-white/70 hover:text-white"
                        }
                      `}
                    >
                      {link.name}
                    </Link>

                  </li>
                );
              })}

            </ul>

          </div>

          {/* INDUSTRIES */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-white">
              Industry Serve
            </h3>

            <ul className="flex flex-col gap-2">

              {industriesLinks.map((link, index) => {

                const isActive = pathname === link.href;

                return (
                  <li key={index}>

                    <Link
                      href={link.href}
                      className={`
                        text-sm font-medium transition-all duration-300
                        ${
                          isActive
                            ? "text-white underline underline-offset-4"
                            : "text-white/70 hover:text-white"
                        }
                      `}
                    >
                      {link.name}
                    </Link>

                  </li>
                );
              })}

            </ul>

          </div>

          {/* CONTACT INFO */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-white">
              Contact Info
            </h3>

            <div className="flex flex-col gap-4 text-sm text-white/80">

              {/* ADDRESS */}
              <div className="flex items-start gap-3">

                <HiOutlineLocationMarker className="text-[var(--secondary)] text-xl mt-1 shrink-0" />

                <p>
                  Raheja Tesla Industrial, Juinagar,
                  Navi Mumbai, Maharashtra - 400705,
                  India
                </p>

              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3">

                <HiOutlinePhone className="text-[var(--secondary)] text-xl" />

                <a
                  href="tel:+91222087774"
                  className="hover:text-white transition-all duration-300"
                >
                  +91 22 2087774
                </a>

              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">

                <HiOutlineMail className="text-[var(--secondary)] text-xl" />

                <a
                  href="mailto:sales@eratronics.in"
                  className="hover:text-white transition-all duration-300"
                >
                  sales@eratronics.in
                </a>

              </div>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 mt-6 flex-wrap">

              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11
                    rounded-full
                    border border-white/30
                    flex items-center justify-center
                    text-white
                    hover:bg-[var(--secondary)]
                    hover:text-[var(--primary)]
                    hover:border-white
                    transition-all duration-300
                  "
                >
                  {social.icon}
                </a>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 py-4 px-6 md:px-10 lg:px-16">

        <div className="flex flex-col md:flex-row md:justify-between gap-2 text-sm text-white/70">

          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Eratronics Private Limited.
            All Rights Reserved.
          </div>

          <div className="text-center md:text-right">
            Developed by{" "}

            <a
              href="https://www.nakshatranamahacreations.com/website-developers-in-mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline underline-offset-4"
            >
              Nakshatra Namaha Creations
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}