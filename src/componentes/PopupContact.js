"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiX } from "react-icons/fi";

export default function PopupContact({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(3,11,23,0.80)", backdropFilter: "blur(8px)" }}
          onClick={() => setOpen(false)}
        >
          {/* Modal */}
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="relative max-w-lg w-full overflow-hidden"
            style={{ background: "var(--surface-2)", border: "1px solid var(--border-dark)" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Blue top gradient rule */}
            <div
              className="h-0.5 w-full"
              style={{ background: "linear-gradient(90deg, var(--secondary), var(--accent), transparent)" }}
            />

            <div className="p-8 lg:p-10">
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center transition-colors duration-200"
                style={{
                  color: "var(--text-muted-d)",
                  border: "1px solid var(--border-dark)",
                  background: "rgba(255,255,255,0.04)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(33,150,243,0.12)";
                  e.currentTarget.style.borderColor = "var(--border-blue)";
                  e.currentTarget.style.color = "var(--secondary)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "var(--border-dark)";
                  e.currentTarget.style.color = "var(--text-muted-d)";
                }}
              >
                <FiX size={14} />
              </button>

              <div className="label-tag mb-4">Connect With Us</div>

              <h2
                className="font-extrabold leading-snug mb-4"
                style={{ fontSize: "clamp(18px, 2vw, 24px)", color: "var(--text-bright)", letterSpacing: "-0.02em" }}
              >
                Looking for Similar Infrastructure Deployment?
              </h2>

              <div className="h-px w-10 mb-5" style={{ background: "var(--secondary)" }} />

              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted-d)" }}>
                Our team has successfully delivered telecom and security infrastructure projects
                across major PSU pipelines in India.
              </p>

              <div className="flex gap-3">
                <Link
                  href="/contact-us"
                  className="flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-250"
                  style={{ background: "var(--secondary)", color: "white" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "var(--secondary)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Contact Us
                  <FiArrowRight size={13} />
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  className="px-6 py-3 font-semibold text-sm transition-all duration-200"
                  style={{
                    border: "1px solid var(--border-dark)",
                    color: "var(--text-muted-d)",
                    background: "transparent",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "var(--border-blue)";
                    e.currentTarget.style.color = "var(--secondary)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--border-dark)";
                    e.currentTarget.style.color = "var(--text-muted-d)";
                  }}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
