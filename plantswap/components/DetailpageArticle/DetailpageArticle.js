import Title from "../Title/Title";
import Text from "../Text/Text";

import styles from "./detailpagearticle.module.scss";

const DetailpageArticle = ({ title, content }) => {
    return (
        <article className={styles.detailpagearticle}>
            <Title title="h2">{title}</Title>
            <Text>{content}</Text>
        </article>
    );
};

export default DetailpageArticle;
