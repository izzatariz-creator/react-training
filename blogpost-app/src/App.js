import "./App.css";
import React, { useState } from "react";

export default function App() {
    //declare state variable
    const [count, setCount] = useState(0);

    //Function to validate num of character
    function validateCharacter() {
        if (count >= 200) {
            window.confirm("Blog Submitted");
        } else {
            window.confirm("Blog Not Submitted");
        }
    }

    // For views
    return (
        <div className="App">
            Blog App
            <br></br>
            <br></br>
            <form>
                <textarea style={{ width: "400px", height: "200px" }} placeholder="Type Here!" onChange={(e) => setCount(e.target.value.length)}></textarea>
            </form>
            <p>Total Number of Characters: {count}</p>
            <button onClick={validateCharacter} disabled={count < 200}>
                Submit
            </button>
        </div>
    );
}
