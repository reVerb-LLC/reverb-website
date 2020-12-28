import React, { Component } from "react";
import "../styles/Header.css";
import miniLogo from "../media/reverbLogos/miniLogo.svg";
import home from "../media/reverbLogos/home.svg";
import homeHover from "../media/reverbLogos/home-hover.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoSrc: home,
      prevScrollPos: window.pageYOffset,
      navBarTop: 0,
    };
    this.hover = this.hover.bind(this);
    this.unhover = this.unhover.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { prevScrollPos } = this.state;
    const currentScrollPos = window.pageYOffset;
    let navBarTop = "0px";
    if (prevScrollPos <= currentScrollPos && currentScrollPos > 50) {
      navBarTop = "-100px";
    }
    this.setState({
      prevScrollPos: currentScrollPos,
      navBarTop,
    });
  }

  hover() {
    this.setState({ logoSrc: homeHover });
  }

  unhover() {
    this.setState({ logoSrc: home });
  }

  render() {
    const { logoSrc, navBarTop } = this.state;
    return (
      <header className="navbar" style={{ top: navBarTop }}>
        <a
          href="#home"
          id="logo_link"
          onMouseOver={this.hover}
          onMouseOut={this.unhover}
        >
          <img src={miniLogo} id="mini-logo" alt="Logo"></img>
          <img src={logoSrc} id="reverb" alt="Home"></img>
        </a>
        <a href="#docs">Docs</a>
        <a href="#donate">Donate</a>
        <a
          href="https://github.com/oslabs-beta/reverb-vscode-extension"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <input type="text" placeholder="Search..." />
      </header>
    );
  }
}

export default Header;
