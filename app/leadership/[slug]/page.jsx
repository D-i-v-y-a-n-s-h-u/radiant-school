import Image from "next/image";
import { notFound } from "next/navigation";

const leaders = {
  ceo: {
    image: "/leadership/ceo.jpg",
    name: "Lt. Col. A. Sekhar",
    designation: "Chief Executive Officer",
    message: `Lt. Col. A Sekhar is a distinguished soldier-educationist with almost 40 years of leadership experience across the armed forces, education, and academia. A postgraduate in both Chemistry and English, he has built an exemplary career marked by excellence in administration, academics, and institutional leadership.

During his tenure in the Armed Forces, he held several prestigious positions, including heading Sainik and Military Schools, serving as an Instructor at the Indian Military Academy, and working as Registrar of autonomous colleges.

After taking premature retirement from the Army, Lt. Col. Sekhar joined Atul (CSR) Ltd as Director (Education and Empowerment), where he established the Atul Institute of Vocational Excellence from the ground up. He later served as Director & Head of Schools at the Alpha Group of Institutions, Trichy, Executive Director of Aditanar Educational Institutions, Regional Director of Hyderabad Public School, Kadapa, and Regional Director at Universal Group of Institutions.

He has now joined as the CEO of Indirapuram Group of Institutions, and his vast experience, visionary leadership, and deep understanding of education are expected to further strengthen and enrich our group of schools and colleges.

A respected thought leader in the field of education, he is a regular speaker, moderator, and highly sought-after presenter at conferences and academic forums.

`,
  },

  patron: {
    image: "/leadership/patron.jpg",
    name: "Mrs. Meena Singh",
    designation: "Patron",
    message: `Radiant International School is one of the premier schools founded in 2003. It is the labour of love of its founder, my husband, Late Shri. Ajit Singh, a philanthropist and visionary extraordinaire. His vision was to fuse international quality education with Indian values and to provide affordable, high-quality education to our citizens. The greatest tribute to him would be to take his vision forward towards realization. I deem it my mission in life to facilitate the realisation of his dream of creating generations of future leaders who would emerge from the portals of this school to sally forth into the world as individuals of character, as responsible citizens, and the torch bearers of tomorrow.

Our founder Chairman, who put forth the values which form the edifice of our school, believed in simple living and high thinking. Blessed with innate leadership traits, an everlasting thirst for knowledge, and a keen aesthetic sense, he lived his life with a purpose, i.e., to work selflessly for the betterment of the community at large. Our school continues to aim to inculcate these essential values in our students.

I end this note with a hope and prayer to the Almighty to endow our students with mental alertness, physical strength, and moral uprightness and, moreover, to infuse them with simple living and high thinking.`,
  },

  promotor: {
    image: "/leadership/promotor.jpg",
    name: "Mr. Vishal Singh",
    designation: "Promotor",
    message: `Having started Radiant International School in 2003, our education has consistently displayed full awareness of its social responsibilities through the various educational institutions set up in different parts of the country. It envisions education as a powerful instrument for the enlightenment and empowerment of our citizens. It is from this spirit that we draw our educational goal of empowering students to become self-reliant with a global outlook, albeit with a keen eye on local conditions.

Having made rapid strides in the very few years since the inception of the school, I can envision us rapidly moving along the path of growth carefully charted out by us. I see infrastructure developing further and coming up to truly global standards. Affiliated to the Central Board of Secondary Education, I see students of the school excelling in board examinations. With excellent sports and educational facilities, I also see our students' minds opening up; for the mind is like a parachute, it functions best when it is open. I see our students being groomed into mature and responsible citizens, intensely practical but still retaining the power to dream, to achieve their goals and to be successful in their endeavours.

Our goal is to make Indirapuram Public School the cradle of leadership and values, from the portals of which will emerge generations of future leaders in every sphere of activity in our country, as indeed in the world of tomorrow.

With this, I optimistically hope that together we, the management, along with the principal, teachers, administrative staff, our students, and their parents, will work hand-in-hand to realise the targets we have set out for ourselves.

`,
  },

  principal: {
    image: "/leadership/principal.jpg",
    name: "Ms. Manisha Sinha",
    designation: "Principal",
    message: `Every child carries a spark of greatness. Our purpose is to nurture that spark with patience, discipline, and unwavering belief until it becomes a light that guides others.`,
  },
};

export default async function LeaderPage({ params }) {
  const { slug } = await params;

  const leader = leaders[slug];

  if (!leader) notFound();

  return (
    <section className="min-h-screen bg-white dark:bg-neutral-950 py-28">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid gap-16 lg:grid-cols-[420px_1fr] items-start">

          <div className="relative lg:sticky lg:top-28">

            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none aspect-square overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-contain bg-neutral-100 dark:bg-neutral-900"
              />
            </div>

          </div>

          <div>

            <p className="uppercase tracking-[0.3em] text-amber-500 font-semibold">
              {leader.designation}
            </p>

            <h1 className="mt-3 text-5xl font-bold text-neutral-900 dark:text-white">
              {leader.name}
            </h1>

            <div className="mt-10 space-y-6 text-lg leading-9 text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
              {leader.message}
            </div>

            <p className="mt-14 text-xl font-semibold">
              {leader.name}
            </p>

            <p className="text-neutral-500">
              {leader.designation}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}