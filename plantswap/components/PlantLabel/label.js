import styles from "./label.module.scss";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";

const PlantLabel = ({ icon, children }) => {
  return (
    <section className={styles.label}>
      {children}
    </section>
  );
};

export default PlantLabel;
