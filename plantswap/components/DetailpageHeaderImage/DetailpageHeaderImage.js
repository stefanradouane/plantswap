"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ColorThief from "colorthief";
import styles from "../DetailpageHeaderImage/detailpageheaderimage.module.scss";

const DetailpageHeaderImage = ({ plant, onColorExtracted }) => {
  const imgRef = useRef();

  const isGreen = (rgb) => {
    const [r, g, b] = rgb;
    return g > r && g > b; // Check if green is the dominant color.
  };

  const isDark = (rgb) => {
    const [r, g, b] = rgb;
    return r < 120 || g < 120 || b < 120; // Check color is dark
  };

  useEffect(() => {
    const img = new window.Image();
    img.src = imgRef.current.src;
    img.crossOrigin = "Anonymous"; // Important if your image is hosted on another domain.
    img.onload = function () {
      const colorThief = new ColorThief();
      let colors = colorThief.getPalette(img, 10); // Extract 5 dominant colors from image.

      const nonGreenColors = colors
        .filter((rgb) => !isGreen(rgb)) // Filter out the green color shades.
        .filter((rgb) => !isDark(rgb)); // Filter out the dark color shades.

      let colorToUse;
      if (nonGreenColors.length > 0) {
        // If there are non- green colors, use the most dominant one.
        colorToUse = nonGreenColors[0];
      } else if (colors.length > 1) {
        // If all dominant colors are green, use the second most dominant color.
        colorToUse = colors[1];
      } else {
        // If there's only one color and it's green, use it.
        colorToUse = colors[0];
      }

      const hex = rgbToHex(colorToUse);
      onColorExtracted(hex);
    };
  }, []);

  return (
    <figure className={styles.detailpageheaderimage}>
      <Image
        ref={imgRef}
        src={plant.image}
        alt="Picture of the plant 'vrouwentongen' in a pot"
        quality={100}
        fill={true}
      />
    </figure>
  );
};

function rgbToHex(rgb) {
  return (
    "#" +
    rgb
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

export default DetailpageHeaderImage;
