"use client";

const LINK_GROUPS = [
  {
    title: "Explore",
    links: ["About Us", "Academics", "Facilities", "Gallery", "Admissions"],
  },
  {
    title: "Quick Links",
    links: ["Fee Structure", "Academic Calendar", "Careers", "ERP Login", "Alumni Network"],
  },
  {
    title: "Policies",
    links: ["Privacy Policy", "Terms of Use", "Anti-Ragging Policy", "Grievance Redressal"],
  },
];

const SOCIALS = [
  { label: "Facebook", d: "M13 22v-8h3l.5-4H13V7.5c0-1.2.4-2 2.1-2H16V2.1C15.7 2 14.6 2 13.4 2 10.8 2 9 3.6 9 6.5V10H6v4h3v8h4z" },
  { label: "Instagram", d: "M12 2c2.7 0 3.1 0 4.1.1 1 .1 1.7.2 2.3.5.6.3 1.1.6 1.6 1.1.5.5.8 1 1.1 1.6.3.6.4 1.3.5 2.3.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c-.1 1-.2 1.7-.5 2.3-.3.6-.6 1.1-1.1 1.6-.5.5-1 .8-1.6 1.1-.6.3-1.3.4-2.3.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1-.1-1.7-.2-2.3-.5-.6-.3-1.1-.6-1.6-1.1-.5-.5-.8-1-1.1-1.6-.3-.6-.4-1.3-.5-2.3C2 15.1 2 14.7 2 12s0-3.1.1-4.1c.1-1 .2-1.7.5-2.3.3-.6.6-1.1 1.1-1.6.5-.5 1-.8 1.6-1.1.6-.3 1.3-.4 2.3-.5C8.9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" },
  { label: "YouTube", d: "M23 12s0-3.5-.4-5.2c-.3-1-1-1.7-2-2C18.9 4.3 12 4.3 12 4.3s-6.9 0-8.6.5c-1 .3-1.7 1-2 2C1 8.5 1 12 1 12s0 3.5.4 5.2c.3 1 1 1.7 2 2 1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5c1-.3 1.7-1 2-2 .4-1.7.4-5.2.4-5.2zM9.7 15.4V8.6l6 3.4-6 3.4z" },
  { label: "LinkedIn", d: "M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4 0 4.7 2.6 4.7 6V21H17v-5.3c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9V21H9z" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 text-ink-300 pt-24 pb-10 overflow-hidden">
      {/* Ambient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-amber-600/10 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
                <defs>
                  <linearGradient id="fCrest" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#b45309" />
                  </linearGradient>
                </defs>
                <path d="M24 2 L44 9 V22 C44 33 36 42 24 46 C12 42 4 33 4 22 V9 Z" fill="url(#fCrest)" />
                <text x="24" y="29" textAnchor="middle" fontFamily="var(--font-fraunces), serif" fontSize="17" fontWeight="600" fill="#fff">RIS</text>
              </svg>
              <p className="font-display text-xl font-semibold text-white">
                Radiant <span className="text-amber-500">International</span>
              </p>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-sm">
              Nurturing confident, curious, and compassionate global citizens
              since 1998 — one child, one milestone at a time.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-colors duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-white font-semibold text-sm mb-4">{group.title}</p>
                <ul className="space-y-3">
                  {group.links.map((l) => (
                    <li key={l}>
                      <a href="#top" className="text-sm hover:text-amber-400 transition-colors duration-300">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <p className="text-white font-semibold text-sm mb-4">Stay Updated</p>
            <p className="text-sm mb-4">Get admission updates and campus news in your inbox.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-amber-500 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 flex items-center justify-center hover:-translate-y-0.5 transition-transform duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Radiant International School. All rights reserved.</p>
          <p>Designed with care for the next generation of leaders.</p>
        </div>
      </div>
    </footer>
  );
}
