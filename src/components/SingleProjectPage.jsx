import { useParams } from "react-router-dom";
import projectData from "../data/projects";
import styles from "./SingleProjectPage.module.css";

// react-icons
import {
  SiPython,
  SiNodedotjs,
  SiReact,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiHtml5,
  SiVite,
} from "react-icons/si";

const techIconsMap = {
  React: <SiReact title="React" className={styles.techIcon} />,
  Css: <SiCss3 title="CSS" className={styles.techIcon} />,
  Tailwind: <SiTailwindcss title="Tailwind" className={styles.techIcon} />,
  Firebase: <SiFirebase title="Firebase" className={styles.techIcon} />,
  Javascript: <SiJavascript title="JavaScript" className={styles.techIcon} />,
  Python: <SiPython title="Python" className={styles.techIcon} />,
  Node: <SiNodedotjs title="Node.js" className={styles.techIcon} />,
  Html: <SiHtml5 title="HTML5" className={styles.techIcon} />,
  Vite: <SiVite title="Vite" className={styles.techIcon} />,
};

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
              {techIconsMap[tech] || tech}
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
