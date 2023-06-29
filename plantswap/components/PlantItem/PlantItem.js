import Image from "next/image";
import Link from "next/link";
import Text from "../Text/Text";
import Title from "../Title/Title";
import PlantLabel from "../PlantLabel/label";
import styles from "./item.module.scss";
import ContinentIcon from "../ContinentIcon/ContinentIcon";
import Icon from "../Icon/Icon";

const PlantCard = ({ plant, options }) => {
  const {
    plantName,
    latinName,
    maintenance,
    image,
    origin,
    difficulty,
    poisonous,
    id,
  } = plant;

  return (
    <Link href={`/planten/${id}`} className={styles.plant}>
      <header className={styles.plant__header}>
        {origin && (
          <PlantLabel icon={"skull"}>
            <section>
              <ContinentIcon iconName={origin} />
            </section>
            <Text className={styles["label--text"]} modifier={"x-small"}>
              {
                options
                  .find((option) => option.name === "origin")
                  .optionList.optionName.find((opt) => opt.key === origin)?.name
              }
            </Text>
          </PlantLabel>
        )}
        {poisonous === "yes" && (
          <PlantLabel icon={"skull"}>
            <section>
              <Icon iconName={"skull"} />
            </section>
          </PlantLabel>
        )}
        <PlantLabel icon={"skull"}>
          <section>
            <Icon iconName={"groene-vinger-" + maintenance} />
          </section>
        </PlantLabel>
      </header>

      <Image
        className={styles.plant__image}
        src={image}
        alt={plantName}
        width={200}
        height={200}
      />
      <article className={styles.plant__info}>
        <Title title={"h3"} className={styles["plant__info--name"]}>
          {plantName}
        </Title>

        <footer className={styles.plant__meta}>
          <Text modifier={"meta"} className={styles["plant__meta-latine"]}>
            {latinName}
          </Text>
          <aside className={styles["plant__meta-link"]}>
            <Text modifier={"small"} className={styles["plant__meta-text"]}>
              Lees meer
            </Text>
            <Icon iconName={"arrowCircle"} rotate={90} />
          </aside>
        </footer>
      </article>
    </Link>
  );
};

export default PlantCard;
