import iconDict from "./Icon-dict";
import styles from "./icon.module.scss";

const Icon = ({ iconName, lib, rotate, modifier }) => {
  const icon = iconDict(iconName);
  const classNames = [
    styles.icon,
    styles[`icon--${iconName}`],
    styles[`icon--${modifier}`],
    styles[`icon--rotate-${rotate}`],
  ];

  if (lib && lib === "continets") {
    return <IconContinent iconName={iconName} />;
  }

  return (
    <svg
      className={classNames.join(" ")}
      width={24}
      viewBox={icon.viewBox}
      xmlns="http://www.w3.org/2000/svg">
      <path
        transform={icon.transform}
        d={icon.d}
        clipRule={icon.clipRule}
        fillRule={icon.fillRule}
      />
    </svg>
  );
};

export default Icon;
