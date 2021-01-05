import React from "react";
import NavigationBar from "./containers/NavigationBar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Team from "./components/Team";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Welcome />
      <About />
      <Team />
      <div className="footer" />
    </div>
  );
}

export default App;
