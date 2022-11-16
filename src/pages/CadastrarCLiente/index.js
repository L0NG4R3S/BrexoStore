import { useState } from 'react';
import { register } from '../../sdk/cliente';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as C from "./styles";


function CadastrarCliente() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [address_number, setAddress_number] = useState('');
  const [address_district, setAddress_district] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const onRegister = () => {
    register({
      name,
      email,
      // password,
      // password_confirmation,
      // cpf,
      // zip_code,
      address,
      address_number,
      address_district,
      city,
      state,
    })
  }

  return (
    <C.Container>
    <C.Label>Insira seus dados</C.Label>
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
        placeholder="Telefone"
        value={phone}
        onChange={(e) => [setPhone(e.target.value)]}
      />

     <Input
        type="text"
        placeholder="Bairro"
        value={address}
        onChange={(e) => [setAddress(e.target.value)]}
      />

     <Input
        type="text"
        placeholder="Número"
        value={address_number}
        onChange={(e) => [setAddress_number(e.target.value)]}
      />

       <Input
        type="text"
        placeholder="Estado"
        value={address_district}
        onChange={(e) => [setAddress_district(e.target.value)]}
      />


     <Input
        type="text"
        placeholder="Cidade"
        value={city}
        onChange={(e) => [setCity(e.target.value)]}
      />
      <Button Text="Cadastrar" onClick={onRegister} />
      
    </C.Content>
  </C.Container>
);
}

export default CadastrarCliente;
