import React from "react";
import styles from "./title.module.scss";

const Title = ({ title, children }) => {
  return React.createElement(
    title,
    { className: `${styles.title} ${styles[`title--${title}`]}` },
    children
  );
};

export default Title;
