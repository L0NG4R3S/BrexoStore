import React from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Logo } from "../../assets";

const Home = () => {
  const userType = useSelector((state) => state.cliente.userType)
  console.log('userType', userType)

  return (
    <C.Container>
      <C.NavBar>
        <img style={{ marginLeft: 30, width: 110 }} alt="logo" src={Logo} />
        <C.NavBeggining>
          {userType === 'customer' ? (
            <C.LabelSignup>
              <C.Strong>
                <Link style={{ color: '#FFFB91' }} to="/cadastrarBrecho">Cadastrar minha Loja</Link>
              </C.Strong>
            </C.LabelSignup>
          ) : (
            <C.LabelSignup>
              <C.Strong>
                <Link style={{ color: '#FFFB91' }} to="/cadastrarProdutos">Cadastrar produto</Link>
              </C.Strong>
            </C.LabelSignup>
          )}
        </C.NavBeggining>
        <C.LabelSignup>
          <C.Strong>
            <Link style={{ color: '#FFFB91' }} to="/">Sair</Link>
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