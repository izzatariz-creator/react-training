import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        // Questions
        this.state = {
            playerScore: 0,
            questions: [
                {
                    question: "What is the capital of Malaysia?",
                    possibleAnswers: ["Kuala Lumpur", "Selangor"],
                    rightAnswer: "Kuala Lumpur",
                    playerChoice: null,
                },
                {
                    question: "What color is the sky?",
                    possibleAnswers: ["Blue", "Green"],
                    rightAnswer: "Blue",
                    playerChoice: null,
                },
                {
                    question: "What animal barks?",
                    possibleAnswers: ["Cat", "Dog"],
                    rightAnswer: "Dog",
                    playerChoice: null,
                },
                {
                    question: "Who wrote the book War and Peace?",
                    possibleAnswers: ["Doestoevsky", "Leo Tolstoy"],
                    rightAnswer: "Leo Tolstoy",
                    playerChoice: null,
                },
            ],
        };
    }

    displayQuestion(index) {
        //Display the queston represented by this index
    }

    render() {
        return (
            <div className="App">
                <p>Test</p>
                <p>Test</p>
            </div>
        );
    }
}

export default App;
