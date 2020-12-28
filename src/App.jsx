import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Team from "./containers/Team";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <About />
      <Team />
      <div className="footer" />
    </div>
  );
}

export default App;
