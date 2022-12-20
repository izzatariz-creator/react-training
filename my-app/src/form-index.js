import { useState, React } from "react";
import ReactDOM from "react-dom/client";

// FORMS
function MyForm() {
    //name=variable, setName=function to change variable, ""=default value
    const [name, setName] = useState("");

    //function
    const handleSubmit = (event) => {
        event.preventDefault();
        //backtick
        alert(`Your name is: ${name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
        </form>
    );
}

// COMPONENT START

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);
