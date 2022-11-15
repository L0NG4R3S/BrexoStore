import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './styles/App.css';
import CadastrarBazar from "./CadastrarBazar";
import CadastrarUser from "./CadastrarUser";
import Home from "./Home";

function App() {
  return (
    <div className="App">
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastrarBazar" element={<CadastrarBazar />} />
              <Route path="/cadastrarUsuario" element={<CadastrarUser />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
