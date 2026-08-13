import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'
import { toast } from 'react-toastify';

const ProtectedRoutes = () => {
  const { loggedInUser } = useContext(Auth);

  if (!loggedInUser) {
    toast.error("You need to login first to access this page.");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
