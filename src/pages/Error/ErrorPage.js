import React, { useState, useEffect } from 'react';
import './errinho.css';

const ErrorPage = () => {
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [randomImage, setRandomImage] = useState('');

  const images = [
    '/img/erro1.png',
    '/img/erro2.png',
    '/img/erro3.png',
    '/img/erro4.png',
    '/img/erro5.png',
    '/img/erro6.png',
    '/img/erro7.png',
    '/img/erro.gif',
  ];

  const getRandomImage = () => {
    const shuffled = [...images].sort(() => 0.8 - Math.random()); 
    return shuffled[0];
  };

  useEffect(() => {
    setRandomImage(getRandomImage());
  }, []); 

  const playAudio = () => {
    const audio = new Audio('/audios/erroAudio.mp3');
    audio.play();
    setAudioPlayed(true);
  };

  return (
    <div className='arrumarozzy'>
      <img 
        src={randomImage} 
        alt="Erro Aleatório" 
        onClick={playAudio} 
        style={{ cursor: 'pointer' }} 
      />
      <a className='botaoErroPage' href='/'>Voltar para Página inicial</a>
    </div>
  );
};

export default ErrorPage;
