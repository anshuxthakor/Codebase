import React, { useContext } from "react";
import { Context } from "../context/MyContext";

const Navbar = () => {
  const MyContext = useContext(Context);
  const { toggle, setToggle, setAbout, cart } = MyContext;

  return (
    <nav className="flex justify-between items-center px-6 pt-3 text-gray-800">
      <img className="h-10" src="./ebay.svg" alt="eBay" />
      <div className="flex gap-8 font-bold text-[20px] mr-15 mt-2">
        <span
          className="cursor-pointer hover:underline decoration-[#2F4A3C] underline-offset-2 active:scale-95 transition-all duration-100"
          style={{
            fontFamily: "Fraunces, serif",
          }}
          onClick={() => {
            setToggle(true);
            setAbout(false); // leaving about view
          }}
        >
          Home
        </span>
        <span
          className="cursor-pointer hover:underline decoration-[#2F4A3C] underline-offset-2 active:scale-95 transition-all duration-100"
          style={{
            fontFamily: "Fraunces, serif",
          }}
          onClick={() => {
            setAbout(true);
          }}
        >
          About
        </span>
      </div>
      <div className="relative">
        <img
        className="h-10 cursor-pointer active:scale-95 transition-all duration-100"
        src="./cart.svg"
        alt="cart"
        onClick={() => {
          setToggle(false);
          setAbout(false); // leaving about view
        }}
        />
        <div>
          {cart.length > 0 && (
            <span className="absolute top-0 -right-2 bg-[#2F4A3C] text-[12px] text-[#EFE6D0] rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
