import styles from "./intro.module.css";
import profile from "../../../images/gemson.png";
export default function Intro() {
  return (
    <section id="intro" className={styles.introContainer}>
      <div className={styles.introText}>
        <span className={styles.hello}>Hello,</span>
        <span>
          I'm <span className={styles.name}>Gemson</span>
        </span>
        <span className={styles.prof}>Frontend Developer</span>
        <p className={styles.para}>
          I am a skilled and passionate Frontend Web Developer in creating visually
          appealing <br />
          and user friendly websites.
        </p>

      </div>
      <img src={profile} alt="profile" className={styles.bgImg} />
    </section>
  );
}
