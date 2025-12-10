import cat1 from "../assets/images/cat1.jpg";
import cat2 from "../assets/images/cat2.jpg";
import cat3 from "../assets/images/cat3.jpg";
import cat4 from "../assets/images/cat4.jpg";
import cat5 from "../assets/images/cat5.jpg";
import cat6 from "../assets/images/cat6.jpg";

import hover1 from "../assets/images/hover1.jpg";
import hover2 from "../assets/images/hover2.jpg";
import hover3 from "../assets/images/hover3.jpg";
import hover4 from "../assets/images/hover4.jpg";
import hover5 from "../assets/images/hover5.jpg";
import hover6 from "../assets/images/hover6.jpg";

const projectData = [
  {
    id: 1,
    title: "Project One",
    description: "Short description of Project One",
    cover: cat1,
    hover: hover1,
    featured: true,
    tech: ["React", "Tailwind", "Firebase"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "Short description of Project Two",
    cover: cat2,
    hover: hover2,
    featured: true,
    tech: ["React", "Css", "Javascript"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "Short description of Project Three",
    cover: cat3,
    hover: hover3,
    featured: true,
    tech: ["React", "Tailwind", "Firebase"],
  },
  {
    id: 4,
    title: "Project Four",
    description: "Short description of Project Four",
    cover: cat4,
    hover: hover4,
    featured: true,
    tech: ["React", "Css", "Javascript"],
  },
  {
    id: 5,
    title: "Project Five",
    description: "Short description of Project Five",
    cover: cat5,
    hover: hover5,
    featured: true,
    tech: ["React", "Css", "Javascript"],
  },
  {
    id: 6,
    title: "Project Six",
    description: "Short description of Project Six",
    cover: cat6,
    hover: hover6,
    featured: true, // if u wanna show it on the front page
    tech: ["React", "Tailwind", "Firebase"],
  },
  // .... etc
];

export default projectData;
