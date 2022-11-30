/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import {MaskInput} from  "./styles";
import { Link, useNavigate } from "react-router-dom";
import { register } from '../../sdk/cliente';
import { useDispatch } from 'react-redux'
import * as ClienteActions from '../../store/clienteSlice'
import { Logo } from '../../assets'


const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [address_number, setAddress_number] = useState("");
  const [address_district, setAddress_district] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [cpf, setCpf] = useState("");
  const [zip_code, setZip_code] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSignup = async () => {
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

    const result = await register({
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

    if(result.errors){
      console.log('result.errors', result.errors)
      setError(result.message);
    } else {

      dispatch(ClienteActions.setUserType({ userType: 'customer' }))
      dispatch(ClienteActions.saveUser({ user: result?.session?.user }));

      alert("Usuário cadatrado com sucesso!");

      navigate('/homeClient')
    }
  };

  return (
    <C.Container>
     
      <C.Content>
        <C.Label>Cadastre-se</C.Label>
        <img style={{ width: 100}} alt="logo" src={Logo} />
        <C.ContentRow>
          <C.Column>
            <Input
              type="name"
              placeholder="Digite seu Nome"
              value={name}
              onChange={(e) => [setName(e.target.value), setError("")]}
            />
            <MaskInput
              type="cpf"
              mask="999.999.999-99"
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
            <MaskInput
              type="cep"
              mask="99999-999"
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
            <MaskInput
              type="Numero"
              mask="9999"
              placeholder="Número"
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
            <C.Subtitle>* O campo senha deve conter no mínimo 6 caracteres</C.Subtitle>
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
        </C.ContentRow>
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
