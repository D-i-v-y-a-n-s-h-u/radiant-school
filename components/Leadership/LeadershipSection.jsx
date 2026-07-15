import LeadershipCard from "./LeadershipCard";

const LEADERS = [
  {
    image: "/leadership/ceo.jpg",
    slug: "ceo",
    designation: "CEO",
    name: "Lt. Col. A Sekhar",
    message:
      "With nearly 40 years of experience in the Armed Forces and educational leadership, Lt. Col. A. Sekhar is committed to building a culture of discipline, innovation, and academic excellence. His vision is to empower every student with the knowledge, values, and confidence needed to succeed in a rapidly changing world.",
  },
  {
    image: "/leadership/promotor.jpg",
    slug: "promotor",
    designation: "PROMOTOR",
    name: "Mr Vishal Singh",
    message:
      "Since 2003, Radiant International School has been dedicated to empowering students through quality education, strong values, and holistic development. Our vision is to nurture confident, globally aware, and compassionate leaders who are prepared to make a meaningful difference in the world.",
  },
  {
    image: "/leadership/patron.jpg",
    slug: "patron",
    designation: "PATRON",
    name: "Mrs. Meena Singh",
    message:
     "Radiant International School was founded in 2003 with the vision of Late Shri Ajit Singh—to blend global standards of education with strong Indian values. We remain committed to nurturing confident, compassionate, and responsible leaders who will shape a better tomorrow."
    
  },
  {
    image: "/leadership/principal.jpg",
    slug: "principal",
    designation: "PRINCIPAL",
    name: "Ms Manisha Sinha",
    message:
      "Every child carries a spark of greatness. Our purpose is to nurture that spark with patience, discipline, and unwavering belief until it becomes a light that guides others.",
  },
];

export default function LeadershipSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32 dark:bg-neutral-950">
      {/* Soft amber radial glow behind the middle card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/20 blur-[120px] dark:bg-amber-500/10"
      />

      {/* Subtle decorative quote mark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none text-[320px] font-serif leading-none text-amber-900/[0.03] dark:text-amber-100/[0.03]"
      >
        &rdquo;
      </span>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Meet Our{" "}
          <span className="text-gradient-amber">
                Leadership
          </span>
        </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
            The visionaries dedicated to nurturing excellence, innovation, and
            character.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {LEADERS.map((leader, index) => (
            <LeadershipCard
              key={leader.name}
              {...leader}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
