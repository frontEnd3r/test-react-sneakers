function Cart({ onClose, onRemove, items = [] }) {

  return (
    <div className="overlay">
      <div className="cart d-flex flex-column p-30">
        <h2 className="cart__title mb-40">Корзина</h2>
        <button onClick={onClose} className="cart-item__btn cart__close d-flex justify-center align-center">
          <svg className="cart-item__btn-img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3" />
          </svg>
        </button>


        {items.length > 0 ? (
          <div>
            <div className="cart-items d-flex flex-column">
              {items.map((obj) => (
                <div className="cart-item d-flex align-center mb-20">
                  <img width={70} height={70} src={obj.imgUrl} alt="Sneakers" className="cart-item__img" />
                  <div className="cart-item__desc d-flex flex-column">
                    <p className="cart-item__name mb-10">{obj.title}</p>
                    <span className="cart-item__price">{obj.price} руб.</span>
                  </div>
                  <button onClick={() => onRemove(obj.id)} className="cart-item__btn d-flex justify-center align-center">
                    <svg className="cart-item__btn-img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-bottom d-flex flex-column">
              <ul className="cart-bottom-list d-flex flex-column">
                <li className="cart-bottom-list__item d-flex align-end mb-20">
                  <span className="cart-bottom__title">Итого: </span>
                  <div className="cart-bottom__dashed"></div>
                  <span className="cart-bottom__value">21 498 руб. </span>
                </li>

                <li className="cart-bottom-list__item d-flex align-end mb-20">
                  <span className="cart-bottom__title">Налог 5%:</span>
                  <div className="cart-bottom__dashed"></div>
                  <span className="cart-bottom__value">1074 руб.</span>
                </li>
              </ul>
              <button className="cart-bottom__btn">Оформить заказ
                <img src="/img/arrow.svg" alt="Arrow" className="cart-bottom__btn-arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cart-empty d-flex align-center justify-center flex-column flex">
            <img src="/img/cart-empty.png" alt="" className="cart-empty__img mb-20" width={120} height={120} />
            <h2 className="cart-empty__title mb-10">Корзина пустая</h2>
            <p className="cart-empty__desc opacity-6 mb-40">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
            <button onClick={onClose} className="cart-bottom__btn cart-empty__btn">Вернуться назад
              <img src="/img/arrow.svg" alt="Arrow" className="cart-bottom__btn-arrow" />
            </button>
          </div>
        )}


      </div>
    </div>
  );
}

export default Cart;