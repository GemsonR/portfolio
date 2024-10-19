import styles from "./footer.module.css";
export default function Footer() {

    const currentYear = new Date().getFullYear()
    

  return (
    <footer className={styles.footer}>
      <span className={styles.text}>Gemson Radjail, {currentYear}</span>
    </footer>
  );
}
