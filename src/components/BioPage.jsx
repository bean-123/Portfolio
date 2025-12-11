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
          I’m a programmer who builds things for the web, breaks things to
          understand them better, and keeps chasing that remote-job,
          code-from-anywhere life. I like projects that have personality,
          interfaces that breathe a little, and tech that feels more like art
          than machinery.
          <br />
          <br />
          When I'm not coding, I'm learning, designing, gaming, reorganizing my
          ideas, or spinning up side projects that grow into something bigger.
          There's always a next thing waiting.
          <br />
          <br />
          If you wanna work together, reach me at amyplatt1995@gmail.com
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
