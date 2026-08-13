import React from "react";

/**
 * Small "STATUS" pill — square dot (not a circle, to stay on-theme)
 * plus mono uppercase label. Color is caller-controlled since status
 * semantics (active/inactive) shouldn't be tied to the red/navy brand
 * accents.
 */
const StatusBadge = ({ label, color = "#2f9e44" }) => {
  return (
    <span className="flex items-center gap-2 border border-[#16324f]/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#16324f]">
      <span
        className="h-2 w-2 shrink-0"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
};

export default StatusBadge;