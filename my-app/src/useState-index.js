import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavColor() {
    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My fav color is {color}</h1>
            <button type="button" onClick={() => setColor("blue")}>
                Blue
            </button>
            <button type="button" onClick={() => setColor("pink")}>
                pink
            </button>
            <button type="button" onClick={() => setColor("orange")}>
                orange
            </button>
            <button type="button" onClick={() => setColor("black")}>
                black
            </button>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FavColor />);
