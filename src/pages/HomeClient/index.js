import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logo, Pencil, Trash } from "../../assets";
import {
  buscarProdutosParaCliente,
  addComent,
  editComment,
  deletarComentario,
} from "../../sdk/cliente";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import Input from "../../components/Input";
import * as ClienteActions from "../../store/clienteSlice";

const HomeClient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [produtos, setProdutos] = useState([]);
  const [comment, setComment] = useState([]);
  const [commentInEditionValue, setCommentInEditionValue] = useState("");
  const [commentInEditionNumber, setCommentInEditionNumber] = useState(0);
  const user = useSelector((state) => state.cliente.user);

  console.log("user", user);

  const getProdutos = async () => {
    const result = await buscarProdutosParaCliente();
    setProdutos(result.data);
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const registerComment = async ({ productId }) => {
    await addComent({ product_id: productId, content: comment });
    getProdutos();
    setComment('')
  };

  const deleteComment = async ({ commentId }) => {
    await deletarComentario({ id: commentId });
    getProdutos();
  };

  const editMyComment = async ({ commentId }) => {
    console.log("commentInEdition", commentInEditionValue);
    await editComment({ id: commentId, content: commentInEditionValue });
    setCommentInEditionValue("");
    setCommentInEditionNumber(0);
    getProdutos();
  };

  const listItemsForClient = produtos.map((d) => {
    const comments =
      d.comments.length > 0
        ? d.comments.map((c) => (
            <>
              {commentInEditionNumber !== d.id + c.id ? (
                <C.ComentariosRow key={c.content + c.id}>
                  <C.ComentariosWrapper>
                    <C.CommentLabel>{c.content}</C.CommentLabel>
                  </C.ComentariosWrapper>
                  <C.ComentariosWrapper>
                    <C.CommentDate>{c.created_at}</C.CommentDate>
                    {console.log("ids", c.customer_id, user.id)}
                    {c.customer_id === user?.id ? (
                      <>
                        <IconButton
                          style={{
                            width: "12%",
                            paddingTop: 5,
                            paddingBottom: 5,
                          }}
                          icon={
                            <img
                              style={{ width: 20 }}
                              alt="pencil"
                              src={Pencil}
                            />
                          }
                          onClick={() => {
                            setCommentInEditionValue(c.content);
                            setCommentInEditionNumber(d.id + c.id);
                          }}
                        />
                        <IconButton
                          style={{
                            width: "12%",
                            paddingTop: 5,
                            paddingBottom: 5,
                          }}
                          icon={
                            <img
                              style={{ width: 20, padding: "0px" }}
                              alt="trash"
                              src={Trash}
                            />
                          }
                          color="red"
                          onClick={() => deleteComment({ commentId: c.id })}
                        />
                      </>
                    ) : null}
                  </C.ComentariosWrapper>
                </C.ComentariosRow>
              ) : (
                <C.ProductButtonsRow>
                  <Input
                    style={{ width: "60%" }}
                    type="text"
                    placeholder="Digite seu comentário"
                    value={commentInEditionValue}
                    onChange={(e) => [setCommentInEditionValue(e.target.value)]}
                  />
                  <Button
                    style={{ width: "20%" }}
                    Text="Editar"
                    onClick={() => editMyComment({ commentId: c.id })}
                  />
                </C.ProductButtonsRow>
              )}
            </>
          ))
        : null;

    return (
      <C.ProductView key={d.id}>
        <C.BoldLabel>Nome do produto: {d.name}</C.BoldLabel>
        <C.Label>Descrição do produto: {d.description}</C.Label>
        <C.Label>Preço do produto: R${d.value}</C.Label>
        <Button
          style={{ width: "20%", alignSelf: "center" }}
          Text="Comprar"
          color="green"
          onClick={() => {
            dispatch(ClienteActions.setProductInBuying({ product: d }));
            navigate("/finalizarCompra");
          }}
        />
        <C.ComentariosView>
          <C.BoldLabel>Comentários:</C.BoldLabel>
          {comments}
        </C.ComentariosView>
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
            onClick={() => registerComment({ productId: d.id })}
          />
        </C.ProductButtonsRow>
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
              <Link style={{ color: "#FFFB91" }} to="/minhasCompras">
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
