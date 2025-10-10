import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import axios from "axios";
import { data, Link, Navigate, useNavigate } from "react-router-dom";
const LoginSignup = ({ saveUserToken }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const getUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const sentDataToAPI = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let { data } = await axios.post(
        `https://fakestoreapi.com/auth/login`,
        user
      );
      if (data.token) {
        setIsLoading(false);
        localStorage.setItem("userToken", data.token);
        saveUserToken();
        navigate("/shop"); // بدل navigate("/")

        console.log("Token:", localStorage.getItem("userToken"));
      }
    } catch (error) {
      setIsLoading(false);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="loginSignup">
      {error.length > 0 ? <div className="error">{error}</div> : ""}
      <div className="loginSignup-container">
        <h1>Login</h1>
        <div className="loginSignup-fields">
          <input
            onChange={getUserData}
            type="text"
            placeholder="Username"
            name="username"
          />
          <input
            onChange={getUserData}
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>

        <button onClick={sentDataToAPI}>
          {isLoading === true ? (
            <i className="fa-solid fa-circle-notch fa-spin"></i>
          ) : (
            "Continue"
          )}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
