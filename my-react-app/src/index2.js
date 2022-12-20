import React from "react";
import ReactDOM from "react-dom/client";
import Animal2 from "./Animal2";

// const myElement = <h1>This is not HTML. This is JSX. {5 + 10}</h1>;
// const myElement = React.createElement("h1", {}, "No JSX");

// const myElement = (
//     <div>
//         <ul>
//             <li>Apple</li>
//             <li>Guava</li>
//             <li>Mango</li>
//         </ul>

//         <p>A</p>
//         <p>B</p>
//     </div>
// );

// const x = 2;
// let message = "You are an adult";
// if (x < 18) {
//     message = "You are a child";
// }

// const myElement2 = <h1 className="myclass">Hello Class</h1>;

// const myElement2 = <h1>{message}</h1>;

// const myElement2 = <h1>{x < 18 ? "You are an adult" : "You are a child"}</h1>;
// root.render(myElement2);

// class Animal extends React.Component {
//     render() {
//         return <h2>Hey I am an animal!!!</h2>;
//     }
// }

function House() {
    return <h2>Live in me. I am a house.</h2>;
}

function Animal(props) {
    return <h2>I am a {props.name}</h2>;
}

// function Zoo() {
//     return (
//         <>
//             <h1>Which animal is in me?</h1>
//             <Animal name="Giraffe" />
//         </>
//     );
// }

function Zoo() {
    const animalobject = { name: "Tiger", habitat: "Indian Jungles" };
    return (
        <>
            <h1>Which animal is in me?</h1>
            <Animal name={animalobject.name} />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement);
// root.render(<Animal name="Lion" />);
root.render(<Zoo />);
// root.render(<House />);
// root.render(<Animal2 />);
