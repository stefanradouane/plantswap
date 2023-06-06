import styles from "./cta.module.scss";
import Link from "next/link";

const Cta = ({ href, role, locale, children }) => {
  // console.log(locale);
  return (
    <Link
      href={href}
      className={`${styles.cta} ${styles[`cta--${role}`]}`}
      locale={locale.toString()}>
      {children}
    </Link>
  );
};

export default Cta;
