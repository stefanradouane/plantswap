import Image from "next/image";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
      <section className={styles.hero}>
        <Image 
            src={'/Images/Stekjes_kast.png'} 
            className={styles.hero__image} 
            width={250}
            height={250} />

        <div className={styles.hero__test}></div>
      </section>
  );
};

export default Hero;
