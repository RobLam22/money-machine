import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Passwords do not match.";
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
      if (input.password != input.confirmPassword) {
        toast.error("Passwords do not match", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        await createUser(email, password);
        navigate("/dashboard");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign up for a free account</h1>
        <p className="py-2">
          Already have an account?{" "}
          <Link to="/signin" className="underline">
            Sign in.
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
            onBlur={validateInput}
            className="border p-3"
            type="email"
            placeholder="Enter Email"
            name="email"
            required
          />
          {inputError.email && <span className="err">{inputError.email}</span>}
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
              onInputChange(e);
            }}
            onBlur={validateInput}
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
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Confirm Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
              onInputChange(e);
            }}
            onBlur={validateInput}
            className="border p-3"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />
          {inputError.confirmPassword && (
            <span className="err">{inputError.confirmPassword}</span>
          )}
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
          Sign Up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
