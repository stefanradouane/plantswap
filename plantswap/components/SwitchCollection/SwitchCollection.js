import styles from "./switchcollection.module.scss";
import SwitcherCard from "../SwitcherCard/SwitcherCard";
import Text from "../Text/Text";
import Title from "../Title/Title";

const SwitchCollection = ({ collection, flowData, setFlowData }) => {
  return (
    <section className={styles["switchcollection-base"]}>
      <Title title={"h2"}>Collectie</Title>
      <Text> {collection.length} ruil mogelijkheden</Text>

      <section className={styles.switchcollection}>
        {collection.map((plant, i) => (
          <SwitcherCard
            key={i}
            plant={plant}
            flowData={flowData}
            setFlowData={setFlowData}
          />
        ))}
      </section>
    </section>
  );
};

export default SwitchCollection;
