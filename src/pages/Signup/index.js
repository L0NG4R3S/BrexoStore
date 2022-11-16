import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { register } from '../../sdk/cliente';
import { useDispatch } from 'react-redux'
import * as ClienteActions from '../../store/clienteSlice'

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("Cliente Teste");
  const [email, setEmail] = useState("email@ee.com");
  const [address, setAddress] = useState("Endereco");
  const [address_number, setAddress_number] = useState("20");
  const [address_district, setAddress_district] = useState("Bairro");
  const [city, setCity] = useState("Curitiba");
  const [state, setState] = useState("Parana");
  const [password, setPassword] = useState("12345");
  const [password_confirmation, setPassword_confirmation] = useState("12345");
  const [cpf, setCpf] = useState("111.333.444.02");
  const [zip_code, setZip_code] = useState("12345-934");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const { signup } = useAuth();

  const handleSignup = () => {
    if (
      !email |
      !password |
      !name |
      !address |
      !address_number |
      !address_district |
      !city |
      !state |
      !password |
      !password_confirmation |
      !cpf |
      !zip_code 
    ) {
      setError("Preencha todos os campos");
      return;
    } else if (password !== password_confirmation) {
      setError("As senhhas não são iguais");
      return;
    }

    // const res = signup(email, password);

    const result = register({
      name,
      email,
      password,
      password_confirmation,
      cpf,
      zip_code,
      address,
      address_number,
      address_district,
      city,
      state,
    })

    console.log('result', result)

    if(result){
      dispatch(ClienteActions.register({
        name,
        email,
        password,
        password_confirmation,
        cpf,
        zip_code,
        address,
        address_number,
        address_district,
        city,
        state,
      }))

      // if (result) {
      //   setError(result);
      //   return;
      // }

      alert("Usuário cadatrado com sucesso!");
    } else {
      setError('Erro! Tente novamente');
    }
  };

  return (
    <C.Container>
      <C.Label>Cadastre-se</C.Label>
      <C.Content>
        <C.Column>
          <Input
            type="name"
            placeholder="Digite seu Nome"
            value={name}
            onChange={(e) => [setName(e.target.value), setError("")]}
          />
          <Input
            type="cpf"
            placeholder="Digite seu CPF"
            value={cpf}
            onChange={(e) => [setCpf(e.target.value), setError("")]}
          />
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="cep"
            placeholder="Digite seu CEP"
            value={zip_code}
            onChange={(e) => [setZip_code(e.target.value), setError("")]}
          />
          <Input
            type="endereco"
            placeholder="Digite seu Endereço"
            value={address}
            onChange={(e) => [setAddress(e.target.value), setError("")]}
          />
        </C.Column>
        <C.Column>
          <Input
            type="Numero"
            placeholder="Numero"
            value={address_number}
            onChange={(e) => [setAddress_number(e.target.value), setError("")]}
          />
          <Input
            type="Bairro"
            placeholder="Bairro"
            value={address_district}
            onChange={(e) => [
              setAddress_district(e.target.value),
              setError(""),
            ]}
          />
          <Input
            type="Cidade"
            placeholder="Digite sua Cidade"
            value={city}
            onChange={(e) => [setCity(e.target.value), setError("")]}
          />
          <Input
            type="Estado"
            placeholder="Digite seu Estado"
            value={state}
            onChange={(e) => [setState(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Confirme sua Senha"
            value={password_confirmation}
            onChange={(e) => [
              setPassword_confirmation(e.target.value),
              setError(""),
            ]}
          />
        </C.Column>
      </C.Content>
      <C.labelError>{error}</C.labelError>
      <Button Text="Inscrever-se" onClick={handleSignup} />
      <C.LabelSignin>
        Já tem uma conta?
        <C.Strong>
          <Link to="/">&nbsp;Entre</Link>
        </C.Strong>
      </C.LabelSignin>
    </C.Container>
  );
};

export default Signup;
