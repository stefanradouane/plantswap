import Image from "next/image";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/logo.webp"
        alt="logo plantswap"
        className={styles.header__logo}
        width={256}
        height={103}
        priority
      />
    </header>
  );
};

export default Header;
