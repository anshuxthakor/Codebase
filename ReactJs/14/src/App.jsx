import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { Context } from "./context/MyContext";
import About from "./components/About";

const App = () => {
  const [products, setProducts] = useState([]);

  // Access the value from the context
  const MyContext = useContext(Context);
  const { toggle, setToggle, about } = MyContext;

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f4ec]">
      <Navbar />
      {about ? (
        <About />
      ) : toggle ? (
        <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <Cart />
      )}
    </div>
  );
};

export default App;
