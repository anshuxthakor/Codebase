import React from "react";

const FormField = ({
  id,
  letter,
  label,
  error,
  registration,
  className = "",
  endAdornment,
  ...inputProps
}) => {
  const input = (
    <input
      id={id}
      {...registration}
      {...inputProps}
      className={`w-full bg-transparent border-0 border-b-[1.5px] px-0.5 py-2 text-sm text-[#16324f] placeholder:text-[#a9b7c4] outline-none transition-colors ${
        endAdornment ? "pr-8" : ""
      } ${
        error
          ? "border-[#d7263d]"
          : "border-[#16324f]/30 focus:border-[#d7263d]"
      } ${className}`}
    />
  );

  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5b7089] mb-1.5"
      >
        <span className="flex items-center justify-center h-4 w-4 border border-[#16324f] text-[9px] text-[#16324f]">
          {letter}
        </span>
        {label}
      </label>
      {endAdornment ? (
        <div className="relative">
          {input}
          {endAdornment}
        </div>
      ) : (
        input
      )}
      {error && (
        <span className="flex items-center gap-1 mt-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#d7263d]">
          <span className="inline-block h-1 w-1 bg-[#d7263d]" />
          {error.message}
        </span>
      )}
    </div>
  );
};

export default FormField;
