import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import BlueprintFrame from "../../components/BlueprintFrame";
import DrawingHeader from "../../components/DrawingHeader";
import AuthTitle from "../../components/AuthTitle";
import FormField from "../../components/FormField";
import PasswordField from "../../components/PasswordField";
import RulerDivider from "../../components/RulerDivider";
import AuthFooter from "../../components/AuthFooter";
import { Auth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { registeredUser, setRegisteredUser, setLoggedInUser } = useContext(Auth);

  const onSubmit = (data) => {
    let arr = [...registeredUser, data];
    setRegisteredUser(arr);
    localStorage.setItem("registeredUser", JSON.stringify(arr));
    setLoggedInUser(data);
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    navigate("/main");
    toast.success("Account created successfully");
    reset();
  };

  return (
    <BlueprintFrame>
      <DrawingHeader label="dwg no. 002 — register" />
      <AuthTitle title="New account" subtitle="three fields, fully specified" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <FormField
          id="name"
          letter="A"
          label="name"
          type="text"
          placeholder="Anshu Thakor"
          autoComplete="name"
          error={errors.name}
          registration={register("name", {
            required: "name is required",
            minLength: { value: 3, message: "min. 3 characters" },
            pattern: { value: /^[A-Za-z\s]+$/, message: "letters and spaces only" },
          })}
        />

        <FormField
          id="username"
          letter="B"
          label="username"
          type="text"
          placeholder="anshuxthakor"
          autoComplete="username"
          error={errors.username}
          registration={register("username", {
            required: "username is required",
            minLength: { value: 4, message: "min. 4 characters" },
            pattern: {
              value: /^[a-zA-Z0-9_.]+$/,
              message: "letters, numbers, _ and . only",
            },
          })}
        />

        <PasswordField
          id="password"
          letter="C"
          error={errors.password}
          registration={register("password", {
            required: "password is required",
            minLength: { value: 6, message: "min. 6 characters" },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
              message: "must include a letter and a number",
            },
          })}
        />

        <button
          type="submit"
          className="w-full bg-[#16324f] text-white text-sm font-bold uppercase tracking-wide py-2.5 hover:bg-[#d7263d] active:scale-95 transition-all duration-100 cursor-pointer mt-1"
        >
          Create account
        </button>
      </form>

      <RulerDivider />

      <AuthFooter
        prompt="Already registered?"
        actionLabel="Log in"
        onAction={() => navigate("/login")}
      />
    </BlueprintFrame>
  );
};

export default Register;