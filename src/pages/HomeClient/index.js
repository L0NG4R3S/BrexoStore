import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Logo } from "../../assets";
import { buscarProdutosParaCliente } from "../../sdk/cliente";
import Button from "../../components/Button";
import Input from "../../components/Input";

const HomeClient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [produtos, setProdutos] = useState([]);
  const [comment, setComment] = useState([]);

  const getProdutos = async () => {
    const result = await buscarProdutosParaCliente();
    setProdutos(result.data);
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const listItemsForClient = produtos.map((d) => (
    <C.ProductView key={d.id}>
      <C.BoldLabel>Nome do produto: {d.name}</C.BoldLabel>
      <C.Label>Descrição do produto: {d.description}</C.Label>
      <C.Label>Preço do produto: R${d.value}</C.Label>
      <Button
        style={{ width: "20%", alignSelf: "center" }}
        Text="Comprar"
        color="green"
        onClick={() => null}
      />
      <C.ProductButtonsRow>
        <Input
          style={{ width: "60%" }}
          type="text"
          placeholder="Digite seu comentário"
          value={comment}
          onChange={(e) => [setComment(e.target.value)]}
        />
        <Button
          style={{ width: "20%" }}
          Text="Comentar"
          onClick={() => null}
        />
      </C.ProductButtonsRow>
    </C.ProductView>
  ));

  return (
    <C.Container>
      <C.NavBar>
        <img style={{ marginLeft: 30, width: 110 }} alt="logo" src={Logo} />
        <C.NavBeggining>
          <C.LabelSignup>
            <C.Strong>
              <Link style={{ color: "#FFFB91" }} to="/cadastrarProdutos">
                Minhas compras
              </Link>
            </C.Strong>
          </C.LabelSignup>
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
        <C.ListContent>
          <C.Title>Produtos disponíveis</C.Title>
          {listItemsForClient}
        </C.ListContent>
      </C.Content>
    </C.Container>
  );
};

export default HomeClient;
