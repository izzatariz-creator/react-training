import React, { useState } from "react";
import "./App.css";

// function App() {
//     const [show, setShow] = useState(true);
//     return (
//         <div className="App">
//             {show ? (
//                 <img
//                     style={{ width: "300px", height: "300px" }}
//                     src="https://images.unsplash.com/photo-1562051036-e0eea191d42f
// "
//                 ></img>
//             ) : null}

//             <br />

//             <button onClick={() => setShow(!show)}>Toggle</button>
//         </div>
//     );
// }

// export default App;

const App = () => {
    const url = "https://images.unsplash.com/photo-1562051036-e0eea191d42f";
    const [displayImage, setState] = useState(false);
    const toggleImage = () => setState(!displayImage);

    return (
        <div className="App">
            {displayImage && <img src={url} alt="Some Coffee" style={{ width: "300px", height: "300px" }}></img>}
            <br />
            <button onClick={toggleImage}>Toggle Image</button>
        </div>
    );
};

export default App;
