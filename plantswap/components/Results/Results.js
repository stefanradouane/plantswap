import Title from "../Title/Title";
import styles from "./results.module.scss";
import ucFirst from "../../utils/ucFirst";
import PlantCard from "../PlantCard/PlantCard";

const Results = ({ mydata, data }) => {
  const { flowdata, dictionary } = mydata;
  if (!data)
    return <Title title={"h2"}>{dictionary.swapflow.myplant.error}</Title>;
  return (
    <section className={styles.results}>
      <Title title={"h2"}>{dictionary.swapflow.myplant.title}</Title>
      <Title className={styles.results__count} title={"h3"} modifier={"small"}>
        {data.results.length} {ucFirst(dictionary.plantsNickName)}
      </Title>

      {data.results.map((result, i) => (
        <Result
          key={i}
          plant={{
            plantName: result.species.commonNames[0],
            latinName: result.species.scientificNameWithoutAuthor,
            image: result.images[0].url.m,
            score: result.score,
            position: i + 1,
            topPosition: i <= 2,
            totalResults: data.results.length,
            recent: flowdata.flowData.myplant.gbif.id === result.gbif.id,
          }}
          data={mydata}
          result={result}
        />
      ))}
    </section>
  );
};

export const Result = ({ data, plant, result }) => {
  const {
    flowdata: { flowData, setFlowData },
    dictionary,
  } = data;

  return <PlantCard data={data} plant={plant} result={result} />;
};

export default Results;
