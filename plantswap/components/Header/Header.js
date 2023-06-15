import Image from "next/image";
import styles from "./header.module.scss";
import Nav from "../Nav/Nav";
import Link from "next/link";

const Header = ({ locale, dictionary }) => {
  return (
    <header className={styles.header}>
      <Link href={"/" + locale} className={styles.header__logo_link}>
        <Image
          src="/images/logo.webp"
          alt="logo plantswap"
          className={styles.header__logo}
          width={256}
          height={103}
          priority
        />
      </Link>
      <Nav locale={locale} dictionary={dictionary} />
    </header>
  );
};

export default Header;
