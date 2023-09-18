import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 (Not Found)</h1>

      <h3>The url you visited is not defined</h3>
      <Link to="/">
        <button>Back to Home Page</button>
      </Link>
    </div>
  );
}

export default NotFound;
