import React, { useState, useEffect } from "react";
import HomeButton from "../components/HomeButton";
import { Link } from "react-router-dom";

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
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    return (
        <nav className="navbar" style={{ top: navBarTop }}>
            <HomeButton />

            <Link
                to={{
                    pathname: "https://reverb-llc.github.io/reverb-docs/",
                }}
                target="_blank"
            >
                Docs
            </Link>
            <Link
                to={{
                    pathname:
                        "https://github.com/oslabs-beta/reverb-vscode-extension",
                }}
                target="_blank"
            >
                Github
            </Link>

            <div id="search-container">
                <input type="text" placeholder="Search..." />
            </div>
        </nav>
    );
}

export default NavigationBar;
