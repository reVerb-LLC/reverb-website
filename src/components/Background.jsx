import React from "react";
import "../styles/Background.css";

function Background() {

  const createCircles = () => {
    const output = [];
    for (let i = 0; i < 5; i++) {
      output.push(<li key={`circle-${i}`} />);
    }
    return output;
  }

  return (
    <div className="area">
      <ul className="circles">{createCircles()}</ul>
    </div>
  );
}

export default Background;
