import styles from "./intro.module.css";
import profile from "../../../images/gemson.png";
import Decor from "../decorations/Decor";
export default function Intro() {
  return (
    <section id="intro" className={styles.introContainer}>
      <div className={styles.introText}>
        <Decor bg={"#C4D2B4"} height={"15rem"} width={"10rem"} rotate={"50deg"} left={"5rem"} />
        <Decor bg={"#83D2B4"} height={"30rem"} width={"25rem"} rotate={"-20deg"} top={0} right={"5rem"} />
        <Decor bg={"#83D2B4"} height={"5rem"} width={"5rem"} rotate={"30deg"} bottom={"10rem"} left={"50%"} />
        <span className={styles.hello}>Hello,</span>
        <span>
          I'm <span className={styles.name}>Gemson</span>
        </span>
        <span className={styles.prof}>Frontend Developer</span>
        <p className={styles.para}>
          I am a skilled and passionate Frontend Web Developer in creating
          visually appealing <br />
          and user friendly websites.
        </p>
      </div>
      <img src={profile} alt="profile" className={styles.bgImg} />
    </section>
  );
}
