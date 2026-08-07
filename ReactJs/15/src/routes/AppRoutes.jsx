import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Details from "../pages/Details";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} >
        <Route path="details" element={<Details />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
