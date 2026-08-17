import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
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
            <Suspense
              fallback={
                <div className="min-h-[calc(100vh-65px)] bg-[#1B1E20] flex items-center justify-center">
                  <h1 className="text-3xl font-semibold text-white">
                    Loading...
                  </h1>
                </div>
              }
            >
              <About />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense
              fallback={
                <div className="min-h-[calc(100vh-65px)] bg-[#1B1E20] flex items-center justify-center">
                  <h1 className="text-3xl font-semibold text-white">
                    Loading...
                  </h1>
                </div>
              }
            >
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
