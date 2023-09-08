import React from "react";
import InnerChild from "./InnerChild";

const AppChild = ({ appChildId, innerChildId }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "60px",
        backgroundColor: "red",
        border: "3px solid black",
      }}
    >
      <h1>App Child</h1>
      <h2>{appChildId}</h2>
      <InnerChild innerChildId={innerChildId} />
    </div>
  );
};

export default AppChild;
