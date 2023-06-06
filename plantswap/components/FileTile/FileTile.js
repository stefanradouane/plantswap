"use client";

import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./filetile.module.scss";

const FileTile = ({ image, onDelete }) => {
  console.log(image);
  if (image) {
    // const obj = new URL.createObjectURL(image);
    const img = URL.createObjectURL(image);
    // const objectURL = new URL.createObjectURL(image);
    return (
      <section className={styles.filetile}>
        {/* <Image
          src={img}
          className={styles.filetile__preview}
          width={100}
          height={100}
          alt={"your uploaded image"}
        /> */}
        <Title title={"h4"} className={styles.filetile__name}>
          Screenshot_123.png
        </Title>
        <Text modifier={"small"} className={styles.filetile__size}>
          {image.size} bytes
        </Text>
      </section>
    );
  }
  return <></>;
};

export default FileTile;
