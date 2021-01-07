import React from "react";
import reVerbLogo from "../../media/reverbLogos/reVerbLogo.svg";

function Welcome() {
    return (
        <div id="welcome">
            <img src={reVerbLogo} id="welcome-logo" alt="logo" />
            <div id="details">
                <p id="welcome-description">
                    A RESTful API client for Visual Studio Code
                </p>
                <div className="welcome-buttons">
                    <a
                        href="https://reverb-llc.github.io/reverb-docs/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button>Documentation</button>
                    </a>
                    <a
                        href="https://marketplace.visualstudio.com/items?itemName=reverb-api.reverb"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button>Install reVerb</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
