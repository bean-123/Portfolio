import { useParams } from "react-router-dom";
import projectData from "../data/projects";
import styles from "./SingleProjectPage.module.css";

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
      <p>{project.description}</p>
      {/* you can add more fields like tech stack, link, etc. */}
    </div>
  );
};

export default SingleProjectPage;
