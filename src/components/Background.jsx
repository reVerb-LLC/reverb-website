import React from "react";
import "../styles/Background.css";

function createCircles() {
  const output = [];
  for (let i = 0; i < 5; i++) {
    output.push(<li key={`circle-${i}`} />);
  }
  return output;
}

function Background() {
  const CIRCLES = createCircles();
  return (
    <div className="area">
      <ul className="circles">{CIRCLES}</ul>
    </div>
  );
}

export default Background;
