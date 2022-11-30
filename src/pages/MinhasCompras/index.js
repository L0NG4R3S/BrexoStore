import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "../../assets";
import { buscarProdutosParaCliente, addComent } from "../../sdk/cliente";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import Input from "../../components/Input";

const HomeClient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [produtos, setProdutos] = useState([]);
  const [comment, setComment] = useState([]);
  const user = useSelector((state) => state.cliente);

  // const listItemsForClient = produtos.map((d) => {
  //   const comments =
  //     d.comments.length > 0
  //       ? d.comments.map((c) => (
  //           <C.ComentariosRow key={c.content + c.id}>
  //             <C.ComentariosWrapper>
  //               <C.CommentLabel>{c.content}</C.CommentLabel>
  //             </C.ComentariosWrapper>
  //             <C.ComentariosWrapper>
  //               <C.CommentDate>{c.created_at}</C.CommentDate>
  //               {d.customer_id === user?.id ? (
  //                 <>
  //                   <IconButton
  //                     style={{ width: "20%" }}
  //                     icon={
  //                       <img
  //                         style={{ width: 30, padding: "0px" }}
  //                         alt="logo"
  //                         src={Logo}
  //                       />
  //                     }
  //                     onClick={() => registerComment({ productId: d.id })}
  //                   />
  //                   <IconButton
  //                     style={{ width: "20%" }}
  //                     icon={
  //                       <img
  //                         style={{ width: 30, padding: "0px" }}
  //                         alt="logo"
  //                         src={Logo}
  //                       />
  //                     }
  //                     onClick={() => registerComment({ productId: d.id })}
  //                   />
  //                 </>
  //               ) : null}
  //             </C.ComentariosWrapper>
  //           </C.ComentariosRow>
  //         ))
  //       : null;
  //   return (
  //     <C.ProductView key={d.id}>
  //       <C.BoldLabel>Nome do produto: {d.name}</C.BoldLabel>
  //       <C.Label>Descrição do produto: {d.description}</C.Label>
  //       <C.Label>Preço do produto: R${d.value}</C.Label>
  //       <Button
  //         style={{ width: "20%", alignSelf: "center" }}
  //         Text="Comprar"
  //         color="green"
  //         onClick={() => null}
  //       />
  //       <C.ComentariosView>
  //         <C.BoldLabel>Comentários:</C.BoldLabel>
  //         {comments}
  //       </C.ComentariosView>
  //       <C.ProductButtonsRow>
  //         <Input
  //           style={{ width: "60%" }}
  //           type="text"
  //           placeholder="Digite seu comentário"
  //           value={comment}
  //           onChange={(e) => [setComment(e.target.value)]}
  //         />
  //         <Button
  //           style={{ width: "20%" }}
  //           Text="Comentar"
  //           onClick={() => registerComment({ productId: d.id })}
  //         />
  //       </C.ProductButtonsRow>
  //     </C.ProductView>
  //   );
  // });

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
         
        </C.ListContent>
      </C.Content>
    </C.Container>
  );
};

export default HomeClient;
