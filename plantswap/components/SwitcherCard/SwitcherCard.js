import Image from "next/image";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./switchercard.module.scss";

/** @todo Put everything inside the label. */
const SwitcherCard = ({ plant, flowData, setFlowData }) => {
  const checked = flowData.chosenplant.naam === plant.naam;
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
      <Image
        className={styles.switchercard__image}
        src={plant.fotos[0].url}
        alt={plant.naam}
        width={100}
        height={100}
      />
      <Title
        title={"h3"}
        modifier={"card-size"}
        className={styles["switchercard__card-name"]}>
        {plant.naam.split("'")[1] ? plant.naam.split("'")[1] : plant.naam}
      </Title>
      <Text
        modifier={"small"}
        className={styles["switchercard__card-name-latin"]}>
        {plant.naam.split("'")[1] ? plant.naam.split("'")[0] : ""}
      </Text>

      <label className={styles.switchercard__selector}>
        <input
          type="radio"
          name="plant"
          value={plant.naam}
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
