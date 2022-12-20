import React, { createContext, useContext } from "react";

const ThemeContext = createContext(null);

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <Form />
        </ThemeContext.Provider>
    );
}

function Form() {
    return (
        <Panel title="Welcome">
            <Button>Sign Up</Button>
            <Button>Log In</Button>
        </Panel>
    );
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = "panel-" + theme;

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}

function Button({ children }) {
    const theme = useContext(ThemeContext);
    const className = "button-" + theme;
    return <button className={className}>{children}</button>;
}

export default App;