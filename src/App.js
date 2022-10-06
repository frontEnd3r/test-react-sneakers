import React, { Fragment } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);


  React.useEffect(() => {
    axios.get('https://62e82d4593938a545be1f4ba.mockapi.io/items').then((res) => {
      setItems(res.data);
    })
    axios.get('https://62e82d4593938a545be1f4ba.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    })
    axios.get('https://62e82d4593938a545be1f4ba.mockapi.io/favorite').then((res) => {
      setFavorites(res.data);
    })
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://62e82d4593938a545be1f4ba.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://62e82d4593938a545be1f4ba.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://62e82d4593938a545be1f4ba.mockapi.io/favorite/${obj.id}`);

      } else {
        const { data } = await axios.post('https://62e82d4593938a545be1f4ba.mockapi.io/favorite', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  };


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }


  return (
    <div className="wrapper clear">

      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveFromCart} />}

      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path="/"
          element={<Home
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart} />}
        >
        </Route>
        <Route path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />}></Route>
      </Routes>

    </div>
  );
}

export default App;
