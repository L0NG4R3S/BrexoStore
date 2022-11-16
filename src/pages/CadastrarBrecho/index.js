/* eslint-disable react/jsx-no-undef */
import { useState} from 'react';
import { register } from "../../sdk/brecho";
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from "./styles";


function CadastrarBrecho() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState(''); 

  const onRegister = () => {
    register({
      name: name,
      email: email,
      password : password ,
      password_confirmation: confirmPassword,
    })
  }

  return (
    <C.Container>
      <C.Label>CADASTRE SEU BRECHÓ</C.Label>
      <C.Content>
        <Input
          type="text"
          placeholder="Digite seu Nome"
          value={name}
          onChange={(e) => [setName(e.target.value)]}
        />
         <Input
          type="text"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value)]}
        />
       
        <Input
          type="text"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value)]}
        />

         <Input
          type="text"
          placeholder="Confirme sua Senha"
          value={confirmPassword}
          onChange={(e) => [setConfirmPassword(e.target.value)]}
        />



        <Button Text="Cadastrar" onClick={onRegister} />
        
      </C.Content>
    </C.Container>
  );
};
 

export default CadastrarBrecho;
