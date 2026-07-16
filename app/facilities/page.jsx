import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * ─────────────────────────────────────────────────────────────
 * FACILITIES DATA
 * ─────────────────────────────────────────────────────────────
 * Every facility lives in this single array. To swap in a real
 * photo later, just replace the `image` value, e.g.:
 *
 *   image: "/facilities/placeholder.jpg"   →   image: "/facilities/library.jpg"
 *
 * As soon as the path no longer contains the word "placeholder",
 * the page automatically renders the real photo instead of the
 * "Image Coming Soon" card — no other code changes needed.
 * ─────────────────────────────────────────────────────────────
 */
const facilities = [
  {
    slug: "atal-tinkering-lab",
    title: "Atal Tinkering Lab",
    image: "/facilities/placeholder.jpg",
    description: [
'Established in 2017 with the help of National Institution for Transforming India, NITI AAYOG, Government of India, Radiant International School Patna was among the first 256 schools in the country to have been granted 20 lakhs to establish Atal Tinkering Lab in our campus. The objective of this lab is to foster curiosity, creativity and imagination in young innovators, and inculcate skills such as design mindset, computational thinking, adaptive learning, physical computing, etc. ATL gives an interesting space to young minds where they get a chance to work with tools and equipment to understand the concepts of STEM (Science, Technology, Engineering and Maths).',
    ],
    features: [
      "3D printers and laser cutting tools",
      "Robotics and IoT development kits",
      "Dedicated mentors for project guidance",
      "Regular innovation challenges and exhibitions",
    ],
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    image: "/facilities/placeholder.jpg",
    description: [
"Nestled within a sprawling 6-acre Educational campus, Radiant's BaLA (Building as Learning Aid) enabled campus is an ideal hub for experiential learning. Our campus, strategically divided into three blocks, features state-of-the-art facilities, including specialised laboratories, a Multi-Purpose Hall, Seminar Hall, a 400 capacity Amphitheatre, smart class-enabled classrooms, AI centres, a cutting-edge robotics and innovation lab powered by the Atal Tinkering Lab, a library and dedicated activity centres for creative and performing arts.The infrastructure extends to two well-equipped infirmaries, multidisciplinary classrooms, and a specialised CWSM room. At Radiant, we take pride in offering an environment that not only facilitates academic growth but also nurtures creativity, innovation, and holistic development.",
    ],
    features: [
      "6-acre Educational campus",
      "Radiant's BaLA enabled campus is an ideal hub for experiential learning",
      "State-of-the-art facilities, including specialised laboratories, a Multi-Purpose Hall, Seminar Hall, a 400 capacity Amphitheatre, smart class-enabled classrooms, AI centres, a cutting-edge robotics and innovation lab powered by the Atal Tinkering Lab, a library and dedicated activity centres for creative and performing arts.",
    ],
  },
    {
    slug: "laboratories",
    title: "Laboratories",
    image: "/facilities/placeholder.jpg",
    description: [
      "The Science and Social Science labs are places where our chillaren gain hands-on experience Which induces wonder and inspires inquisitiveness. Separate Physics, Chemistry and Biology labs offer an experience conducive to learning for students of all classes. A Social Science Lab also caters to the needs of our students as they seek to locate countries across the world or analyse historical data. The labs are well-equipped and provide not only for the prescribed syllabus but much beyond. 'Learning by Doing' is the mantra on which these labs function.Students are exposed to experiential learning right from Class I onwards through demonstrations as well as by doing experiments.",
    ],
    features: [
      "Includes Phy lab , Chem Lab , Maths Lab and Bio Lab",
      "[Physics Lab] : Individual workstations with precision instruments",
      "[Physics Lab] : Experiments mapped directly to the curriculum",
      "[Chemistry Lab] : Fully stocked reagent and apparatus store",
      "[Chemistry Lab] : Supervised sessions with trained lab assistants",
      "[Biology Lab] : High-resolution compound microscopes",
      "[Biology Lab] : Charts and digital resources for visual learning",
      "[Mathematics Lab] : Puzzle and activity-based concept building",
      "[Mathematics Lab] : Small-group problem-solving sessions",
    ],
  },
  {
    slug: "computer-laboratory",
    title: "Computer Laboratory / AI Center",
    image: "/facilities/placeholder.jpg",
    description: [
      "The School’s AI Centre comprises computer laboratories. These centres provide invaluable skills and knowledge essential to the world of Information Technology and Artificial Intelligence. The Senior AI Labs are connected with high speed internet connection for internet surfing under surveillance. AI skills are taught through a variety of subject related projects which students carry out under the guidance of their subject as well as AI teachers. Computer Science and Informatics Practices subjects are offered as elective subjects.",
    ],
    features: [
      "Modern systems with high-speed internet access",
      "Programming and computational thinking curriculum",
      "One system per student during lab sessions",
      "Regular coding clubs and competitions",
    ],
  },
  {
    slug: "library",
    title: "Library",
    image: "/facilities/placeholder.jpg",
    description: [
     'Radiant takes pride in its meticulously organised and thoughtfully designed library, a standout feature of our institution. Our school library boasts an extensive collection of captivating and educational books curated to meet the diverse needs and interests of growing children. Encompassing various spheres of activities, our library serves as a rich resource hub.In addition to a vast physical collection, our library offers access to online resources, fostering a culture of research and exploration among our students. For interactive sessions with junior students, we have a dedicated storytelling area, creating a vibrant and engaging space. To further enhance the reading experience, our library provides a comfortable Reading Room facility, encouraging both students and staff to make the most of this valuable resource. At Radiant, we believe in fostering a love for reading and continuous learning.',
    ],
    features: [
      "Extensive collection across genres and subjects",
      "Digital catalogue for quick searches",
      "Dedicated silent reading and reference zones",
      "Weekly reading hours built into the timetable",
    ],
  },
  {
    slug: "smart-classrooms",
    title: "Smart Classrooms",
    image: "/facilities/placeholder.jpg",
    description: [
      "The school has tied up with leading service providers like Tata Edge, EduNext, ThinkStartUp to impart teaching through interactive sessions. Smart-class video modules, calibrated assessments, online learning management systems and learning solutions based on 21st-century innovations are made available through a one-step portal for students, teachers and parents to facilitate effective learning. The majority of our classrooms and labs are equipped with interactive smart boards.",
    ],
    features: [
      "Interactive smart boards in every classroom",
      "Curriculum-aligned multimedia content",
      "Real-time quizzes and instant feedback",
      "Ergonomic seating designed for young learners",
    ],
  },
  {
    slug: "activity-centre",
    title: "Activity Centre For Creative and Performing Arts",
    image: "/facilities/placeholder.jpg",
    description: [
      "The schools boast of a complete area devoted entirely to the Fine Arts which includes creative as well as performing arts. Radiant has separate rooms for Vocal Music, Instrumental Music, Drawing, Craft, Indian Dance, Western Dance and a whole host of other activities. At the centre/ hub of this complex of rooms lies the 400 capacity Amphitheatre for showcasing creative and performing arts. We can state with pride that our school perhaps has one of the finest facilities & faculty members in this regard anywhere in the Patna Region. Besides, we have an excellent faculty to ensure that this activity centre flourishes and that it will churn out real artistic talent in the years to come.Our students are provided with compulsory VAPA education in order to find expression to their rhythm. The school teachers offer training in performing various theatre forms, playing musical instruments, learning folk and western dances along with vocal music. As a result of this enviable combination of excellent facilities, competent faculty and programming, students today have formed independent bands / musical groups in both Western and Classical Music as well as great theatre troops in town.",
    ],
    features: [
      "Acoustically treated practice space",
      "Regular platforms for public performance",
      "[Music Room] : Range of instruments available for learning",
      "[Dance Room] : Classical, folk, and contemporary dance forms",
      "[Art & Craft Studio] : Student work regularly exhibited on campus",
    ],
  },
  {
    slug: "sports-at-radiant",
    title: "Sports at Radiant",
    image: "/facilities/placeholder.jpg",
    description: [
      "In order to promote all round development of students, the school has always laid stress on sporting activities. In addition to teaching various physical and sporting skills to students, the school encourages multi-dimensional activities which satisfy human urges of competition & taste of victory. Annual sports meets for students are held regularly. Students are encouraged to also participate in CBSE as well as other inter-school sporting events. In addition Radiant has started its initiative - Indigenous Sports Festival to promote.The school’s playfield includes open space for fun games, athletics, cricket, football, basketball, badminton & volleyball courts.",
    ],
    features: [
      "Grounds for football, cricket, and athletics",
      "Table tennis, chess, carrom, and badminton",
      "Dedicated basketball and multi-purpose courts",
      "Regular inter-house and inter-school tournaments",
      "House-level indoor games competitions",
    ],
  },
  {
    slug: "auditorium",
    title: "Auditorium",
    image: "/facilities/placeholder.jpg",
    description: [
      "Our air-conditioned Auditorium seats a large audience with tiered seating, professional lighting, and sound systems — hosting everything from annual day celebrations to guest lectures.",
      "It's also where students take their first steps on stage, whether presenting a project, performing in a play, or speaking at an assembly.",
    ],
    features: [
      "Tiered seating with clear stage visibility",
      "Professional lighting and sound systems",
      "Air-conditioned, climate-controlled comfort",
      "Hosts annual events, seminars, and performances",
    ],
  },
  {
    slug: "school-infirmary",
    title: "School Infirmary",
    image: "/facilities/placeholder.jpg",
    description: [
      "The school infirmary is fully equipped to handle all kinds of medical emergencies and provide first aid to our students in time of need. Medical facilities for regular check- up of students by a qualified physician and a nurse are available. A record of the check up of each child is maintained and feedback provided to the parents about the same. The school also has a tie-up with leading hospitals in the vicinity to handle emergencies. Radiant also as a sanitary pad vending machine installed in the Infirmary which can be easily accessed by our students.",
    ],
    features: [
      "On-campus nurse during school hours",
      "Doctor on call for emergencies",
      "Routine health check-ups and records",
      "Clean, private space for rest and recovery",
    ],
  },
  {
    slug: "school-transport",
    title: "School Transport",
    image: "/facilities/placeholder.jpg",
    description: [
      "Our School Transport fleet covers all major routes across the city with GPS-tracked buses, trained drivers, and attendants present on every trip for younger students.",
      "Parents can track pickup and drop timings in real time, giving peace of mind alongside a safe, punctual commute for every student.",
    ],
    features: [
      "GPS-tracked buses across major city routes",
      "Trained drivers and on-board attendants",
      "Real-time pickup and drop notifications",
      "Regular vehicle safety inspections",
    ],
  },
];

/**
 * Placeholder / real image card.
 * Detects a real photo automatically once `image` no longer
 * points to the generic placeholder path.
 */
function FacilityImage({ image, title }) {
  const isPlaceholder = !image || image.includes("placeholder");

  if (isPlaceholder) {
    return (
      <div className="group relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/60 px-6 text-center transition-colors dark:border-amber-800/70 dark:bg-amber-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.amber.400/12%),transparent_65%)]" />
        <span className="relative text-5xl" role="img" aria-label="Camera">
          📷
        </span>
        <p className="relative text-sm font-semibold tracking-wide text-amber-700 dark:text-amber-400">
          Image Coming Soon
        </p>
        <p className="relative text-xs text-neutral-500 dark:text-neutral-400">
          {title}
        </p>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" className="fill-amber-100 dark:fill-amber-500/10" />
      <path
        d="M6.5 10.3l2.2 2.2 4.8-4.8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacilityCard({ facility, index }) {
  const reversed = index % 2 === 1;
  const hasRealImage = !facility.image.includes("placeholder");

  return (
    <div
      className={`flex flex-col items-center gap-10 lg:gap-16 ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <FacilityImage image={facility.image} title={facility.title} />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
          {facility.title}
        </h3>

        <div className="mt-4 space-y-4">
          {facility.description.map((paragraph, i) => (
            <p
              key={i}
              className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="mt-6 space-y-3">
          {facility.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-[15px] text-neutral-700 dark:text-neutral-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          disabled={!hasRealImage}
          title={!hasRealImage ? "Gallery available once photos are added" : undefined}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-amber-300 px-5 py-2.5 text-sm font-medium text-amber-700 transition-colors enabled:hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-amber-800 dark:text-amber-400 dark:enabled:hover:bg-amber-500/10"
        >
          View Gallery
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
            <path
              d="M7 5l6 5-6 5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function FacilitiesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white dark:bg-neutral-950">
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section className="relative overflow-hidden border-b border-neutral-100 dark:border-neutral-900">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,theme(colors.amber.400/8%),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_20%,theme(colors.amber.400/6%),transparent_45%)]" />
          <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-28 lg:py-32">
            <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber-700 dark:border-amber-900/60 dark:bg-amber-500/10 dark:text-amber-400">
              Our Campus
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
              World-Class Learning Facilities
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
              At Radiant International School, every classroom, laboratory, and
              activity space is designed to give students the modern
              infrastructure they need to explore, question, and grow —
              well beyond the boundaries of a textbook.
            </p>
          </div>
        </section>

        {/* ─────────────────────── Facilities ─────────────────────── */}
        <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="space-y-20 sm:space-y-24 lg:space-y-28">
            {facilities.map((facility, index) => (
              <FacilityCard key={facility.slug} facility={facility} index={index} />
            ))}
          </div>
        </section>

        {/* ─────────────────────────── CTA ─────────────────────────── */}
        <section className="relative overflow-hidden border-t border-neutral-100 bg-amber-50/50 dark:border-neutral-900 dark:bg-amber-500/5">
        
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <Image
    src="/school-that-cares.png"
    alt=""
    fill
    className="object-contain opacity-[0.5] dark:opacity-[0.5] scale-[0.7]"
  />
</div>
          <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Ready to Experience Our Campus?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              Schedule a visit, meet our faculty, and see first-hand why
              families choose Radiant International School for their
              child's education.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                  href="https://forms.edunexttechnologies.com/forms/radiant/application/"
                  target="_blank"
                  className="your-existing-button-classes"
             >
           Apply Now
         </Link>
              <Link
                href="/#contact"
                className="your-existing-button-classes"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
