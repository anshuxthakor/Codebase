import React from "react";

const UserCard = () => {
  return (
    <div className="bg-neutral-900 border border-emerald-500/30 h-50 flex flex-col items-center justify-center rounded-lg gap-1 px-2">
      <img
        src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-35 h-20 object-cover border border-emerald-500/40 rounded-xl"
        alt="User"
      />
      <h1 className="text-green-300 font-bold text-lg">UserName</h1>
      <p className="text-white/70 text-xs text-center w-40">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        nihil!
      </p>
    </div>
  );
};

export default UserCard;
