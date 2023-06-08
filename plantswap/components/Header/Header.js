import Image from "next/image";
import styles from "./header.module.scss";
import Nav from "../Nav/Nav";
import Link from "next/link";
import { getDictionary } from "@/../get-dictionary";

const Header = async ({ locale, dictionary }) => {
  return (
    <header className={styles.header}>
      <Link href={"/" + locale}>
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
