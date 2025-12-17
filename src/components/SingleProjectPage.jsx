import { useParams } from "react-router-dom";
import projectData from "../data/projects";
import styles from "./SingleProjectPage.module.css";
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

const techIconsMap = {
  React: <SiReact title="React" className={styles.techIcon} />,
  Css: <SiCss3 title="CSS" className={styles.techIcon} />,
  Tailwind: <SiTailwindcss title="Tailwind" className={styles.techIcon} />,
  Firebase: <SiFirebase title="Firebase" className={styles.techIcon} />,
  Javascript: <SiJavascript title="JavaScript" className={styles.techIcon} />,
  Python: <SiPython title="Python" className={styles.techIcon} />,
  Node: <SiNodedotjs title="Node.js" className={styles.techIcon} />,
};

const SingleProjectPage = () => {
  const { id } = useParams();
  const project = projectData.find((proj) => proj.id === parseInt(id));

  if (!project) return <p>Project not found.</p>;

  return (
    <div className={styles.singlepagecontainer}>
      <h1>{project.title}</h1>
      <img
        src={project.cover}
        alt={project.title}
        className={styles.projectImage}
      />
      <p>{project.detailedDescription}</p>
      {/* you can add more fields like tech stack, link, etc. */}
      <div className={styles.techStack}>
        {project.tech.map((tech) => (
          <div key={tech} className={styles.techIconWrapper}>
            {techIconsMap[tech] || tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProjectPage;
