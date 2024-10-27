import { Link } from "react-scroll";
import styles from "./contact.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SendIcon from "@mui/icons-material/Send";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { LinkedIn } from "@mui/icons-material";
import Decor from "../decorations/Decor";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_tglazpu", "template_4djo97t", form.current, {
        publicKey: "-Gpf1G7CRGqrT9LF5",
      })
      .then(
        () => {
          console.log("Success!");
          alert("Message send successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("Failed...", error.text);
          alert("Could not send a message.");
        }
      );
  };
  return (
    <section id="contact" className={styles.contactContainer}>
      <Decor height={"4rem"} width={"6rem"} bg={"#C4D2B4"} rotate={"10deg"} left={0} />
      <Decor height={"4rem"} width={"6rem"} bg={"#83D2B4"} rotate={"-20deg"} right={"15rem"} top={"4rem"} />
      <Decor height={"30rem"} width={"25rem"} bg={"#83D2B4"} rotate={"30deg"} top={"10rem"} />
      <Decor height={"6rem"} width={"4rem"} bg={"#83D2B4"} rotate={"18deg"} right={'20rem'} bottom={"3rem"} />
      <div className={styles.textContainer}>
        <h2>Contact</h2>
        <p>Please fill out the form below to discuss any work opportunities.</p>
      </div>
      <form ref={form} className={styles.contactForm} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          className={styles.InpName}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="user_email"
          className={styles.email}
          placeholder="Your email"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className={styles.msg}
          required
        ></textarea>
        <div className={styles.btnContainer}>
          <button type="submit" value="Send" className={styles.submit}>
            <SendIcon /> Submit
          </button>
        </div>
        <div className={styles.socialContainer}>
          <a className={styles.links} href="https://github.com/GemsonR">
            <GitHubIcon sx={{ fontSize: 40 }} />
          </a>

          <a
            className={styles.links}
            href="https://www.linkedin.com/in/gemson-radjail-259246334/"
          >
            <LinkedIn sx={{ fontSize: 40 }} />
          </a>

          <a
            className={styles.links}
            href="https://www.facebook.com/people/Gemson-Radjail/pfbid02zRuXuNYb6iSaJRttS8CiJPFivYi6jGfRmqJNZhS59Pvqh7Fqf4HdF36qBqzMSyQXl/"
          >
            <FacebookOutlinedIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
      </form>
    </section>
  );
}
