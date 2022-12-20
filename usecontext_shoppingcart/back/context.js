import React from "react";

const ShoppingCartContext = React.createContext();

const Checkout = (props) => {
    return (
        <div style={{ border: "3px solid black", padding: 5, flexGrow: 1, flexShrink: 1, flexBasis: "100%" }}>
            <>The item will be delivered to Bangsar South, 68000 Kuala Lumpur</>
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
        <ShoppingCartProvider>
            <div className="App" style={{ display: "flex", justifyContent: "space-between" }}>
                <Cart />
                <Checkout createTransaction={createTransaction} />
            </div>
        </ShoppingCartProvider>
    );
};

export default App;
