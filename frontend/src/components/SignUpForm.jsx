// IMPORT REACT
import React, { useState } from "react";

// ADDITIONAL IMPORTS
import { signUp } from "../utilities/users-service";
import { useNavigate } from "react-router-dom";

// CREATE COMPONENT
const SignUpForm = ({ setUser }) => {
  // Create different state for the signup component
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Assuming the passed in password is not equal to the password confirm
  const disable = password !== confirm;

  // Create a handle change method to keep track of changes inside the form
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  };
  const handleErrorChange = (e) => {
    setError(e.target.value);
  };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();

    // Retrieve state
    const state = { name, email, password, confirm, error };
    try {
      // Make a copy of our data
      const formData = { ...state };

      delete formData["confirm"];
      delete formData["error"];

      // Send the data to our backend
      const user = await signUp(formData);

      // Log the data to the console
      console.log(user.data);
      setUser(user.data);
      navigate("/home");
    } catch (error) {
      setError("Sign Up Failed - Try Again");
    }
  };
  // Render component
  return (
    <div>
      <div className="form-container">
        <h1>Sign Up</h1>
        <form
          className="authForm"
          autoComplete="off"
          onSubmit={(e) => {
            return handleFormSubmission(e);
          }}
        >
          <div className="inputlabel">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                return handleNameChange(e);
              }}
              value={name}
              required
            />
          </div>
          <div className="inputlabel">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => {
                return handleEmailChange(e);
              }}
              value={email}
              required
            />
          </div>
          <div className="inputlabel">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                return handlePasswordChange(e);
              }}
              value={password}
              required
            />
          </div>
          <div className="inputlabel">
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              onChange={(e) => {
                return handleConfirmChange(e);
              }}
              value={confirm}
              required
            />
          </div>
          <div className="loginbutton">
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
};

// EXPORT COMPONENT
export default SignUpForm;
