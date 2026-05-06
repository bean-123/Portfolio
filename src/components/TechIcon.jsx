import {
  SiReact,
  SiCss3,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiHtml5,
  SiVite,
  SiWordpress,
} from "react-icons/si";
import styles from "./ProjectPage.module.css";

const iconsMap = {
  React: SiReact,
  Css: SiCss3,
  Tailwind: SiTailwindcss,
  Firebase: SiFirebase,
  Javascript: SiJavascript,
  Python: SiPython,
  Node: SiNodedotjs,
  Html: SiHtml5,
  Vite: SiVite,
  Wordpress: SiWordpress,
};

const colorMap = {
  React: "#61DAFB",
  Css: "#1572B6",
  Tailwind: "#06B6D4",
  Firebase: "#FFA000",
  Javascript: "#F7DF1E",
  Python: "#3776AB",
  Node: "#68A063",
  Html: "#E34F26",
  Vite: "#646CFF",
  Wordpress: "#00749C",
};

export const TechIcon = ({ name, size = 30 }) => {
  const IconComponent = iconsMap[name];
  if (!IconComponent) return null;
  return (
    <IconComponent
      className={styles.techIcon}
      size={size}
      color={colorMap[name] || "currentColor"}
      title={name}
    />
  );
};
