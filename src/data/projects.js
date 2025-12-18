import hrapp from "../assets/images/hrapp.png";
import networking from "../assets/images/networking.png";
import iptracker from "../assets/images/iptracker.png";
import pancake from "../assets/images/pancake.png";
import socialproof from "../assets/images/socialproof.png";
import reactPortfolio from "../assets/images/reactPortfolio.png";
import fullHrapp from "../assets/images/fullHrapp.png";
import fullnetworking from "../assets/images/fullnetworking.png";
import pancake2 from "../assets/images/pancake2.png";
import fullportfolio from "../assets/images/fullportfolio.png";
import portfolio2 from "../assets/images/portfolio2.png";

const projectData = [
  {
    id: 1,
    title: "HR App",
    description:
      "A simple HR management React application to view, add, edit, and delete employee records.",
    cover: hrapp,
    hover: hrapp,
    fullpicture: fullHrapp,
    featured: true,
    tech: ["React", "Tailwind"],
    detailedDescription:
      " A simple HR management React application to view, add, edit, and delete employee records. This project demonstrates React, React Router, Axios, and a JSON backend deployed via Render.",
    link: "https://github.com/bean-123/hrApp",
  },
  {
    id: 2,
    title: "Networking Website",
    description: "A custom WordPress project",
    cover: networking,
    hover: networking,
    fullpicture: fullnetworking,
    featured: true,
    tech: ["Css", "Html", "Wordpress"],
    detailedDescription:
      "This project is a modern, responsive WordPress site created for Ohjelmistokehitysprojekti1 (Business College Helsinki school). The site allows users to explore events and communities through an interactive filtering system on the homepage.",
    link: "https://github.com/bean-123/SoftwareDevelopment1",
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
    link: "https://github.com/bean-123/ip-address-tracker",
  },
  {
    id: 4,
    title: "Pancake Factory",
    description:
      "Web application where users can build a pancake and manage customer orders.",
    cover: pancake,
    hover: pancake,
    extraImages: [pancake2],
    featured: true,
    tech: ["React", "Css", "Javascript"],
    detailedDescription: "Long description here",
    link: "https://github.com/bean-123/Pancake-task",
  },
  {
    id: 5,
    title: "Social Proof",
    description:
      "This is my solution to the Social proof section challenge on Frontend Mentor.",
    cover: socialproof,
    hover: socialproof,
    featured: true,
    tech: ["Css", "Html"],
    detailedDescription: "Long description here",
    link: "https://github.com/bean-123/Social-proof-section",
  },
  {
    id: 6,
    title: "Developer Portfolio",
    description: "Personal portfolio page",
    cover: reactPortfolio,
    hover: reactPortfolio,
    fullpicture: fullportfolio,
    extraImages: [portfolio2],
    featured: true, // if u wanna show it on the front page
    tech: ["React", "Tailwind", "Firebase", "Vite"],
    detailedDescription:
      "This is my personal portfolio website, it is built with React, Vite, and Tailwind CSS.This project reflects my passion for creative, interactive, and cleanly structured user interfaces — combining code, design, and detail into a smooth experience.",
    link: "https://github.com/bean-123/Portfolio-task",
    livelink: "https://bean-123.github.io/Portfolio-task/",
  },
];

export default projectData;
