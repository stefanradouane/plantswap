import Image from "next/image";
import styles from "./singleheader.module.scss";
import Title from "../Title/Title";
import Text from "../Text/Text";

const SingleHeader = () => {
  return (
    <section className={styles.singleheader}>
      <Image />
      <Title title={"h1"}>Plant Naam</Title>
      <Text>Plant omschrijving</Text>
    </section>
  );
};

export default SingleHeader;
