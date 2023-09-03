import React from "react";
import { useState } from "react";

function MyButton() {
  function handleCilcked() {
    if (name === "Anwar") {
      setName("Ward");
    } else {
      setName("Anwar");
    }
  }
  const [name, setName] = useState("");

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleCilcked}>Change Name</button>
    </div>
  );
}

export default MyButton;
