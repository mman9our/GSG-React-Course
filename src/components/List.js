import React from "react";
import { places } from "./Data";
import Place from "./Place";

const List = ({ imageSize }) => {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} imageSize={imageSize} />
    </li>
  ));
  return <ul>{listItems}</ul>;
};
export default List;
