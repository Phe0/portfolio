import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Algorithms from "./pages/Algorithms";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/experience" exact element={<Experience />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/skills" exact element={<Skills />} />
        <Route path="/algorithms" exact element={<Algorithms />} />
      </Routes>
    </div>
  );
}

export default App;
