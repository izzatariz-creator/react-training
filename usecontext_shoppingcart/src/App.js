import React, { useState } from "react";
import "./App.css";

// localStorage.removeItem("bestScore");

const App = () => {
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);
    const [comRandomGuess, setComRandomGuess] = useState(Math.floor(Math.random() * 100) + 1);
    const [bestScore, setBestScore] = useState(localStorage.getItem("bestScore"));

    console.log(comRandomGuess);

    const checkGuess = () => {
        setMessage(checkNumber(guess, comRandomGuess));
    };

    const checkNumber = () => {
        const userGuess = Number(guess);
        if (userGuess < comRandomGuess) {
            setCount((count) => count + 1);
            return "Number Entered Too Low";
        }
        if (userGuess > comRandomGuess) {
            setCount((count) => count + 1);
            return "Number Entered Too High";
        }
        if (userGuess === comRandomGuess) {
            if (!bestScore || count < bestScore) {
                setBestScore(count);
                localStorage.setItem("bestScore", count);
            }
            return "Correct Answer";
        }
    };

    return (
        <div className="App">
            <h1>Guess Number</h1>
            <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} />
            <br />
            <br />

            <button type="button" onClick={checkGuess}>
                Guess
            </button>

            <br />

            <div>{message}</div>
            <br />
            <div>No of tries: {count}</div>
            <div>Best score: {bestScore}</div>
        </div>
    );
};

export default App;
