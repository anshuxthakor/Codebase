// Navbar.jsx
import React from "react";
import { NavLink } from "react-router";

const linkClasses = ({ isActive }) =>
  `transition-colors ${isActive ? "text-[#8B5CF6]" : "text-[#71717A] hover:text-[#E4E4E7] transition-all duration-100 active:scale-95"}`;

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-2xl font-bold bg-[#191C22] rounded-3xl text-[#E4E4E7] px-5 py-4">
      <h1>Data Routing</h1>
      <div className="flex gap-10 text-xl">
        <NavLink to="/" className={linkClasses}>Home</NavLink>
        <NavLink to="/about" className={linkClasses}>About</NavLink>
        <NavLink to="/service" className={linkClasses}>Service</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;