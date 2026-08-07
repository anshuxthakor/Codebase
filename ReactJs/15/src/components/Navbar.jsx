import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-3 text-white">
      <h1 className="text-2xl font-semibold">My App</h1>
      <div className="flex items-center justify-between gap-10 text-xl">
        <NavLink
          to={"/"}
          className="active:scale-95 transition-all duration-100 hover:underline hover:text-emerald-500 cursor-pointer"
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className="active:scale-95 transition-all duration-100 hover:underline hover:text-emerald-500 cursor-pointer"
        >
          About
        </NavLink>
        <NavLink
          to={"/contact"}
          className="active:scale-95 transition-all duration-100 hover:underline hover:text-emerald-500 cursor-pointer"
        >
          Contact
        </NavLink>
      </div>
      <button className="bg-emerald-500 active:scale-95 transition-all duration-100 text-white font-bold py-2 px-4 rounded cursor-pointer">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
