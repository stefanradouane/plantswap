import Title from "../Title/Title";
import styles from "./footer.module.scss";
import Contact from "../contact/Contact";

const Footer = ({ locale, dictionary }) => {
  return (
    <footer className={styles.footer}>
      <Contact />
    </footer>
  );
};

export default Footer;
