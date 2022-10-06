
import Card from '../components/Card';


function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart }) {
    return (
        <div className="content p-40">
            <div className="wrapper-title d-flex justify-between mb-40">
                <h1 className="content__title">{searchValue ? `Поиск по запросу: ${searchValue}` : `Все кроссовки`}</h1>
                <div className="search-block d-flex align-center">
                    <img src="/img/search.svg" alt="Search" className="search-block__img" />
                    <input onChange={onChangeSearchInput} type="text" value={searchValue} className="search-block__input" placeholder="Поиск ..." />
                </div>
            </div>


            <div className="sneakers">
                {items
                    .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item) => <Card
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        price={item.price}
                        imgUrl={item.ImgUrl}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onPlus={(obj) => onAddToCart(obj)}
                    />)
                }
            </div>

        </div>
    )
}

export default Home;