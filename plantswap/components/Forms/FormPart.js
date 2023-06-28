import { useRef } from "react";
import Title from "../Title/Title";
import styles from "./Form.module.scss";

const FormPart = ({ title, step, children, setCurrentStep, currentStep }) => {
  const detail = useRef(null);
  return (
    <details
      ref={detail}
      className={styles.form__part}
      open={currentStep == step}>
      <summary
        className={styles["form__part-title"]}
        onClick={(e) => {
          e.preventDefault();
          if (setCurrentStep) {
            setCurrentStep((prev) => {
              if (prev === step) {
                return 0;
              }
              return step;
            });
          }
        }}>
        <Title title={"h2"}>
          {step && <span>{step}.</span>} {title}
        </Title>
      </summary>

      <section className={styles["form__part-disclosure"]}>{children}</section>
    </details>
  );
};

export default FormPart;
