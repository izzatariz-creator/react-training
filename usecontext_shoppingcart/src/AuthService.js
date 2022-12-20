import React from "react";
const AuthContext = React.createContext();

const AuthService = (props) => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        setTimeout(() => {
            console.log("Time to set the user");
            setUser({
                addresses: [
                    { postalCode: "68000", city: "Selangor", streetName: "Jalan P Ramlee", houseNumber: "3B", main: false },
                    { postalCode: "62000", city: "Kuala Lumpur", streetName: "Jalan Sultan Ismail", houseNumber: "2A", main: true },
                ],
            });
        }, 1000);
    }, []);
    return <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>;
};

export { AuthService, AuthContext };
