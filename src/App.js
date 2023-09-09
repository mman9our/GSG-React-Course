import React, { useState } from "react";
import ChildA from "./components/ChildA";

const App = () => {
  const [title, setTitle] = useState("GSG React Training");

  return (
    <div>
      <ChildA title={title} />
    </div>
  );
};
export default App;
