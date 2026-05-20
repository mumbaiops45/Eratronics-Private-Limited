"use client";

import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

export default function PopupContact({
  open,
  setOpen,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
        >

          {/* Modal */}
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 50,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative"
          >

            {/* Close */}
            <button
              onClick={() =>
                setOpen(false)
              }
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            <p className="text-[10px] uppercase tracking-[4px] text-[var(--primary)] font-bold mb-3">
              Connect With Us
            </p>

            <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
              Looking for Similar Infrastructure Deployment?
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Our team has successfully delivered telecom and security infrastructure projects across major PSU pipelines in India.
            </p>

            <div className="flex gap-3">

              <Link
                href="/contact-us"
                className="bg-[var(--primary)] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Contact Us
              </Link>

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="border border-gray-200 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50"
              >
                Cancel
              </button>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}