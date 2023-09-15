// In this task you have to build the routes of the website
// the routes include:
// - '/' which render the <Home /> component
// - '/about' which render the <About /> component
// - '/about/history' which render the <History /> component
// - '/about/contact' which render the <Contact /> component
// - '/classlist/:class' which render the <ClassList /> component

import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../App.css";
const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <nav className="nav">
          <h3>Arab American University</h3>
          <div className="link-wrap">{/* Links */}</div>
        </nav>
        {/* Routes */}
      </div>
    </BrowserRouter>
  );
};

export default Main;
