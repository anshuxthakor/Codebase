import React from "react";

const AuthFooter = ({ prompt, actionLabel, onAction }) => {
  return (
    <p className="text-xs text-[#5b7089] text-center">
      {prompt}{" "}
      <button
        type="button"
        className="text-[#d7263d] font-semibold hover:underline cursor-pointer"
        onClick={onAction}
      >
        {actionLabel}
      </button>
    </p>
  );
};

export default AuthFooter;
