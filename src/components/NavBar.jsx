import { Link } from "react-scroll";
import styles from "./navbar.module.css";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.desktopMenu}>
        <Link
          activeClass={styles.active}
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={styles.listItem}
        >
          Home
        </Link>
        <Link
          activeClass={styles.active}
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={styles.listItem}
        >
          About
        </Link>
        <Link
          activeClass={styles.active}
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className={styles.listItem}
        >
          Portfolio
        </Link>
      </div>
      <div className={styles.btnContainer}>
        <button
          className={styles.menuBtn}
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth"})
          }
        >
          <ChatBubbleOutlineRoundedIcon className={styles.contactIcon} /> Contact me
        </button>
      </div>
    </nav>
  );
}
