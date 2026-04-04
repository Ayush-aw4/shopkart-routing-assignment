import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// TODO 1: Import BrowserRouter, Routes, Route
// TODO 2: Import About and Contact pages

function App() {
  return (
    <div>
      {/* TODO 3: Wrap inside BrowserRouter */}

      <Navbar />

      {/* TODO 4: Replace Home with Routes */}
      <Home />

      {/* 
        Create routes:
        "/" → Home
        "/about" → About
        "/contact" → Contact
      */}

    </div>
  );
}

export default App;
