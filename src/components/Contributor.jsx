import React from "react";
import "../styles/Contributor.css";
import githubLogo from "../media/externalLogos/github-logo.svg";
import linkedInLogo from "../media/externalLogos/linkedin.svg";

function Contributor() {
  return (
    <div>
      <img src={this.props.image} className="photo" alt="Sean"></img>
      <p className="identifier">{this.props.name}</p>
      <div className="logo-links">
        <a href={this.props.github} target="_blank" rel="noreferrer">
          <img src={githubLogo} className="logos" alt="GitHub"></img>
        </a>
        <a href={this.props.linkedIn} target="_blank" rel="noreferrer">
          <img src={linkedInLogo} className="logos" alt="LinkedIn"></img>
        </a>
      </div>
    </div>
  );
}

export default Contributor;
