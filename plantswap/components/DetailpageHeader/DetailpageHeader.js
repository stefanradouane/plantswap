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
                <Title title={"h2"} className={styles.detailpageheader__title}>
                    {data.title}
                </Title>
                <Title title={"h4"} className={styles.detailpageheader__subtitle}>{data.subtitle}</Title>
            </article>
        </header>
    );
};

export default DetailpageHeader;