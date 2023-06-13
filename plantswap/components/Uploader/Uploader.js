"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Button from "../Button/Button";
import FileTile from "../FileTile/FileTile";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./uploader.module.scss";
import Results from "../Results/Results";
import Loader from "../Loader/Loader";
import isJSON from "../../utils/isJSON";

/**
 * Possible resource to use for this component:
 * @link https://www.section.io/engineering-education/nextjs-dnd-file-upload/
 */

const Uploader = ({ flowdata, locale, dummydata }) => {
  const [currentFetch, setCurrentFetch] = useState(undefined);
  const { flowData, setFlowData } = flowdata;
  const [uploadedValue, setUploadedValue] = useState(
    flowData.plant.url ? 100 : 0
  );
  const [data, setData] = useState(dummydata);
  const inputFileRef = useRef(null);
  const API_URL = "/api/identify";

  console.log(uploadedValue);
  const fetchData = (e) => {
    if (e?.target?.files && e?.target?.files[0]) {
      var formdata = new FormData();
      let xml = new XMLHttpRequest();
      let filereader = new FileReader();
      xml.open("POST", API_URL, true);
      const file = e.target.files[0];
      formdata.append("image", file);
      formdata.append("lang", locale);
      xml.upload.addEventListener("progress", progressHandler, false);

      filereader.addEventListener("load", (event) => {
        const result = event.target.result;
        // Do something with result
        const newFile = {
          url: result,
          name: file.name,
          type: file.type,
          size: file.size,
        };

        setFlowData((prev) => {
          return { ...prev, plant: newFile };
        });

        setCurrentFetch((prev) => {
          console.log(prev);
          return xml;
        });
      });

      filereader.addEventListener("progress", (event) => {
        if (event.loaded && event.total) {
          const percent = (event.loaded / event.total) * 100;
          console.log(`Progress: ${Math.round(percent)}`);
          //     setUploadedValue(Math.round(percent));
        }
      });

      filereader.readAsDataURL(file);
      xml.send(formdata);

      xml.onreadystatechange = function (e) {
        if (isJSON(e.target.response) && e.target.readyState === 4) {
          const { data } = isJSON(e.target.response);
          setFlowData((prev) => {
            return { ...prev, apidata: data };
          });
        }
      };
    }
  };

  console.log(currentFetch);

  function abortFetch() {
    currentFetch.abort();

    // if (image && uploadedValue === 100) {
    //   inputFileRef.current.value = "";
    //   e.preventDefault();
    //   setImage(undefined);
    //   setUploadedValue(0);
    //   setData(undefined);
    //   setShowData(false);
    // }
  }

  function progressHandler(event) {
    console.log("progress");
    var percent = (event.loaded / event.total) * 100;
    console.log(percent);
    setUploadedValue(100);
  }
  // if (!flowData.apidata || !showData) {
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
            disabled={flowData.plant?.file?.name}
          />
        </label>
        <Button
          disabled={!flowData.plant.name}
          next={(e) => {
            setFlowData((prev) => {
              return { ...prev, step: 2 };
            });
          }}>
          Identificeer mijn foto{" "}
          <Loader
            disabled={!!flowData.plant.name && flowData.apidata.results}
          />
        </Button>
        <FileTile
          data={flowData}
          uploadedValue={uploadedValue}
          onDelete={abortFetch}
        />
      </div>
    </>
  );
  // }
  //
  // return <Results data={flowData.apidata} />;
};

export default Uploader;
