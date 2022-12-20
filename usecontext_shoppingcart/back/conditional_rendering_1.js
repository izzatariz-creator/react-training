import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSecret: false,
        };
    }

    secretMessage() {
        if (!this.state.showSecret) {
            return;
        }
        return <div className="secret-message">My Secret Text!</div>;
    }

    toggleSecretMessage() {
        this.setState({
            showSecret: !this.state.showSecret,
        });
    }
    render() {
        return (
            <div className="App">
                <button onClick={this.toggleSecretMessage.bind(this)}>
                    {/* Click to reveal text */}
                    Click to {this.state.showSecret ? "HIDE" : "SHOW"} the secret message!
                </button>
                {this.secretMessage()}
                {/* {this.state.showSecret ? this.secretMessage(): null} */}
            </div>
        );
    }
}

export default App;
