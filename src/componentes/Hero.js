// src/components/Hero.jsx

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
    >

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/hero (1).mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="w-full px-6 lg:px-12">

          <div className="max-w-3xl">

            {/* TOP TEXT */}
            <span className="inline-block bg-[var(--primary)]/10 text-gray-300 px-4 py-2 rounded-xl font-semibold tracking-[4px] uppercase mb-5">
              Mission Critical Engineering
            </span>

            {/* HEADING */}
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Reliable Industrial Telecom Solutions
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
              Delivering turnkey engineering, telecom integration,
              and lifecycle support for industrial operations.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/solutions"
                className="primary-btn inline-block px-6 py-3 rounded-md"
              >
                Explore Solutions
              </Link>

              <Link
                href="/contact-us"
                className="primary-btn  px-6 py-3 rounded-md"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}