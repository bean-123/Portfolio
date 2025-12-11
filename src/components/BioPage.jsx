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
          I’m a programmer who builds for the web, breaks things to figure out
          how they work, and chases that code-from-anywhere life. I’m into
          projects that have personality, interfaces that breathe a little, and
          tech that feels more like art than machinery. I get a kick out of
          making things that are both functional and fun, and I’m always
          experimenting with new ways to solve problems, learn new skills, and
          push my creativity.
          <br />
          <br />
          Right now I’m studying at Business College Helsinki, and next year
          I’ll be diving into Software Engineering at Metropolia University of
          Applied Sciences. I’m especially drawn to back-end development, but
          front-end is just as exciting—I love working with React, JavaScript,
          and Python to create interactive experiences that actually feel alive.
          My projects range from small experiments to full web apps, each one
          teaching me something new and helping me get closer to the kind of
          programmer I want to become.
          <br />
          <br />
          When I’m not coding, I’m usually gaming, designing, reorganizing my
          ideas, or learning something new that somehow ends up feeding back
          into my projects. There’s always a next thing waiting, a new library
          to explore, a new problem to solve, or a small tweak that turns a side
          project into something much bigger. I’m constantly chasing growth—both
          in my skills and in the projects I make.
          <br />
          <br />
          I want to keep learning as much as possible, grow as a programmer, and
          create things that feel alive, personal, and just a little bit
          unexpected. I love building, experimenting, and improving, and I’m
          always looking for ways to make code, design, and creativity work
          together.
          <br />
          <br />
          If you wanna work together, reach me at
          <span> amyplatt1995@gmail.com</span>
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
