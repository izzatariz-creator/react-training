import React, { useState } from "react";

function NumberGuessingGame() {
    // Initialize the state variables
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [guess, setGuess] = useState(1);
    const [message, setMessage] = useState("");

    // Function to handle the computer's guess
    const handleGuess = () => {
        setGuess(Math.floor((max + min) / 2));
        setMessage(`Is your number ${guess}?`);
    };

    // Function to handle the user's response
    const handleResponse = (e) => {
        e.preventDefault();
        const response = e.target.elements.response.value;

        if (response === "lower") {
            setMax(guess - 1);
        } else if (response === "higher") {
            setMin(guess + 1);
        } else {
            setMessage("I guessed the correct number!");
        }
    };

    return (
        <div>
            <h1>Number Guessing Game</h1>
            <p>
                Think of a number between {min} and {max} and I will try to guess it.
            </p>
            <button onClick={handleGuess}>Make a guess</button>
            <p>{message}</p>
            <form onSubmit={handleResponse}>
                <label>
                    Is your number higher or lower?
                    <select name="response">
                        <option value="higher">Higher</option>
                        <option value="lower">Lower</option>
                        <option value="correct">Correct</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NumberGuessingGame;
