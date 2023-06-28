import Image from "next/image";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./switchercard.module.scss";

/** @todo Put everything inside the label. */
const SwitcherCard = ({ plant, flowData, setFlowData }) => {
  const checked = flowData.chosenplant.plantName === plant.plantName;
  return (
    <div
      onClick={() => {
        if (checked) setFlowData({ ...flowData, chosenplant: {} });
        else setFlowData({ ...flowData, chosenplant: plant });
      }}
      className={
        styles.switchercard +
        " " +
        (checked ? styles["switchercard--checked"] : "")
      }>
      {plant.image && (
        <Image
          className={styles.switchercard__image}
          src={plant.image}
          alt={plant.plantName}
          width={100}
          height={100}
          priority={true}
        />
      )}
      <Title
        title={"h3"}
        modifier={"card-size"}
        className={styles["switchercard__name"]}>
        {plant.plantName}
      </Title>
      <Text modifier={"small"} className={styles["switchercard__name-latin"]}>
        {plant.latinName}
      </Text>

      <label className={styles.switchercard__selector}>
        <input
          type="radio"
          name="plant"
          value={plant.plantName}
          checked={checked}
          onChange={() => {
            setFlowData((prev) => {
              return {
                ...prev,
                chosenplant: plant,
              };
            });
          }}
        />
      </label>
    </div>
  );
};

export default SwitcherCard;
