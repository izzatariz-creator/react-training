import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            field: "",
            submitDisabled: true,
        };
    }

    //event handler - update char length
    updateFieldLength(event) {
        const field = event.target.value;
        this.setState({ field }, () => {
            this.validateFieldLength();
        });
        // this.setState({ field });
    }

    //render num of character
    renderFieldLength() {
        return <p>{`${this.state.field.length} characters.`}</p>;
    }

    submitForm() {
        alert("Your blogpost got submitted.");
    }

    validateFieldLength() {
        if (this.state.submitDisabled && this.state.field.length > 200) {
            this.setState({ submitDisabled: false });
        } else if (this.state.field.length <= 200) {
            this.setState({ submitDisabled: true });
        }
    }

    render() {
        return (
            <div className="App">
                <h2>Blog Post Checker</h2>
                <h3>Write your post here: </h3>
                <textarea cols="40" rows="15" onChange={this.updateFieldLength.bind(this)}></textarea>
                <br />
                {this.renderFieldLength()}
                <br />
                <button disabled={this.state.submitDisabled} onClick={this.submitForm}>
                    Submit
                </button>
            </div>
        );
    }
}

export default App;
