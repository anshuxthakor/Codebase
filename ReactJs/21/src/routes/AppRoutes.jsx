import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import { getUsers, getProducts } from "../api/api";

let About = lazy(() => import("../pages/About"));
let Contact = lazy(() => import("../pages/Contact"));

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          ),
          loader: async () => {
            const users = await getUsers();
            return users;
          },
          hydrateFallbackElement: <PageLoader />
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          ),
          loader: async () => {
            const [users, products] = await Promise.all([
              getUsers(),
              getProducts(),
            ]);
            return { users, products };
          },
          hydrateFallbackElement: <PageLoader />
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

const PageLoader = () => (
  <div className="min-h-[calc(100vh-65px)] bg-[#1B1E20] flex items-center justify-center">
    <h1 className="text-3xl font-semibold text-white">Loading...</h1>
  </div>
);

export default AppRoutes;