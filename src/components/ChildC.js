import React from "react";

function ChildC({ title }) {
  return (
    <>
      Child C Says: title is passed from childB
      <br />
      <h3> Welcome to</h3>
      <h4>{title}</h4>
    </>
  );
}

export default ChildC;
