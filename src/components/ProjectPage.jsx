import projectData from "../data/projects";
import styles from "./ProjectPage.module.css";
import { Link } from "react-router-dom";
import { TechIcon } from "./TechIcon";

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
                {proj.tech.map((tech) => (
                  <TechIcon key={tech} name={tech} />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
