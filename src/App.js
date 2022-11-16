/* eslint-disable react/jsx-no-undef */
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './styles/App.css';
import CadastrarBrecho from "./pages/CadastrarBrecho";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { Provider } from 'react-redux'
import store from './store'
import CadastrarProdutos from "./pages/CadastrarProdutos"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/cadastrarBrecho" element={<CadastrarBrecho />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/cadastrarProdutos" element={<CadastrarProdutos />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
