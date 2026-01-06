import { motion } from "framer-motion";
import styles from "./BioPage.module.css";
import amy1 from "../assets/images/amy1.png";
import amy2 from "../assets/images/amy2.jpeg";
import amy3 from "../assets/images/amy3.jpg";

const BioPage = () => {
  return (
    <div className={styles.bioContainer}>
      {/* LEFT SIDE — TEXT */}
      <div className={styles.bioText}>
        <h1 className={styles.bioTitle}>who am i?</h1>
        <p className={styles.bioParagraph}>
          Hi! My name is Amy — a passionate developer, lifelong learner, and
          problem solver. I thrive at the intersection of creativity and logic,
          where code meets design, and ideas turn into interactive experiences.
          My journey in tech began with curiosity and a computer, and over time,
          it’s grown into a skill set that spans front-end, back-end, and
          everything in between. I enjoy building projects that aren’t just
          functional but also visually engaging, and I love exploring new
          technologies to see what’s possible.
          <br />
          <br />
          My Skills: I specialize in JavaScript and Python, with hands-on
          experience in HTML, CSS, React, and React Router for front-end
          development. On the back-end, I’ve worked with Node.js, Express, and
          REST APIs, and I have foundational knowledge of SQL and exposure to
          TypeScript and Java. Beyond coding, I’m fluent with Git, GitHub, npm
          workflows, and deployment processes, which lets me take projects from
          concept to live applications seamlessly.
          <br />
          <br />
          How I Work: I’m independent, focused, and self-motivated, yet I know
          the value of collaboration and learning from others. My approach is
          iterative: I plan, build, test, and refine, making sure each step
          brings something valuable to the table. I love breaking problems down
          into manageable pieces, and I always look for creative solutions when
          the obvious ones aren’t enough.
          <br />
          <br />
          Outside of Code: When I’m not programming, you’ll probably find me
          exploring gaming worlds, diving into AI, or experimenting with small
          creative projects that push the boundaries of what I know. Curiosity
          fuels everything I do — whether it’s learning a new language,
          exploring a new framework, or just tinkering with something for fun.
          <br />
          <br />
          If you wanna work together, reach me at
          <span> amy.platt@hotmail.com</span>
        </p>
      </div>

      {/* RIGHT SIDE — FLOATING / DRAGGABLE IMAGES */}
      <div className={styles.imageColumn}>
        <motion.img
          src={amy1}
          className={`${styles.bioPhoto} ${styles.photo1}`}
          drag
          dragElastic={0.3}
        />

        <motion.img
          src={amy2}
          className={`${styles.bioPhoto} ${styles.photo2}`}
          drag
          dragElastic={0.3}
        />

        <motion.img
          src={amy3}
          className={`${styles.bioPhoto} ${styles.photo3}`}
          drag
          dragElastic={0.3}
        />
      </div>
    </div>
  );
};

export default BioPage;
