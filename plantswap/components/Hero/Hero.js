import Image from "next/image";
import styles from "./hero.module.scss";
import image from "../../public/kast.png";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src={image}
        alt={"main image"}
        className={styles.hero__image}
        width={250}
        height={250}
      />

      <div className={styles.hero__test}></div>
    </section>
  );
};

export default Hero;
