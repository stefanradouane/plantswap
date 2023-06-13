import Image from "next/image";
import Title from "../../../../components/Title/Title.js";
import Header from "../../../../components/Header/Header.js";
import Layout from "../../../../components/Layout/Base.js";
import { getDictionary } from "../../../../get-dictionary.js";
import dataset from "../swap/data.json";
import PlantSwitcher from "../../../../components/Switcher/Switcher.js";
import SwapFlow from "../../../../components/SwapFlow/SwapFlow.js";

// console.log(dataset);

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <Layout locale={params.lang} dictionary={dictionary} noFooter={true}>
      <main>
        {/* <Title title={"h1"}>Hier komt een overzicht van alle planten</Title> */}
        <SwapFlow
          data={dataset.data}
          dictionary={dictionary}
          locale={params.lang}
        />
        {/* <PlantSwitcher myPlant={""} data={dataset.data} /> */}
      </main>
    </Layout>
  );
}
