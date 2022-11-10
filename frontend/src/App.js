import "./App.css";
// Import React, Hooks, and any other additional imports needed
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "./utilities/users-service";

//Import Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar";

function App() {
  // Variable to hold the state of App component
  const [user, setUser] = useState(getUser());
  // console.log(user);
  return (
    <div className="App">
      <>
        <NavBar setUser={setUser} user={user} />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/signup"
            element={<SignUpPage setUser={setUser} user={user} />}
          />
          <Route
            path="/login"
            element={<LoginPage setUser={setUser} user={user} />}
          />
        </Routes>
      </>
    </div>
  );
}

export default App;
