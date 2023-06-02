import styles from "./text.module.scss";
import { createElement } from "react";

const Text = ({ modifier, children, className }) => {
  return createElement(
    "p",
    {
      className: `${styles.text} ${
        modifier ? styles[`text--${modifier}`] : ""
      } ${className ? className : ""}`,
    },
    children
  );
};

export default Text;
