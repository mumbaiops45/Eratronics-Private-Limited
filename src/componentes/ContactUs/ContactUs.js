"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser, FiMail, FiBriefcase, FiSmartphone,
  FiMessageSquare, FiSend, FiCheck, FiAlertCircle,
  FiMapPin, FiPhone, FiClock, FiArrowRight,
} from "react-icons/fi";

const EMPTY = { name: "", email: "", organization: "", mobile: "", message: "" };

function Field({ label, name, type = "text", icon: Icon, placeholder, value, onChange, error, required = true }) {
  return (
    <div>
      <label
        className="block text-[10px] font-bold uppercase tracking-widest mb-2"
        style={{ color: "var(--text-muted-d)" }}
      >
        {label}
        {required && <span className="ml-1" style={{ color: "#f87171" }}>*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon
              size={14}
              style={{ color: error ? "#f87171" : "black", transition: "color 0.2s" }}
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
          className="bg-[var(--surface-3)]/5 text-black w-full pr-4 py-3.5 text-[13px] outline-none transition-all duration-200 placeholder-gray-500"
          style={{
            paddingLeft: Icon ? "2.5rem" : "1rem",
           
            border: `1px solid ${error ? "rgba(248,113,113,0.5)" : "var(--border-dark)"}`,
           
          }}
          onFocus={e => {
            e.currentTarget.style.borderColor = error ? "rgba(248,113,113,0.8)" : "var(--secondary)";
            e.currentTarget.style.boxShadow = error ? "0 0 0 2px rgba(248,113,113,0.12)" : "0 0 0 2px rgba(33,150,243,0.12)";
          }}
          onBlur={e => {
            e.currentTarget.style.borderColor = error ? "rgba(248,113,113,0.5)" : "var(--border-dark)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-medium" style={{ color: "#f87171" }}>
          <FiAlertCircle size={11} />
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactUs() {
  const [form, setForm]     = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    try {
      await emailjs.send(
        "service_1qajjl8",
        "template_y3r7go5",
        { from_name: form.name, from_email: form.email, organization: form.organization, mobile: form.mobile, message: form.message },
        "tStv7JwZFWsbJU2Cf"
      );
      setStatus("success");
      setForm(EMPTY);
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  const resetForm = () => { setStatus("idle"); setForm(EMPTY); setErrors({}); };

  return (
    <div style={{ background: "var(--surface-off)" }}>

      {/* PAGE INTRO */}
      <div style={{ background: "var(--surface-off)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:flex-row lg:items-center gap-16"
          >
            <div>
              <div className="label-tag mb-4">Get in Touch</div>
              <h2
                className="font-extrabold leading-snug"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  color: "var(--primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Contact &amp; Enquiry
              </h2>
            </div>
            <div className="hidden md:block w-px h-16" style={{ background: "var(--border-light)" }} />
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "var(--text-muted-l)" }}>
              Fill in the form below and our team will get back to you within{" "}
              <strong style={{ color: "var(--primary)", fontWeight: 600 }}>24 business hours</strong>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-start">

          {/* FORM PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
            style={{
              background: "var(--surface-light)",
              border: "1px solid var(--border-light)",
            }}
          >
            {/* Form header */}
            <div
              className="px-8 lg:px-10 py-6 flex items-center justify-between"
              style={{ borderBottom: "1px solid var(--border-light)" }}
            >
              <div>
                <p className="font-bold text-sm" style={{ color: "var(--primary)" }}>Contact / Enquiry Form</p>
                <p className="text-[11px] mt-0.5" style={{ color: "var(--text-muted-l)" }}>All fields marked * are required</p>
              </div>
              <div
                className="w-9 h-9 flex items-center justify-center"
                style={{
                  background: "rgba(33,150,243,0.08)",
                  border: "1px solid var(--border-blue)",
                }}
              >
                <FiMessageSquare size={15} style={{ color: "var(--secondary)" }} />
              </div>
            </div>

            {/* Form body */}
            <div className="px-8 lg:px-10 py-8">
              <AnimatePresence mode="wait">

                {/* SUCCESS */}
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div
                      className="w-16 h-16 flex items-center justify-center mb-5"
                      style={{ background: "rgba(33,150,243,0.10)", border: "1px solid var(--border-blue)" }}
                    >
                      <FiCheck size={28} style={{ color: "var(--secondary)" }} />
                    </div>
                    <h4 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                      Message Sent Successfully
                    </h4>
                    <p className="text-sm leading-relaxed max-w-xs mb-7" style={{ color: "var(--text-muted-l)" }}>
                      Thank you for reaching out. Our team will respond to your enquiry within 24 business hours.
                    </p>
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                      style={{
                        color: "var(--secondary)",
                        border: "1px solid var(--border-blue)",
                        padding: "0.625rem 1.5rem",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgba(33,150,243,0.06)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                    >
                      Send Another Enquiry
                      <FiArrowRight size={13} />
                    </button>
                  </motion.div>
                )}

                {/* FORM */}
                {status !== "success" && (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                  >
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <Field label="Name" name="name" icon={FiUser} placeholder="Your full name"
                        value={form.name} onChange={handleChange} error={errors.name} />
                      <Field label="Email" name="email" type="email" icon={FiMail} placeholder="your@email.com"
                        value={form.email} onChange={handleChange} error={errors.email} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <Field label="Organization" name="organization" icon={FiBriefcase} placeholder="Company / organization"
                        value={form.organization} onChange={handleChange} error={errors.organization} />
                      <Field label="Mobile No" name="mobile" type="tel" icon={FiSmartphone} placeholder="+91 XXXXX XXXXX"
                        value={form.mobile} onChange={handleChange} error={errors.mobile} />
                    </div>

                    {/* Message */}
                    <div className="mb-7">
                      <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted-d)" }}>
                        Message <span style={{ color: "#f87171" }}>*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3.5 pointer-events-none">
                          <FiMessageSquare size={14} style={{ color: errors.message ? "#f87171" : "black" }} />
                        </span>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Describe your requirement or enquiry in detail..."
                          className="text-black bg-[var(--surface-3)]/5 w-full pl-10 pr-4 py-3.5 text-[13px] resize-none outline-none transition-all duration-200"
                          style={{
                            
                            border: `1px solid ${errors.message ? "rgba(248,113,113,0.5)" : "var(--border-dark)"}`,
                           
                          }}
                          onFocus={e => {
                            e.currentTarget.style.borderColor = errors.message ? "rgba(248,113,113,0.8)" : "var(--secondary)";
                            e.currentTarget.style.boxShadow = "0 0 0 2px rgba(33,150,243,0.12)";
                          }}
                          onBlur={e => {
                            e.currentTarget.style.borderColor = errors.message ? "rgba(248,113,113,0.5)" : "var(--border-dark)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>
                      {errors.message && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-medium" style={{ color: "#f87171" }}>
                          <FiAlertCircle size={11} /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* General error */}
                    {status === "error" && (
                      <div
                        className="mb-5 flex items-center gap-3 text-[12px] font-medium px-4 py-3"
                        style={{
                          background: "rgba(248,113,113,0.08)",
                          border: "1px solid rgba(248,113,113,0.25)",
                          color: "#f87171",
                        }}
                      >
                        <FiAlertCircle size={14} />
                        Something went wrong. Email us directly at{" "}
                        <a href="mailto:sales@eratronics.in" className="underline">sales@eratronics.in</a>
                      </div>
                    )}

                    {/* Submit row */}
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[11px] leading-relaxed max-w-xs" style={{ color: "var(--text-muted-l)" }}>
                        Your information is kept strictly confidential and used only to respond to your enquiry.
                      </p>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="shrink-0 inline-flex items-center gap-2.5 font-semibold text-sm px-8 py-3.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ background: "var(--secondary)", color: "white" }}
                        onMouseEnter={e => { if (status !== "loading") e.currentTarget.style.background = "var(--accent)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "var(--secondary)"; }}
                      >
                        {status === "loading" ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>Submit <FiSend size={14} /></>
                        )}
                      </button>
                    </div>

                  </motion.form>
                )}

              </AnimatePresence>
            </div>
          </motion.div>

          {/* SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex flex-col gap-5"
          >

            {/* Office card — dark */}
            <div
              className="relative overflow-hidden px-8 py-9"
              style={{ background: "var(--primary)" }}
            >
              {/* Glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(33,150,243,0.20) 0%, transparent 70%)", filter: "blur(40px)" }} />

              {/* Blue top rule */}
              <div className="h-0.5 w-full mb-7" style={{ background: "linear-gradient(90deg, var(--secondary), var(--accent), transparent)" }} />

              <div className="relative z-10">
                <div className="label-tag mb-5">Our Office</div>
                <h4 className="text-base font-bold text-white leading-snug mb-7">
                  Eratronics Private Limited
                </h4>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center shrink-0 mt-0.5"
                      style={{ border: "1px solid var(--border-dark)", background: "rgba(255,255,255,0.05)" }}>
                      <FiMapPin size={13} style={{ color: "var(--secondary)" }} />
                    </div>
                    <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                      Raheja Tesla Industrial, Juinagar,<br />
                      Navi Mumbai, Maharashtra — 400705, India
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center shrink-0"
                      style={{ border: "1px solid var(--border-dark)", background: "rgba(255,255,255,0.05)" }}>
                      <FiMail size={13} style={{ color: "var(--secondary)" }} />
                    </div>
                    <a href="mailto:sales@eratronics.in"
                      className="text-[13px] font-medium transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "white"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
                    >
                      sales@eratronics.in
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center shrink-0"
                      style={{ border: "1px solid var(--border-dark)", background: "rgba(255,255,255,0.05)" }}>
                      <FiPhone size={13} style={{ color: "var(--secondary)" }} />
                    </div>
                    <a href="tel:+912220877740"
                      className="text-[13px] font-medium transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "white"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
                    >
                      +91 22 2087774
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div
              className="px-7 py-6 flex items-start gap-4"
              style={{
                background: "var(--surface-light)",
                border: "1px solid var(--border-light)",
              }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center shrink-0"
                style={{ border: "1px solid var(--border-light)", background: "rgba(33,150,243,0.06)" }}
              >
                <FiClock size={14} style={{ color: "var(--secondary)" }} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--text-muted-l)" }}>
                  Response Time
                </p>
                <p className="text-[13px] font-semibold mb-1" style={{ color: "var(--primary)" }}>
                  Within 24 Business Hours
                </p>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-muted-l)" }}>
                  Monday – Saturday, 9:00 AM – 6:00 PM IST
                </p>
              </div>
            </div>

            {/* Direct email */}
            <div
              className="px-7 py-6"
              style={{
                background: "rgba(33,150,243,0.04)",
                border: "1px solid var(--border-blue)",
              }}
            >
              <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--secondary)" }}>
                Prefer Email?
              </p>
              <p className="text-[13px] leading-relaxed mb-4" style={{ color: "var(--text-muted-l)" }}>
                For project inquiries, tenders, and partnership opportunities, reach us directly.
              </p>
              <a
                href="mailto:sales@eratronics.in"
                className="inline-flex items-center gap-2 text-[12px] font-semibold transition-all duration-200"
                style={{ color: "var(--secondary)" }}
                onMouseEnter={e => { e.currentTarget.style.gap = "0.75rem"; }}
                onMouseLeave={e => { e.currentTarget.style.gap = "0.5rem"; }}
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
