import "./App.css";
// Import React, Hooks, and any other additional imports needed
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Import Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar";

function App() {
  // Variable to hold the state of App component
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <div className="App">
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
