import Image from "next/image";
import Title from "../Title/Title";
import styles from "./results.module.scss";
import Button from "../Button/Button";
import Link from "next/link";
import Text from "../Text/Text";
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

      {/* ({parseFloat((sum * 100 / 100 )/ 1000000).toFixed(2)} */}
      {/* <p className={styles.result__grade}>Score {result.score * 100 / 100 )}</p> */}
      {/* <p className={styles.result__grade}>Score {result.score * 100}</p> */}

      <Text className={styles.result__grade} title={"p"}>{result.score * 100}</Text>
      <Title className={styles.result__latin} title={"h3"}>{result.species.scientificName}</Title> 
      <Title className={styles.result__name} title={"h3"}>{result.species.commonNames[0]}</Title> 

      {/* <h2 className={styles.result__latin}>{result.species.scientificName}</h2>
      <h3 className={styles.result__name}>{result.species.commonNames[0]}</h3> */}
      
      <Image
        src={result.images[0].url.m}
        alt="logo plantswap"
        className={styles.result__img}
        height={200}
        width={200}
      />

      <Link
        className={styles.result__btn}
        href={`/planten/${result.species.scientificNameWithoutAuthor
          .replaceAll(" ", "-")
          .toLowerCase()}`}>
        Meld aan
      </Link>

      {/* <Button></Button> */}
    </section>
  );
};

export default Results;
