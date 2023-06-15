"use client";

import { useRef, useState } from "react";
import Button from "../Button/Button";
import FileTile from "../FileTile/FileTile";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./uploader.module.scss";
import Loader from "../Loader/Loader";
import isJSON from "../../utils/isJSON";
import useXML from "./useXML";

/**
 * Possible resource to use for this component:
 * @link https://www.section.io/engineering-education/nextjs-dnd-file-upload/
 */
const { newXML } = useXML();
const xml = newXML();

const Uploader = ({ flowdata, locale }) => {
  const [uploadedValue, setUploadedValue] = useState(100);
  const { flowData, setFlowData } = flowdata;
  const API_URL = "/api/identify";

  const fetchData = (e) => {
    if (e?.target?.files && e?.target?.files[0]) {
      var formdata = new FormData();
      let filereader = new FileReader();
      xml.open("POST", API_URL, true);
      const file = e.target.files[0];
      formdata.append("image", file);
      formdata.append("lang", locale);
      xml.upload.addEventListener("progress", (event) => {
        var percent = (event.loaded / event.total) * 100;
        setUploadedValue(Math.round(percent));
      });

      filereader.addEventListener("load", (event) => {
        const result = event.target.result;

        const newFile = {
          url: result,
          name: file.name,
          type: file.type,
          size: file.size,
        };

        if (file.size > 10000000) {
          setFlowData((prev) => {
            return {
              ...prev,
              plant: {
                error: {
                  type: "File error",
                  description: "Bestand te groot",
                },
              },
            };
          });

          xml.abort();
        } else {
          setFlowData((prev) => {
            return { ...prev, plant: newFile, apidata: { loading: true } };
          });
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

  function abortFetch() {
    xml.abort();

    setFlowData((prev) => {
      return { ...prev, plant: {}, apidata: {} };
    });
  }

  return (
    <section
      className={styles.uploader}
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <label className={styles.uploader__holder}>
        <Icon iconName="plus" />
        <Title title={"h3"}>Tik om een foto te uploaden of te maken</Title>
        <Text modifier={"small"}>Maximale bestandsgrootte: 10MB</Text>
        <input
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
        disabled={!flowData.apidata?.query}
        next={(e) => {
          setFlowData((prev) => {
            return { ...prev, step: 2 };
          });
        }}>
        {!flowData.apidata?.loading ? (
          "Identificeer mijn plant"
        ) : (
          <>
            Bezig met identificeren
            <Loader disabled={!flowData.apidata?.loading} />
          </>
        )}
      </Button>
      <FileTile
        data={flowData}
        uploadedValue={uploadedValue}
        onDelete={abortFetch}
      />
    </section>
  );
};

export default Uploader;
