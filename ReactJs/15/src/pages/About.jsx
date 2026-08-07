import React from "react";
import { NavLink, Outlet, useNavigate, useMatch } from "react-router";

const About = () => {
  const navigate = useNavigate();
  const onDetails = useMatch("/about/details");

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="relative">
        <h1 className="text-white text-center text-7xl font-bold underline">
          About Page
        </h1>
        {onDetails ? (
          <button
            className="text-emerald-500 top-0 -right-10 absolute font-bold hover:text-blue-500 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        ) : (
          <NavLink
            className="text-emerald-500 top-0 -right-10 absolute font-bold hover:text-blue-500"
            to="details"
          >
            Details
          </NavLink>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default About;