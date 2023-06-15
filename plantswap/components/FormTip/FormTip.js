import React from 'react';

import styles from "./formtip.module.scss";

import Text from "../Text/Text";

const FormTip = ({ description }) => {
  return (
    <div className={styles.tooltip}>
      <div className={styles.tooltip__content_wrapper}>
        <div className={styles.tooltip__icon}></div>
        <Text className={styles.tooltip__description} modifier={"small"}>
          {description}
        </Text>
      </div>
    </div>
  );
};

export default FormTip;