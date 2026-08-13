import React from "react";

/**
 * Corner-bracketed white panel, same visual language as BlueprintFrame
 * but without the fullscreen centering — for embedding in grids/lists.
 */
const SpecCard = ({ children, maxWidth = "max-w-md" }) => {
  return (
    <div className={`relative w-full ${maxWidth}`}>
      <span className="absolute -top-3 -left-3 h-5 w-5 border-t-2 border-l-2 border-[#d7263d]" />
      <span className="absolute -top-3 -right-3 h-5 w-5 border-t-2 border-r-2 border-[#d7263d]" />
      <span className="absolute -bottom-3 -left-3 h-5 w-5 border-b-2 border-l-2 border-[#d7263d]" />
      <span className="absolute -bottom-3 -right-3 h-5 w-5 border-b-2 border-r-2 border-[#d7263d]" />

      <div className="bg-white border-[1.5px] border-[#16324f] px-5 py-5 sm:px-6">
        {children}
      </div>
    </div>
  );
};

export default SpecCard;