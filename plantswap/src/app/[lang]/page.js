import styles from "./page.module.scss";
import Title from "@/../components/Title/Title";
import Header from "@/../components/Header/Header";
import Text from "@/../components/Text/Text";
import Cta from "@/../components/Cta/Cta";
import Hero from "@/../components/Hero/Hero";
import { getDictionary } from "@/../get-dictionary";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Overview from "@/../components/Overview/Overview";
import PlantData from "@/../components/Switcher/plantdata.json";
import Layout from "../../../components/Layout/Base";
import { getData } from "../../../utils/getFormData";

export default async function Page({ params }) {
  let mobile = false;
  const dictionary = await getDictionary(params.lang);
  const data = await getData(params.lang);

  return (
    <Layout locale={params.lang} dictionary={dictionary}>
      <main className={styles.page}>
        <Hero
          dictionary={dictionary.homepage}
          lang={params.lang}
          image={"/images/hero.png"}
          linkTo={`/${params.lang}/swap`}
        />
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
