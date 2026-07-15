"use client";

import { useState } from "react";
import Image from "next/image";
import useReveal from "@/hooks/useReveal";

const STEPS = [
  { title: "Enquiry", desc: "Submit the enquiry form or visit our admissions office with your child's basic details." },
  { title: "Campus Tour", desc: "Experience our classrooms, labs, and campus life first-hand with our admissions team." },
  { title: "Assessment", desc: "An age-appropriate interaction to understand your child's learning style and readiness." },
  { title: "Confirmation", desc: "Receive your admission offer and complete enrolment formalities online or on campus." },
];

export default function Admissions() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admissions" ref={ref} className="relative bg-white dark:bg-ink-950 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        {/* Process timeline */}
        <div data-reveal="left">
          <p className="section-eyebrow text-amber-600 font-semibold uppercase text-xs">Admissions 2026&ndash;27</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink-950 dark:text-white">
            Four Simple Steps to <span className="text-gradient-amber ">Join Us</span>
          </h2>
          <p className="mt-5 text-ink-950/60 dark:text-ink-300 leading-relaxed">
            Limited seats are available across Pre-KG to Grade 10 for the upcoming academic year. Our admissions desk is happy to guide you through every step.
          </p>

          <ol className="mt-10 space-y-8">
            {STEPS.map((step, i) => (
              <li key={step.title} data-reveal="up" data-reveal-delay={i * 100} className="relative flex gap-6 group">
                {i !== STEPS.length - 1 && (
                  <span className="absolute left-6 top-14 bottom-[-2rem] w-px bg-gradient-to-b from-amber-500/50 to-transparent" />
                )}
                <span className="shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-500 text-white flex items-center justify-center font-display font-semibold shadow-lg shadow-amber-600/25 group-hover:scale-110 transition-transform duration-300">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-950 dark:text-white">{step.title}</h3>
                  <p className="mt-1 text-ink-950/60 dark:text-ink-300 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Enquiry form */}
        <div data-reveal="right" className="relative overflow-hidden card-premium rounded-[2rem] p-8 sm:p-10 h-fit lg:sticky lg:top-28">
          <Image
          src="/school-that-cares.png"
          alt=""
          fill
          aria-hidden="true"
          className="
            object-contain
            p-16
            opacity-[0.15]
            dark:opacity-[0.15]
            pointer-events-none
            select-none
          "
          />
          <div className="relative z-10"></div>
          <h3 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">Book a Campus Visit</h3>
          <p className="mt-2 text-ink-950/60 dark:text-ink-300 text-sm">
            Share a few details and our admissions counsellor will reach out within 24 hours.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-amber-50 dark:bg-amber-500/10 p-6 text-center animate-scale-in">
              <p className="text-amber-700 dark:text-amber-400 font-semibold">Thank you! 🎉</p>
              <p className="mt-1 text-sm text-ink-950/60 dark:text-ink-300">
                Your enquiry has been received. Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <Field label="Parent's Name" type="text" placeholder="e.g. Priya Sharma" required />
              <Field label="Phone Number" type="tel" placeholder="+91 98765 43210" required />
              <Field label="Email Address" type="email" placeholder="you@example.com" required />
              <div>
                <label className="block text-sm font-medium text-ink-950/70 dark:text-ink-300 mb-2">
                  Grade Applying For
                </label>
                <select
                  required
                  className="w-full rounded-xl border border-ink-950/10 dark:border-white/10 bg-transparent px-4 py-3 text-ink-950 dark:text-white focus:border-amber-500 outline-none transition-colors"
                >
                  <option className="dark:bg-ink-900">Pre-KG</option>
                  <option className="dark:bg-ink-900">Grade 1 &ndash; 5</option>
                  <option className="dark:bg-ink-900">Grade 6 &ndash; 8</option>
                  <option className="dark:bg-ink-900">Grade 9 &ndash; 10</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn-glow w-full rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold py-3.5 shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Submit Enquiry
              </button>
              <p className="text-xs text-center text-ink-950/40 dark:text-ink-300/50">
                By submitting, you agree to be contacted regarding admissions.
              </p>
            </form>
           )}
          </div>   {/* z-10 wrapper */}
        </div>   {/* card */}
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-950/70 dark:text-ink-300 mb-2">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-ink-950/10 dark:border-white/10 bg-transparent px-4 py-3 text-ink-950 dark:text-white placeholder:text-ink-950/30 dark:placeholder:text-white/30 focus:border-amber-500 outline-none transition-colors"
      />
    </div>
  );
}
