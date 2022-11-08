// IMPORT REACT
import React, { useState } from "react";

// ADDITIONAL IMPORTS
import { login } from "./../utilities/users-service";
import { useNavigate } from "react-router-dom";

// CREATE COMPONENT
const LoginForm = ({ setUser }) => {
  // Create different state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Create a function to handle input changes
  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      // Retrieve the logged in user
      const user = await login({ email, password });

      // Add the user to state
      console.log(user.data);
      setUser(user.data);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div
        className="form-container"
        onSubmit={(e) => {
          return handleFormSubmission(e);
        }}
      >
        <h1>Log In</h1>

        <form className="authForm" autoComplete="off">
          <div className="inputlabel">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => {
                return handleInputChange(e);
              }}
              value={email}
            />
          </div>
          <div className="inputlabel">
            <label>Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={(e) => {
                return handleInputChange(e);
              }}
              value={password}
            />
          </div>
          <div className="loginbutton">
            <button type="submit">LOG IN</button>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
};

// EXPORT COMPONENT
export default LoginForm;
