import React, { useState } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Logo } from "../../assets";
import { purchase } from "../../sdk/cliente";
import Button from "../../components/Button";

const FinalizarCompra = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('')
  const user = useSelector((state) => state.cliente.user);
  const productInBuying = useSelector((state) => state.cliente.productInBuying);

  console.log("productInBuying", productInBuying);

  const comprar = async () => {
    const result = await purchase({
      product_id: productInBuying.id,
      value: productInBuying.value,
      discount: 0,
    });
    if(result?.message?.includes('sucesso')){
      navigate('/minhasCompras')
    }else {
      setError('Erro ao finalizar compra')
    }
  };

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
          <C.Title>Finalizar Compra</C.Title>
          <C.ProductView>
            <C.BoldLabel>Informações do produto:</C.BoldLabel>
            <C.Label>Nome: {productInBuying.name}</C.Label>
            <C.Label>Descrição: {productInBuying.description}</C.Label>
            <C.Label>Preço: R${productInBuying.value}</C.Label>
          </C.ProductView>
          <C.ProductView>
            <C.BoldLabel>Endereço de entrega:</C.BoldLabel>
            <C.Label>Bairro: {user.address_district}</C.Label>
            <C.Label>Rua: {user.address}</C.Label>
            <C.Label>Numero: {user.address_number}</C.Label>
            <C.Label>CEP: {user.zip_code}</C.Label>
            <C.Label>Cidade: {user.city}</C.Label>
            <C.Label>Estado: {user.state}</C.Label>
          </C.ProductView>
          <C.ProductView>
            <C.BoldLabel>Dados do comprador:</C.BoldLabel>
            <C.Label>Nome: {user.name}</C.Label>
            <C.Label>CPF: {user.cpf}</C.Label>
            <C.Label>E-mail: {user.email}</C.Label>
          </C.ProductView>
          {error && <C.labelError>ERRO: {error}</C.labelError>}
          <Button
            style={{ width: "40%", alignSelf: "center" }}
            Text="Finalizar compra"
            color="green"
            onClick={comprar}
          />
          <Button
            style={{ width: "40%", alignSelf: "center" }}
            Text="Cancelar"
            color="red"
            onClick={() => navigate("/homeClient")}
          />
        </C.ListContent>
      </C.Content>
    </C.Container>
  );
};

export default FinalizarCompra;
