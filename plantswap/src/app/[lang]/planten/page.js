import Layout from "../../../../components/Layout/Base.js";
import { getDictionary } from "../../../../get-dictionary.js";
// import dataset from "../swap/data.json";
import SwapFlow from "../../../../components/SwapFlow/SwapFlow.js";

import { getData } from "../../../../utils/getFormData.js";
import PlantData from "../../../../components/Switcher/plantdata.json";
import Overview from "../../../../components/Overview/Overview.js";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  const formData = await getData(params.lang);
  // console.log(data[0].formSection[0]);
  // console.log(data.plantforms.formSection);
  return (
    <Layout locale={params.lang} dictionary={dictionary} noFooter={true}>
      <main>
        <h1>{dictionary.planten}</h1> {/* CHANGE to title component */}
        <Overview data={PlantData.stekjes} />
      </main>
    </Layout>
  );
}
