"use client";

import { useState } from "react";
import Button from "../Button/Button";
import FileTile from "../FileTile/FileTile";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./uploader.module.scss";
import Results from "../Results/Results";

const Uploader = ({ locale, dummydata }) => {
  const [image, setImage] = useState(undefined);
  const [data, setData] = useState(dummydata);
  const API_URL = "/api/identify";

  const fetchPlant = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("lang", locale);

    const res = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    const { data } = await res.json();
    setData(data);
  };

  function uploadImg(e) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
    }
  }

  function handleButton(e) {
    e.preventDefault();
    fetchPlant();
  }

  if (!data) {
    return (
      <>
        <div
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

          <FileTile image={image} />
          <Button disabled={!image} next={handleButton}>
            Start Identificatie
          </Button>
        </div>
      </>
    );
  }

  return <Results data={data} />;
};

export default Uploader;
