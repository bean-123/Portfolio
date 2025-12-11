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
          >
            GITHUB
          </a>
          <a href="mailto:amy.platt@hotmail.com">EMAIL</a>
          <a
            href="https://www.linkedin.com/in/amy-platt-2213a0358/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </div>
      </div>
      <div>TROUBLEMAKING @ ALL OWER THE WORLD</div>
      <div>© AMY PLATT 2025</div>
    </div>
  );
};
export default Footer;
