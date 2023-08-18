import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
  });
  const onInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    validateInput(e);
  };
  const validateInput = (e) => {
    let { name, value } = e.target;
    setInputError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : inputError.confirmPassword;
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
      toast.error("Try Again! Incorrect credentials", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="max-w-[700px] mx-auto my-16 p-4">
        <div>
          <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
          <p className="py-2">
            Don't have an account yet?{" "}
            <Link to="/signup" className="underline">
              Sign up.
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Email Address</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                onInputChange(e);
              }}
              className="border p-3"
              type="email"
              placeholder="Enter Email"
              name="email"
              required
            />
            {inputError.email && (
              <span className="err">{inputError.email}</span>
            )}
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                onInputChange(e);
              }}
              className="border p-3"
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />
            {inputError.password && (
              <span className="err">{inputError.password}</span>
            )}
          </div>
          <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
            Sign In
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Signin;
