import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.contact}>
        <ul>
          <li>GITHUB</li>
          <li>EMAIL</li>
          <li>LINKEDIN</li>
        </ul>
      </div>
      <div>TROUBLEMAKING @ ALL OWER THE WORLD</div>
      <div>© AMY PLATT 2025</div>
    </div>
  );
};
export default Footer;
