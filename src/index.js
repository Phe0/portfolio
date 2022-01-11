import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
