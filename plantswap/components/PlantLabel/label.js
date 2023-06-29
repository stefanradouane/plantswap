import React from "react";
import styles from "./label.module.scss";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";

const PlantLabel = ({ icon, children }) => {
  return (
    <section className={styles.label}>
      {children}
      {/* <Icon iconName={icon} className={styles["label--icon"]} />
      <Text className={styles["label--text"]} modifier={"x-small"}>
        Groene vingers
      </Text> */}
    </section>
  );
};

export default PlantLabel;
