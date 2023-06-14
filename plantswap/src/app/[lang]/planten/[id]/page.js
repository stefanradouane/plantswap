import Detailpage from "../../../../../components/Detailpage/Detailpage.js";
import Layout from "../../../../../components/Layout/Base.js";
import { getDictionary } from "../../../../../get-dictionary.js";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <Layout dictionary={dictionary} locale={params.lang}>
      <Detailpage dictionary={dictionary} />
    </Layout>
  );
}