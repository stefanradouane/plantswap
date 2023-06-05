import styles from "./cta.module.scss";
import Link from "next/link";

const Cta = ({ href, children }) => {
  return (
    <Link href={href} className={styles.cta}>
      {children}
    </Link>
  );
};

export default Cta;
