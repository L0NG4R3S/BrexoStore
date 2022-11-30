import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import { listPurchases } from "../../sdk/cliente";

const HomeClient = () => {
  const [compras, setCompras] = useState([]);

  const buscarCompras = async () => {
    const result = await listPurchases();
    console.log("compras", result.data);
    setCompras(result.data)
  };

  useEffect(() => {
    buscarCompras();
  }, []);

  const listItemsForClient = compras.map((d) => {
    const products =
      d.products.length > 0
        ? d.products.map((c) => (
            <C.ProductsWrapper>
              <C.Label>Nome do produto: {c.name}</C.Label>
              <C.Label>Descrição do produto: {c.description}</C.Label>
              <C.Label>Preço do produto: R${c.value}</C.Label>
            </C.ProductsWrapper>
          ))
        : null;
    return (
      <C.ProductView key={d.id}>
        <C.ComentariosView>
          <C.BoldLabel>Produto:</C.BoldLabel>
          {products}
        </C.ComentariosView>
        <C.BoldLabel>Data da Compra: {d.created_at}</C.BoldLabel>
      </C.ProductView>
    );
  });

  return (
    <C.Container>
      <C.NavBar>
        <img style={{ marginLeft: 30, width: 110 }} alt="logo" src={Logo} />
        <C.NavBeggining>
          <C.LabelSignup>
            <C.Strong>
              <Link style={{ color: "#FFFB91" }} to="/homeClient">
                Voltar a Home
              </Link>
            </C.Strong>
          </C.LabelSignup>
        </C.NavBeggining>
      </C.NavBar>
      <C.Content>
        <C.ListContent>
          <C.Title>Minhas Compras</C.Title>
          {listItemsForClient}
        </C.ListContent>
      </C.Content>
    </C.Container>
  );
};

export default HomeClient;
