import Image from "next/image";
import Title from "../../../../../components/Title/Title.js";
import Detailpage from "../../../../../components/Detailpage/Detailpage.js";

import Form from "../../../../../components/Form/Form.js";

import dataset from "../../swap/data.json";

import { graphql, buildSchema } from "graphql";
import Layout from "../../../../../components/Layout/Base.js";
import { getDictionary } from "../../../../../get-dictionary.js";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <Layout dictionary={dictionary} locale={params.lang}>
      <Form data={dataset} />
    </Layout>
  );
}