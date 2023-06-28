import React from "react";

import styles from "./formtip.module.scss";

import Text from "../Text/Text";

const FormTip = ({ description }) => {
  return (
    <section className={styles.tooltip}>
      <section className={styles.tooltip__content_wrapper}>
        <section className={styles.tooltip__icon}></section>
        <Text
          className={styles.tooltip__description}
          modifier={["small", "white"]}>
          {description}
        </Text>
      </section>
    </section>
  );
};

export default FormTip;
