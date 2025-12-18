import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Cards.module.css";
import projectData from "../data/projects";

const Cards = () => {
  const featuredProjects = projectData.filter((proj) => proj.featured);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={styles.cardscontainer}>
      <div className={styles.cards}>
        {featuredProjects.map((proj, index) => {
          // Random starting positions for floating effect
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
                type: "tween", // could be spring aswell, depends what i want
                duration: 1,
                stiffness: 80, // higher = faster, snappier only on spring type
                damping: 15, // higher = slower, more resistance
                delay: index * 0.1, // how much it delays each card after another
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={`/projects/${proj.id}`} className={styles.cardLink}>
                <img
                  src={proj.cover}
                  alt={proj.title}
                  className={styles.cardImage}
                />
              </Link>

              {hoveredIndex === index && (
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
              )}
            </motion.div>
          );
        })}
      </div>

      <div className={styles.randomtext}>
        <motion.div
          initial={{ y: 100, opacity: 0 }} // start 50px below, invisible
          animate={{ y: 0, opacity: 1 }} // end at original position, fully
          visible
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className={styles.randomtextinner}
        >
          <p>
            PROGRAMMER. CHRONIC LEARNER. FULL OF AMBITION. REMOTE-JOB DREAMER.
            WRITES CODE, FIXES BUGS, CREATES WORLDS, AND SOMETIMES BREAKS
            EVERYTHING ON PURPOSE (FOR SCIENCE). GAMING RAISED. AI-CURIOUS.
            ROBOTICS-INTRIGUED. NEEDS UNREASONABLE AMOUNTS OF COFFEE. STUDYING.
            BUILDING. EXPERIMENTING. ALWAYS MORE TO LEARN. WANTS TO WORK FROM
            ANY COUNTRY WITH A DECENT WIFI SIGNAL. HUNGRY FOR BETTER CODE,
            BETTER IDEAS, BETTER LIFE. YOU BETTER KEEP AN EYE ON ME BECAUSE
            THERES SOO MUCH MORE COMING.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
