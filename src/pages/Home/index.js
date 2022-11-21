import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Logo } from "../../assets";
import { buscarProdutos } from '../../sdk/brecho'

const Home = () => {
  const [produtos, setProdutos] = useState([])
  const userType = useSelector((state) => state.cliente.userType);

  const getProdutos = async () => {
    const result = await buscarProdutos()
    setProdutos(result.data)
  }

  useEffect(()=>{
    if(userType !== "customer"){
      getProdutos()
    }
  }, [userType]);

  const listItems = produtos.map((d) => 
    <C.ProductView key={d.id}>
      <C.Label>Nome do produto: {d.name}</C.Label>
      <C.Label>Descrição do produto: {d.description}</C.Label>
      <C.Label>Preço do produto: {d.value}</C.Label>
    </C.ProductView>
  );

  return (
    <C.Container>
      <C.NavBar>
        <img style={{ marginLeft: 30, width: 110 }} alt="logo" src={Logo} />
        <C.NavBeggining>
          {userType === "customer" ? null : (
            <C.LabelSignup>
              <C.Strong>
                <Link style={{ color: "#FFFB91" }} to="/cadastrarProdutos">
                  Cadastrar produto
                </Link>
              </C.Strong>
            </C.LabelSignup>
          )}
        </C.NavBeggining>
        <C.LabelSignup>
          <C.Strong>
            <Link style={{ color: "#FFFB91" }} to="/">
              Sair
            </Link>
          </C.Strong>
        </C.LabelSignup>
      </C.NavBar>
      <C.Content>
        {userType === "customer" ? null : (
          <C.ListContent>
            <C.Title>Meus Produtos</C.Title>
            {listItems}
          </C.ListContent>
        )}
      </C.Content>
    </C.Container>
  );
};

export default Home;
