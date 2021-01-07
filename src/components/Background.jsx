import React from "react";

function Background() {
    const createRings = () => {
        const output = [];
        for (let i = 0; i < 5; i++) {
            output.push(<li key={`ring-${i}`} />);
        }
        return output;
    };

    return (
        <div className="area">
            <ul className="rings">{createRings()}</ul>
        </div>
    );
}

export default Background;
