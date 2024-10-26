import styles from "./skill.module.css";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import WebIcon from "@mui/icons-material/Web";
import jsImg from "../../../images/js-image.png";
import reactImg from "../../../images/react-image.png";
import htmlImg from "../../../images/html-image.png";
import cssImg from "../../../images/css-image.png";

export default function Skills() {
  return (
    <section id="about" className={styles.skillContainer}>
      <h2 className={styles.skill}>What i do</h2>
      <p className={styles.text}>
        I specialize in creating visually engaging and user-friendly websites,
        my goal is always to create a digital experience that not only looks
        great but also serves the needs of the user.
      </p>
      <div className={styles.skillBarContainer}>
        <div className={styles.skillBar}>
          <ViewQuiltIcon />
          <div>
            <h3 className={styles.skillText}>Ui/Ux Developer</h3>
          </div>
        </div>
        <div className={styles.skillBar}>
          <WebIcon />
          <div>
            <h3 className={styles.skillText}>Website Developer</h3>
          </div>
        </div>
      </div>

      <div className={styles.myskillContainer}>
        <h2>My skills</h2>
        <div className={styles.skillImage}>
          <div className={styles.imgContainer}>
            <img src={jsImg} alt="JS image" className={styles.imgSkill} />
          </div>
          <div className={styles.imgContainer}>
            <img src={reactImg} alt="react image" className={styles.imgSkill} />
          </div>
          <div className={styles.imgContainer}>
            <img src={htmlImg} alt="html image" className={styles.imgSkill} />
          </div>
          <div className={styles.imgContainer}>
            <img src={cssImg} alt="css image" className={styles.imgSkill} />
          </div>
        </div>
      </div>
    </section>
  );
}
