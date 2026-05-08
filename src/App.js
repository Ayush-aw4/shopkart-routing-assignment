import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// TODO: Import About
// TODO: Import Contact
// TODO: Import React Router
import about from "./pages/About";
import contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={about} />
          <Route path="/contact" component={contact} />
        </Switch>
      </Router>
      {/* TODO: Implement Routing Here */}
      
      <Home />
    </div>
  );
}

export default App;
