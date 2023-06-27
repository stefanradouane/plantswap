

import Image from "next/image";
import styles from "./page.module.scss";
import Title from "@/../components/Title/Title";
import Text from "@/../components/Text/Text";
import About from "../../../../components/About/About";
import Button from "../../../../components/Button/Button";
import Layout from "../../../../components/Layout/Base";
import { getDictionary } from "../../../../get-dictionary";
import AboutSection from "../../../../components/AboutSection/AboutSection";
import ScrollIndicator from "@/../components/Scrollindicator/Scrollindicator";
import dataset from "./data.json";


// console.log(data);
const dummydata = dataset;
// process.env.NEXT_PUBLIC_DEVELOPMENT === "false" ? dataset : null;

export default async function Page ({ params }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <Layout locale={params.lang} dictionary={dictionary}>

          <About styles={styles}/>
     
    </Layout>
  );
}
