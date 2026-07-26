import React, { useState } from "react";
import { set, useForm } from "react-hook-form";

const Form = ({ setToggle, setUsers, users }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({mode: "onChange"});

  console.log(errors);

  let formSubmit = (data) => {
    let arr = [...users, data];
    setUsers(arr);
    localStorage.setItem("users", JSON.stringify(arr));
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="text-white border border-emerald-500/30 rounded-2xl bg-neutral-900 flex flex-col gap-2 px-6 py-5 w-full max-w-sm shadow-lg shadow-emerald-500/10">
      <div className="flex  items-center justify-between">
        <h1 className="text-xl font-bold text-emerald-400">User Form</h1>
        <img
          onClick={() => setToggle((prev) => !prev)}
          src="./close.svg"
          className="bg-red-600 rounded-full p-1 h-7 w-7 cursor-pointer active:scale-[0.95] transition ease duration-100"
          alt="Close"
        />
      </div>
      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-2">
        <div className="flex flex-col">
          <input
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^\S.*$/,
                message: "Name cannot start with whitespace",
              }
            })}
            type="text"
            autoComplete="name"
            placeholder="Enter Name"
            className="bg-transparent border-b border-emerald-500/40 text-white placeholder-emerald-100/30 py-1 outline-none focus:border-emerald-400 transition ease duration-100"
          />
          {errors.name && (
            <p className="text-red-500 text-[0.7rem]">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              }
            })}
            type="email"
            autoComplete="email"
            placeholder="Enter Email"
            className="bg-transparent border-b border-emerald-500/40 text-white placeholder-emerald-100/30 py-1 outline-none focus:border-emerald-400 transition ease duration-100"
          />
          {errors.email && (
            <p className="text-red-500 text-[0.7rem]">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            {...register("description", {
              required: "Description is required",
            })}
            type="text"
            autoComplete="description"
            placeholder="Enter Description"
            className="bg-transparent border-b border-emerald-500/40 text-white placeholder-emerald-100/30 py-1 outline-none focus:border-emerald-400 transition ease duration-100"
          />
          {errors.description && (
            <p className="text-red-500 text-[0.7rem]">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            {...register("pin", {
              required: "Pin is required",
              minLength: {
                value: 6,
                message: "Pin must be at least 6 digits",
              },
              maxLength: {
                value: 6,
                message: "Pin must be at most 6 digits",
              },
            })}
            type="pin"
            autoComplete="current-pin"
            placeholder="Enter Pin"
            className="bg-transparent border-b border-emerald-500/40 text-white placeholder-emerald-100/30 py-1 outline-none focus:border-emerald-400 transition ease duration-100"
          />
          {errors.pin && (
            <p className="text-red-500 text-[0.7rem]">
              {errors.pin.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            {...register("image", { required: "Profile URL is required" })}
            type="url"
            autoComplete="image"
            placeholder="Enter Profile URL"
            className="bg-transparent border-b border-emerald-500/40 text-white placeholder-emerald-100/30 py-1 outline-none focus:border-emerald-400 transition ease duration-100"
          />
          {errors.image && (
            <p className="text-red-500 text-[0.7rem]">{errors.image.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-2 bg-emerald-500 cursor-pointer text-white font-semibold py-2 px-4 rounded hover:bg-emerald-600 active:scale-[0.95] transition ease duration-100"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
