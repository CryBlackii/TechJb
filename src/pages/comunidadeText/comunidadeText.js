import React, { useState } from 'react';
import './comunidadeText.css';

const ComunidadeText = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [texto, setTexto] = useState('');
  const [referencia, setReferencia] = useState('');

  const handleEnviar = () => {
    alert('Mensagem enviada com sucesso');
  };

  const handleExcluir = () => {
    setTitulo('');
    setDescricao('');
    setTexto('');
    setReferencia('');
  };

  return (
    <div className='backgroundComMaster'>
      <div className='textCom'>
        <div className='backgroundTextCom'>
          <div className='leftColumn'>
            <textarea
              id='TitulCom'
              placeholder='Coloque aqui seu título'
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <textarea
              id='desCom'
              placeholder='Dê uma descrição do seu tópico'
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className='centerColumn'>
            <textarea
              id='textCom'
              placeholder='Escreva aqui seu tópico!'
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />
          </div>

          <div className='rightColumn'>
            <div className='buttonContainer'>
              <button id='buttonsCom' onClick={handleEnviar}>
                Enviar
              </button>
              <button id='buttonsCom' onClick={handleExcluir}>
                Excluir
              </button>
            </div>
            <textarea
              id='RefCom'
              placeholder='Referências do texto'
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComunidadeText;
