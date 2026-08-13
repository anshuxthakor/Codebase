import React, { useContext } from "react";
import DrawingHeader from "./utils/DrawingHeader";
import RulerDivider from "./utils/RulerDivider";
import NavItem from "./NavItem";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { setLoggedInUser } = useContext(Auth);

  return (
    <div className="h-full min-h-0 bg-white border-[1.5px] border-[#16324f] px-5 py-5 flex flex-col overflow-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <DrawingHeader label="dwg no. 003 — nav" />

      <h1 className="text-xl font-black uppercase tracking-tight text-[#16324f] leading-none">
        Menu
      </h1>
      <div className="flex items-center gap-2 mt-2 mb-6">
        <span className="h-0.75 w-8 bg-[#d7263d]" />
        <span className="font-mono text-[11px] text-[#5b7089]">
          navigation index
        </span>
      </div>

      <nav className="flex flex-col gap-3">
        <NavItem to="/main" end letter="A">
          Home
        </NavItem>
        <NavItem to="/main/products" letter="B">
          Products
        </NavItem>
        <NavItem to="/main/users" letter="C">
          Users
        </NavItem>
      </nav>

      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            toast.warn("Logged out successfully");
            setLoggedInUser(null);
          }}
          className="w-full bg-[#16324f] text-white text-sm font-bold uppercase tracking-wide py-2.5 hover:bg-[#d7263d] active:scale-95 transition-all duration-100 cursor-pointer"
        >
          Sign out
        </button>

        <RulerDivider measurement="sheet 3/3" />
      </div>
    </div>
  );
};

export default Navbar;