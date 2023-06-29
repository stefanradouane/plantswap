"use client";

import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./switcher.module.scss";
import dummydata from "./plantdata.json";
import Button from "../Button/Button";
import { useState } from "react";
import SwitcherCard from "../SwitcherCard/SwitcherCard";
import SwitchCollection from "../SwitchCollection/SwitchCollection";
import Image from "next/image";
import Icon from "../Icon/Icon";

const Svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="m7 20l-5-5l5-5l1.4 1.425L5.825 14H13v2H5.825L8.4 18.575L7 20Zm10-6l-1.4-1.425L18.175 10H11V8h7.175L15.6 5.425L17 4l5 5l-5 5Z"
    />
  </svg>
);

const Switcher = ({ formData, flowdata, myPlant, data }) => {
  const { flowData, setFlowData } = flowdata;
  const usedData = formData;
  const myplant = {
    ...flowData.plantforms,
    image: flowData.plant.url,
  };

  return (
    <section className={styles.plantswitcher}>
      <SwitchCollection
        styles={styles}
        collection={usedData.plants}
        flowData={flowData}
        setFlowData={setFlowData}
      />

      <footer className={styles.plantswitcher__footer}>
        <FooterCard myplant={myplant} type={"old"} />
        <FooterCard myplant={flowData.chosenplant} type={"new"} />

        <Button
          rotateIcon={90}
          next={() => {
            setFlowData((prev) => {
              return {
                ...prev,
                step: prev.step + 1,
              };
            });
          }}
          className={styles["plantswitcher__footer-cta"]}
          disabled={!flowData.chosenplant.plantName}>
          Plant selecteren
        </Button>
      </footer>
    </section>
  );
};

const FooterCard = ({ myplant, type }) => {
  return (
    <section
      className={
        styles[`plantswitcher__footer-card`] +
        " " +
        styles[`plantswitcher__footer-card--${type}`]
      }>
      {myplant && myplant.image ? (
        <Image
          src={myplant.image}
          width={64}
          height={64}
          className={styles["plantswitcher__footer-card-img"]}
          alt={myplant.plantName}
          priority={true}
        />
      ) : (
        <div
          className={`${styles["plantswitcher__footer-card-img"]} ${styles["plantswitcher__footer-card-img--none"]}`}></div>
      )}

      <Title
        title={"h3"}
        modifier={"card-size"}
        className={styles["plantswitcher__footer-card-title"]}>
        {myplant?.plantName ? myplant.plantName : "Groene vriend"}
      </Title>
      <Text
        modifier={"small"}
        className={styles["plantswitcher__footer-card-text"]}>
        {myplant?.latinName ? myplant.latinName : "Kies een plant om te ruilen"}
      </Text>
      {type === "old" && (
        <div className={styles["plantswitcher__footer-card-icon"]}>
          <Icon iconName={"switcher"} />
        </div>
      )}
    </section>
  );
};

export default Switcher;
