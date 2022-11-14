import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import CadastrarBazar from "./CadastrarBazar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastrarBazar" element={<CadastrarBazar />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
