import { useContext } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

export const useAuth = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { registeredUser, setRegisteredUser, loggedInUser, setLoggedInUser } =
    useContext(Auth);

  const loginFormSubmit = (data) => {
    let user = registeredUser.find(
      (val) => val.username === data.username && val.password === data.password,
    );
    if (!user) {
      toast.error("Invalid username or password");
      reset();
      return;
    }
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("Login successful");
    reset();
    navigate("/main");
  };

  const registerFormSubmit = (data) => {
    let arr = [...registeredUser, data];
    setRegisteredUser(arr);
    localStorage.setItem("registeredUser", JSON.stringify(arr));
    setLoggedInUser(data);
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    navigate("/login");
    toast.success("Account created successfully");
    reset();
  };

  return {
    register,
    handleSubmit,
    reset,
    navigate,
    errors,
    registerFormSubmit,
    loginFormSubmit,
  }
};
