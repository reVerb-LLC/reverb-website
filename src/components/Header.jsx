import React, { Component } from "react";
import HomeButton from "../containers/HomeButton";
import "../styles/Header.css";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollPos: window.pageYOffset,
      navBarTop: 0,
    };
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

  render() {
    const { navBarTop } = this.state;
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
        <input type="text" placeholder="Search..." />
      </header>
    );
  }
}

export default Header;
