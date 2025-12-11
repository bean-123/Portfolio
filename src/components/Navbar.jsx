import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarcontainer}>
      <div className={styles.sitename}>
        <Link to="/" className={styles.link}>
          amy platt —
        </Link>
      </div>

      <div className={styles.navigation}>
        <ul>
          <li>
            <Link to="/projects" className={styles.link}>
              MY WORK
            </Link>
          </li>
          <li>
            <Link to="/bio" className={styles.link}>
              BIO
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
