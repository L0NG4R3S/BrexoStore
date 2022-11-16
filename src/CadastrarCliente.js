import { useState } from 'react';
import './styles/App.css';
import { register } from './sdk/cliente';
import { useDispatch } from 'react-redux'
import * as ClienteActions from './store/clienteSlice'


function CadastrarCliente() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [address_number, setAddress_number] = useState('');
  const [address_district, setAddress_district] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [cpf, setCpf] = useState('');
  const [zip_code, setZip_code] = useState('');

  const onRegister = () => {
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

    // dispatch(ClienteActions.register({
    //   name,
    //   email,
    //   password,
    //   password_confirmation,
    //   cpf,
    //   zip_code,
    //   address,
    //   address_number,
    //   address_district,
    //   city,
    //   state,
    // })
  }

  return (
    <div className="CadastrarCliente">
      <header className="App-body">
        <p>
          Insira seus dados
        </p>

        <p>
          Nome:
        </p>
        <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)}></input>
        <p>
          E-mail:
        </p>
        <input className="form-control" type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
        <p>
          CPF:
        </p>
        <input className="form-control" type="text" value={cpf} onChange={e => setCpf(e.target.value)}></input>
        <p>
          Telefone:
        </p>
        <input className="form-control" type="text" value={phone} onChange={e => setPhone(e.target.value)}></input>
        <p>
          CEP:
        </p>
        <input className="form-control" type="text" value={zip_code} onChange={e => setZip_code(e.target.value)}></input>
        <p>
          Endereço:
        </p>
        <input className="form-control" type="text" value={address} onChange={e => setAddress(e.target.value)}></input>
        <p>
          Numero:
        </p>
        <input className="form-control" type="text" value={address_number} onChange={e => setAddress_number(e.target.value)}></input>
        <p>
          Bairro:
        </p>
        <input className="form-control" type="text" value={address_district} onChange={e => setAddress_district(e.target.value)}></input>
        <p>
          Cidade:
        </p>
        <input className="form-control" type="text" value={city} onChange={e => setCity(e.target.value)}></input>
        <p>
          Estado:
        </p>
        <input className="form-control" type="text" value={state} onChange={e => setState(e.target.value)}></input>
        <p>
          Senha:
        </p>
        <input className="form-control" type="text" value={password} onChange={e => setPassword(e.target.value)}></input>
        <p>
          Confirmar Senha:
        </p>
        <input className="form-control" type="text" value={password_confirmation} onChange={e => setPassword_confirmation(e.target.value)}></input>
        <button onClick={onRegister}>
          Cadastrar
        </button>
      </header>
    </div>
  );
}

export default CadastrarCliente;
