import ContinentIcon from "../ContinentIcon/ContinentIcon";
import Icon from "../Icon/Icon";
import styles from "./input.module.scss";

const FromInput = ({
  id,
  mainWrapper,
  type,
  placeholder,
  question,
  task,
  required,
  defaultValue,
  subject,
  next,
  preventDefault,
}) => {
  // Check if boolean is true or false, if true it is a sub element
  let style = mainWrapper ? styles.form__wrapper : styles.form__sub_wrapper;

  const usedIconProps = {
    origin: <ContinentIcon iconName={defaultValue} />,
    poisonous: defaultValue === "yes" && <Icon iconName={"skull"} />,
    fertilizer:
      defaultValue === "autumn" ? (
        <span>🍂</span>
      ) : defaultValue === "winter" ? (
        <span>❄️</span>
      ) : defaultValue === "spring" ? (
        <span>🌱</span>
      ) : defaultValue === "summer" ? (
        <span>☀️</span>
      ) : null,
  };

  return (
    <section className={style}>
      <label className={styles.form__label} htmlFor={id}>
        {usedIconProps[subject]}
        {question}
      </label>

      {task ? (
        <span id={id + "Desc"} className={styles.form__description}>
          Vul hier {task}
        </span>
      ) : null}

      <input
        className={styles.form__input_text}
        type={type}
        id={id}
        autoComplete={
          type === "email" ? "email" : id === "name" ? "name" : null
        }
        aria-describedby={id + "Desc"}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        onChange={(e) => {
          if (preventDefault !== false) {
            e.preventDefault();
          }
          if (next) next(e.target, subject, defaultValue);
        }}
      />
    </section>
  );
};

export default FromInput;
