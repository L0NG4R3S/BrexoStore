import React from "react";
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="cadastrarBazar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cadastrar Bazar
        </a>
      </header>
    </div>
  );
}

export default Home;