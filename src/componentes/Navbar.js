"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

export default function Navbar() {

  const pathname = usePathname();

  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Solutions", href: "/solutions" },
    { name: "Industry We Serve", href: "/industries-we-serve" },
    { name: "Systems We Offer", href: "/systems-we-offer" },
    { name: "Our Presence", href: "/our-presence" },
    { name: "E-Waste", href: "/e-waste" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">

      <div className="mx-auto">

        <div className="flex items-center justify-between h-[78px]">

          {/* LOGO */}
          <Link href="/" className="flex items-center">

            <div
              className="bg-[var(--primary)] text-white pl-6 pr-14 h-[78px] flex items-center text-xl font-bold uppercase"
              style={{
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
              }}
            >
              Eratronics Private Limited
            </div>

          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-6 pr-4">

            {navLinks.map((link, index) => {

              const isActive = pathname === link.href;

              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[var(--primary)] underline underline-offset-4"
                      : "text-black hover:text-[var(--primary)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-3xl text-black"
          >
            {mobileMenu ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenu
              ? "max-h-[700px] opacity-100 mt-5"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="bg-white rounded-b-xl shadow-2xl p-6 flex flex-col gap-5">

            {navLinks.map((link, index) => {

              const isActive = pathname === link.href;

              return (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className={`font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-black hover:text-[var(--primary)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* MOBILE CTA */}
            <Link
              href="/contact-us"
              onClick={() => setMobileMenu(false)}
              className="text-center py-3 rounded-full text-white font-semibold transition-all duration-300 bg-[var(--primary)]"
            >
              Get In Touch
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}