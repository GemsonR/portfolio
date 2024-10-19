import styles from "./intro.module.css";
import profile from "../../../images/gemson.png";
import { Link } from "react-scroll";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
export default function Intro() {
  return (
    <section id="intro" className={styles.introContainer}>
      <div className={styles.introText}>
        <span className={styles.hello}>Hello,</span>
        <span>
          I'm <span className={styles.name}>Gemson</span>
        </span>
        <span className={styles.prof}>Website Designer</span>
        <p className={styles.para}>
          I am a skilled and passionate web designer in creating visually
          appealing <br />
          and user friendly websites.
        </p>

      </div>
      <img src={profile} alt="profile" className={styles.bgImg} />
    </section>
  );
}
