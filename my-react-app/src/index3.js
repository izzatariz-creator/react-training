import React from "react";
import ReactDOM from "react-dom/client";

function MissedGoal() {
    return <h1> Noooo! We missed the goal</h1>;
}

function SuccessGoal() {
    return <h1> Yesss! Goaaaal!</h1>;
}

function Goal(props) {
    const isGoal = props.isGoal;

    if (isGoal) {
        return <SuccessGoal />;
    }

    return <MissedGoal />;
}

function Football() {
    const shoot = (m, e) => {
        alert(e.type);
    };

    return <button onClick={(event) => shoot("Wow what a kick!", event)}>Shoot Ball</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Football />);
root.render(<Goal isGoal={true} />);
