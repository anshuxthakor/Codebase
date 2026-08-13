import React from "react";

const RulerDivider = ({ measurement = "347mm" }) => {
  return (
    <div className="flex items-center gap-1 mt-5 mb-4 text-[#c3cbd3]">
      <span className="h-2 w-px bg-current" />
      <span className="flex-1 border-t border-current" />
      <span className="font-mono text-[9px] text-[#a9b7c4] px-1">
        {measurement}
      </span>
      <span className="flex-1 border-t border-current" />
      <span className="h-2 w-px bg-current" />
    </div>
  );
};

export default RulerDivider;
