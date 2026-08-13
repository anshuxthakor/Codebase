import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import FormField from "./FormField";

const PasswordField = ({
  id = "password",
  letter = "C",
  label = "Password",
  error,
  registration,
  autoComplete = "new-password",
  placeholder = "••••••••",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      id={id}
      letter={letter}
      label={label}
      error={error}
      registration={registration}
      type={showPassword ? "text" : "password"}
      autoComplete={autoComplete}
      placeholder={placeholder}
      endAdornment={
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#5b7089] hover:text-[#16324f] transition-colors"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
        </button>
      }
    />
  );
};

export default PasswordField;
