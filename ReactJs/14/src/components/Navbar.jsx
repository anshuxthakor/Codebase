import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 pt-5 text-gray-800">
      <img className="h-10" src="./ebay.svg" alt="eBay" />
      <div className="flex gap-8 font-bold text-[20px] mr-15 mt-2">
        <span
          style={{
            fontFamily: "Fraunces, serif",
          }}
        >
          Home
        </span>
        <span
          style={{
            fontFamily: "Fraunces, serif",
          }}
        >
          About
        </span>
      </div>
      <img className="h-10" src="./cart.svg" alt="cart" />
    </nav>
  );
};

export default Navbar;
