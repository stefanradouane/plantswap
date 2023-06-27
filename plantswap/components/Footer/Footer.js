import Title from "../Title/Title";
import styles from "./footer.module.scss";

const Footer = ({ locale, dictionary }) => {
  return (
    <footer className={styles.footer}>
      <Title title={"h1"}>Footer</Title>
      <div></div>
    </footer>
  );
};

export default Footer;
