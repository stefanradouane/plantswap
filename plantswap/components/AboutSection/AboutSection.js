import styles from "./aboutsection.module.scss";
import Image from "next/image";
import Title from "@/../components/Title/Title";
import Text from "@/../components/Text/Text";
import Button from "@/../components/Button/Button";
import { forwardRef } from "react";


const AboutSection = forwardRef(( { imageSrc, altText, text, title, buttonText, style, reverse, index }, ref) => {

  const textColClassName = reverse
  ? `${styles.aboutsection__textcol} ${styles.order2}`
  : `${styles.aboutsection__textcol} ${styles.order1}`;

  const imgColClassName = reverse
  ? `${styles.aboutsection__imgcol} ${styles.order1}`
  : `${styles.aboutsection__imgcol} ${styles.order2}`;

  return (
        <section className={`${styles.aboutsection__section} ${styles.section}`} style={style} ref={ref} data-index={index}>
            <div className={textColClassName}>
                    <Title title="h1">
                    {title}
                    </Title>
                    <Text>
                    {text}
                    </Text>
                    <Button>{buttonText}</Button>
            </div>
            <div className={imgColClassName}>
                <Image
                    src={imageSrc}
                    alt={altText}
                    className={styles.aboutsection__image}
                    width={250}
                    height={250}
                    />
            </div>
            </section>
  );
});

export default AboutSection;