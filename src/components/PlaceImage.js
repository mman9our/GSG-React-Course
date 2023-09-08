import React from "react";
import { getImageUrl } from "./Utils";
const PlaceImage = ({ place, imageSize }) => {
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
};

export default PlaceImage;
