import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import { useNavigate } from "react-router-dom";

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
    setError("");

    setTimeout(() => {
      const LOCAL_USERNAME = "mor_2314"; 
      const LOCAL_PASSWORD = "83r5^_";

      if (user.username === LOCAL_USERNAME && user.password === LOCAL_PASSWORD) {
        const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vcl8yMzE0IiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        
        localStorage.setItem("userToken", fakeToken);
        saveUserToken();
        setIsLoading(false);
        navigate("/shop");
      } else {
        setIsLoading(false);
        setError("Invalid username or password");
      }
    }, 500); 
  };

  return (
    <div className="loginSignup">
      {error.length > 0 ? <div className="error">{error}</div> : ""}
      <div className="loginSignup-container">
        <h1>Login</h1>
        <form onSubmit={sentDataToAPI}>
          <div className="loginSignup-fields">
            <input
              onChange={getUserData}
              type="text"
              placeholder="Username"
              name="username"
              value={user.username}
              required
            />
            <input
              onChange={getUserData}
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              required
            />
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading === true ? (
              <i className="fa-solid fa-circle-notch fa-spin"></i>
            ) : (
              "Continue"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;