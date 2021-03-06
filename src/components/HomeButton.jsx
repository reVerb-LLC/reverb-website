import React, { useState } from 'react';
import miniLogo from "../media/reverbLogos/miniLogo.svg";
import home from "../media/reverbLogos/home.svg";
import homeHover from "../media/reverbLogos/home-hover.svg";
import { Link } from "react-router-dom";

function HomeButton() {

  const [logoSrc, setLogoSrc] = useState(home);

  return (
    <Link to="/"
      id="logo_link"
      onMouseOver={() => {setLogoSrc(homeHover)}}
      onMouseOut={() => {setLogoSrc(home)}}
    >
      <img src={miniLogo} id="mini-logo" alt="Logo"></img>
      <img src={logoSrc} id="reverb" alt="Home"></img>
    </Link>
  )
}

export default HomeButton;