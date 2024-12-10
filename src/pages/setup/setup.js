import React, { useState } from 'react';
import './setup.css';

const Setup = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const products = [
    { id: 1, name: "Ryzen 5 5600X", price: 1200, image: "/img/ryzen-5-5600x.jpg" },
    { id: 2, name: "Intel Core i5-12400", price: 1350, image: "/img/i5-12400.jpg" },
    { id: 3, name: "Asus ROG Strix B550-F", price: 950, image: "/img/rog-strix-b550-f.jpg" },
    { id: 4, name: "MSI MPG B660 Tomahawk", price: 1100, image: "/img/mpg-b660-tomahawk.jpg" },
    { id: 5, name: "Samsung 970 Evo Plus 1TB", price: 500, image: "/img/samsung-970-evo-plus.jpg" },
    { id: 6, name: "Kingston NV2 500GB", price: 200, image: "/img/kingston-nv2-500gb.jpg" },
    { id: 7, name: "NVIDIA RTX 3060 Ti", price: 2500, image: "/img/rtx-3060-ti.jpg" },
    { id: 8, name: "AMD Radeon RX 6700 XT", price: 2700, image: "/img/rx-6700-xt.jpg" },
    { id: 9, name: "Corsair RM750x", price: 800, image: "/img/corsair-rm750x.jpg" },
    { id: 10, name: "EVGA 600 W1", price: 400, image: "/img/evga-600-w1.jpg" },
    { id: 11, name: "Noctua NH-D15", price: 650, image: "/img/noctua-nh-d15.jpg" },
    { id: 12, name: "Cooler Master Hyper 212", price: 200, image: "/img/hyper-212.jpg" },
    { id: 13, name: "Logitech G502 Hero", price: 250, image: "/img/g502-hero.jpg" },
    { id: 14, name: "Razer DeathAdder V2", price: 300, image: "/img/deathadder-v2.jpg" },
    { id: 15, name: "SteelSeries Apex Pro", price: 1000, image: "/img/apex-pro.jpg" },
    { id: 16, name: "Corsair K95 RGB Platinum", price: 850, image: "/img/k95-rgb-platinum.jpg" },
    { id: 17, name: "Asus TUF Gaming B550M", price: 780, image: "/img/tuf-b550m.jpg" },
    { id: 18, name: "Intel Core i7-13700K", price: 2900, image: "/img/i7-13700k.jpg" },
    { id: 19, name: "Seagate Barracuda 2TB", price: 400, image: "/img/seagate-barracuda-2tb.jpg" },
    { id: 20, name: "Kingston Fury Renegade 32GB DDR4", price: 850, image: "/img/fury-renegade-32gb.jpg" }
];

  const addToCart = (product) => {
    const newCartItems = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(newCartItems);
    setTotal(newCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    setTotal(updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    setTotal(updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
  };

  const finalizePurchase = () => {
    alert(`Compra finalizada. Total: R$ ${total.toFixed(2)}`);
  };

  return (
    <div className='backgroundSetup'>
    <div className="mainSetup">
      
      <section className="containerSetup">
        <h2 className="titleSetup">Escolha suas peças</h2>
        {products.map(product => (
          <div className="prodSetup" key={product.id}>
            <strong className="nomeSetup">{product.name}</strong>
            <img className="imgSetup" src={product.image} alt={product.name} />
            <div className="precoContainerSetup">
              <span className="precoSetup">R${product.price}</span>
              <button className="botaoSetup" type="button" onClick={() => addToCart(product)}>
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="containerSetup">
        <h2 className="titleSetup">Carrinho</h2>
        <table className="tableSetup">
          <thead>
            <tr>
              <th className="tableHeadSetup first">Item</th>
              <th className="tableHeadSetup second">Preço</th>
              <th className="tableHeadSetup third">Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr className="cardSetup" key={item.id}>
                <td className="identifySetup">
                  <img className="cardImgSetup" src={item.image} alt={item.name} />
                  <strong className="prodTitleSetup">{item.name}</strong>
                </td>
                <td>
                  <span className="CardPrecoSetup">R${item.price}</span>
                </td>
                <td>
                  <input className="qntdSetup" type="number"value={item.quantity} min="1"
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} />
                  <button className="BotaoRemoveSetup" type="button" onClick={() => removeFromCart(item.id)}>
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="cardTotalValorsetup">
                <strong>Total</strong>
                <span>R$ {total.toFixed(2)}</span>
              </td>
            </tr>
          </tfoot>
        </table>
        <button className="botaoFinalizarSetup" type="button" onClick={finalizePurchase}>
          Finalizar compra
        </button>
      </section>
      </div>
    </div>
  );
};

export default Setup;