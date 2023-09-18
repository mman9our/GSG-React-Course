import React from "react";
import { Outlet } from "react-router-dom";

function PostLayout() {
  return (
    <>
      <div>
        <h1 style={{ backgroundColor: "green", width: "100%" }}>Header</h1>

        <div>
          <Outlet />
        </div>

        <h1 style={{ backgroundColor: "green", width: "100%" }}>Footer</h1>
      </div>
    </>
  );
}

export default PostLayout;
