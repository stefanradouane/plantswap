import Layout from "../../../../components/Layout/Base.js";
import { getDictionary } from "../../../../get-dictionary.js";
import { getData } from "../../../../utils/getFormData.js";
import Overview from "../../../../components/Overview/Overview.js";
import Title from "../../../../components/Title/Title.js";
import styles from "../page.module.scss";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  const data = await getData(params.lang);

  return (
    <Layout locale={params.lang} dictionary={dictionary} noFooter={true}>
      <main className={styles.page}>
        <Title
          title={"h1"}
          modifier={"gentle-appear"}
          className={styles["page--subTitle"]}>
          {dictionary.homepage.subTitle}
        </Title>
        <Overview formInfo={data.plantforms} data={data.plants} />
      </main>
    </Layout>
  );
}
