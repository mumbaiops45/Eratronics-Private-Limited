"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser, FiMail, FiBriefcase, FiSmartphone,
  FiMessageSquare, FiSend, FiCheck, FiAlertCircle,
  FiMapPin, FiPhone, FiClock, FiArrowRight,
} from "react-icons/fi";

/* --- Initial form state ------------------------------------ */
const EMPTY = { name: "", email: "", organization: "", mobile: "", message: "" };

/* --- Reusable input field ---------------------------------- */
function Field({ label, name, type = "text", icon: Icon, placeholder, value, onChange, error, required = true }) {
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon
              size={14}
              className={`transition-colors duration-200 ${error ? "text-red-300" : "text-gray-300"}`}
            />
          </span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
          className={`w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-3.5 rounded-xl border text-[13px] text-gray-800 bg-white transition-all duration-200 outline-none placeholder-gray-300 ${
            error
              ? "border-red-300 bg-red-50/30 focus:border-red-400 focus:ring-2 focus:ring-red-100"
              : "border-gray-200 hover:border-gray-300 focus:border-[var(--seco)] focus:ring-2 focus:ring-[var(--seco)]/10"
          }`}
        />
      </div>
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-red-500 font-medium">
          <FiAlertCircle size={11} />
          {error}
        </p>
      )}
    </div>
  );
}

/* --- Main component ----------------------------------------- */
export default function ContactUs() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  /* Validation */
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) {
      e.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address";
    }
    if (!form.organization.trim()) e.organization = "Organization name is required";
    if (!form.mobile.trim()) {
      e.mobile = "Mobile number is required";
    } else if (!/^[\d\s+\-()\\.]{7,15}$/.test(form.mobile.trim())) {
      e.mobile = "Enter a valid mobile number";
    }
    if (!form.message.trim()) e.message = "Please enter your message";
    return e;
  };

  /* Field change handler — clears its error on edit */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* Submit handler — posts to FormSubmit.co AJAX endpoint */
const handleSubmit = async (e) => {
  e.preventDefault();

  // validate form
  const errs = validate();

  if (Object.keys(errs).length > 0) {
    setErrors(errs);
    return;
  }

  setErrors({});
  setStatus("loading");

  try {
    await emailjs.send(
      "service_1qajjl8", // EmailJS SERVICE ID
      "template_y3r7go5", // EmailJS TEMPLATE ID
      {
        from_name: form.name,
        from_email: form.email,
        organization: form.organization,
        mobile: form.mobile,
        message: form.message,
      },
      "tStv7JwZFWsbJU2Cf" // EmailJS PUBLIC KEY
    );

    setStatus("success");
    setForm(EMPTY);

  } catch (error) {
    console.log(error);
    setStatus("error");
  }
};

  const resetForm = () => {
    setStatus("idle");
    setForm(EMPTY);
    setErrors({});
  };

  return (
    <div className="bg-white">

      {/* -- PAGE INTRO --------------------------------------- */}
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[5px] text-[var(--seco)] mb-4">
                Get in Touch
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
                Contact &amp; Enquiry
              </h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm lg:text-right">
              Fill in the form below and our team will get back to you within <strong className="text-gray-600 font-semibold">24 business hours</strong>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* -- MAIN CONTENT ------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-start">

          {/* -- FORM PANEL ------------------------------------ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden"
          >
            {/* Form header */}
            <div className="px-8 lg:px-10 py-7 border-b border-gray-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-900 text-base">Contact / Enquiry Form</p>
                <p className="text-[11px] text-gray-400 mt-0.5">All fields marked * are required</p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[var(--seco)]/8 flex items-center justify-center">
                <FiMessageSquare size={16} className="text-[var(--seco)]" />
              </div>
            </div>

            {/* Form body */}
            <div className="px-8 lg:px-10 py-8">
              <AnimatePresence mode="wait">

                {/* -- SUCCESS STATE -- */}
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                      <FiCheck size={28} className="text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Message Sent Successfully
                    </h4>
                    <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-7">
                      Thank you for reaching out. Our team will respond to your enquiry within 24 business hours.
                    </p>
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--seco)] border border-[var(--seco)]/25 px-6 py-2.5 rounded-xl hover:bg-[var(--seco)]/5 transition-colors duration-200"
                    >
                      Send Another Enquiry
                      <FiArrowRight size={13} />
                    </button>
                  </motion.div>
                )}

                {/* -- FORM STATE -- */}
                {status !== "success" && (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                  >
                    {/* Row 1: Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <Field
                        label="Name"
                        name="name"
                        icon={FiUser}
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        error={errors.name}
                      />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        icon={FiMail}
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        error={errors.email}
                      />
                    </div>

                    {/* Row 2: Organization + Mobile */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <Field
                        label="Organization"
                        name="organization"
                        icon={FiBriefcase}
                        placeholder="Company / organization"
                        value={form.organization}
                        onChange={handleChange}
                        error={errors.organization}
                      />
                      <Field
                        label="Mobile No"
                        name="mobile"
                        type="tel"
                        icon={FiSmartphone}
                        placeholder="+91 XXXXX XXXXX"
                        value={form.mobile}
                        onChange={handleChange}
                        error={errors.mobile}
                      />
                    </div>

                    {/* Message textarea */}
                    <div className="mb-7">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                        Message <span className="text-red-400 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3.5 pointer-events-none">
                          <FiMessageSquare
                            size={14}
                            className={`transition-colors duration-200 ${errors.message ? "text-red-300" : "text-gray-300"}`}
                          />
                        </span>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Describe your requirement or enquiry in detail..."
                          className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-[13px] text-gray-800 bg-white resize-none transition-all duration-200 outline-none placeholder-gray-300 ${
                            errors.message
                              ? "border-red-300 bg-red-50/30 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                              : "border-gray-200 hover:border-gray-300 focus:border-[var(--seco)] focus:ring-2 focus:ring-[var(--seco)]/10"
                          }`}
                        />
                      </div>
                      {errors.message && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-red-500 font-medium">
                          <FiAlertCircle size={11} />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* General error */}
                    {status === "error" && (
                      <div className="mb-5 flex items-center gap-3 bg-red-50 border border-red-100 text-red-600 text-[12px] font-medium px-4 py-3 rounded-xl">
                        <FiAlertCircle size={14} />
                        Something went wrong. Please try again or email us directly at{" "}
                        <a href="mailto:sales@eratronics.in" className="underline">
                          sales@eratronics.in
                        </a>
                      </div>
                    )}

                    {/* Submit */}
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[11px] text-gray-400 leading-relaxed max-w-xs">
                        Your information is kept strictly confidential and used only to respond to your enquiry.
                      </p>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="flex-shrink-0 inline-flex items-center gap-2.5 bg-[var(--primary)] text-white font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-[var(--primary)] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? (
                          <>
                            <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Submit
                            <FiSend size={14} />
                          </>
                        )}
                      </button>
                    </div>

                  </motion.form>
                )}

              </AnimatePresence>
            </div>
          </motion.div>

          {/* -- CONTACT INFO SIDEBAR -------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex flex-col gap-5"
          >

            {/* Office card */}
            <div className="relative bg-[var(--primary)] rounded-3xl overflow-hidden px-8 py-9">
              {/* Decorative glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[var(--seco)]/30 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-[var(--seco)]/15 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <p className="text-[9px] font-bold uppercase tracking-[5px] text-white/30 mb-5">
                  Our Office
                </p>
                <h4 className="text-lg font-bold text-white leading-snug mb-7">
                  Eratronics Private Limited
                </h4>

                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <FiMapPin size={14} className="text-white/70" />
                    </div>
                    <p className="text-[13px] text-white/60 leading-relaxed">
                      Raheja Tesla Industrial, Juinagar,<br />
                      Navi Mumbai, Maharashtra — 400705,<br />
                      India
                    </p>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <FiMail size={14} className="text-white/70" />
                    </div>
                    <a
                      href="mailto:sales@eratronics.in"
                      className="text-[13px] text-white/60 hover:text-white transition-colors duration-200 font-medium"
                    >
                      sales@eratronics.in
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <FiPhone size={14} className="text-white/70" />
                    </div>
                    <a
                      href="tel:+912220877740"
                      className="text-[13px] text-white/60 hover:text-white transition-colors duration-200 font-medium"
                    >
                      +91 22 2087774
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time card */}
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl px-7 py-6 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                <FiClock size={15} className="text-gray-400" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1">
                  Response Time
                </p>
                <p className="text-[13px] font-semibold text-gray-800 mb-1">
                  Within 24 Business Hours
                </p>
                <p className="text-[12px] text-gray-400 leading-relaxed">
                  Monday – Saturday, 9:00 AM – 6:00 PM IST
                </p>
              </div>
            </div>

            {/* Direct email CTA */}
            <div className="bg-[var(--seco)]/5 border border-[var(--seco)]/15 rounded-2xl px-7 py-6">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--seco)] mb-2">
                Prefer Email?
              </p>
              <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                For project inquiries, tenders, and partnership opportunities, reach us directly.
              </p>
              <a
                href="mailto:sales@eratronics.in"
                className="inline-flex items-center gap-2 text-[12px] font-semibold text-[var(--seco)] hover:gap-3 transition-all duration-200"
              >
                sales@eratronics.in
                <FiArrowRight size={12} />
              </a>
            </div>

          </motion.div>

        </div>
      </div>

    </div>
  );
}
