import styles from "./label.module.scss";

const PlantLabel = ({ icon, children }) => {
  return (
    <section className={styles.label}>
      {children}
    </section>
  );
};

export default PlantLabel;
