import React, { useState } from 'react';
import "./comunidade.css";

const Comunidade = () => { 
  const [searchTerm, setSearchTerm] = useState("");

  const topics = [
    {
      title: "Compra de Notebook",
      description: "Antes de comprar um notebook, avalie suas demandas, como desempenho, armazenamento e orçamento, para escolher o modelo certo.",
      link: "https://www.kabum.com.br/computadores/notebooks",
      img: "/img/not.jpg",
    },
    {
      title: "PC de até 4 Mil",
      description: "Montar ou comprar um PC de até R$ 4.000 requer priorizar componentes essenciais como processador e placa de vídeo.",
      link: "https://www.kabum.com.br/monte-seu-pc",
      img: "/img/pc.png",
    },
    {
      title: "Fabricantes Não Confiáveis",
      description: "Evite fabricantes desconhecidos ou sem suporte técnico confiável para garantir durabilidade e bom desempenho.",
      link: "https://www.reclameaqui.com.br/pichau-informatica/nao-comprem-da-marca-mancer_1qBeKNfrXNNtHFXl/",
      img: "/img/mancer.jpg",
    },
    {
      title: "Melhores Fabricantes do Mercado",
      description: "Marcas como Dell, HP e Apple se destacam pela confiabilidade, suporte técnico e inovação nos produtos.",
      link: "https://www.adrenaline.com.br/games/pc-games/pesquisa-adrenaline-marcas-preferidas-de-hardware-e-perifericos-de-2022/",
      img: "/img/positivo.jpg",
    },
    {
      title: "Periféricos para Jogos",
      description: "Teclados mecânicos, mouses ergonômicos e fones com som surround são essenciais para uma experiência gamer imersiva.",
      link: "https://br.millenium.gg/noticias/9593.html",
      img: "/img/xuxa.jpg",
    },
    {
      title: "Configurações para Jogar em 4K",
      description: "Para jogos em 4K, opte por uma placa de vídeo robusta e um monitor com alta taxa de atualização.",
      link: "https://www.youtube.com/watch?v=YisYNBBd3Jw&ab_channel=DubStepZz",
      img: "/img/4k.jpg",
    },
    {
      title: "Ergonomia no Setup",
      description: "Invista em cadeiras ajustáveis e mesas ergonômicas para maior conforto e produtividade. Minha cadeira quebrou enquanto fazia isso...",
      link: "https://store.hermanmiller.com.br/cadeira-embody-gaming-cn1g22awaahlg1g1c73sy12_azul/p?srsltid=AfmBOopTfUw7WJ0Ex7UVmB4uCKtkvHW0m9QARNjvXBmAtnaZjCVyjSK4",
      img: "/img/cadeiras.jpg",
    },
    {
      title: "Montagem de Computadores",
      description: "Montar seu próprio PC permite escolher os melhores componentes e economizar em comparação a PCs prontos.",
      link: "https://www.youtube.com/@MWinform%C3%A1tica",
      img: "/img/mw.jpg",
    },
    {
      title: "Otimização de Desempenho",
      description: "Manter drivers atualizados e otimizar o sistema garante maior desempenho no uso diário e em jogos.",
      link: "https://www.tecmundo.com.br/seguranca/284822-8-formas-otimizacao-pc-notebook-contribui-melhor-desempenho.htm",
      img: "/img/desem.jpg",
    }
  ];

  const filteredTopics = topics.filter(topic => 
    topic.title.toUpperCase().includes(searchTerm.toUpperCase())
  );

  return (
    <div>
      <div className='backgroundTop'>
      <div className='buscar'>
        <a className='botaoTop' href='/comunidadeText'>+</a>
        <input id='inputBusca' type='text' placeholder='Pesquisar Tópico' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <ul id='listaTop'>
            {filteredTopics.map((topic, index) => (
              <li key={index}>
                <a className='imgTop' href={topic.link}>
                  <img src={topic.img} width={50} alt={topic.title} />
                  <div>
                    <span className="topNome">
                      {topic.title.split(new RegExp(`(${searchTerm})`, 'gi')).map((part, idx) => 
                        part.toLowerCase() === searchTerm.toLowerCase() ? <strong key={idx}>{part}</strong> : part )}
                    </span>
                    <div className="textoTop">{topic.description}</div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Comunidade;