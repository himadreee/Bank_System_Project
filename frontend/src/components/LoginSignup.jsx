import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordToggle = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8081/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(`Login failed: ${errorData.message}`);
        return;
      }

      const data = await response.json();
      localStorage.setItem("userId", data.user.id); // Store user ID
      localStorage.setItem("token", data.token); // Store token for further authentication

      // Navigate to the correct dashboard based on user role
      if (data.user.role === "customer") {
        navigate("/customer-dashboard");
      } else if (data.user.role === "employee") {
        navigate("/employee-dashboard");
      } else {
        setErrorMessage("Unknown user role.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setErrorMessage("Network error, please try again.");
    }
  };

  return (
    <div className="login-signup-container">
      <h2>Sign In</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Enter your email and password to sign in!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            placeholder="mail@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Min. 8 characters"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={handlePasswordToggle}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" id="remember-login" />
            Keep me logged in
          </label>
          <NavLink to="/auth/forgot-password">Forgot password?</NavLink>
        </div>
        <button type="submit" className="submit-button">Sign In</button>
      </form>
      <p>
        Not registered yet?
        <NavLink to="/auth/sign-up"> Create an Account</NavLink>
      </p>
    </div>
  );
};

export default LoginSignup;
