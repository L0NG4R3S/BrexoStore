/* eslint-disable react/jsx-no-undef */
import { useEffect, useState} from 'react';
import { editarProduto } from "../../sdk/brecho";
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../assets";
import { useSelector } from 'react-redux'

function EditarProduto() {
  const navigate = useNavigate()
  const product = useSelector((state) => state.cliente.productInEdition);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(''); 
  const [error, setError] = useState(''); 


  useEffect(() => {
    setName(product.name)
    setDescription(product.description)
    setValue(product.value)
  }, [product])

  const onEdit = async () => {
    const result = await editarProduto({
      name: name,
      description: description,
      type: 1, // parseInt(type),
      value: parseFloat(value),
      id: product?.id
    })


    if(result.errors){
      setError(result.message);
    } else {
      alert("Produto alterado com sucesso!");
      setName('');
      setDescription('');
      setValue('');
      setError('');
      navigate('/home')
    }
  }

  return (
    <C.Container>
      <C.Content>
        <img style={{ width: 100 }} alt="logo" src={Logo} />
        <C.Label>Edite seu Produto</C.Label>
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
        <Button Text="Editar" onClick={onEdit} />
        
        <C.LabelSignup>
          <C.Strong>
            <Link to="/home">Voltar a Home</Link>
          </C.Strong>
        </C.LabelSignup>

      </C.Content>
    </C.Container>
  );
};
 

export default EditarProduto;
