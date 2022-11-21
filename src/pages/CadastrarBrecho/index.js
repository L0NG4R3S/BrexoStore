import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import { register, registerUser } from '../../sdk/brecho';
import { useDispatch } from 'react-redux'
import * as ClienteActions from '../../store/clienteSlice'
import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import { MaskInput } from  "./styles";


const CadastrarBrecho = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [address, setAddress] = useState("");
  const [address_number, setAddress_number] = useState("");
  const [address_district, setAddress_district] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleCadastrarBrecho = async () => {
    if (
      !email |
      !name |
      !password |
      !password_confirmation 
    ) {
      setError("Preencha todos os campos");
      return;
    } else if (password !== password_confirmation) {
      setError("As senhhas não são iguais");
      return;
    }

    const result = await registerUser({
      name,
      email,
      password,
      password_confirmation,
    })

    if(result.errors){
      console.log('result.errors', result.errors)
      setError(result.message);
    } else {
      const resultRegisterStore = await register({
        name,
        email,
        phone,
        address,
        address_number,
        address_district,
        city,
        state
      })

      if(resultRegisterStore.errors){
        console.log('result.errors', result.errors)
        setError(result.message);
      } else {
        dispatch(ClienteActions.setUserType({ userType: 'store' }))
        alert("Loja cadastrada com sucesso!", resultRegisterStore);
        dispatch(ClienteActions.saveUser({ user: result?.session?.user }));

        navigate('/home')
      }
    }
  };

  return (
    <C.Container>
      <C.Content>
        <img style={{ width: 100 }} alt="logo" src={Logo} />
        <C.Label>Cadastre sua loja</C.Label>
        <C.ContentRow>
          <C.Column>
            <Input
              type="name"
              placeholder="Nome da Loja"
              value={name}
              onChange={(e) => [setName(e.target.value), setError("")]}
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
             <MaskInput
              type="phone"
              mask="(99) 99999-9999"
              placeholder="Digite seu Telefone"
              value={phone}
              onChange={(e) => [setPhone(e.target.value), setError("")]}
            />
            <Input
              type="endereco"
              placeholder="Digite seu Endereço"
              value={address}
              onChange={(e) => [setAddress(e.target.value), setError("")]}
            />
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
          </C.Column>
          <C.Column>
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
              placeholder="Senha para a loja"
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
        <Button Text="Cadastrar" onClick={handleCadastrarBrecho} />

        <C.LabelSignup>
          <C.Strong>
            <Link to="/home">Voltar a Home</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default CadastrarBrecho;
