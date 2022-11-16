/* eslint-disable react/jsx-no-undef */
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './styles/App.css';
import CadastrarCliente from "./pages/CadastrarCliente";
import CadastrarBrecho from "./pages/CadastrarBrecho";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/cadastrarCliente" element={<CadastrarCliente />} />
              <Route path="/cadastrarBrecho" element={<CadastrarBrecho />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
