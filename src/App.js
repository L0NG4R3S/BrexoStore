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
import Home from "./pages/Home"
import SigninWithBrecho from "./pages/SigninWithBrecho"
import EditarProduto from "./pages/EditarProduto"


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastrarBrecho" element={<CadastrarBrecho />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/cadastrarProdutos" element={<CadastrarProdutos />} />
              <Route exact path="/editarProduto" element={<EditarProduto />} />
              <Route path="/signinWithBrecho" element={<SigninWithBrecho />} />

            </Routes>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
