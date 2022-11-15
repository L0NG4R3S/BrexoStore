import { useState } from 'react';
import './styles/App.css';
import { register } from './sdk/cliente';

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
          Telefone:
        </p>
        <input className="form-control" type="text" value={phone} onChange={e => setPhone(e.target.value)}></input>
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
        <button onClick={onRegister}>
          Cadastrar
        </button>
      </header>
    </div>
  );
}

export default CadastrarCliente;
