import Image from "next/image";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./filetile.module.scss";
import prettyBytes from "pretty-bytes";

const FileTile = ({ data, uploadedValue, onDelete }) => {
  if (!data) return <></>;

  if (data?.plant?.url) {
    const image = data.plant;
    return (
      <section className={styles.filetile}>
        <Title title={"h4"} className={styles.filetile__name}>
          {image.name}
        </Title>
        <Text modifier={"small"} className={styles.filetile__size}>
          {prettyBytes(image.size)}
        </Text>

        <div className={styles.filetile__loader}>
          <svg
            className={`${styles["filetile__loader-cross"]}
            ${
              uploadedValue == 100
                ? styles["filetile__loader-cross--active"]
                : ""
            }
            `}
            xmlns="http://www.w3.org/2000/svg"
            width="17.935"
            height="17.935"
            viewBox="0 0 17.935 17.935"
            onClick={(e) => {
              e.preventDefault();
              onDelete(e, true);
            }}>
            <path
              id="Path_1"
              data-name="Path 1"
              d="M6.87.528a.528.528,0,1,0-1.057,0V5.813H.528a.528.528,0,1,0,0,1.057H5.813v5.284a.528.528,0,0,0,1.057,0V6.87h5.284a.528.528,0,0,0,0-1.057H6.87Z"
              transform="translate(8.968) rotate(45)"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            style={{ strokeDashoffset: 100 - uploadedValue }}>
            <circle cx={15} cy={15} r={15} fill="none" />
          </svg>
        </div>
        <Image
          className={styles.filetile__preview}
          src={image.url}
          width={60}
          height={60}
          alt="Uploaded image"
        />
      </section>
    );
  }
};

export default FileTile;
