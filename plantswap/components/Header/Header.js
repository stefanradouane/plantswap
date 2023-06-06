import Image from "next/image";
import styles from "./header.module.scss";
import Nav from "../Nav/Nav";

const Header = ({ locale }) => {
  return (
    <header className={styles.header}>
      <a href="/">
        <Image
          src="/logo.webp"
          alt="logo plantswap"
          className={styles.header__logo}
          width={256}
          height={103}
          priority
        />
      </a>
      <Nav locale={locale} />
    </header>
  );
};

export default Header;
