import React from "react";

const AuthTitle = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="text-2xl font-black uppercase tracking-tight text-[#16324f] leading-none">
        {title}
      </h1>
      <div className="flex items-center gap-2 mt-2 mb-5">
        <span className="h-0.75 w-8 bg-[#d7263d]" />
        <span className="font-mono text-[11px] text-[#5b7089]">{subtitle}</span>
      </div>
    </>
  );
};

export default AuthTitle;
