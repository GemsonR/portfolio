import styles from "./work.module.css";
import myWork from "./WorkContainer";
import Decor from "../decorations/Decor";

export default function Work() {
  return (
    <section id="portfolio" className={styles.workContainer}>
      <div className={styles.textContainer}>
      <Decor height={"7rem"} width={"5rem"} rotate={"20deg"} bg={"#C4D2B4"} />
        <h2 className={styles.workTitle}>My Portfolio</h2>

        <div className={styles.viewContainer}>
          {myWork.map((work, i) => (
            <div key={work.id} className={styles.imgContainer}>
              <img
                className={styles.imgs}
                src={work.image}
                alt={work.image}
              />
              <a href={work.url} className={styles.view}>
                View
              </a>
              
            </div>
          ))}
           <Decor height={"5rem"} width={"10rem"} rotate={"-20deg"} bg={"#83D2B4"} right={"6rem"} />
        </div>
      </div>
    </section>
  );
}

// https://front-backend-product.onrender.com/
