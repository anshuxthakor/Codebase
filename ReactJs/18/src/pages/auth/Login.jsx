import { useAuth } from "../../hooks/useAuth";
import BlueprintFrame from "../../components/utils/BlueprintFrame";
import DrawingHeader from "../../components/utils/DrawingHeader";
import AuthTitle from "../../components/utils/AuthTitle";
import FormField from "../../components/utils/FormField";
import PasswordField from "../../components/utils/PasswordField";
import RulerDivider from "../../components/utils/RulerDivider";
import AuthFooter from "../../components/utils/AuthFooter";

const Login = () => {
  const { register, handleSubmit, reset, errors, loginFormSubmit, navigate } = useAuth();
  return (
    <BlueprintFrame>
      <DrawingHeader label="dwg no. 001 — login" />
      <AuthTitle title="Sign in" subtitle="access your workspace" />
      <form onSubmit={handleSubmit(loginFormSubmit)} className="space-y-4" noValidate>
        <FormField
          id="username"
          letter="A"
          label="Username"
          type="text"
          placeholder="anshuxthakor"
          autoComplete="username"
          error={errors.username}
          registration={register("username", {
            required: "username is required",
            minLength: { value: 4, message: "min. 4 characters" },
          })}
        />
        <PasswordField
          id="password"
          letter="B"
          error={errors.password}
          autoComplete="current-password"
          registration={register("password", {
            required: "password is required",
            minLength: { value: 6, message: "min. 6 characters" },
          })}
        />
        <button
          type="submit"
          className="w-full bg-[#16324f] text-white text-sm font-bold uppercase tracking-wide py-2.5 hover:bg-[#d7263d] mt-1 active:scale-95 transition-all duration-100 cursor-pointer"
        >
          Sign in
        </button>
      </form>
      <RulerDivider />
      <AuthFooter
        prompt="No account?"
        actionLabel="Register here"
        onAction={() => navigate("/register")}
      />
    </BlueprintFrame>
  );
};

export default Login;
