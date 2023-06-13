import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./switchercard.module.scss";

/** @todo Put everything inside the label. */
const SwitcherCard = ({ plant, setChosenPlant }) => {
  return (
    <div className={styles.switchercard}>
      <img
        className={styles.switchercard__image}
        src={plant.fotos[0].url}
        alt={plant.naam}
        width={100}
      />
      <Title
        title={"h3"}
        modifier={"card-size"}
        className={styles["switchercard__card-name"]}>
        {plant.naam.split("'")[1] ? plant.naam.split("'")[1] : plant.naam}
      </Title>
      <Text
        modifier={"small"}
        className={styles.switchercard["switchercard__card-name-latin"]}>
        {plant.naam.split("'")[1] ? plant.naam.split("'")[0] : ""}
      </Text>

      <label className={styles.switchercard__selector}>
        <input
          type="radio"
          name="plant"
          value={plant.naam}
          onInput={() => {
            setChosenPlant((prev) => {
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
