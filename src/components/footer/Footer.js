import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    link.integrity = 'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==';
    link.crossOrigin = 'anonymous';
    link.referrerPolicy = 'no-referrer';

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []); 

  return (
    <div className="conteinerFooter">
      <footer className="rodape">
        <div className="rodapeIcons">
          <a href="https://wa.me/5543998431885">
            <i className="fab fa-whatsapp" style={{ color: 'rgb(255, 255, 255)' }}></i>
          </a>
          <a href="https://www.instagram.com/joao.biava/">
            <i className="fab fa-instagram" style={{ color: 'rgb(255, 255, 255)' }}></i>
          </a>
          <a href="https://steamcommunity.com/profiles/76561199139212289">
            <i className="fab fa-steam" style={{ color: 'rgb(255, 255, 255)' }}></i>
          </a>
          <a href="https://github.com/joaobiava">
            <i className="fab fa-github" style={{ color: 'rgb(255, 255, 255)' }}></i>
          </a>
          <a href="https://open.spotify.com/user/jab-biava">
            <i className="fab fa-spotify" style={{ color: 'rgb(255, 255, 255)' }}></i>
          </a>
        </div>

        <div className="rodapeText">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">Novidades</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/contact">Contato</Link></li>
            <li><Link to="/team">Nossa Equipe</Link></li>
          </ul>
        </div>

        <div className="rodapeCopy">
          <p>&copy;2024 TechJB Corporation. Todos os direitos reservados. Todas as marcas são propriedade dos seus respectivos donos no BR e em outros países.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
