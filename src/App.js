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
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastrarCliente" element={<CadastrarCliente />} />
              <Route path="/cadastrarBrecho" element={<CadastrarBrecho />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
