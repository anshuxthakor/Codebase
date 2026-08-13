import React from "react";

const DrawingHeader = ({ label, rev = "rev. a" }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <span className="font-mono text-[10px] tracking-[0.25em] text-[#5b7089] uppercase">
        {label}
      </span>
      <span className="font-mono text-[10px] tracking-[0.25em] text-[#5b7089] uppercase">
        {rev}
      </span>
    </div>
  );
};

export default DrawingHeader;
