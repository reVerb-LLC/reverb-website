import React from "react";
import { render } from "react-dom";
import App from "./App";
import Background from "./components/Background";
import "./styles/index.scss";

render(
  <div>
    <Background />
    <App />
  </div>,
  document.getElementById("root")
);
