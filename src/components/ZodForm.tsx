"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});
type FormData = z.infer<typeof schema>;

const ZodForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    try {
      console.log("Form submitted");
      console.log("user email ", data.email);
      console.log("user password ", data.password);
      reset();
      // logic for catching error
    } catch (error) {
      setError("root", {
        message: "Email is already taken",
      });
    }
  };
  return (
    <form className="wrapper" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="heading">Advance Form with Zod Library</h1>
      <input
        {...register("email")}
        type="text"
        placeholder="Email"
        className="input"
      />
      {errors.email && <p className="text-red-400">{errors.email.message}</p>}
      <input
        {...register("password")}
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
export default ZodForm;
