import { useState } from 'react';
import './App.css';
import axios from 'axios';

function CadastrarBazar() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [address_number, setAddress_number] = useState('');
  const [address_district, setAddress_district] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const onRegister = () => {
    console.log(name, email, phone, address, address_number, address_district, city, state)
    
    const data = JSON.stringify({
      name: name,
      email: email,
      phone : phone ,
      address: address,
      address_number: address_number,
      address_district: address_district,
      city: city,
      state: state
    });

    const config = {
      method: 'post',
      url: 'http://ec2-3-86-207-169.compute-1.amazonaws.com/api/store',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
      .then((response) => console.log('DEU CERTO', response))
      .catch((err) => {
        console.error("ERRO! ocorreu um erro" + err);
      });
  }

  return (
    <div className="CadastrarBazar">
      <header className="App-header">
        <p>
          Cadastre seu Bazar
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

export default CadastrarBazar;
