"use client";

import { useEffect, useState } from "react";
import Switcher from "../Switcher/Switcher";
import Title from "../Title/Title";
import Text from "../Text/Text";
import SwapFlowReturn from "../SwapFlowReturn/SwapFlowReturn";
import Uploader from "../Uploader/Uploader";
import useStorage from "../../utils/useStorage";
import Results from "../Results/Results";

const flowdata = {
  swaptype: "swap",
  step: 1,
  plant: {},
  apidata: {},
  plantinfo: {},
  chosenplant: {},
  //   // FormData
  //   // API RESPONSE
  //   // USER input
  //   // CHOSEN plant info
};

const SwapFlow = ({ data, dictionary, locale }) => {
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
    <section style={{ padding: "1rem" }}>
      <SwapFlowReturn
        flowData={flowData}
        setFlowData={setFlowData}
        totalSteps={totalSteps}
      />
      <Title title={"h1"} modifier={"gentle-appear"}>
        {dictionary.swapflow.steptitle[`step-${flowData.step}`]}
      </Title>
      <Text>
        {dictionary.swapflow.stepdescription[`step-${flowData.step}`]}
      </Text>
      <FlowBase />
    </section>
  );

  function FlowBase() {
    switch (flowData.step) {
      case 1:
        return (
          <Uploader
            flowdata={{ flowData, setFlowData }}
            locale={locale}
            dummydata={null}
          />
        ); // identifier
      case 2:
        return <Results data={flowData.apidata} />; // dit is mijn plant
      case 3:
        return <h1>Page under construction 🚧</h1>; // formulier
      case 4:
        return <Switcher flowdata={{ flowData, setFlowData }} data={data} />;
      case 5:
        return <Switcher flowdata={{ flowData, setFlowData }} data={data} />;
      case 6:
        return <Switcher flowdata={{ flowData, setFlowData }} data={data} />;
      default:
        return <h1>Step undefined</h1>;
    }
  }
};

export default SwapFlow;
