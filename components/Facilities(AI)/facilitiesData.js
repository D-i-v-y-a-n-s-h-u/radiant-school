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
    id: "swimming-pool",
    title: "Olympic Swimming Pool",
    description:
      "A temperature-controlled, Olympic-sized pool with dedicated lanes for lap swimming and leisure.",
    image: "/facilities/pool.jpg",
  },
  {
    id: "gymnasium",
    title: "Modern Gymnasium",
    description:
      "Fully equipped with free weights, cardio machines, and functional training zones.",
    image: "/facilities/gym.jpg",
  },
  {
    id: "library",
    title: "Central Library",
    description:
      "A quiet, well-lit space with an extensive collection of books, journals, and digital resources.",
    image: "/facilities/library.jpg",
  },
  {
    id: "auditorium",
    title: "Grand Auditorium",
    description:
      "A 500-seat auditorium with premium acoustics, ideal for events, conferences, and performances.",
    image: "/facilities/auditorium.jpg",
  },
  {
    id: "cafeteria",
    title: "Multi-Cuisine Cafeteria",
    description:
      "Spacious dining hall serving a variety of fresh, hygienically prepared meals daily.",
    image: "/facilities/cafeteria.jpg",
  },
  {
    id: "sports-court",
    title: "Indoor Sports Court",
    description:
      "A multi-purpose court for basketball, badminton, and volleyball with professional flooring.",
    image: "/facilities/sports-court.jpg",
  },
  {
    id: "computer-lab",
    title: "Computer Lab",
    description:
      "High-speed workstations with the latest software, supported by dedicated technical staff.",
    image: "/facilities/computer-lab.jpg",
  },
  {
    id: "garden",
    title: "Landscaped Gardens",
    description:
      "Beautifully maintained green spaces designed for relaxation, study, and outdoor gatherings.",
    image: "/facilities/garden.jpg",
  },
];

export default facilities;
