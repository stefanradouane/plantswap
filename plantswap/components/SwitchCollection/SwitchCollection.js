import styles from "./switchcollection.module.scss";
import SwitcherCard from "../SwitcherCard/SwitcherCard";
import Text from "../Text/Text";
import Title from "../Title/Title";

const SwitchCollection = ({ collection, flowData, setFlowData }) => {
  const collectionCount = collection.filter((p) => !p.reserved).length;
  return (
    <section className={styles["switchcollection-base"]}>
      <Title title={"h2"}>Collectie</Title>
      <Text> {collectionCount} ruil mogelijkheden</Text>

      <section className={styles.switchcollection}>
        {collection.map((plant, i) => {
          if (!plant.reserved)
            return (
              <SwitcherCard
                key={i}
                plant={plant}
                flowData={flowData}
                setFlowData={setFlowData}
              />
            );
        })}
      </section>
    </section>
  );
};

export default SwitchCollection;
