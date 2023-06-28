import Image from "next/image";
import Title from "../Title/Title";
import styles from "./results.module.scss";
import Link from "next/link";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Rank from "./Rank";
import ucFirst from "../../utils/ucFirst";
import PlantCard from "../PlantCard/PlantCard";
// import dataset from "../Switcher/"
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
          // bestQuess={i <= 2}
          // position={i + 1}
          // totolResults={data.results.length}
          // className={`${styles.result} ${getClassByIndex(i)}`}
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

  console.log(plant);

  const resultStyle = () => {
    if (!plant.position && !plant.score) {
      return styles["result--overview"];
    }
    return styles["result--position"];
  };

  return <PlantCard data={data} plant={plant} result={result} />;

  return (
    <>
      <section
        data-position={plant.position}
        className={styles.result + " " + resultStyle()}>
        <Title className={styles.result__name} title={"h4"}>
          {plant.plantName}
        </Title>
        <Title className={styles.result__latin} title={"h5"}>
          {plant.latinName}
        </Title>

        <Image
          src={plant.fotos[0].url}
          alt="Foto van de plant"
          className={styles.result__img}
          height={200}
          width={200}
        />

        {plant.position && plant.score && (
          <Rank
            topPosition={plant.topPosition}
            rank={plant.position}
            score={Number.parseFloat(plant.score * 100).toFixed(1) + "%"}
          />
        )}

        {plant.position && plant.score && (
          <Button
            rotateIcon={90}
            className={styles.result__btn}
            modifier={["small", plant.recent ? "chosen" : "fresh"]}
            next={() => {
              setFlowData((prev) => {
                if (prev.myplant !== result) {
                  return {
                    ...prev,
                    plantinfo: {},
                    myplant: result,
                    step: prev.step + 1,
                  };
                }

                return {
                  ...prev,
                  myplant: result,
                  step: prev.step + 1,
                };
              });
            }}>
            {plant.recent
              ? dictionary.swapflow.myplant.button.recent
              : dictionary.swapflow.myplant.button.new}
          </Button>
        )}
      </section>

      {plant.position === 3 && (
        <Text className={styles.result__remaining}>
          <span>
            {dictionary.swapflow.myplant.extra} {plant.totolResults - 3}
          </span>{" "}
          {dictionary.plantsNickName}.
        </Text>
      )}
    </>
  );
};

export default Results;
