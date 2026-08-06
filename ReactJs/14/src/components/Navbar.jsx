import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-2">
      <img className="h-10" src="./ebay.svg" alt="eBay" />
      <div className="flex gap-10 font-bold text-[20px] mr-10 mt-2">
        <span>Home</span>
        <span>About</span>
      </div>
      <img className="h-10" src="./cart.svg" alt="cart" />
    </nav>
  );
};

export default Navbar;
