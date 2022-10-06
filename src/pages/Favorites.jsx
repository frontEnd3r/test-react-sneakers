
import Card from '../components/Card';


function Favorites({ items, onAddToFavorite }) {
    return (
        <div className="content p-40">
            <div className="wrapper-title d-flex justify-between mb-40">
                <h1 className="content__title">Избранное</h1>
            </div>
            <div className="sneakers">
                {items
                    .map((item) => <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        imgUrl={item.imgUrl}
                        favorited={true}
                        onFavorite={onAddToFavorite}
                        // onFavorite={(obj) => onAddToFavorite(obj)}
                        // onPlus={(obj) => onAddToCart(obj)}
                    />)
                }
            </div>

        </div>
    )
}

export default Favorites;