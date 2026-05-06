import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.contact}>
        <p>↘</p>
        <div className={styles.links}>
          <a
            href="https://github.com/bean-123"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => gtag("event", "click", { event_category: "footer_link", event_label: "GitHub" })}
          >
            GITHUB
          </a>
          <a
            href="mailto:amy.platt@hotmail.com"
            onClick={() => gtag("event", "click", { event_category: "footer_link", event_label: "Email" })}
          >
            EMAIL
          </a>
          <a
            href="https://www.linkedin.com/in/plattamy/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => gtag("event", "click", { event_category: "footer_link", event_label: "LinkedIn" })}
          >
            LINKEDIN
          </a>
        </div>
      </div>
      <div>CURRENTLY BASED @ HELSINKI</div>
      <div>© AMY PLATT 2025</div>
    </div>
  );
};
export default Footer;
