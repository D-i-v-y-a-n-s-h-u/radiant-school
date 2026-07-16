import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import {
  Target,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Lightbulb,
  Crown,
  Heart,
  Award,
  BookOpen,
  GraduationCap,
  Building2,
  ChevronDown,
  Quote,
} from 'lucide-react';
import Reveal from "@/components/Reveal";

export const metadata = {
  title: 'Mission & Vision | Radiant International School',
  description:
    'Discover the mission, vision, and core values that guide Radiant International School — building character, inspiring excellence, and preparing future leaders through holistic, world-class education.',
  keywords: [
    'Radiant International School',
    'school mission',
    'school vision',
    'core values',
    'holistic education',
    'best international school',
  ],
  openGraph: {
    title: 'Mission & Vision | Radiant International School',
    description:
      'Building Character. Inspiring Excellence. Preparing Future Leaders. Explore the purpose and values that shape every learner at Radiant International School.',
    images: ['/image/hero(background).png'],
    type: 'website',
  },
};

const coreValues = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'Acting with honesty and strong moral principles in everything we do.',
  },
  {
    icon: HeartHandshake,
    title: 'Respect',
    description: 'Valuing every individual, culture, and perspective within our community.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Encouraging curiosity and creative thinking to solve tomorrow\u2019s challenges.',
  },
  {
    icon: Crown,
    title: 'Leadership',
    description: 'Empowering students to lead with confidence, vision, and responsibility.',
  },
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Nurturing kindness and empathy toward others in every interaction.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Pursuing the highest standards in academics, character, and conduct.',
  },
];

const whyRadiant = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description:
      'A rigorous, globally benchmarked curriculum that challenges students to think critically and achieve their fullest potential.',
  },
  {
    icon: GraduationCap,
    title: 'Experienced Faculty',
    description:
      'Passionate, highly qualified educators dedicated to mentoring every child with expertise and genuine care.',
  },
  {
    icon: Building2,
    title: 'Modern Infrastructure',
    description:
      'State-of-the-art classrooms, laboratories, and campus facilities designed to inspire learning at every turn.',
  },
  {
    icon: Sparkles,
    title: 'Holistic Development',
    description:
      'A balanced focus on academics, arts, athletics, and character to nurture well-rounded, confident individuals.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Learning Environment',
    description:
      'A secure, nurturing campus where every student feels valued, protected, and free to thrive.',
  },
];

export default function MissionVisionPage() {
  return (
     <>
      <Navbar />
    <main className="relative overflow-hidden bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                               */}
      {/* ============================================================ */}
      <section className="relative flex min-h-[100svh] pt-24 lg:pt-28 w-full items-center justify-center overflow-hidden">
        <Image
          src="/image/hero.jpg"
          alt="Radiant International School campus"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <span className="mb-6 inline-block animate-[fadeIn_1s_ease-out] rounded-full border border-amber-400/40 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300 backdrop-blur-md">
            Mission &amp; Vision
          </span>

          <h1 className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Building Character.
            <br />
            Inspiring Excellence.
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Preparing Future Leaders.
            </span>
          </h1>

          <div className="relative mt-8 h-[3px] w-28 overflow-hidden rounded-full bg-white/20">
            <span className="absolute inset-y-0 left-0 w-full animate-[expandWidth_1.4s_ease-out_0.4s_both] bg-gradient-to-r from-amber-300 to-amber-500" />
          </div>

          <p className="mt-8 max-w-xl text-balance text-base font-light text-neutral-200 sm:text-lg">
            The guiding purpose behind every lesson, every relationship, and every milestone
            at Radiant International School.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" strokeWidth={1.5} />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. INTRODUCTION                                               */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
            Our Purpose
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium sm:text-4xl md:text-5xl">
            A Foundation Built on{' '}
            <span className="text-amber-500">Purpose</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-8 text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
            At Radiant International School, we believe education is more than the transfer
            of knowledge — it is the shaping of hearts, minds, and character. Every classroom,
            every conversation, and every experience is thoughtfully designed to help our
            students grow into confident, compassionate, and capable individuals ready to
            embrace the world beyond our gates.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
            Our commitment to holistic education means nurturing the whole child — academically,
            emotionally, socially, and ethically. We cultivate an environment where curiosity is
            celebrated, individuality is respected, and every learner is given the tools to
            discover who they are meant to become.
          </p>
        </Reveal>
      </section>

      {/* ============================================================ */}
      {/* 3. MISSION & VISION                                           */}
      {/* ============================================================ */}
<section className="mx-auto max-w-4xl px-6 py-24 sm:py-32">

  <Reveal>
    <span className="text-xs uppercase tracking-[0.35em] text-amber-500">
      OUR MISSION
    </span>

    <h2 className="mt-3 font-serif text-4xl md:text-5xl">
      Educating Beyond Classrooms
    </h2>

    <div className="mt-8 h-[2px] w-20 bg-amber-500"></div>

    <p className="mt-8 text-lg leading-9 text-neutral-600 dark:text-neutral-300">
          The Schools have a mission to maintain a sharp focus in the pursuit of attaining the highest academic standards. In addition, the schools aim at the holistic development of its students by creating in them:

          An understanding and appreciation of India’s rich culture.

          A sense of integrity, ethics, and uncompromising honesty.

          A strong secular ethos.

          Leadership, with a sense of teamwork and fair play.

          An awareness of the environment.

          A concern for the less fortunate.

          A concern for human rights and democratic values.

          An inquisitive mind and a spirit of adventure.

          A global perspective.
    </p>
  </Reveal>

  <Reveal delay={200}>
    <div className="my-20 h-px bg-neutral-200 dark:bg-white/10"></div>

    <span className="text-xs uppercase tracking-[0.35em] text-amber-500">
      OUR VISION
    </span>

    <h2 className="mt-3 font-serif text-4xl md:text-5xl">
      Inspiring Future Leaders
    </h2>

    <div className="mt-8 h-[2px] w-20 bg-amber-500"></div>

    <p className="mt-8 text-lg leading-9 text-neutral-600 dark:text-neutral-300">
      To develop Physically Fit, Socially Responsible, Morally Upright Global Citizens with reflective and inquisitive minds through actions for Sustainable Goals, Standardised Tools and Inclusive Practices.
      We envision Radiant International School as a centre of excellence that
      inspires innovation, lifelong learning, and personal growth. Our goal is
      to empower every learner to think independently, lead with integrity,
      embrace diversity, and contribute meaningfully to society while becoming
      compassionate citizens of tomorrow.
    </p>
  </Reveal>

</section>

      {/* ============================================================ */}
      {/* 4. CORE VALUES                                                */}
      {/* ============================================================ */}
      <section className="bg-neutral-50 py-24 dark:bg-white/[0.02] sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
              What Guides Us
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium sm:text-4xl md:text-5xl">
              Our Core Values
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-neutral-200/70 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-300/60 hover:shadow-xl hover:shadow-amber-100/60 dark:border-white/10 dark:bg-neutral-900 dark:hover:border-amber-500/30 dark:hover:shadow-amber-900/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors duration-500 group-hover:bg-amber-500 group-hover:text-white dark:bg-amber-500/10 dark:text-amber-400">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. WHY RADIANT                                                */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal from="left">
            <div className="relative h-[340px] w-full overflow-hidden rounded-3xl shadow-2xl shadow-neutral-300/50 dark:shadow-black/40 sm:h-[440px] lg:h-[560px]">
              <Image
                src="/image/school-image.jpg"
                alt="Radiant International School campus grounds"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-xl">
                <p className="font-serif text-2xl font-medium text-white">25+ Years</p>
                <p className="text-xs uppercase tracking-widest text-white/80">
                  Of Educational Excellence
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
                Why Choose Us
              </span>
              <h2 className="mt-4 font-serif text-3xl font-medium sm:text-4xl md:text-5xl">
                Why Radiant
              </h2>
              <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                Every detail of the Radiant experience is crafted with one goal — helping each
                student thrive academically, personally, and socially.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {whyRadiant.map(({ icon: Icon, title, description }, i) => (
                <Reveal key={title} delay={i * 100} from="right">
                  <div className="group flex items-start gap-4 rounded-2xl border border-neutral-200/70 bg-white/60 p-5 backdrop-blur-md transition-all duration-500 hover:border-amber-300/60 hover:bg-amber-50/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-amber-500/30 dark:hover:bg-amber-500/5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md shadow-amber-500/25 transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. INSPIRATIONAL QUOTE                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-neutral-50 py-24 dark:bg-white/[0.02] sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <Quote className="mx-auto h-12 w-12 text-amber-400/60" strokeWidth={1} />
            <p className="mt-6 text-balance font-serif text-2xl font-medium leading-snug text-neutral-800 dark:text-neutral-100 sm:text-3xl md:text-4xl">
              Education is not merely the acquisition of knowledge, but the cultivation of
              character, confidence, and compassion.
            </p>
            <div className="mx-auto mt-8 h-[2px] w-16 bg-gradient-to-r from-amber-300 to-amber-500" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              &mdash; Radiant International School
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CTA SECTION                                                */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 to-black py-24 sm:py-32">
        {/* Background Logo */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <Image
    src="/school-that-cares.png"
    alt=""
    width={500}
    height={500}
    className="opacity-[0.5] dark:opacity-[0.4] object-contain select-none"
  />
</div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.35),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl md:text-5xl">
              Join the Radiant Family
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-amber-50/90 sm:text-lg">
              Take the first step toward an extraordinary education. Discover a community
              where your child is known, valued, and inspired to reach their fullest potential.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://forms.edunexttechnologies.com/forms/radiant/application/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-amber-700 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
              >
                Apply Online
              </Link>
              <Link
                href="#contact"
                className="w-full rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
              >
                Contact Admissions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  </>
  );
}
