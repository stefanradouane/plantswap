import styles from "./page.module.scss";
import Title from "../../components/Title/Title";
import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";
import Cta from "../../components/Cta/Cta";

// Maak het fancy :)
export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <Title title={"h1"}>Plant Identificeren.</Title>
        <Text>Meer content over planten.</Text>
        <Cta href="/planten" role="secondary">
          Bekijk alle planten
        </Cta>
        <Cta href="/swap" role="primary">
          Swap een plant
        </Cta>
      </main>
    </>
  );
}
