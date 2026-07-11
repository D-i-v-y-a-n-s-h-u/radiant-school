"use client";

import useReveal from "@/hooks/useReveal";

const DETAILS = [
  {
    label: "Campus Address",
    value: "Khagaul Road, Khagaul, Patna, Bihar - 801105",
    icon: (
      <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z M12 13a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.6" fill="none" />
    ),
  },
  {
    label: "Admissions Helpline",
    value: "+91 9334488601, +91 7281977779",
    icon: (
      <path d="M22 16.9v3a2 2 0 01-2.2 2A19.8 19.8 0 013 5.2 2 2 0 015 3h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.4 2.1L9 10.9a16 16 0 006 6l1.5-1.2a2 2 0 012.1-.4c.8.3 1.7.5 2.6.6a2 2 0 011.8 2z" stroke="currentColor" strokeWidth="1.6" fill="none" />
    ),
  },
  {
    label: "Email Address",
    value: "radiantschool14@gmail.com",
    icon: (
      <path d="M3 6h18v12H3z M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
    ),
  },
  {
    label: "Office Hours",
    value: "Monday &ndash; Saturday, 8:00 AM &ndash; 4:00 PM",
    icon: (
      <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    ),
  },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" ref={ref} className="relative bg-amber-50/40 dark:bg-ink-900/30 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
        {/* Details */}
        <div className="lg:col-span-2" data-reveal="left">
          <p className="section-eyebrow text-amber-600 font-semibold uppercase text-xs">Get in Touch</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-ink-950 dark:text-white">
            We'd Love to <span className="text-gradient-amber italic">Hear From You</span>
          </h2>
          <p className="mt-5 text-ink-950/60 dark:text-ink-300 leading-relaxed">
            Whether it's a question about admissions or a campus visit request, our team responds within one business day.
          </p>

          <div className="mt-10 space-y-6">
            {DETAILS.map((d, i) => (
              <div key={d.label} data-reveal="up" data-reveal-delay={i * 90} className="flex items-start gap-4">
                <span className="h-11 w-11 shrink-0 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{d.icon}</svg>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-950/40 dark:text-ink-300/50">{d.label}</p>
                  <p
                    className="mt-1 font-medium text-ink-950 dark:text-white"
                    dangerouslySetInnerHTML={{ __html: d.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="lg:col-span-3" data-reveal="right">
          <div className="card-premium rounded-[2rem] overflow-hidden h-full min-h-[420px] relative flex items-center justify-center">
            {/* Stylised map placeholder built with CSS/SVG, no external map tiles */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white dark:from-ink-900 dark:to-ink-950" />
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
              <path d="M0 60 H400 M0 140 H400 M0 220 H400 M80 0 V300 M200 0 V300 M320 0 V300" stroke="currentColor" className="text-amber-600" strokeWidth="1" />
            </svg>
            <div className="relative z-10 text-center px-8">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-amber-500 text-white shadow-xl shadow-amber-600/30 animate-float">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" stroke="white" strokeWidth="1.8" fill="none" />
                  <circle cx="12" cy="10" r="2.6" fill="white" />
                </svg>
              </span>
              <p className="mt-5 font-display text-xl font-semibold text-ink-950 dark:text-white">
                Find Us on the Map
              </p>
              <p className="mt-2 text-sm text-ink-950/60 dark:text-ink-300 max-w-xs mx-auto">
                Khagaul Road, Khagaul, Patna, Bihar – 801105
              </p>
              <a
                href="https://maps.google.com/?q=Radiant+International+School+Khagaul+Patna"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-full border border-amber-600 text-amber-600 dark:text-amber-400 dark:border-amber-400 px-5 py-2.5 text-sm font-semibold hover:bg-amber-600 hover:text-white transition-colors duration-300"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
