"use client";

import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./switcher.module.scss";
// import dataset from "../../src/app/[lang]/swap/data.json"
// ../swap/data.json";
import dummydata from "./plantdata.json";
import Button from "../Button/Button";
import { useState } from "react";
import SwitcherCard from "../SwitcherCard/SwitcherCard";
import SwitchCollection from "../SwitchCollection/SwitchCollection";

const Svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className={styles["plantswitcher__footer-card-svg"]}
    viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="m7 20l-5-5l5-5l1.4 1.425L5.825 14H13v2H5.825L8.4 18.575L7 20Zm10-6l-1.4-1.425L18.175 10H11V8h7.175L15.6 5.425L17 4l5 5l-5 5Z"
    />
  </svg>
);

const Switcher = ({ flowdata, myPlant, data }) => {
  const [chosenPlant, setChosenPlant] = useState(undefined);
  const { flowData, setFlowData } = flowdata;
  // console.log(flowdata.flowData);
  const count = data.results.length;
  const usedData = dummydata.stekjes;
  const myplant = {
    naam: "Monstera",
    latin: "Monstera deliciosa",
    fotos: [
      {
        url: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      },
    ],
  };

  return (
    <section className={styles.plantswitcher}>
      <SwitchCollection
        styles={styles}
        collection={usedData}
        setChosenPlant={setFlowData}
      />

      <footer className={styles.plantswitcher__footer}>
        <FooterCard myplant={myplant} type={"old"} />
        <FooterCard myplant={flowData.chosenplant} type={"new"} />

        <Button
          className={styles["plantswitcher__footer-cta"]}
          disabled={!flowData.chosenplant.naam}>
          Plant omruilen
        </Button>
      </footer>
    </section>
  );
};

const FooterCard = ({ myplant, type }) => {
  return (
    <section className={styles[`plantswitcher__footer-card-${type}`]}>
      {myplant && myplant.fotos ? (
        <img
          src={myplant?.fotos[0]?.url}
          width={48}
          className={styles["plantswitcher__footer-card-img"]}
        />
      ) : (
        <div
          className={`${styles["plantswitcher__footer-card-img"]} ${styles["plantswitcher__footer-card-img--none"]}`}></div>
      )}

      <Title
        title={"h3"}
        modifier={"card-size"}
        className={styles["plantswitcher__footer-card-title"]}>
        {myplant?.naam ? myplant.naam : "Groene vriend"}
      </Title>
      <Text
        modifier={"small"}
        className={styles["plantswitcher__footer-card-text"]}>
        {myplant?.latin ? myplant.latin : "Kies een plant om te ruilen"}
      </Text>
      {type === "old" && <Svg />}
    </section>
  );
};

export default Switcher;
