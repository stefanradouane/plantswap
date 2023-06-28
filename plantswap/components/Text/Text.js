import styles from "./text.module.scss";
import { createElement } from "react";
import createClassnames from "../../utils/createClassnames";

const Text = ({ className, modifier, children }) => {
  return createElement(
    "p",
    {
      className: createClassnames(styles, "text", className, modifier),
    },
    children
  );
};

export default Text;
