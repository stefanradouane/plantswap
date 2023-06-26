import Image from "next/image";
import Title from "../Title/Title";
import styles from "./results.module.scss";
import Link from "next/link";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Rank from "./Rank";
import ucFirst from "../../utils/ucFirst";
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
          flowData={flowdata.flowData}
          setFlowData={flowdata.setFlowData}
          dictionary={dictionary}
          result={result}
          bestQuess={i <= 2}
          position={i + 1}
          totolResults={data.results.length}
          // className={`${styles.result} ${getClassByIndex(i)}`}
        />
      ))}
    </section>
  );
};

export const Result = ({
  bestQuess,
  position,
  result,
  dictionary,
  flowData,
  setFlowData,
  totolResults,
}) => {
  console.log(position);
  // const { flowData, setFlowData } = mydata.flowdata;
  // console.log(mydata.flowdata.setFlowData);
  return (
    <>
      <section
        data-position={position}
        className={`${styles.result} ${
          bestQuess && styles[`result--best-quess`]
        }`}>
        <Title className={styles.result__name} title={"h4"}>
          {result.species.commonNames[0]}
        </Title>
        <Title className={styles.result__latin} title={"h5"}>
          {result.species.scientificNameWithoutAuthor}
        </Title>

        <Rank
          bestQuess={bestQuess}
          rank={position}
          score={Number.parseFloat(result.score * 100).toFixed(1) + "%"}
        />

        <Image
          src={result.images[0].url.m}
          alt="Foto van de plant"
          className={styles.result__img}
          height={200}
          width={200}
        />

        <Button
          rotateIcon={90}
          className={styles.result__btn}
          modifier={["small", flowData.myplant === result ? "chosen" : "fresh"]}
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
          {flowData.myplant === result
            ? dictionary.swapflow.myplant.button.recent
            : dictionary.swapflow.myplant.button.new}
        </Button>
      </section>
      {position === 3 && (
        <Text className={styles.result__remaining} title={"p"}>
          <span>
            {dictionary.swapflow.myplant.extra} {totolResults - 3}
          </span>{" "}
          {dictionary.plantsNickName}.
        </Text>
      )}
    </>
  );
};

export default Results;
