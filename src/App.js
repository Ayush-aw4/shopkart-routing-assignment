import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// TODO: Import About
// TODO: Import Contact
// TODO: Import React Router
import about from "./pages/About";
import contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        
          <Route exact path="/" component={Home} />
          <Route path="/about" component={about} />
          <Route path="/contact" component={contact} />
        
      </Routes>
      {/* TODO: Implement Routing Here */}
      
      <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
