import Image from "next/image";
import styles from "../page.module.css";
import Title from "../../../components/Title/Title.js";
export default function Home() {
  return (
    <main className={styles.main}>
      <Title title={"h1"}>Hier komt een overzicht van alle planten</Title>
    </main>
  );
}
