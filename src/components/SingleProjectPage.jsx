import { useParams } from "react-router-dom";
import projectData from "../data/projects";
import styles from "./SingleProjectPage.module.css";
import { TechIcon } from "./TechIcon";

const SingleProjectPage = () => {
  const { id } = useParams();
  const project = projectData.find((proj) => proj.id === parseInt(id));

  if (!project) return <p>Project not found.</p>;

  return (
    <div className={styles.singlepagecontainer}>
      {/* LEFT COLUMN */}
      <div className={styles.leftColumn}>
        <h1>{project.title}</h1>

        <p className={styles.description}>{project.detailedDescription}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            View the project on GitHub
          </a>
        )}
        {project.livelink && (
          <a
            href={project.livelink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            View the live site here
          </a>
        )}

        <div className={styles.techStack}>
          {project.tech.map((tech) => (
            <div key={tech} className={styles.techIconWrapper}>
              <TechIcon name={tech} />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className={styles.rightColumn}>
        <img
          src={project.fullpicture || project.cover}
          alt={project.title}
          className={styles.projectImage}
        />
        {/* Extra images */}
        {project.extraImages?.map((img, index) => (
          <div key={index} className={styles.extraImageWrapper}>
            <img
              src={img}
              alt={`${project.title} ${index + 2}`}
              className={styles.projectImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProjectPage;
