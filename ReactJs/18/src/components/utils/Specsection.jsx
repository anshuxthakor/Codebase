import React from "react";

/**
 * A titled group of SpecRows — letter badge + label header, rows in a
 * bordered, divided list underneath. Mirrors the letter-badge pattern
 * used for form field labels and nav items elsewhere in this theme.
 */
const SpecSection = ({ letter, title, children }) => {
  return (
    <div>
      <h3 className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5b7089] mb-2">
        <span className="flex items-center justify-center h-4 w-4 border border-[#16324f] text-[9px] text-[#16324f]">
          {letter}
        </span>
        {title}
      </h3>
      <div className="divide-y divide-[#16324f]/10 border border-[#16324f]/15">
        {children}
      </div>
    </div>
  );
};

export default SpecSection;