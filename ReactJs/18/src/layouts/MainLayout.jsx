import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div
      className="h-screen w-full grid grid-cols-[260px_1fr] gap-4 p-4 overflow-hidden"
      style={{
        backgroundColor: "#eef1f4",
        backgroundImage:
          "linear-gradient(#d7dee5 1px, transparent 1px), linear-gradient(90deg, #d7dee5 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }}
    >
      <Navbar />

      <div className="relative h-full min-h-0">
        <span className="absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-[#d7263d]" />
        <span className="absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-[#d7263d]" />
        <span className="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-[#d7263d]" />
        <span className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-[#d7263d]" />

        <div className="bg-white border-[1.5px] border-[#16324f] h-full px-6 py-5 overflow-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;