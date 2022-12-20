import React, { Component } from "react";
// import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            loading: true,
        };
    }

    //Component Did Update
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
    }

    //Component Did Mount
    componentDidMount() {
        setTimeout(() => this.setState({ messages: ["Hey there!", "How are you", "I am good."], loading: false }), 5000);
    }

    //Function #1
    renderProfile() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }

        if (this.state.messages && this.state.messages.length > 0) {
            return (
                <ul>
                    {this.state.messages.map((msg, index) => (
                        <li key={`msg-${index}`}>{msg}</li>
                    ))}
                </ul>
            );
        } else {
            return <div>No messages!</div>;
        }
    }

    render() {
        return (
            <div className="App">
                Update App
                <hr />
                {this.renderProfile()}
            </div>
        );
    }
}

export default App;
