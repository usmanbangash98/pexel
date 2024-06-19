import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className="mb-4">
      <img
        src={image.src.large}
        alt={image.alt}
        className="w-full object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default ImageCard;
