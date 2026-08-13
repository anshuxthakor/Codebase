import { useAuth } from "../../hooks/useAuth";
import BlueprintFrame from "../../components/utils/BlueprintFrame";
import DrawingHeader from "../../components/utils/DrawingHeader";
import AuthTitle from "../../components/utils/AuthTitle";
import FormField from "../../components/utils/FormField";
import PasswordField from "../../components/utils/PasswordField";
import RulerDivider from "../../components/utils/RulerDivider";
import AuthFooter from "../../components/utils/AuthFooter";

const Register = () => {
  const { register, handleSubmit, reset, errors, registerFormSubmit, navigate } = useAuth();
  return (
    <BlueprintFrame>
      <DrawingHeader label="dwg no. 002 — register" />
      <AuthTitle title="New account" subtitle="three fields, fully specified" />
      <form onSubmit={handleSubmit(registerFormSubmit)} className="space-y-4" noValidate>
        <FormField
          id="name"
          letter="A"
          label="name"
          type="text"
          placeholder="Anshu Thakor"
          autoComplete="name"
          error={errors.name}
          registration={register("name", {
            required: "name is required",
            minLength: { value: 3, message: "min. 3 characters" },
            pattern: { value: /^[A-Za-z\s]+$/, message: "letters and spaces only" },
          })}
        />
        <FormField
          id="username"
          letter="B"
          label="username"
          type="text"
          placeholder="anshuxthakor"
          autoComplete="username"
          error={errors.username}
          registration={register("username", {
            required: "username is required",
            minLength: { value: 4, message: "min. 4 characters" },
            pattern: {
              value: /^[a-zA-Z0-9_.]+$/,
              message: "letters, numbers, _ and . only",
            },
          })}
        />
        <PasswordField
          id="password"
          letter="C"
          error={errors.password}
          registration={register("password", {
            required: "password is required",
            minLength: { value: 6, message: "min. 6 characters" },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
              message: "must include a letter and a number",
            },
          })}
        />
        <button
          type="submit"
          className="w-full bg-[#16324f] text-white text-sm font-bold uppercase tracking-wide py-2.5 hover:bg-[#d7263d] active:scale-95 transition-all duration-100 cursor-pointer mt-1"
        >
          Create account
        </button>
      </form>
      <RulerDivider />
      <AuthFooter
        prompt="Already registered?"
        actionLabel="Log in"
        onAction={() => navigate("/")}
      />
    </BlueprintFrame>
  );
};

export default Register;