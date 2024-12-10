import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import "./login.css";

const Login = () => {  
  const home = '';

  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Parabens, agora você tem um login :)");    
  };
  
  return (
    <div className="containerLogin">
      <div className="background-container">
        <video autoPlay loop muted className="background-video">
          <source src="img/back.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Compartilhe com a Gente!</h1>
          <div className="input-group">
            <input type="email" placeholder="E-Mail" value={username} onChange={(e) => setUsername(e.target.value)} />
            <FaUser className="icon" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />
          </div>

          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              Lembrar meu login
            </label>
          </div>

          <a href="./lembrarsenha">Esqueceu a senha?</a>

          <button className="buttonsLogin" type="submit" >Logar</button> 
          <div className="signup-link">
            <p>não tem uma conta, é?<br></br></p>
            <a href="./cadastro" className="buttonsLogin">Cadastrar</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
