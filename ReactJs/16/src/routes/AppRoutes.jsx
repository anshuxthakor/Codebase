import React from "react";
import About from "../pages/About";
import Products from "../pages/Products";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            // Protecting the About page using ProtectedRoute component
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/products" element={<Products />} />

        {/* Dynamic Route for Product Detail {:id} */}
        <Route path="/detail/:id" element={<ProductDetail />} />

      </Routes>
    </div>
  );
};

export default AppRoutes;
