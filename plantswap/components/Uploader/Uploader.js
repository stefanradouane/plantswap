"use client";

import { useRef, useState } from "react";
import Button from "../Button/Button";
import FileTile from "../FileTile/FileTile";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./uploader.module.scss";
import Results from "../Results/Results";
import Loader from "../Loader/Loader";

/**
 * Possible resource to use for this component:
 * @link https://www.section.io/engineering-education/nextjs-dnd-file-upload/
 */

const Uploader = ({ locale, dummydata }) => {
  const [image, setImage] = useState(undefined);
  const [showData, setShowData] = useState(false);
  const [uploadedValue, setUploadedValue] = useState(0);
  const [data, setData] = useState(dummydata);
  const [currentFetch, setCurrentFetch] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const inputFileRef = useRef(null);
  const API_URL = "/api/identify";
  console.log("render");

  const fetchData = (e, abort) => {
    if (e?.target?.files && e?.target?.files[0] && !abort) {
      let xml = new XMLHttpRequest();
      xml.open("POST", API_URL, true);
      const file = e.target.files[0];
      var formdata = new FormData();
      formdata.append("image", file);
      formdata.append("lang", locale);
      xml.upload.addEventListener("progress", progressHandler, false);

      setCurrentFetch(xml);
      setImage(file);
      setLoading(true);

      xml.send(formdata);
      xml.onreadystatechange = function (e) {
        function isJSON(jsonString) {
          try {
            var o = JSON.parse(jsonString);
            if (o && typeof o === "object") {
              return o;
            }
          } catch (e) {
            console.log("not valid json");
          }

          return false;
        }

        if (isJSON(e.target.response) && e.target.readyState === 4) {
          console.log(isJSON(e.target.response));
          const { data } = isJSON(e.target.response);
          setData(data);
        }
      };
    } else if (abort && currentFetch) {
      currentFetch.abort();

      if (image && uploadedValue === 100) {
        inputFileRef.current.value = "";
        e.preventDefault();
        setImage(undefined);
        setUploadedValue(0);
        setData(undefined);
        setShowData(false);
      }
    }
  };

  function progressHandler(event) {
    var percent = (event.loaded / event.total) * 100;
    setUploadedValue(percent);
  }

  if (!data || !showData) {
    return (
      <>
        <div
          className={styles.uploader}
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <label className={styles.uploader__holder}>
            <Icon iconName="plus" />
            <Title title={"h3"}>Tik om een foto te uploaden of te maken</Title>
            <Text modifier={"small"}>Maximale bestandsgrootte: 10MB</Text>
            <input
              ref={inputFileRef}
              className={styles.uploader__file}
              type="file"
              accept="image/*"
              capture="camera"
              name="plant"
              onChange={fetchData}
              disabled={image}
            />
          </label>
          <Button
            disabled={!data}
            next={(e) => {
              setShowData(true);
            }}>
            Identificeer mijn foto <Loader />
          </Button>
          <FileTile
            image={image}
            uploadedValue={uploadedValue}
            onDelete={image ? fetchData : null}
          />
        </div>
      </>
    );
  }

  return <Results data={data} />;
};

export default Uploader;
