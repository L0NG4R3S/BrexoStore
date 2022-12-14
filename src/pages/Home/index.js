import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "../../assets";
import { buscarProdutos, deletarProduto } from "../../sdk/brecho";
import Button from "../../components/Button";
import * as ClienteActions from "../../store/clienteSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [produtos, setProdutos] = useState([]);
  const user = useSelector((state) => state.cliente.user);

  const getProdutos = async () => {
    const result = await buscarProdutos();
    setProdutos(result.data);
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const onDelete = async ({ id }) => {
    await deletarProduto({ id });
    alert("Produto removido com sucesso!");
    await getProdutos();
  };

  const onEdit = ({ product }) => {
    dispatch(ClienteActions.setProductInEdition({ product }));
    navigate("/editarProduto");
  };

  const listItems = produtos.map(
    (
      d // filtrar apenas produto do brecho
    ) => {
      if (d.store_id === user.store_id) {
        return (
          <C.ProductView key={d.id}>
            <C.BoldLabel>Nome do produto: {d.name}</C.BoldLabel>
            <C.Label>Descrição do produto: {d.description}</C.Label>
            <C.Label>Preço do produto: R${d.value}</C.Label>
            <C.ProductButtonsRow>
              <Button
                Text="Excluir"
                color="red"
                onClick={() => onDelete({ id: d.id })}
              />
              <Button Text="Editar" onClick={() => onEdit({ product: d })} />
            </C.ProductButtonsRow>
          </C.ProductView>
        );
      }else {
        return null;
      }
    }
  );

  return (
    <C.Container>
      <C.NavBar>
        <img style={{ marginLeft: 30, width: 110 }} alt="logo" src={Logo} />
        <C.NavBeggining>
          <C.LabelSignup>
            <C.Strong>
              <Link style={{ color: "#FFFB91" }} to="/cadastrarProdutos">
                Cadastrar produto
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
          <C.Title>Meus Produtos</C.Title>
          {produtos.some((d) => d.store_id === user.store_id) === true ? listItems :<C.Label>Você ainda não possui produtos cadastrados</C.Label> }
        </C.ListContent>
      </C.Content>
    </C.Container>
  );
};

export default Home;
