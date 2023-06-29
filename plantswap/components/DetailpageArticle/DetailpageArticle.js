import Title from "../Title/Title";
import Text from "../Text/Text";

import styles from "./detailpagearticle.module.scss";
import ContinentIcon from "../ContinentIcon/ContinentIcon";
import Icon from "../Icon/Icon";

const DetailpageArticle = ({ title, content, name, defaultValue }) => {
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
    <article className={styles.detailpagearticle}>
      <Title title="h3" modifier={"bold"}>
        {title}
      </Title>
      <Text modifier={"small"} className={styles.detailpagearticle__value}>
        {usedIconProps[name]}
        {content}
      </Text>
    </article>
  );
};

export default DetailpageArticle;
