import Image from "next/image";
import Title from "../../../../../components/Title/Title.js";
import Detailpage from "../../../../../components/Detailpage/Detailpage.js";
// import DOMParser from "dom-parser";

import { graphql, buildSchema } from "graphql";

export default async function Home({ params }) {
  const revalidateTime = 60; // time in seconds
  const endpoint = "https://trefle.io";
  const apiKey = process.env.NEXT_PUBLIC_API_KEY2;

  var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

  var rootValue = { hello: () => "Hello world!" };

  var source = "{ hello }";

  graphql({ schema, source, rootValue }).then((response) => {
    console.log(response);
  });

  const query = `query MyQuery {
    plants(locales: nl) {
      id
      name
    }
  }`;

  const endpointHygraph = `https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clij3imw706zl01uk9hgh5uw6/master?query=${query}`;
  // const endpointHygraph = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clij3imw706zl01uk9hgh5uw6/master?query=${query}`;
  const data = () => {
    return fetch(endpointHygraph, {
      headers: {
        Autorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ3ZWJhcHAiOnRydWUsInZlcnNpb24iOjQsImlhdCI6MTY4NTk4NDM2NSwiZXhwIjoxNjg2MDI3NTY1LCJhdWQiOlsiaHR0cHM6Ly9hcGktZXUtY2VudHJhbC0xLXNoYXJlZC1ldWMxLTAyLmh5Z3JhcGguY29tL3YyL2NsaWozaW13NzA2emwwMXVrOWhnaDV1dzYvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiY2NmYjIxOWUtNTY0YS00MDA1LTgwZGMtODJlNjRjMmEwOGFkIiwianRpIjoiY2xpajNoYnU2MDZqOTAxdDY3cmEzZnFraCJ9.5UA1cnfEumcltU1fZROgJnKJnePW5Uar9CnrId0CKrymF_YiGgTI87auVhdpz-M91Qeno157osXD09Dm2-8xs-jSL3qDvNSztIAiGQWRUMwaQzgjyFCfGrtajJsuex_nIXinvApJaQQNs50FnvHTJsQaUnLupjE5_8NIBJH1zQqLzzLa3biqmSoaG7e9L0Ph_mqhbq8QPnMHxIKYGWf07nwav9y2CmJgtiVnFsri6qoPaIJ5xqprvcR--cfru_vGRE5mSY6J7W1-fMBpL-d2pyHfzSTlUeRbUn7Ste6RTYeB30NCtCHBL2qBJmosY86mmDP0dsuXQEk-BbyM0aPzh3HAWVm0Snt2bXIJ8KizXxEasK7PLgN15yH_Qqftaw8wnlaC8lbGaevj-fEru5YZvdw7RsKThYotU8NdY-mSD8oUYheN9aO0BoC0z0hJjQZWhiSjRtz0Y6ArlUXyEYHkdrgAMIzCyhGVt8yxESj3uVrSdS7Hteq6Zz7sinWja7jJILeBfppJoa2ZqvXkx4RsLrj-CZkNOzdyFkDbTaf_M1EfrGeGPRvFLZA0i3_86YA1ByudZTTb_B5DuG3W6C8IqrCsKlcFwgyd8DGMDvCFm6k8M5pq_schfs7RL8VVyzZhAZB1hAezQ6Msat6DupbB0xP1Uhl8nqquG2p-1fcSVz4`,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  // query()
  console.log((await data()).data);

  const fetchedData = await fetch(
    `${endpoint}/api/v1/plants/search?token=${apiKey}&q=${params.id}`,
    {
      next: { revalidate: revalidateTime },
    }
  ).then((res) => res.json());

  console.log(apiKey);

  // console.log(await fetchedData);

  const items = await fetch(
    `${endpoint}${await fetchedData.data[0]?.links?.plant}?token=${apiKey}`,
    {
      next: { revalidate: revalidateTime },
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      return { err };
    });

  if (items.err)
    // Error page
    return <Title title="h1">Planten soort {params.id} niet gevonden</Title>;

  // console.log(items);
  // Detail page
  return <Detailpage data={items} />;
  return <Title title="h1">Hier komt de {params.id}</Title>;
}
