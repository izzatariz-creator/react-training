import React from "react";

const ThemeContext = React.createContext();

const theme = {
    primary: "blue",
    secondary: "maroon",
};

const Theme = (props) => {
    return <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>;
};

const Text = (props) => {
    const theme = React.useContext(ThemeContext);
    let color = theme.primary;
    if (props.variant && theme[props.variant]) {
        color = theme[props.variant];
    }
    return <p style={{ color }}>{props.children}</p>;
};

const App = () => {
    return (
        <Theme>
            <div className="App">
                <Text variant="primary">Primary Text</Text>
                <Text variant="secondary">Secondary Text</Text>
            </div>
        </Theme>
    );
};

export default App;
