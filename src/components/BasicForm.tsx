"use client";
import { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // reset the values of error
    setError({ email: "", password: "" });

    // Manual validation
    if (!email.includes("@")) {
      setError({ ...error, email: "Email must include @" });
      return;
    }

    if (password.length < 8) {
      setError({
        ...error,
        password: "password must be at least 8 characters",
      });
      return;
    }
    // form submition
    console.log("Form Submitted");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="wrapper">
      <h1 className="heading">Simple Hooks Form</h1>
      <input
        type="email"
        placeholder="Email"
        className="input"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {error.email && <p className="text-red-400">{error.email}</p>}
      <input
        type="password"
        placeholder="Password"
        className="input"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {error.password && <p className="text-red-400">{error.password}</p>}
      <button className="button">Submit</button>
    </form>
  );
};
export default BasicForm;
