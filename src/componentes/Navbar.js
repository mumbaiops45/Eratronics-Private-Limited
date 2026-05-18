"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiChevronDown,
} from "react-icons/hi";

export default function Navbar() {

  const pathname = usePathname();

  const [mobileMenu, setMobileMenu] = useState(false);

  const solutionsDropdown = [
    {
      name: "Turnkey Solutions",
      href: "/turnkey-solutions",
    },
    {
      name: "Engineering Services",
      href: "/engineering-services",
    },
    {
      name: "System Integration Services",
      href: "/integration-excellence",
    },
    {
      name: "Eratronics Through-Life Care Program",
      href: "/through-life-care-program",
    },
  ];

  const industriesDropdown = [
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Solutions",
<<<<<<< HEAD
      href: "#",
=======
      href: "/solutions",
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
      dropdown: solutionsDropdown,
    },
    {
      name: "Industry We Serve",
<<<<<<< HEAD
      href: "#",
=======
      href: "/industries-we-serve",
>>>>>>> ae90018c2ecf6d139db3e621b59084bbfb813187
      dropdown: industriesDropdown,
    },
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

              const isActive =
                pathname === link.href ||
                pathname.startsWith(link.href + "/");

              return (
                <div
                  key={index}
                  className="relative group"
                >

                  {/* MAIN LINK */}
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-[var(--primary)] underline underline-offset-4"
                        : "text-black hover:text-[var(--primary)]"
                    }`}
                  >
                    {link.name}

                    {link.dropdown && (
                      <HiChevronDown
                        className="text-base transition-transform duration-300 group-hover:rotate-180"
                      />
                    )}
                  </Link>

                  {/* DROPDOWN */}
                  {link.dropdown && (
                    <div className="absolute left-0 top-full pt-5 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">

                      <div className="w-[320px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl">

                        {link.dropdown.map((item, i) => {

                          const isSubActive =
                            pathname === item.href;

                          return (
                            <Link
                              key={i}
                              href={item.href}
                              className={`block border-b border-gray-100 px-6 py-4 text-sm font-medium transition-all duration-300 last:border-b-0 ${
                                isSubActive
                                  ? "bg-[var(--primary)] text-white"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-[var(--primary)]"
                              }`}
                            >
                              {item.name}
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

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-3xl text-black pr-5"
          >
            {mobileMenu ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenu
              ? "max-h-[1200px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="bg-white rounded-b-xl shadow-2xl p-6 flex flex-col gap-5">

            {navLinks.map((link, index) => {

              const isActive =
                pathname === link.href ||
                pathname.startsWith(link.href + "/");

              return (
                <div key={index}>

                  {/* MAIN LINK */}
                  <Link
                    href={link.href}
                    onClick={() => !link.dropdown && setMobileMenu(false)}
                    className={`flex items-center justify-between font-medium transition-all duration-300 ${
                      isActive
                        ? "text-[var(--primary)]"
                        : "text-black hover:text-[var(--primary)]"
                    }`}
                  >
                    {link.name}

                    {link.dropdown && (
                      <HiChevronDown className="text-lg" />
                    )}
                  </Link>

                  {/* MOBILE DROPDOWN */}
                  {link.dropdown && (
                    <div className="mt-4 ml-4 flex flex-col gap-3 border-l border-gray-200 pl-4">

                      {link.dropdown.map((item, i) => {

                        const isSubActive =
                          pathname === item.href;

                        return (
                          <Link
                            key={i}
                            href={item.href}
                            onClick={() => setMobileMenu(false)}
                            className={`text-sm transition-all duration-300 ${
                              isSubActive
                                ? "text-[var(--primary)] font-semibold"
                                : "text-gray-600 hover:text-[var(--primary)]"
                            }`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}

                    </div>
                  )}

                </div>
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