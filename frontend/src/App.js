import "./App.css";
// Import React, Hooks, and any other additional imports needed
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { getUser } from "./utilities/users-service";

//Import Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar";
import VideoGamePage from "./pages/VideoGamePage";
import Footer from "./components/Footer";
import AllGames from "./pages/AllGames";

function App() {
  // Variable to hold the state of App component
  const [user, setUser] = useState(getUser());
  const [platform, setPlatform] = useState({});

  const params = useParams();
  const platformParams = params.platform;
  useEffect(() => {
    setPlatform(platformParams);
  }, []);

  return (
    <div className="App">
      <>
        <NavBar setUser={setUser} user={user} setPlatform={setPlatform} />
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
          <Route path="/api/videogames" element={<AllGames />} />
          <Route path="/api/videogames/:platform" element={<VideoGamePage />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
