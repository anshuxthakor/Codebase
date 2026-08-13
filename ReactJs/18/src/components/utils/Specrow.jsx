import React from "react";

/**
 * A single label/value line, e.g. Email / Phone / City.
 * Use `stacked` when the row sits in a narrow column (label above value)
 * instead of the default side-by-side layout.
 */
const SpecRow = ({ label, value, className = "", stacked = false }) => {
  if (stacked) {
    return (
      <div className={`px-3 py-2 ${className}`}>
        <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#5b7089]">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-[#16324f] break-all">
          {value}
        </p>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-between gap-4 px-3 py-2 ${className}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5b7089]">
        {label}
      </span>
      <span className="max-w-[65%] break-all text-right text-sm font-semibold text-[#16324f]">
        {value}
      </span>
    </div>
  );
};

export default SpecRow;