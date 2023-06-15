import DetailpageHeader from "../DetailpageHeader/DetailpageHeader";
import DetailpageArticle from "../DetailpageArticle/DetailpageArticle";

import Accordion from "../Accordion/Accordion";

import styles from "./detailpage.module.scss";

const Detailpage = ({ dictionary }) => {
  const data = {
    title: "Alocasia Zebrina",
    subtitle: "Alocasia Zebrina",
    url: "https://planturl.com",
    difficulty: "Eenvoudig te onderhouden.",
    origin: "Azië",
    description: "Korte beschrijving."
  };
  return (
    <main className={styles.detailpage}>
      <DetailpageHeader data={data}/>

      <section className={styles.detailpage__section}>
        <DetailpageArticle title="Herkomst" content={data.origin} />
        <DetailpageArticle title="Moeilijkheidsgraad" content={data.difficulty} />
        <DetailpageArticle title="Beschrijving" content={data.description} />

        <Accordion title="Voedingsbehoefte" content ="Korte beschrijving."></Accordion>
        <Accordion title="Voedingsbehoefte" content ="Korte beschrijving."></Accordion>
        <Accordion title="Voedingsbehoefte" content ="Korte beschrijving."></Accordion>
        <Accordion title="Voedingsbehoefte" content ="Korte beschrijving."></Accordion>
      </section>
    </main>
  );
};

export default Detailpage;