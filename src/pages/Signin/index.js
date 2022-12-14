import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as C from "./styles";
import {MaskInput} from "../Signup/styles"
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../sdk/cliente';
import { useDispatch } from 'react-redux'
import * as ClienteActions from '../../store/clienteSlice'
import { Logo } from '../../assets'


const Signin = () => {
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

      if(!!result?.session){
        alert("Login realizado com sucesso!");
        dispatch(ClienteActions.setUserType({userType: 'customer'}))
        dispatch(ClienteActions.saveUser({ user: result?.session?.user }));
        navigate('/homeClient')
      }
    } catch {
      setError("Erro! Usuário ou senha incorretos.");
    }
  };

  return (
    <C.Container>
      <C.Content>
        <img style={{ width: 100}} alt="logo" src={Logo} />
        <C.Label>Entre com seu usuário e senha</C.Label>
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
        <C.LabelSignup>
          ou
        </C.LabelSignup>
        <C.LabelSignup>
          <C.Strong>
            <Link to="/signinWithBrecho">Logue com sua loja</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
