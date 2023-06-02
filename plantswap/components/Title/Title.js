import React from "react";
import styles from "./title.module.scss";

const Title = ({ title, modifier, children, className }) => {
  return React.createElement(
    title,
    {
      className: `${styles.title} ${styles[`title--${title}`]} ${
        modifier ? styles[`title--${modifier}`] : ""
      } ${className ? className : ""}`,
    },
    children
  );
};

export default Title;
