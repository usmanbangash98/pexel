// src/components/ImageGrid.js
import React from "react";
import ImageCard from "./ImageCard";

const ImageGrid = ({ images }) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;
