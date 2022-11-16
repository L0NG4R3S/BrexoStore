import React from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Home = () => {
  const userType = useSelector((state) => state.cliente.userType)
  console.log('userType', userType)

  return (
    <C.Container>
      <C.NavBar>
        <C.NavBeggining>
          {userType === 'customer' ? (
            <C.LabelSignup>
              <C.Strong>
                <Link to="/cadastrarBrecho">Cadastrar minha Loja</Link>
              </C.Strong>
            </C.LabelSignup>
          ) : (
            <C.LabelSignup>
              <C.Strong>
                <Link to="/cadastrarProdutos">Cadastrar produto</Link>
              </C.Strong>
            </C.LabelSignup>
          )}
        </C.NavBeggining>
        <C.LabelSignup>
          <C.Strong>
            <Link to="/">Sair</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.NavBar>
      <C.Content>
        <C.Label>HOME - A ser desenvolvida</C.Label>

      </C.Content>
    </C.Container>
  );
};

export default Home;
