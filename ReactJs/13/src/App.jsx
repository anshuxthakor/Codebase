import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import axios from "axios";

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [apidata, setApiData] = useState([]);

  let fetchData = async () => {
    try {
      let response = await axios.get('https://fakestoreapi.com/products');
      setApiData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    console.log("App.jsx Rendering...");
    fetchData();
    console.log(apidata);
  }, [toggle]);

  return (
    <div className="div">
      <h1 className="num">{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="toggle" onClick={() => setToggle((prev) => !prev)}>
        ✝
      </button>
      {
        toggle ? (
          <Home />
        ) : (
          <About />
        )
      }
    </div>
  );
};

export default App;
