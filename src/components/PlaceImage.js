import React from "react";
import { getImageUrl } from "./Utils";
import { useContext } from "react";
import { MyContext } from "../Contexts/MyContext";
const PlaceImage = ({ place }) => {
  const ImageSizeData = useContext(MyContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={ImageSizeData}
      height={ImageSizeData}
    />
  );
};

export default PlaceImage;
