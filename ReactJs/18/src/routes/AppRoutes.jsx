import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Products from "../pages/Products";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Login />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/main",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "users",
              element: <Users />,
            },
            {
              path: "products",
              element: <Products />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
