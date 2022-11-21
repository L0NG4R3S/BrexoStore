import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../sdk/brecho";
import { useDispatch } from "react-redux";
import * as ClienteActions from "../../store/clienteSlice";
import { Logo } from "../../assets";

const SigninWithBrecho = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    let result;
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      result = await login({ email, password: senha });

      if (!!result?.session) {
        alert("Login realizado com sucesso!", result);
        dispatch(ClienteActions.setUserType({ userType: "store" }));
        dispatch(ClienteActions.saveUser({ user: result?.session?.user }));
        navigate("/home");
      }
    } catch {
      setError("Erro! Usuário ou senha incorretos.");
    }
  };

  return (
    <C.Container>
      <C.Content>
        <img style={{ width: 100 }} alt="logo" src={Logo} />
        <C.Label>Logue com sua loja</C.Label>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma loja?
          <C.Strong>
            <Link to="/cadastrarBrecho">&nbsp;Cadastre sua loja</Link>
          </C.Strong>
        </C.LabelSignup>
        <C.LabelSignup>
          ou
        </C.LabelSignup>
        <C.LabelSignup>
          <C.Strong>
            <Link to="/">Voltar ao login tradicional</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default SigninWithBrecho;
