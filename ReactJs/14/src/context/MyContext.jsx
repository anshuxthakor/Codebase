import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {

  // Add any values you want to provide to the context here
  const [toggle, setToggle] = useState(true);
  const [about, setAbout] = useState(false);
  const [cart, setCart] = useState([]); // [{ ...product, qty }]

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, qty: 1 }]);
  };

  const updateQty = (id, delta) => {
    setCart(
      (prev) =>
        prev
          .map((item) =>
            item.id === id ? { ...item, qty: item.qty + delta } : item,
          )
          .filter((item) => item.qty > 0), // auto-remove at 0
    );
  };

  return (
    <Context.Provider
      value={{ toggle, setToggle, about, setAbout, cart, setCart, addToCart, updateQty }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
