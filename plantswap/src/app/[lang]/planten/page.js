import Image from "next/image";
import Title from "../../../../components/Title/Title.js";
import Header from "../../../../components/Header/Header.js";

export default function Home({ params }) {
  return (
    <>
      <main>
        <Title title={"h1"}>Hier komt een overzicht van alle planten</Title>
      </main>
    </>
  );
}
