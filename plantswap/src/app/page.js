import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";
import Uploader from "../../components/Uploader/Uploader";

export default function Home() {
  return (
    <>
      <Header />
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
