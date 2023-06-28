import Layout from "../../../../components/Layout/Base.js";
import { getDictionary } from "../../../../get-dictionary.js";
import dataset from "../swap/data.json";
import SwapFlow from "../../../../components/SwapFlow/SwapFlow.js";
import PlantData from "../../../../components/Switcher/plantdata.json";
import Overview from "../../../../components/Overview/Overview.js";


export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <Layout locale={params.lang} dictionary={dictionary} noFooter={true}>
      <main>
        <h1>{dictionary.planten}</h1>
        <Overview data={PlantData.stekjes} />

        


        {/* <SwapFlow
          data={dataset.data}
          dictionary={dictionary}
          locale={params.lang}
        /> */}
      </main>
    </Layout>
  );
}
