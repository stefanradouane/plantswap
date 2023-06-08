import Image from "next/image";
import Title from "../../../../components/Title/Title.js";
import Header from "../../../../components/Header/Header.js";
import Layout from "../../../../components/Layout/Base.js";
import { getDictionary } from "../../../../get-dictionary.js";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <Layout locale={params.lang} dictionary={dictionary}>
      <main>
        <Title title={"h1"}>Hier komt een overzicht van alle planten</Title>
      </main>
    </Layout>
  );
}
