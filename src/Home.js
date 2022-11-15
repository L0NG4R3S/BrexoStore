import React from "react";
import './styles/App.css';
import './styles/Home.css';

function Home() {
  return (
    <div className="App">
      <div className="App-body">
        <div className="Home-login">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="cadastrarCliente"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cadastrar Cliente
          </a>
          <a
            className="App-link"
            href="cadastrarBrecho"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cadastrar Brecho
          </a>
          <a
            className="App-link"
            href="login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fazer Login
          </a>

          <a
            className="App-link"
            href="signup"
            target="_blank"
            rel="noopener noreferrer"
          >
             Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
