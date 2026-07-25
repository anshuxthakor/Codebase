import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-neutral-900 border border-emerald-500/30 h-50 flex flex-col items-center justify-center rounded-lg gap-1 px-2">
      <img
        src={user.image}
        className="w-35 h-20 object-cover border border-emerald-500/40 rounded-xl"
        alt="User"
      />
      <h1 className="text-green-300 font-bold text-lg">{user.name}</h1>
      <p className="text-white/70 text-xs text-center w-40">
        {user.description}
      </p>
    </div>
  );
};

export default UserCard;
