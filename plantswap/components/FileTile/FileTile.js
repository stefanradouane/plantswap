"use client";

import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./filetile.module.scss";

const FileTile = ({ image, onDelete }) => {
  console.log(image);
  if (image) {
    return (
      <section className={styles.filetile}>
        <img src="./testplant.jpg" className={styles.filetile__preview} />
        <Title title={"h4"} className={styles.filetile__name}>
          Screenshot_123.png
        </Title>
        <Text modifier={"small"} className={styles.filetile__size}>
          100 KB
        </Text>
      </section>
    );
  }
  return <></>;
};

export default FileTile;
