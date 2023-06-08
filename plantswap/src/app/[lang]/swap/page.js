import Image from "next/image";
import styles from "./page.module.scss";
import Title from "@/../components/Title/Title";
import Header from "@/../components/Header/Header";
import Text from "@/../components/Text/Text";
import Uploader from "@/../components/Uploader/Uploader";
import Layout from "../../../../components/Layout/Base";
import { getDictionary } from "../../../../get-dictionary";
// import dataset from "./data.json";

// console.log(data);
const dummydata = null;
// process.env.NEXT_PUBLIC_DEVELOPMENT === "false" ? dataset : null;

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <Layout locale={params.lang} dictionary={dictionary}>
      <main className={styles.main}>
        <Title title={"h1"}>
          Plant
          <br />
          Identificeren.
        </Title>
        <Text>
          Maak een foto of upload deze hieronder. Wij helpen je om de naam en
          behoeftes van je plant te vinden.
        </Text>
        <Uploader locale={params.lang} dummydata={dummydata?.data} />
      </main>
    </Layout>
  );
}
