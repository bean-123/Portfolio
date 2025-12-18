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

export const TechIcon = ({ name, size = 30, color = "currentColor" }) => {
  const IconComponent = iconsMap[name];
  if (!IconComponent) return null;
  return (
    <IconComponent
      className={styles.techIcon}
      size={size}
      color={color}
      title={name}
    />
  );
};
