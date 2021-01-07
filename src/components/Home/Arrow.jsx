import React from "react";
import arrow from "../../media/icons/arrow.svg";
import arrowHover from "../../media/icons/arrow_hover.svg";

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div onClick={clickFunction}>
        <img
            src={arrow}
            id={`${direction}-arrow`}
            alt="logo"
            onMouseOver={(e) => (e.currentTarget.src = arrowHover)}
            onMouseOut={(e) => (e.currentTarget.src = arrow)}
        />
    </div>
);

export default Arrow;
