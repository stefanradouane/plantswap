"use client";

import { useState } from "react";
import Button from "../Button/Button";
import FileTile from "../FileTile/FileTile";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./uploader.module.scss";
import Results from "../Results/Results";

const Uploader = ({ dummydata }) => {
  const [image, setImage] = useState(undefined);
  const [data, setData] = useState(dummydata);
  console.log(data);

  const API_URL = "/api/identify";

  const fetchPlant = async () => {
    console.log("fetching plant");

    const formData = new FormData();
    formData.append("image", image);

    console.log(formData.get("image"));
    const res = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });
    console.log(res);
    const { data } = await res.json();
    console.log("data", data);

    setData(data);
    // setLoading(false)
    // setIsCapturing(false);
  };

  function uploadImg(e) {
    // console.log("uploading image");
    // console.log(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
    }
  }

  // console.log(img);

  function handleButton(e) {
    e.preventDefault();
    // const img = e.target.form[0].files[0];
    // const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    // console.log(apiKey);
    // const baseUrl = "https://my-api.plantnet.org";
    // const testImg =
    //   "https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61vlqixclKL._AC_SX679_.jpg";
    // const base = `${baseUrl}/v2/identify/all?images=${testImg}&include-related-images=true&no-reject=true&lang=nl&type=legacy&api-key=${apiKey}`;
    // fetch(base)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //   });

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
