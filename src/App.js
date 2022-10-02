import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Cart from './components/Cart';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  const [cartOpened, setCartOpened] = React.useState(false);


  React.useEffect(() => {
    fetch('https://62e82d4593938a545be1f4ba.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    })
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  

  return (
    <div className="wrapper clear">

      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="wrapper-title d-flex justify-between mb-40">
          <h1 className="content__title">Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search" className="search-block__img" />
            <input type="text" className="search-block__input" placeholder="Поиск ..." />
          </div>
        </div>


        <div className="sneakers">
          {
            items.map((item) => <Card
              title={item.name}
              price={item.price}
              imgUrl={item.ImgUrl}
              onPlus={(obj) => onAddToCart(obj)}
            />)
          }
        </div>

      </div>
    </div>
  );
}

export default App;
