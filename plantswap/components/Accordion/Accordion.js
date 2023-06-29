import Title from "../Title/Title";
import Text from "../Text/Text";

import styles from "./accordion.module.scss";

const Accordion = ({ title, content }) => {
  return (
    <details className={styles.accordion}>
      <summary>
        <div className={styles.accordion__icon}>
          <div></div>
          <div></div>
        </div>
        <Title title="h3">{title}</Title>
      </summary>
      <Text>{content}</Text>
    </details>
  );
};

export default Accordion;
