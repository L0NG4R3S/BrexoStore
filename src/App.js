import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './styles/App.css';
import CadastrarCliente from "./CadastrarCliente";
import CadastrarBrecho from "./CadastrarBrecho";
import Home from "./Home";

function App() {
  return (
    <div className="App">
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastrarCliente" element={<CadastrarCliente />} />
              <Route path="/cadastrarBrecho" element={<CadastrarBrecho />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
