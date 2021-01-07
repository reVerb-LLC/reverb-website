import React from "react";
import githubLogo from "../../media/externalLogos/github-logo.svg";
import linkedInLogo from "../../media/externalLogos/linkedin.svg";

function Contributor({image, name, github, linkedIn}) {
  return (
    <div>
      <img src={image} className="photo" alt="Sean"></img>
      <p className="identifier">{name}</p>
      <div className="logo-links">
        <a href={github} target="_blank" rel="noreferrer">
          <img src={githubLogo} className="logos" alt="GitHub"></img>
        </a>
        <a href={linkedIn} target="_blank" rel="noreferrer">
          <img src={linkedInLogo} className="logos" alt="LinkedIn"></img>
        </a>
      </div>
    </div>
  );
}

export default Contributor;
