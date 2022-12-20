import React from "react";
import { AuthService, AuthContext } from "./AuthService.js";
import Address from "./Address.js";
import Settings from "./Settings.js";

const ShoppingCartContext = React.createContext();

const Checkout = (props) => {
    const user = React.useContext(AuthContext);
    const mainAddress = user && user.addresses ? user.addresses.find((address) => !!address.main) : null;

    return (
        <div
            style={{
                border: "3px solid black",
                padding: 5,
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "100%",
            }}
        >
            {mainAddress ? <Address {...mainAddress} /> : "No addresses found!"}
            <br />
            <Pay createTransaction={props.createTransaction} />
        </div>
    );
};

const Cart = () => {
    return (
        <div style={{ border: "3px solid black", padding: 5, flexGrow: 1, flexShrink: 1, flexBasis: "100%" }}>
            <Items />
        </div>
    );
};

const Pay = (props) => {
    const [items, setItems] = React.useContext(ShoppingCartContext);
    let totalPrice = 0;
    items.forEach((items) => {
        totalPrice = totalPrice + items.price;
    });
    return (
        <>
            <div style={{ margin: "8px 0" }}>Total price MYR {totalPrice}</div>
            <button title="Pay Now" onClick={() => props.createTransaction(totalPrice)}>
                Pay Now
            </button>
        </>
    );
};

const Item = (props) => {
    return (
        <div
            className="Item"
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 5,
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "100%",
            }}
        >
            <p>
                {props.name} : MYR {props.price}
            </p>
            <button onClick={() => props.delete(props.name)}>Remove from cart</button>
        </div>
    );
};

const Items = () => {
    const [items, setItems] = React.useContext(ShoppingCartContext);

    return items.map((item) => {
        return (
            <Item
                key={item.name}
                name={item.name}
                price={item.price}
                delete={() => {
                    setItems((prevItems) => {
                        return prevItems.filter((i) => i.name !== item.name);
                    });
                }}
            />
        );
    });
};

const ShoppingCartProvider = (props) => {
    const [items, setItems] = React.useState([
        { name: "desk", price: 4000 },
        { name: "chair", price: 1000 },
        { name: "lamp", price: 2000 },
    ]);

    return <ShoppingCartContext.Provider value={[items, setItems]}>{props.children}</ShoppingCartContext.Provider>;
};

const App = () => {
    const [items, setItems] = React.useState([
        { name: "desk", price: 4000 },
        { name: "chair", price: 1000 },
        { name: "lamp", price: 2000 },
    ]);

    const createTransaction = (amount) => {
        if (amount !== 0) alert("transaction was created with the amount: MYR " + amount);
    };

    return (
        <AuthService>
            <ShoppingCartProvider>
                <div className="App" style={{ display: "flex", justifyContent: "space-between" }}>
                    <Cart />
                    <Checkout createTransaction={createTransaction} />
                </div>
                <Settings />
            </ShoppingCartProvider>
        </AuthService>
    );
};

export default App;
