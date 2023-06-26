"use client";

import styles from "./swapflow.module.scss";

import { useEffect, useState } from "react";
import Switcher from "../Switcher/Switcher";
import Title from "../Title/Title";
import Text from "../Text/Text";
import SwapFlowReturn from "../SwapFlowReturn/SwapFlowReturn";
import Uploader from "../Uploader/Uploader";
import useStorage from "../../utils/useStorage";
import Results from "../Results/Results";
import Form from "../Forms/Form";
import Button from "../Button/Button";
// import UserForm from "../Forms/UserForm";

const flowdata = {
  apidata: {},
  chosenplant: {},
  myplant: {},
  plant: {},
  plantinfo: {},
  step: 1,
  swaptype: "swap",
};

const SwapFlow = ({ formData, dictionary, locale }) => {
  const { getItem } = useStorage();
  const [flowData, setFlowData] = useState(flowdata);
  const totalSteps = 6;

  useEffect(() => {
    console.log("render");
    setFlowData(
      getItem("flowData") ? JSON.parse(getItem("flowData")) : flowData
    );
  }, []);

  useEffect(() => {
    sessionStorage.setItem("flowData", JSON.stringify(flowData));
  }, [flowData]);

  return (
    <section className={styles.swapflow}>
      <SwapFlowReturn
        className={styles.swapflow__return}
        flowData={flowData}
        setFlowData={setFlowData}
        totalSteps={totalSteps}
      />
      {/* <Header /> */}
      <Title
        title={"h1"}
        className={styles.swapflow__title}
        modifier={"gentle-appear"}>
        {dictionary.swapflow.steptitle[`step-${flowData.step}`]}
      </Title>
      <Text className={styles.swapflow__surtitle} modifier={["italic"]}>
        Plant ruilen
      </Text>
      <Text modifier={"small"} className={styles.swapflow__description}>
        {dictionary.swapflow.stepdescription[`step-${flowData.step}`]}
      </Text>
      <FlowBase />
    </section>
  );

  function FlowBase() {
    const data = {
      flowdata: { flowData, setFlowData },
      locale,
      dictionary,
    };
    switch (flowData.step) {
      case 1:
        return <Uploader data={data} />; // identifier
      case 2:
        return (
          <Results
            mydata={data}
            flowdata={{ flowData, setFlowData }}
            data={flowData.apidata}
          />
        );
      case 3:
        return <Form formData={formData} data={data} form={"plantforms"} />;
      case 4:
        if (flowData.swaptype === "donate")
          return <Form formData={formData} data={data} form={"userForms"} />;

        return <Switcher flowdata={{ flowData, setFlowData }} data={data} />;
      case 5:
        if (flowData.swaptype === "donate")
          return (
            <h1>
              Bedankt voor het invullen van het formulier, controleer nu de
              gegevens
            </h1>
          );

        return <Form formData={formData} data={data} form={"userForms"} />;
      default:
        return (
          <h1>
            Bedankt voor het invullen van het formulier, controleer nu de
            gegevens
          </h1>
        );
    }
  }
};

export default SwapFlow;
