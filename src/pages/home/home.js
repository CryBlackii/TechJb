import React from 'react';
import './home.css';

const Home = () => {
  return (
    <main>
      <div className='backgroundHome'>
        <div className="containerHome">
          <div className="cardHome">
            <div className="textCardHome">
              <h1>Junte-se à nossa comunidade! Compartilhe suas experiências, tire suas dúvidas e encontre as melhores dicas para montar seu PC. Faça parte do nosso universo gamer.</h1>
            </div>
            <div className="botaocardHome">
              <button>
                <a href="./setup">Comece a Montar!</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
