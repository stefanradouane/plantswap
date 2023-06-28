import Image from "next/image";
import styles from "./hero.module.scss";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src={"/images/hero.png"}
        alt={"Hero image"}
        className={styles.hero__image}
        width={500}
        height={500}
      />
    </section>
  );
};

export default Hero;
