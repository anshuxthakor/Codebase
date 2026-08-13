import React from "react";
import { NavLink } from "react-router";

const NavItem = ({ to, end, letter, children }) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] py-1.5 pl-2 border-l-2 transition-colors ${
          isActive
            ? "border-[#d7263d] text-[#d7263d] font-bold"
            : "border-transparent text-[#16324f] hover:text-[#d7263d] hover:border-[#d7263d]/40"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`flex items-center justify-center h-4 w-4 border text-[9px] shrink-0 ${
              isActive
                ? "border-[#d7263d] text-[#d7263d]"
                : "border-[#16324f] text-[#16324f]"
            }`}
          >
            {letter}
          </span>
          {children}
        </>
      )}
    </NavLink>
  );
};

export default NavItem;