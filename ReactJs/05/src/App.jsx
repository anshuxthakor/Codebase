import React, { useState } from "react";

const App = () => {
  console.log("App component rendered");
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <div className="app">
      <span>{count}</span>
      <h1>VariableCount</h1>
      <button
        className="inc"
        onClick={() => {
          // Batching state updates in React 18
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default App;
