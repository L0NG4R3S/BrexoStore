import { useState } from 'react';
import './styles/App.css';
import axios from 'axios';

function CadastrarBazar() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState(''); 

  const onRegister = () => {

    const data = JSON.stringify({
      name: name,
      email: email,
      password : password ,
      password_confirmation: confirmPassword,
    });

    const config = {
      method: 'post',
      url: 'http://ec2-3-86-207-169.compute-1.amazonaws.com/api/user',
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then((response) => console.log('DEU CERTO', response))
      .catch((err) => {
        console.error("ERRO ao cadastrar Usuário" + err);
      });
  }

  return (
    <div className="CadastrarBazar">
      <header className="App-body">
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
          Senha:
        </p>
        <input className="form-control" type="text" value={password} onChange={e => setPassword(e.target.value)}></input>
        <p>
          Confirmar senha:
        </p>
        <input className="form-control" type="text" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
        
        <button onClick={onRegister}>
          Cadastrar
        </button>
      </header>
    </div>
  );
}

export default CadastrarBazar;
