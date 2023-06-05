import styles from "./cta.module.scss";
import Link from "next/link";

const Cta = ({ href, role, children }) => {
  return (
    <Link href={href} className={`${styles.cta} ${styles[`cta--${role}`]}`}>
      {children}
    </Link>
  );
};

export default Cta;
