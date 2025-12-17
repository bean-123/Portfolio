import projectData from "../data/projects";
import styles from "./ProjectPage.module.css";
import { Link } from "react-router-dom";

// import some icons from react-icons
import {
  SiPython,
  SiNodedotjs,
  SiReact,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
} from "react-icons/si";

// Map tech names to icons so theyre automatic
const techIconsMap = {
  React: <SiReact title="React" className={styles.techIcon} />,
  Css: <SiCss3 title="CSS" className={styles.techIcon} />,
  Tailwind: <SiTailwindcss title="Tailwind" className={styles.techIcon} />,
  Firebase: <SiFirebase title="Firebase" className={styles.techIcon} />,
  Javascript: <SiJavascript title="JavaScript" className={styles.techIcon} />,
  Python: <SiPython title="Python" className={styles.techIcon} />,
  Node: <SiNodedotjs title="Node.js" className={styles.techIcon} />,
};

const ProjectPage = () => {
  return (
    <div className={styles.projectPageContainer}>
      <h1 className={styles.pageTitle}>↘ more of my work</h1>
      <div className={styles.projectGrid}>
        {projectData.map((proj) => (
          <Link
            to={`/projects/${proj.id}`}
            key={proj.id}
            className={styles.projectCard}
          >
            <div className={styles.imageWrapper}>
              <img
                src={proj.cover}
                alt={proj.title}
                className={styles.projectImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.cardText}>
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>

              {/* Tech icons row */}
              <div className={styles.techIcons}>
                {proj.tech.map((tech) => techIconsMap[tech] || null)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
