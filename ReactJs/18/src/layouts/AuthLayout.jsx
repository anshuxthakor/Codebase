import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'
import { toast } from 'react-toastify';

const AuthLayout = () => {
  const { loggedInUser } = useContext(Auth);

  if (loggedInUser) {
    return <Navigate to="/main" />;
  }

  return <Outlet />;
};

export default AuthLayout;