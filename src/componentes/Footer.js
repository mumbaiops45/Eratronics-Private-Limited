// src/components/Footer.jsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
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
    { name: "Solutions", href: "/solutions" },
    { name: "Industry We Serve", href: "/industries-we-serve" },
    { name: "Systems We Offer", href: "/systems-we-offer" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COMPANY INFO */}
          <div>

            <Link href="/" className="text-2xl font-bold">
              Eratronics{" "}
              <span className="text-white/80">Private Limited</span>
            </Link>

            <p className="text-white/80 mt-5 leading-relaxed text-sm">
              Delivering reliable telecom infrastructure,
              engineering services, and mission-critical
              industrial communication solutions with precision and scalability.
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
                            ? "text-white underline decoration-white"
                            : "text-white/70 hover:text-white hover:text-white"
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
                            ? "text-white underline"
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

              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-white text-xl mt-1" />
                <p>Mumbai, Maharashtra, India</p>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlinePhone className="text-white text-xl" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-all duration-300"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineMail className="text-white text-xl" />
                <a
                  href="mailto:info@eratronics.com"
                  className="hover:text-white transition-all duration-300"
                >
                  info@eratronics.com
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
                    hover:bg-white
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
            © {new Date().getFullYear()} Eratronics Private Limited. All Rights Reserved.
          </div>

          <div className="text-center md:text-right">
            Developed by{" "}
            <a
              href="https://www.nakshatranamahacreations.com/website-developers-in-mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Nakshatra Namaha Creations
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}