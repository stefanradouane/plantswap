import styles from "../../page.module.scss";
import Detailpage from "../../../../../components/Detailpage/Detailpage.js";
import Layout from "../../../../../components/Layout/Base.js";
import { getDictionary } from "../../../../../get-dictionary.js";
import { getData } from "../../../../../utils/getFormData.js";
import Hero from "../../../../../components/Hero/Hero.js";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  const data = await getData(params.lang);
  const plant = data.plants.find((plant) => plant.id === params.id);

  return (
    <Layout dictionary={dictionary} locale={params.lang}>
      {plant && (
        <Detailpage
          dictionary={dictionary}
          plant={plant}
          form={data.plantforms}
        />
      )}
      {!plant && (
        <main className={styles.page}>
          <Hero
            dictionary={dictionary.errorplant}
            lang={params.lang}
            image={"/images/netwerk.png"}
            linkTo={`/${params.lang}/`}
          />
        </main>
      )}
    </Layout>
  );
}
