import styles from "./work.module.css";
import myWork from "./WorkContainer";

export default function Work() {
  return (
    <section id="portfolio" className={styles.workContainer}>
      <div className={styles.textContainer}>
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
        </div>
      </div>
    </section>
  );
}

// https://front-backend-product.onrender.com/
