import React, { useState } from "react";

function MyInput() {
  function handleInputValue(event) {
    setMyInputValue(event.target.value);
    console.log(event.target.value);
  }
  const [myInputValue, setMyInputValue] = useState("");
  return (
    <div>
      <label>Your Name :</label>
      <input value={myInputValue} onChange={handleInputValue} />
    </div>
  );
}

export default MyInput;
