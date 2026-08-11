import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F1115] text-[#E4E4E7] px-5 py-5">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
