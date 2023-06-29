import Image from "next/image";
import styles from "./hero.module.scss";
import Cta from "../Cta/Cta";
import Text from "../Text/Text";
import Title from "../Title/Title";

const Hero = ({ dictionary, lang, image, linkTo }) => {
  return (
    <section className={styles.hero}>
      <aside className={styles.hero__content}>
        <Title
          className={styles["hero__content-title"]}
          title={"h0"}
          modifier={"gentle-appear"}>
          {dictionary.title}
        </Title>
        <article className={styles["hero__content-intro"]}>
          <Text>{dictionary.intro}</Text>
          <Cta href={linkTo} role="primary" locale={lang}>
            {dictionary.button}
          </Cta>
        </article>
      </aside>

      <Image
        src={image}
        alt={"Hero image"}
        className={styles.hero__image}
        width={500}
        height={500}
      />

      {dictionary.sideNote && (
        <Text className={styles.hero__sidenote}>
          {dictionary.sideNote} &#8594;
        </Text>
      )}
    </section>
  );
};

export default Hero;
