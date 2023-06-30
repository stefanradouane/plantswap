import styles from "./page.module.scss";
import Title from "@/../components/Title/Title";
import Hero from "@/../components/Hero/Hero";
import { getDictionary } from "@/../get-dictionary";
import Overview from "@/../components/Overview/Overview";
import Layout from "../../../components/Layout/Base";
import { getData } from "../../../utils/getFormData";

export default async function Page({ params }) {
  const dictionary = await getDictionary(params.lang);
  const data = await getData(params.lang);

  return (
    <Layout locale={params.lang} dictionary={dictionary}>
      <main className={styles.page}>
        <Hero
          dictionary={dictionary.homepage}
          lang={params.lang}
          image={"/images/hero-image.png"}
          linkTo={`/${params.lang}/swap`}
        />
        <section className={styles.page__overview} id="overview-heading">
          <Title
            title={"h1"}
            modifier={"gentle-appear"}
            className={styles["page--subTitle"]}>
            {dictionary.homepage.subTitle}
          </Title>
          <Overview formInfo={data.plantforms} data={data.plants} />
        </section>
      </main>
    </Layout>
  );
}
