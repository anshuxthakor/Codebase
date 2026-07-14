import React from "react";
import About from "./About";
import Button from "./Button";

const App = () => {
  return (
    <main>
      <h1>Welcome to ReactJs</h1>
      <About name="Jordan Walke" age={2013} />
      <Button><button>Button.jsx</button></Button>
    </main>
  );
};

export default App;