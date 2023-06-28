import Layout from "../../../../components/Layout/Base";
import SwapFlow from "../../../../components/SwapFlow/SwapFlow";
import { getDictionary } from "../../../../get-dictionary";
import { getData } from "../../../../utils/getFormData";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  const formData = await getData(params.lang);
  return (
    <Layout locale={params.lang} dictionary={dictionary} noFooter={true}>
      <main>
        <SwapFlow
          formData={formData}
          dictionary={dictionary}
          locale={params.lang}
        />
      </main>
    </Layout>
  );
}
