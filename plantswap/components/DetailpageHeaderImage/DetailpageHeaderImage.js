"use client"

import { useEffect, useRef, useState } from 'react';
import NextImage from 'next/image';
import ColorThief from 'colorthief';
import styles from '../DetailpageHeaderImage/detailpageheaderimage.module.scss';

const DetailpageHeaderImage = ({ data, onColorExtracted }) => {
    const imgRef = useRef();

    useEffect(() => {
        const img = new window.Image();
        img.src = imgRef.current.src;
        img.crossOrigin = 'Anonymous'; // This is important if your image is hosted on another domain
        img.onload = function() {
            const colorThief = new ColorThief();
            const rgb = colorThief.getColor(img);
            const hex = rgbToHex(rgb);
            console.log(`Rgb waarde: ${rgb}`);
            console.log(`Rgb waarde in hex: ${hex}`);
            onColorExtracted(hex);
        };
    }, []);

    return (
        <figure className={styles.detailpageheaderimage}>
            <NextImage
                ref={imgRef}
                src="/images/testplant_2.jpg"
                alt="Picture of the plant 'vrouwentongen' in a pot"
                width={100}
                height={100}
                quality={100}
            />
        </figure>
    );
};

function rgbToHex(rgb) {
    return "#" + rgb.map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join('');
}

export default DetailpageHeaderImage;