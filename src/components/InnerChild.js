import React from "react";

const InnerChild = ({ innerChildId }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "40px",
        backgroundColor: "red",
        border: "3px solid black",
      }}
    >
      <h3>InnerChild</h3>
      <h4>{innerChildId}</h4>
    </div>
  );
};

export default InnerChild;
