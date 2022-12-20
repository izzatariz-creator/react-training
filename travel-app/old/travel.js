import React from "react";

const TravelPackageContext = React.createContext();
const SelectedTravelPackagesContext = React.createContext();

//Right Side
const Checkout = (props) => {
    return (
        <div
            style={{
                border: "3px solid black",
                padding: 10,
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "100%",
            }}
        >
            <>Selected Travel Package:</>
            <br />
            <Info createTransaction={props.createTransaction} />
        </div>
    );
};

const PackageList = () => {
    return <div style={{ border: "3px solid black", padding: 5, flexGrow: 1, flexShrink: 1, flexBasis: "100%" }}>{<Packages />}</div>;
};

const Info = (props) => {
    const [selectedTravelPackages, setSelectedTravelPackages] = React.useContext(SelectedTravelPackagesContext);

    let totalPrice = 0;
    selectedTravelPackages.forEach((items) => {
        totalPrice = items.price;
    });

    return (
        <div>
            <br />
            {selectedTravelPackages.map((d) => (
                <div key={d.destination}>
                    <span>Destination: {d.destination}</span>
                    <br />
                    <span>Number of Day: {d.day}</span>
                    <br />
                    <span>Number of Price: {d.price}</span>
                </div>
            ))}
            <br />
            <button style={{ marginRight: "5px" }} title="Pay Now" onClick={() => props.createTransaction(totalPrice)}>
                Pay Now
            </button>
            <button title="Reset" onClick={() => setSelectedTravelPackages([])}>
                Reset
            </button>
        </div>
    );
};

const Packages = () => {
    const [travelPackages, setTravelPackages] = React.useContext(TravelPackageContext);
    const [selectedTravelPackages, setSelectedTravelPackages] = React.useContext(SelectedTravelPackagesContext);

    return travelPackages.map((tpackage) => {
        return (
            <ShowPackages
                key={tpackage.destination}
                destination={tpackage.destination}
                day={tpackage.day}
                price={tpackage.price}
                select={() => {
                    const insertAt = 2;
                    const nextPackage = [
                        ...selectedTravelPackages.slice(1, insertAt),
                        {
                            destination: `${tpackage.destination}`,
                            day: `${tpackage.day}`,
                            price: `${tpackage.price}`,
                        },
                        ...selectedTravelPackages.slice(insertAt),
                    ];

                    setSelectedTravelPackages(nextPackage);
                }}
            />
        );
    });
};

const ShowPackages = (props) => {
    const [selectedTravelPackages, setSelectedTravelPackages] = React.useContext(SelectedTravelPackagesContext);

    return (
        <div
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
                Destination: {props.destination}
                <br />
                Day: {props.day}
                <br />
                Price: MYR {props.price}
            </p>

            <button onClick={() => props.select(props)}>Choose</button>
        </div>
    );
};

const Banner = () => {
    return (
        <div style={{ marginTop: 24, textAlign: "center" }}>
            <h1>Travel Package</h1>
            <h2>React App</h2>
        </div>
    );
};

const App = () => {
    //Passed To Components
    const [travelPackages, setTravelPackages] = React.useState([
        { destination: "London", day: 7, price: 8500 },
        { destination: "Rome", day: 5, price: 6500 },
        { destination: "Istanbul", day: 3, price: 4500 },
    ]);

    const [selectedTravelPackages, setSelectedTravelPackages] = React.useState([]);

    const createTransaction = (amount) => {
        if (amount !== 0) alert("transaction was created with the amount: MYR " + amount);
        console.log(amount);
    };

    return (
        <TravelPackageContext.Provider value={[travelPackages, setTravelPackages]}>
            <SelectedTravelPackagesContext.Provider value={[selectedTravelPackages, setSelectedTravelPackages]}>
                <Banner />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <PackageList />
                    <Checkout createTransaction={createTransaction} />
                </div>
            </SelectedTravelPackagesContext.Provider>
        </TravelPackageContext.Provider>
    );
};

export default App;
