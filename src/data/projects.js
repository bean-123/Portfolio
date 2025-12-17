import hrapp from "../assets/images/hrapp.png";
import networking from "../assets/images/networking.png";
import iptracker from "../assets/images/iptracker.png";
import pancake from "../assets/images/pancake.png";
import cat5 from "../assets/images/cat5.jpg";
import cat6 from "../assets/images/cat6.jpg";

const projectData = [
  {
    id: 1,
    title: "HR App",
    description:
      "A simple HR management React application to view, add, edit, and delete employee records.",
    cover: hrapp,
    hover: hrapp,
    featured: true,
    tech: ["React", "Tailwind", "Firebase"],
    detailedDescription:
      " A simple HR management React application to view, add, edit, and delete employee records. This project demonstrates React, React Router, Axios, and a JSON backend deployed via Render.",
    // add link here to github
  },
  {
    id: 2,
    title: "Networking Website",
    description: "A custom WordPress project",
    cover: networking,
    hover: networking,
    featured: true,
    tech: ["React", "Css", "Javascript"],
    detailedDescription:
      "This project is a modern, responsive WordPress site created for Ohjelmistokehitysprojekti1 (Business College Helsinki school). The site allows users to explore events and communities through an interactive filtering system on the homepage.",
  },
  {
    id: 3,
    title: "IP Address Tracker",
    description:
      "Web app where users can input an IP address or domain and see its location",
    cover: iptracker,
    hover: iptracker,
    featured: true,
    tech: ["React", "Tailwind", "Firebase"],
    detailedDescription:
      "This is my solution to the IP Address Tracker challenge on Frontend Mentor. The goal was to build a web app where users can input an IP address or domain and see its location and related info displayed on an interactive map.",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Short description of Project Four",
    cover: pancake,
    hover: pancake,
    featured: true,
    tech: ["React", "Css", "Javascript"],
    detailedDescription: "Long description here",
  },
  {
    id: 5,
    title: "Project Five",
    description: "Short description of Project Five",
    cover: cat5,
    hover: cat5,
    featured: true,
    tech: ["React", "Css", "Javascript"],
    detailedDescription: "Long description here",
  },
  {
    id: 6,
    title: "Project Six",
    description: "Short description of Project Six",
    cover: cat6,
    hover: cat6,
    featured: true, // if u wanna show it on the front page
    tech: ["React", "Tailwind", "Firebase"],
    detailedDescription: "Long description here",
  },
  // .... etc
];

export default projectData;
