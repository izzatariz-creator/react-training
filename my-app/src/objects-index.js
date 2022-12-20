import React from "react";
import ReactDOM from "react-dom/client";

//COMPONENT
function Animal(props) {
    return <li> I am {props.name}</li>;
}

function Zoo() {
    // const animals = ["Giraffe", "Tiger", "Deer"];

    const animals = [
        { id: 1, name: "Giraffe" },
        { id: 2, name: "Tiger" },
        { id: 3, name: "Deer" },
    ];

    return (
        <>
            <h1>What animals are in this zoo?</h1>
            <ul>
                {animals.map((animal) => (
                    <Animal key={animal.id} name={animal.name} />
                ))}
            </ul>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Zoo />);
