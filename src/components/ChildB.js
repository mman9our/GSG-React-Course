import React from "react";
import ChildC from "./ChildC";

function ChildB({ title }) {
  return (
    <>
      Child B Says: title is passed from childA
      <br />
      <ChildC title={title} />
    </>
  );
}

export default ChildB;
