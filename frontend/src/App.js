import "./App.css";
// Import React, Hooks, and any other additional imports needed
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { getUser } from "./utilities/users-service";

// Import Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Import Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import VideoGamePage from "./pages/VideoGamePage";
import AllGames from "./pages/AllGames";
import CreateGamePage from "./pages/CreateGamePage";
import AllConsoles from "./pages/AllConsoles";
import ConsolePage from "./pages/ConsolePage";
import CartPage from "./pages/CartPage";

function App() {
  // Variable to hold the state of App component
  const [user, setUser] = useState(getUser());
  const [platform, setPlatform] = useState({});
  const [consoleplatform, setConsolePlatform] = useState({});
  const [cart, setCart] = useState([]);

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
          <Route path="/newgame" element={<CreateGamePage />} />
          <Route path="/api/consoles" element={<AllConsoles />} />
          <Route path="/api/consoles/:platform" element={<ConsolePage />} />
          <Route
            path="/cart"
            element={<CartPage cart={cart} setCart={setCart} />}
          />
          <Route />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
