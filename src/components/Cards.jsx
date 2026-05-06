import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Cards.module.css";
import projectData from "../data/projects";


const Cards = () => {
  const featuredProjects = projectData.filter((proj) => proj.featured);

  const animationValues = useMemo(
    () =>
      featuredProjects.map(() => ({
        startX:
          Math.random() < 0.5
            ? -window.innerWidth - Math.random() * 200
            : window.innerWidth + Math.random() * 200,
        startY:
          Math.random() < 0.5
            ? -window.innerHeight - Math.random() * 200
            : window.innerHeight + Math.random() * 200,
        rotate: Math.random() * 10 - 5,
      })),
    []
  );

  return (
    <div className={styles.cardscontainer}>
      <div className={styles.cards}>
        {featuredProjects.map((proj, index) => {
          const { startX, startY, rotate } = animationValues[index];

          return (
            <motion.div
              key={proj.id}
              className={styles.cardWrapper}
              initial={{ opacity: 0, x: startX, y: startY, rotate }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: index * 0.1,
              }}
            >
              <Link to={`/projects/${proj.id}`} className={styles.cardLink}>
                <div className={styles.cardInner}>
                  <div className={styles.cardNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <img
                    src={proj.cover}
                    alt={proj.title}
                    className={styles.cardImage}
                  />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

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
