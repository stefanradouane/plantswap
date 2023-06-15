import Image from "next/image";
import Title from "../Title/Title";
import styles from "./results.module.scss";
import Link from "next/link";
import Text from "../Text/Text";
// import dataset from "../Switcher/"
const Results = ({ data }) => {

  if (!data) return <Title title={"h1"}>Geen groene vrienden gevonden</Title>;
  const getClassByIndex = (index) => {
    if (index === 0) {
      return styles.first;
    } else if (index === 1) {
      return styles.second;
    } else if (index === 2) {
      return styles.third;
    } else {
      return '';
    }
  };
  return (
    
    <section className={styles.results}>
      <Title title={"h1"}>Resultaten</Title>
      <Title className={styles.results__resultlength} title={"h2"}>{data.results.length} groene kanidaten gevonden</Title>

{
  data.results.map((result, i) => (
    <>
    <Result
      result={result}
      key={i}
      className={`${styles.result} ${getClassByIndex(i)}`}
    />
    {i === 2 && <Text className={styles.result__remaining} title={"p"}>Resterende {data.results.length - 3} groene kanidaten.</Text>}
    </>
  ))
  
}
    </section>
    
  );
  
};

export const Result = ({ result, className }) => {
  // console.log(className)
  return (
    <section className={`${styles.result} ${className}`}>

      <Text className={styles.result__grade} title={"p"}>{Math.round(result.score * 100)}%</Text>
      <Title className={styles.result__latin} title={"h3"}>{result.species.scientificNameWithoutAuthor}</Title> 
      <Title className={styles.result__name} title={"h3"}>{result.species.commonNames[0]}</Title> 

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
    </section>
  );
};

export default Results;
