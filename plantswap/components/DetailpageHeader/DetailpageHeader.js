"use client";

import { useState } from 'react';
import DetailPageHeaderImage from "../DetailpageHeaderImage/DetailpageHeaderImage";

import Title from "../Title/Title";
import Text from "../Text/Text";

import styles from "../DetailpageHeader/detailpageheader.module.scss";

const DetailpageHeader = ({ data }) => {
    const [backgroundColor, setBackgroundColor] = useState('');

    const handleColorExtracted = (color) => {
        setBackgroundColor(color);
    };

    return (
        <header className={styles.detailpageheader} style={{ backgroundColor: backgroundColor }}>
            <article className={styles.detailpageheader__content_wrapper}>
                <DetailPageHeaderImage onColorExtracted={handleColorExtracted}></DetailPageHeaderImage>
                <Title title={"h1"} className={styles.header__title}>
                    {data.title}
                </Title>
                <Text className={styles.header__subtitle}>{data.subtitle}</Text>
            </article>
        </header>
    );
};

export default DetailpageHeader;