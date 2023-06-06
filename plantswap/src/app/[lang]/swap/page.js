import Image from "next/image";
import styles from "./page.module.scss";
import Title from "@/../components/Title/Title";
import Header from "@/../components/Header/Header";
import Text from "@/../components/Text/Text";
import Uploader from "@/../components/Uploader/Uploader";

export default function Home({ params }) {
  return (
    <>
      <Header locale={params.lang} />
      <main className={styles.main}>
        <Title title={"h1"}>
          Plant
          <br />
          Identificeren.
        </Title>
        <Text>
          Maak een foto of upload deze hieronder. Wij helpen je om de naam en
          behoeftes van je plant te vinden.
        </Text>
        <Uploader />
      </main>
    </>
  );
}
