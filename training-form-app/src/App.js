import "./App.css";
import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        //this.state - initialize only inside constructor
        this.state = {
            username: "",
            password: "",
            passwordConfirmation: "",
            email: "",
            errors: [],
        };
        this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this);
        this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
        this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this);
        this.validatePasswordConfirmationOnBlur = this.validatePasswordConfirmationOnBlur.bind(this);
    }

    // state = {
    //     username: "",
    //     password: "",
    //     passwordConfirmation: "",
    //     email: "",
    //     errors: [],
    // };

    displayErrors() {
        return (
            <div className="errors">
                {this.state.errors.map((err, i) => (
                    <p key={`err-${i}`}>{err}</p>
                ))}
            </div>
        );
    }

    validateNotEmpty(fieldName, value) {
        if (value.length <= 0) {
            return `${fieldName} must be filled out.`;
        }
    }

    validateEmailFormat(fieldName, value) {
        let [lhs, rhs] = value.split("@");
        lhs = lhs || "";
        rhs = rhs || "";
        if (lhs.length <= 0 || rhs.length <= 0) {
            return `${fieldName} must be in a standard email format.`;
        }
    }

    validateUsernameOnBlur = (event) => {
        // console.log("I will validate this in", event.target.value);
        // this.setState();

        //extract name
        const username = event.target.value;
        const errors = this.state.errors;
        errors.push(this.validateNotEmpty("Username", username));
        this.setState({ username, errors });
    };

    validatePasswordOnBlur = (event) => {
        const password = event.target.value;
        const errors = this.state.errors;
        errors.push(this.validateNotEmpty("Password", password));
        this.setState({ password, errors });
    };

    validatePasswordConfirmationOnBlur = (event) => {
        const passwordConfirmation = event.target.value;
        const errors = this.state.errors;
        if (passwordConfirmation !== this.state.password) {
            errors.push("Password must match password confirmation");
        }
        this.setState({ passwordConfirmation, errors });
    };

    validateEmailOnBlur = (event) => {
        const email = event.target.value;
        const errors = this.state.errors;
        errors.push(this.validateEmailFormat("Email", email));
        this.setState({ email, errors });
    };

    submitForm(event) {
        console.log("Submitting me....");
        console.log(event);
    }

    displayForm() {
        return (
            <div>
                Username: <input type="text" onBlur={this.validateUsernameOnBlur} />
                <br />
                Password: <input type="text" onBlur={this.validatePasswordOnBlur} />
                <br />
                Password Confirmation: <input type="text" onBlur={this.validatePasswordConfirmationOnBlur} />
                <br />
                Email: <input type="text" onBlur={this.validateEmailOnBlur} />
                <br />
                <button onClick={this.submitForm}>Submit</button>
            </div>
        );
    }

    render() {
        return (
            <div className="App">
                Create Account
                {this.displayErrors()}
                <hr />
                {this.displayForm()}
            </div>
        );
    }
}

export default App;
