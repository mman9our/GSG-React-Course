import React from "react";
import PlaceImage from "./PlaceImage";

const Place = ({ place }) => {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
};

export default Place;
