import React, { useState } from "react";
import "../styles/Login.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => (responseData = data));
    
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      //window.location.replace("/store");
      toast.success("Login Successful! Redirecting....");
      setTimeout(() => {
        window.location.replace("/store");
      }, 1300); 
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("signup executed", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "post",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/store");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-fields">
            {state === "Sign Up" ? (
              <input
                name="username"
                onChange={changeHandler}
                value={formData.username}
                type="text"
                placeholder="Your Name"
              />) : (<></>)}
            <input
              name="email"
              onChange={changeHandler}
              value={formData.email}
              type="email"
              placeholder="Email Address"
            />
            <input
              name="password"
              onChange={changeHandler}
              value={formData.password}
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            onClick={() => {
              state === "Login" ? login() : signup();
            }}
          >
            Save
          </button>
          {state === "Sign Up" ? (
            <p className="loginsignup-login">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setState("Login");
                }}
              >
                Login Here
              </span>
            </p>) : (<p className="loginsignup-login">
              Create an account?{" "}
              <span
                onClick={() => {
                  setState("Sign Up");
                }}
              >
                Sign up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
