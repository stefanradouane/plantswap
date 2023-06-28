import Image from "next/image";
import Rank from "../Results/Rank";
import Title from "../Title/Title";

import styles from "../Results/results.module.scss";
import Text from "../Text/Text";
import Button from "../Button/Button";

const PlantCard = ({ data, plant, result }) => {
  const {
    flowdata: { setFlowData },
    dictionary,
  } = data;

  const resultStyle = () => {
    if (!plant.position && !plant.score) {
      return styles["result--overview"];
    }
    return styles["result--position"];
  };

  return (
    <>
      <section className={styles.result + " " + resultStyle()}>
        <Title className={styles.result__name} title={"h4"}>
          {plant.plantName}
        </Title>
        <Title className={styles.result__latin} title={"h5"}>
          {plant.latinName}
        </Title>

        {plant.image && (
          <Image
            className={styles.result__img}
            src={plant.image}
            alt="Foto van de plant"
            height={400}
            width={400}
            priority={true}
          />
        )}
        {result && (
          <Rank
            topPosition={plant.topPosition}
            rank={plant.position}
            score={Number.parseFloat(plant.score * 100).toFixed(1) + "%"}
          />
        )}

        {result && (
          <Button
            rotateIcon={90}
            className={styles.result__btn}
            modifier={["small", plant.recent ? "chosen" : "fresh"]}
            next={() => {
              setFlowData((prev) => {
                if (!plant.recent) {
                  return {
                    ...prev,
                    plantforms: {},
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
        <CardLeftOver plant={plant} dictionary={dictionary} />
      )}
    </>
  );
};

export default PlantCard;

const CardLeftOver = ({ dictionary, plant }) => (
  <Text className={styles.result__remaining}>
    <span>
      {dictionary.swapflow.myplant.extra} {plant.totalResults - 3}
    </span>{" "}
    {dictionary.plantsNickName}.
  </Text>
);
