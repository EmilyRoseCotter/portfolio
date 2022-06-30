import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import NavBar from "./Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exect path="/" component={Home} />
          <Route exect path="/about" component={About} />
          <Route exect path="/projects" component={Projects} />\
          <Route exect path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;