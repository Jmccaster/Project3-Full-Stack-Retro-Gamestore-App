import React from "react";
import LoginForm from "../components/LoginForm";

function LoginPage({ setUser }) {
  return (
    <div className="PageContainer">
      <br />
      <br />
      <a href="/signup" className="button">
        Don't Have an Account? Create One Here
      </a>
      <LoginForm setUser={setUser} />
    </div>
  );
}

export default LoginPage;
