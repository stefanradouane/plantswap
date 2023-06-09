import Title from "../Title/Title";
import styles from "./card.module.scss";

const Card = ({ cta, tagline }) => {
  return (
    <div className={styles.card}>
      <Title title={"h2"}>
        {cta} <span className={styles.card__description}>-&gt;</span>
      </Title>
      {tagline && <p>{tagline}</p>}
    </div>
  );
};

export default Card;
