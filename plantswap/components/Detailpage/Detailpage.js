import styles from "./detailpage.module.scss";

const Detailpage = ({ data }) => {
  //   console.log(data.data);
  //   console.log(data.data.main_species.images?.flower[0]);
  return (
    <main>
      <h1 className={styles.detailpage__title}>{data.data.scientific_name}</h1>
      <section className={styles.detailpage__content}>
        <img
          src={data.data.image_url}
          className={styles.detailpage__image}
          width={200}
        />

        {data.data.main_species.images.flower?.map((flower, i, arr) => (
          <img
            src={flower.image_url}
            className={styles.detailpage__image}
            width={200}
          />
        ))}
      </section>
    </main>
  );
};

export default Detailpage;
