import { useState } from 'react';
import './styles/App.css';
import { register } from './sdk/brecho'

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
    <div className="CadastrarBrecho">
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

export default CadastrarBrecho;
