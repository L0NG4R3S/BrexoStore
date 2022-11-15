/* eslint-disable react/jsx-no-undef */
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
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastrarCliente" element={<CadastrarCliente />} />
              <Route path="/cadastrarBrecho" element={<CadastrarBrecho />} />
              <Route exact path="/home" element={<Private Item={Home} />} />
              <Route path="/login" element={<Signin />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route path="*" element={<Signin />} />
      
            </Routes>
          </div>3000
        </Router>
    </div>
  );
}

export default App;
