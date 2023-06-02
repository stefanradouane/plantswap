import iconDict from "./Icon-dict";
import styles from "./icon.module.scss";

const Icon = ({ iconName, modifier }) => {
  const icon = iconDict(iconName);
  return (
    <svg
      className={`${styles.icon} ${styles[`icon--${iconName}`]} ${
        modifier ? styles[`icon--${modifier}`] : ""
      }`}
      viewBox={icon.viewBox}
      xmlns="http://www.w3.org/2000/svg">
      <path d={icon.d} />
    </svg>
  );
};

export default Icon;
