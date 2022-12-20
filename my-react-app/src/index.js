import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const buttoncss = {
    backgroundColor: "#ffffff",
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    marginLeft: 65,
};

function WhiteBox() {
    const [hex, setHex] = useState("#ffffff");
    const randomizedColor = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setHex(randomColor);
    };

    return (
        <div>
            <h1 style={{ marginLeft: 65 }}>{hex}</h1>
            <div style={{ backgroundColor: `${hex}`, width: "250px", height: "200px", borderColor: "black", borderStyle: "solid" }}></div>
            <span>
                <br></br>
                <button style={buttoncss} onClick={randomizedColor}>
                    Change Color
                </button>
            </span>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WhiteBox />);
