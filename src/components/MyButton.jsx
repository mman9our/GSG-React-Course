import React from "react";
import { useState } from "react";

function MyButton() {
  const [name, setName] = useState("Ahmed");

  function handleClicked() {
    if (name == "Ahmed") {
      setName("Mohamed");
    } else {
      setName("Ahmed");
    }
  }

  return (
    <>
      <div>
        <button onClick={handleClicked}>Click me</button>
        <h1>{name}</h1>
      </div>
    </>
  );
}

export default MyButton;
