import Image from "next/image";
import Title from "../Title/Title";
import styles from "./results.module.scss";
import Button from "../Button/Button";
import Link from "next/link";
const Results = ({ data }) => {
  if (!data) return <Title title={"h1"}>Geen groene vrienden gevonden</Title>;

  return (
    <section className={styles.results}>
      <Title title={"h1"}>Resultaten</Title>
      <Title title={"h2"}>{data.results.length} groene vrienden</Title>
      {data.results.map((result, i, arr) => (
        <Result result={result} key={i} />
      ))}
    </section>
  );
};

export const Result = ({ result }) => {
  return (
    <section className={styles.result}>
      <p className={styles.result__grade}>Score {result.score * 100}</p>
      <h1 className={styles.result__latin}>{result.species.scientificName}</h1>
      <h2 className={styles.result__name}>{result.species.commonNames[0]}</h2>
      <img
        src={result.images[0].url.m}
        alt="logo plantswap"
        className={styles.result__img}
      />
      <Link
        className={styles.result__btn}
        href={`/planten/${result.species.scientificNameWithoutAuthor
          .replaceAll(" ", "-")
          .toLowerCase()}`}>
        Dit is mijn plant
      </Link>
    </section>
  );
};

export default Results;
