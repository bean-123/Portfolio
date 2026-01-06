import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Cards.module.css";
import projectData from "../data/projects";

const Cards = () => {
  const featuredProjects = projectData.filter((proj) => proj.featured);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div className={styles.cardscontainer}>
      {/* Track mouse movement over this container */}
      <div
        className={styles.cards}
        onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
      >
        {featuredProjects.map((proj, index) => {
          // Random starting positions for entry animation
          const startX =
            Math.random() < 0.5
              ? -window.innerWidth - Math.random() * 200
              : window.innerWidth + Math.random() * 200;

          const startY =
            Math.random() < 0.5
              ? -window.innerHeight - Math.random() * 200
              : window.innerHeight + Math.random() * 200;

          return (
            <motion.div
              key={proj.id}
              className={styles.cardWrapper}
              initial={{
                opacity: 0,
                x: startX,
                y: startY,
                rotate: Math.random() * 10 - 5,
              }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: index * 0.1,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Main project image */}
              <Link to={`/projects/${proj.id}`} className={styles.cardLink}>
                <img
                  src={proj.cover}
                  alt={proj.title}
                  className={styles.cardImage}
                />
              </Link>

              {/* Hover overlay */}
              {hoveredIndex === index && (
                <motion.div
                  style={{ position: "absolute", pointerEvents: "none" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                  <div
                    className={`${styles.hoverBox} ${
                      styles[`hoverBox${index + 1}`]
                    }`}
                  >
                    <img src={proj.hover} alt={`Hover ${proj.title}`} />
                    <div className={styles.hoversmalltext}>
                      <h3 className={styles.hoverTitle}>{proj.title}</h3>
                      <p>{proj.description}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Random text at the bottom */}
      <div className={styles.randomtext}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className={styles.randomtextinner}
        >
          <p>
            PROGRAMMER. CHRONIC LEARNER. FULL OF AMBITION. REMOTE-JOB DREAMER.
            WRITING CODE, FIXING BUGS, CREATING WORLDS, AND SOMETIMES BREAKING
            EVERYTHING ON PURPOSE (FOR SCIENCE). GAMING RAISED. AI-CURIOUS.
            NEEDS UNREASONABLE AMOUNTS OF COFFEE. STUDYING. BUILDING.
            EXPERIMENTING. ALWAYS MORE TO LEARN. WANTS TO WORK FROM ANY COUNTRY
            WITH A DECENT WIFI SIGNAL. HUNGRY FOR BETTER CODE, BETTER IDEAS,
            BETTER LIFE. KEEP AN EYE ON ME BECAUSE THERES SOO MUCH MORE COMING.
            :)
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
