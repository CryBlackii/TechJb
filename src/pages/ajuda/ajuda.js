import React, { useState } from 'react';
import './ajuda.css';

const Ajuda = () => {
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  const handleSendMessage = () => {
    alert('Mensagem enviada com sucesso!');
    setMessage('');
    setTitle('');
  };

  return (
    <main>
      <div className="backgroundAjuda">
        <div className="containerAjuda">
          <div className="cardAjuda">
            <div className="textCardAjuda">
              <h1>
                Não está satisfeito com seu setup? Tem dúvidas sobre compatibilidade? Deseja uma ajuda personalizada? Envie uma mensagem para um de nossos colaboradores e explique a sua situação.
              </h1>
            </div>
          </div>

          <div className="formAjuda">
            <div className="inputContainerAjuda">
              <div className="imgAjuda"></div>
              <input type="text" className="inputTitulo" placeholder="Digite o assunto principal" value={title} onChange={(e) => setTitle(e.target.value)} />
              <textarea className="inputMensagem" placeholder="Digite sua mensagem..." value={message} onChange={(e) => setMessage(e.target.value)} />
              <button className="botaoEnvio" onClick={handleSendMessage}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Ajuda;