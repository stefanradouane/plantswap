import styles from "./form.module.scss";

/** @todo Change to rive animation @Dave */
export const FormIndicator = ({ step }) => {
  return <div className={styles.form__indicator} data-step={step}></div>;
};
