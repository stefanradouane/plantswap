import React from "react";
import styles from "./title.module.scss";
import createClassnames from "../../utils/createClassnames";

const Title = ({ title, modifier, children, className }) => {
  const usedTitle = title === "h0" ? "h1" : title;
  return React.createElement(
    usedTitle,
    {
      className:
        styles[`title--${title}`] +
        " " +
        `${createClassnames(styles, "title", className, modifier)}`,
    },
    children
  );
};

export default Title;
