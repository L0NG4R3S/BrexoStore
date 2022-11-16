import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../sdk/cliente';

const Signin = () => {
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
    } catch {
      if(!!result?.session){
        alert("Login realizado com sucesso!");
        navigate('/') // mudar para navegar para Home
      } else {
        setError("Erro! Usuário ou senha incorretos.");
      }
    }
  };

  return (
    <C.Container>
      <C.Label>Login</C.Label>
      <C.Content>
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
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
