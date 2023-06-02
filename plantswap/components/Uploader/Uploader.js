"use client";

import { useState } from "react";
import Button from "../Button/Button";
import FileTile from "../FileTile/FileTile";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./uploader.module.scss";
import Results from "../Results/Results";

const Uploader = () => {
  const [img, setImg] = useState(undefined);
  const [data, setData] = useState(undefined);

  function uploadImg(e) {
    // console.log("uploading image");
    // console.log(e.target.files[0]);
    setImg(e.target.files[0]);
  }

  console.log(img);

  function handleButton(e) {
    e.preventDefault();
    // const img = e.target.form[0].files[0];
    const apiKey = "2b10sw1HtIxDhyYPRVOGBQA";
    const baseUrl = "https://my-api.plantnet.org";
    const testImg =
      "https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61vlqixclKL._AC_SX679_.jpg";
    const base = `${baseUrl}/v2/identify/all?images=${testImg}&include-related-images=true&no-reject=true&lang=nl&type=legacy&api-key=${apiKey}`;
    fetch(base)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  if (!data) {
    return (
      <>
        <form
          className={styles.uploader}
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <label className={styles.uploader__holder}>
            <Title title={"h1"}>
              <a
                target="_blank"
                href="https://www.section.io/engineering-education/nextjs-dnd-file-upload/">
                klik hier voor component
              </a>
            </Title>
            <Icon iconName="plus" />
            <Title title={"h3"}>Tik om een foto te uploaden of te maken</Title>
            <Text modifier={"small"}>Maximale bestandsgrootte: 10MB</Text>
            <input
              className={styles.uploader__file}
              type="file"
              accept="image/*"
              capture="camera"
              name="plant"
              onChange={uploadImg}
            />
          </label>

          <FileTile image={img} />
          <Button disabled={!img} next={handleButton}>
            Start Identificatie
          </Button>
        </form>
      </>
    );
  }

  return <Results data={data} />;
};

export default Uploader;
