"use client";

import { useState } from "react";
import DetailPageHeaderImage from "../DetailpageHeaderImage/DetailpageHeaderImage";

import Title from "../Title/Title";
import Text from "../Text/Text";

import styles from "../DetailpageHeader/detailpageheader.module.scss";

const DetailpageHeader = ({ plant }) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleColorExtracted = (color) => {
    setBackgroundColor(color);
  };

  return (
    <header
      className={styles.detailpageheader}
      style={{ backgroundColor: backgroundColor }}>
      <article className={styles.detailpageheader__content_wrapper}>
        <DetailPageHeaderImage
          plant={plant}
          onColorExtracted={handleColorExtracted}></DetailPageHeaderImage>
        <Title title={"h1"} className={styles.detailpageheader__title}>
          {plant.plantName}
        </Title>
        <Title title={"h2"} className={styles.detailpageheader__subtitle}>
          {plant.latinName}
        </Title>
      </article>
    </header>
  );
};

export default DetailpageHeader;
