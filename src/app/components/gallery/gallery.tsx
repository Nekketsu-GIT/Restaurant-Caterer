"use client";

import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Image } from "react-grid-gallery";
import styles from "./gallery.module.css";

interface CustomImage extends Image {
  original: string;
}

interface GalleryProps {
    images: CustomImage[];
}



export default function MyGallery({ images }: GalleryProps) {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: CustomImage) => setIndex(index);

  const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

  return (
    <div className={styles.gallery}>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}