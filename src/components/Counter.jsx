import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  function handlePlusClick() {
    setcount((c) => {
      return c + 1;
    });
    setcount((c) => {
      return c + 1;
    });
  }
  return (
    <div>
      <h4> The Count is : {count}</h4>
      <button onClick={handlePlusClick}>+</button>
    </div>
  );
}

export default Counter;
