import React from "react";

const BlueprintFrame = ({ children, maxWidth = "max-w-md" }) => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{
        backgroundColor: "#eef1f4",
        backgroundImage:
          "linear-gradient(#d7dee5 1px, transparent 1px), linear-gradient(90deg, #d7dee5 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }}
    >
      <div className={`relative w-full ${maxWidth}`}>
        <span className="absolute -top-3 -left-3 h-5 w-5 border-t-2 border-l-2 border-[#d7263d]" />
        <span className="absolute -top-3 -right-3 h-5 w-5 border-t-2 border-r-2 border-[#d7263d]" />
        <span className="absolute -bottom-3 -left-3 h-5 w-5 border-b-2 border-l-2 border-[#d7263d]" />
        <span className="absolute -bottom-3 -right-3 h-5 w-5 border-b-2 border-r-2 border-[#d7263d]" />

        <div className="bg-white border-[1.5px] border-[#16324f] px-7 py-6 sm:px-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlueprintFrame;
