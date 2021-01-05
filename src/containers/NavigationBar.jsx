import React, { useState, useEffect } from 'react';
import HomeButton from "./HomeButton";
import "../styles/Header.css";

function NavigationBar() {

  const [navBarTop, setNavBarTop] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    let newTop = "0px";
    if (prevScrollPos <= currentScrollPos && currentScrollPos > 50) {
      newTop = "-100px";
    }
    setPrevScrollPos(currentScrollPos);
    setNavBarTop(newTop);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <header className="navbar" style={{ top: navBarTop }}>
      <HomeButton />
      <a href="#docs">Docs</a>
      <a href="#donate">Donate</a>
      <a
        href="https://github.com/oslabs-beta/reverb-vscode-extension"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
}

export default NavigationBar;
