import React from "react";

const Form = () => {
  return (
    <div className="text-white border border-emerald-500/30 rounded-2xl bg-neutral-900 flex flex-col gap-4 px-6 py-5 w-full max-w-sm shadow-lg shadow-emerald-500/10">
      <div className="flex  items-center justify-between">
        <h1 className="text-xl font-bold text-emerald-400">User Form</h1>
        <img src="./close.svg" className="bg-red-600 rounded-full p-1 h-7 w-7 cursor-pointer active:scale-[0.95] transition ease duration-100" alt="Close" />
      </div>
      <form className="flex flex-col gap-4">
        <input
          type="url"
          autoComplete="image"
          placeholder="Enter Image URL"
          className="bg-transparent border-b border-emerald-500/40 text-white placeholder-emerald-100/30 py-1 outline-none focus:border-emerald-400 transition ease duration-100"
        />
        <input
          type="text"
          autoComplete="username"
          placeholder="Enter Username"
          className="bg-transparent border-b border-emerald-500/40 text-white placeholder-emerald-100/30 py-1 outline-none focus:border-emerald-400 transition ease duration-100"
        />
        <input
          type="text"
          autoComplete="description"
          placeholder="Enter Description"
          className="bg-transparent border-b border-emerald-500/40 text-white placeholder-emerald-100/30 py-1 outline-none focus:border-emerald-400 transition ease duration-100"
        />
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Enter Password"
          className="bg-transparent border-b border-emerald-500/40 text-white placeholder-emerald-100/30 py-1 outline-none focus:border-emerald-400 transition ease duration-100"
        />
        <button
          type="submit"
          className="bg-emerald-500 cursor-pointer text-white font-semibold py-2 px-4 rounded hover:bg-emerald-600 active:scale-[0.95] transition ease duration-100"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
