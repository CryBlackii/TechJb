import React, { useState } from 'react';
import { FaUser, FaLock, FaBirthdayCake } from 'react-icons/fa';
import "./cadastro.css";

const Cadastro = () => {
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    alert(`Cadastro realizado com sucesso!`);
  };

  return (
    <div className="containerCadastro">
      <div className="backgroundContainerCad">
        <video autoPlay loop muted className="background-video">
          <source src="img/back.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>

      <div className="formContainerCad">
        <form onSubmit={handleSubmit}>
          <h1>
            Cadastre-se agora e seja parte da{' '}
            <span onClick={() => window.location.href = '/family'}>família</span>
          </h1>

          <div className="input-group">
            <input type="email" placeholder="E-Mail" value={username} onChange={(e) => setUsername(e.target.value)}  />
            <FaUser className="icon" />
          </div>

          <div className="input-group">
            <input type="password"  placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Confirmar Senha" value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)}  />
            <FaLock className="icon" />
          </div>

          <div className="input-group">
            <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)}  />
            <FaBirthdayCake className="icon" />
          </div>

          <div className="input-group">
            <select 
              value={gender} 
              onChange={(e) => setGender(e.target.value)} 
            >
              <option value="">Selecione seu gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Prefiro não dizer">Prefiro não dizer</option>
            </select>
            <FaUser className="icon" />
          </div>

          <button className="buttonsCadastro" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;