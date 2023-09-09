import React from "react";
import ChildB from "./ChildB";
function ChildA({ title }) {
  return (
    <>
      Child A Says: title is passed from App
      <br />
      <ChildB title={title} />
    </>
  );
}
export default ChildA;
