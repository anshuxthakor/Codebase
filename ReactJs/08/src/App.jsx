import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [toggle, setToggle] = useState();
  const [users, setUsers] = useState([]);

  return (
    <div className="app">
      {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
        <Register setToggle={setToggle} setUsers={setUsers} />
      )}
    </div>
  );
};

export default App;
