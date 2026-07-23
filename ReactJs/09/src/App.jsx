import React, { useState } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

const App = () => {
  console.log("App component rendered...");
  const [active, setActive] = useState("first");

  const handleClick = (e) => {
    console.log(e.target.innerText);
    setActive(e.target.innerText.toLowerCase());
  };

  return (
    <div>
      <div className="nav">
        <button className="nav-btn" onClick={handleClick}>
          First
        </button>
        <button className="nav-btn" onClick={handleClick}>
          Second
        </button>
        <button className="nav-btn" onClick={handleClick}>
          Third
        </button>
      </div>
      <div className="elem">
        {active === "first" && <First />}
        {active === "second" && <Second />}
        {active === "third" && <Third />}
      </div>
    </div>
  );
};

export default App;
