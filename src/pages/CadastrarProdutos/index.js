/* eslint-disable react/jsx-no-undef */
import { useState} from 'react';
import { register } from "../../sdk/brecho";
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from "./styles";


function CadastrarProdutos() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [value, setValue] = useState(''); 
  const [storeId, setStoreId] = useState(''); 


  const onRegister = () => {
    register({
      name: name,
      description: description,
      type: type ,
      value: value,
    })
  }

  return (
    <C.Container>
      <C.Label>CADASTRE SEUS PRODUTOS</C.Label>
      <C.Content>
        <Input
          type="text"
          placeholder="Digite o nome"
          value={name}
          onChange={(e) => [setName(e.target.value)]}
        />
         <Input
          type="text"
          placeholder="Descrição do produto"
          value={description}
          onChange={(e) => [setDescription(e.target.value)]}
        />
       
        <Input
          type="number"
          placeholder="Digite o valor "
          value={value}
          onChange={(e) => [setValue(e.target.value)]}
        />
        <Input
          type="number"
          placeholder="Digite o código da sua loja "
          value={storeId}
          onChange={(e) => [setStoreId(e.target.value)]}
        />

         <Input
          type="text"
          placeholder="Digite o tipo de produto"
          value={type}
          onChange={(e) => [setType(e.target.value)]}
        />

        <Button Text="Cadastrar" onClick={onRegister} />
        
      </C.Content>
    </C.Container>
  );
};
 

export default CadastrarProdutos;
