"use client";

import styles from "./button.module.scss";

const Button = ({ disabled, next, children, className }) => {
  return (
    <button
      className={styles.button + `${className ? " " + className : ""}`}
      onClick={(e) => {
        e.preventDefault();
        next(e);
      }}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
