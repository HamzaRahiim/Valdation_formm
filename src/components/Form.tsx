"use client";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const onSubmit = async (data: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      reset();
      throw new Error();
    } catch (error) {
      setError("root", {
        message: "Email is already taken",
      });
    }
  };
  return (
    <form className="wrapper" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="heading">Advance Form</h1>
      <input
        {...register("email", {
          required: "Email is required",
          validate: (value: any) => {
            if (!value.includes("@")) {
              return "@ must be includes";
            }
            return true;
          },
        })}
        type="text"
        placeholder="Email"
        className="input"
      />
      {errors.email && <p className="text-red-400">{errors.email.message}</p>}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
        type="password"
        placeholder="Password"
        className="input"
      />
      {errors.password && (
        <p className="text-red-400">{errors.password.message}</p>
      )}
      <button disabled={isSubmitting} className="button">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
      {errors.root && <p className="text-red-400">{errors.root.message}</p>}
    </form>
  );
};
export default Form;
