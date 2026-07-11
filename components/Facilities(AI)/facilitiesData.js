/**
 * Facilities data source.
 *
 * To add a new facility, just push a new object here — no changes
 * needed anywhere else. Images should live in /public/facilities/.
 *
 * id          -> unique key (string or number)
 * title       -> facility name shown on the card
 * description -> short 1-2 line description
 * image       -> path relative to /public, e.g. "/facilities/pool.jpg"
 */

const facilities = [
  {
    id: "library",
    title: "Central Library",
    description:
      "A quiet, well-lit space with an extensive collection of books, journals, and digital resources.",
    image: "/facilities/LIBRARY.jpg",
  },
  {
    id: "auditorium",
    title: "Grand Auditorium",
    description:
      "A large auditorium ideal for events, conferences, and performances.",
    image: "/facilities/AUDITORIUM.jpg",
  },
  {
    id: "auditorium",
    title: "Grand Auditorium",
    description:
      "A large auditorium ideal for events, conferences, and performances.",
    image: "/facilities/AUDITORIUM 1.jpg",
  },
  {
    id: "sports-court",
    title: "Sports Court",
    description:
      "A multi-purpose court for basketball, badminton, volleyball & indoor courts.",
    image: "/facilities/PLAYGROUND.jpg",
  },
   {
    id: "sports-court",
    title: "Sports Court",
    description:
      "A multi-purpose court for basketball, badminton, volleyball & indoor courts.",
    image: "/facilities/PLAYGROUND 1.jpg",
  },
  {
    id: "computer-lab",
    title: "Computer Lab",
    description:
      "High-speed workstations with the latest software, supported by dedicated technical staff.",
    image: "/facilities/COMPUTER LAB 1.jpg",
  },
  {
    id: "computer-lab",
    title: "Computer Lab",
    description:
      "High-speed workstations with the latest software, supported by dedicated technical staff.",
    image: "/facilities/COMPUTER LAB.jpg",
  },
  {
    id: "Maths Lab",
    title: "Maths Lab",
    description:
      "Interactive learning with models, puzzles, and hands-on mathematical exploration.",
    image: "/facilities/MATH LAB.jpg",
  },
  {
    id: "Maths Lab",
    title: "Maths Lab",
    description:
      "Interactive learning with models, puzzles, and hands-on mathematical exploration.",
    image: "/facilities/MATHS LAB 1.jpg",
  },
  {
    id: "Science Lab",
    title: "Science Lab",
    description:
      "Fully-equipped Physics, Chemistry & Biology labs.",
    image: "/facilities/COMPOSITE LAB.jpg",
  },]

export default facilities;
