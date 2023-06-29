import { useState, useEffect, useRef } from "react";
import Input from "../../Input/input";
import Options from "../../Input/Options";
import styles from "./detail.module.scss";

const Detail = ({ options, subject, name, onFilterChange }) => {
  return (
    <details className={styles.details}>
      <summary className={styles["details--summery"]}>{subject}</summary>

      {options.map((option, key) => {
        return (
          <Input
            key={key}
            type="checkbox"
            id={option.key}
            mainWrapper={true}
            className={styles["detail--checkbox"]}
            defaultValue={option.key}
            subject={name}
            next={onFilterChange}
            preventDefault={false}
            question={option.name}
          />
        );
      })}
    </details>
  );
};

export default Detail;
