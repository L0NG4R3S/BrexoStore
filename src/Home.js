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
            href="cadastrarBazar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cadastrar Bazar
          </a>
          <a
            className="App-link"
            href="cadastrarUsuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cadastrar Usuario
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
