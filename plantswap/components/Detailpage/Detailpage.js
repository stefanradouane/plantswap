import Image from "next/image";
import styles from "./detailpage.module.scss";

const Detailpage = ({ data }) => {
  //   console.log(data.data);
  //   console.log(data.data.main_species.images?.flower[0]);
  return (
    <main>
      <h1 className={styles.detailpage__title}>{data.data.scientific_name}</h1>
      <section className={styles.detailpage__content}>
        <Image
          src={data.data.image_url}
          className={styles.detailpage__image}
          width={200}
          height={200}
          alt={"Image of the flower"}
        />

        {data.data.main_species.images.flower?.map((flower, i, arr) => (
          <Image
            key={i}
            src={flower.image_url}
            className={styles.detailpage__image}
            width={200}
            height={200}
            alt={"Image of the flower"}
          />
        ))}
      </section>
    </main>
  );
};

export default Detailpage;
