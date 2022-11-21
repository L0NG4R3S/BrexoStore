/* eslint-disable react/jsx-no-undef */
import { useState} from 'react';
import { registerProduto } from "../../sdk/brecho";
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from "./styles";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import { useSelector } from 'react-redux'

function CadastrarProdutos() {
  const user = useSelector((state) => state.cliente.user)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(''); 
  const [error, setError] = useState(''); 


  const onRegister = async () => {
    const result = await registerProduto({
      name: name,
      description: description,
      type: 1, // parseInt(type),
      value: parseFloat(value),
      store_id: user?.id // mudar pra pegar id do brecho
    })

    console.log('RESULT', result)

    if(result.errors){
      setError(result.message);
    } else {
      alert("Produto cadastrado com sucesso!");
      setName('');
      setDescription('');
      setValue('');
      setError('');
    }
  }

  return (
    <C.Container>
      <C.Content>
        <img style={{ width: 100 }} alt="logo" src={Logo} />
        <C.Label>Cadastre seus Produtos</C.Label>
        <Input
          type="text"
          placeholder="Digite o nome"
          value={name}
          onChange={(e) => [setName(e.target.value)]}
        />
        <C.Subtitle>* O campo nome deve conter no mínimo 5 caracteres</C.Subtitle>

        <Input
          type="text"
          placeholder="Descrição do produto"
          value={description}
          onChange={(e) => [setDescription(e.target.value)]}
        />
       
        <Input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => [setValue(e.target.value)]}
        />
        {/* <Input
          type="number"
          placeholder="Código da sua loja"
          value={storeId}
          onChange={(e) => [setStoreId(e.target.value)]}
        /> */}

        {/* <Input
          type="text"
          placeholder="Digite o tipo de produto"
          value={type}
          onChange={(e) => [setType(e.target.value)]}
        /> */}

        <C.labelError>{error}</C.labelError>
        <Button Text="Cadastrar" onClick={onRegister} />
        
        <C.LabelSignup>
          <C.Strong>
            <Link to="/home">Voltar a Home</Link>
          </C.Strong>
        </C.LabelSignup>

      </C.Content>
    </C.Container>
  );
};
 

export default CadastrarProdutos;
