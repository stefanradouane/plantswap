import Image from "next/image";
import Title from "../../../../components/Title/Title.js";
import Detailpage from "../../../../components/Detailpage/Detailpage";
// import DOMParser from "dom-parser";

export default async function Home({ params }) {
  const revalidateTime = 60; // time in seconds
  const endpoint = "https://trefle.io";
  const apiKey = "izd4m8lTMj4E7_q2lF5-oVbufNvXqf0AJKxO7nQr400";

  // const data = () => {
  //   fetch("https://www.123planten.nl/verzorging/tips-sansevieria")
  //     .then((res) => res.text())
  //     .then((html) => {
  //       // Convert the HTML string into a document object
  //       var parser = new DOMParser();
  //       var doc = parser.parseFromString(html, "text/html");
  //       console.log(doc);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // data();

  const fetchedData = await fetch(
    `${endpoint}/api/v1/plants/search?token=${apiKey}&q=${params.id}`,
    {
      next: { revalidate: revalidateTime },
    }
  ).then((res) => res.json());

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

  console.log(items);
  // Detail page
  return <Detailpage data={items} />;
  return <Title title="h1">Hier komt de {params.id}</Title>;
}
