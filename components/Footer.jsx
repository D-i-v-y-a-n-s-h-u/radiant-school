"use client";
import Image from "next/image";

const LINK_GROUPS = [
  {
    title: "Quick Links",
    links: [
      "About",
      "Academics",
      "Facilities",
      "Gallery",
      "Admissions",
      "Contact",
    ],
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/radiantinternationalpatna",
    d: "M13 22v-8h3l.5-4H13V7.5c0-1.2.4-2 2.1-2H16V2.1C15.7 2 14.6 2 13.4 2 10.8 2 9 3.6 9 6.5V10H6v4h3v8h4z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/radiant_patna/",
    d: "M12 2c2.7 0 3.1 0 4.1.1 1 .1 1.7.2 2.3.5.6.3 1.1.6 1.6 1.1.5.5.8 1 1.1 1.6.3.6.4 1.3.5 2.3.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c-.1 1-.2 1.7-.5 2.3-.3.6-.6 1.1-1.1 1.6-.5.5-.8 1-1.1 1.6-.3.6-.4 1.3-.5 2.3C2 15.1 2 14.7 2 12s0-3.1.1-4.1c.1-1 .2-1.7.5-2.3.3-.6.6-1.1 1.1-1.6.5-.5 1-.8 1.6-1.1.6-.3 1.3-.4 2.3-.5C8.9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@radiantinternationalschool2836",
    d: "M23 12s0-3.5-.4-5.2c-.3-1-1-1.7-2-2C18.9 4.3 12 4.3 12 4.3s-6.9 0-8.6.5c-1 .3-1.7 1-2 2C1 8.5 1 12 1 12s0 3.5.4 5.2c.3 1 1 1.7 2 2 1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5c1-.3 1.7-1 2-2 .4-1.7.4-5.2.4-5.2zM9.7 15.4V8.6l6 3.4-6 3.4z",
  },
  {
    label: "X",
    href: "https://x.com/rispatna",
    d: "M18.244 2H21.5l-7.11 8.13L22.75 22h-6.55l-5.13-6.7L5.2 22H1.94l7.6-8.68L1.5 2h6.72l4.64 6.13L18.244 2z",
  },
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
      <Image
        src="/logo.png"
        alt="Radiant International School Logo"
        width={48}
        height={48}
        className="object-contain"
      />
              <p className="font-display text-xl font-semibold text-white">
                    Radiant International School
              </p>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-sm text-white/70">
              Where Excellence Begins.
              <br />
              Established in 2002, Radiant International School Patna has been a pioneer in providing a progressive and holistic education to children in Patna with a motto of To Learn, To Serve, To Excel. Beyond academics, Radiant believes in imparting values for life.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
          <div className="lg:col-span-4">
          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="text-white font-semibold text-sm mb-4">
                {group.title}
              </p>
          
              <ul className="space-y-3">
                {group.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm hover:text-amber-400 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
            </div>

<div className="lg:col-span-4">
  <p className="text-white font-semibold text-sm mb-4">
    Contact Us
  </p>

  <div className="space-y-4 text-sm text-white/70">

    <p>
      📍 Radiant International School,<br />
          Khagaul Road, Khagaul, Patna, Bihar - 801105
    </p>

    <p>
      📞 +91 9334488601, +91 7281977779
    </p>

    <p>
      ✉ radiantschool14@gmail.com
    </p>

    <p>
      🕒 Monday – Saturday<br />
      Office Hours : 8:00 AM – 4:00 PM
    </p>

    </div>
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
