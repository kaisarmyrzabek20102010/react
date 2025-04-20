import React, { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const games = [
    { name: 'ice cream', price: 250 },
    { name: 'chips', price: 390 },
    { name: 'cola', price: 930 },
  ];

  const addToCart = (game) => {
    setCart([...cart, game]);
    setTotal(total + game.price);
  };

  function clear() {
    setCart([]);
    setTotal(0);
    }

  return (
    <div>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            {game.name} - {game.price} ${' '}
            <button onClick={() => addToCart(game)}>add</button>
          </li>
        ))}
      </ul>
      <h2>bag</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} $
          </li>
        ))}
      </ul>
      <button onClick={clear}>clear</button>
      <h3>price: {total} $</h3>
    </div>
  );
};

export default App;