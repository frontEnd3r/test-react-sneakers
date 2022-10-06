import React from "react";

function Card({ id, title, imgUrl, price, onFavorite, onPlus, favorited = false }) {

    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({ title, imgUrl, price });
        setIsAdded(!isAdded);
    }


    const onClickFavorite = () => {
        onFavorite({ id, title, imgUrl, price });
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="product-card">
            <button onClick={onClickFavorite} className={`product-card__favorite cu-p d-flex justify-center align-center ${isFavorite ? 'is-favorite' : ''}`}>
                {isFavorite ? (<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6129 2.86902C15.3646 2.30759 15.0067 1.79882 14.5591 1.3712C14.1111 0.94231 13.583 0.601475 13.0033 0.367231C12.4023 0.123371 11.7577 -0.0014504 11.1068 1.27149e-05C10.1938 1.27149e-05 9.30292 0.244222 8.52876 0.705507C8.34355 0.815853 8.1676 0.937054 8.00092 1.06911C7.83423 0.937054 7.65828 0.815853 7.47308 0.705507C6.69892 0.244222 5.80807 1.27149e-05 4.895 1.27149e-05C4.23752 1.27149e-05 3.60041 0.123022 2.99849 0.367231C2.41694 0.602396 1.89281 0.940672 1.44276 1.3712C0.994552 1.79834 0.636513 2.30723 0.388933 2.86902C0.131497 3.45332 0 4.07379 0 4.71235C0 5.31473 0.12594 5.94244 0.375969 6.58101C0.585252 7.11465 0.885287 7.66819 1.26866 8.22716C1.87614 9.11174 2.71142 10.0343 3.74858 10.9695C5.46729 12.5198 7.16934 13.5907 7.24157 13.6341L7.68051 13.9091C7.87498 14.0303 8.125 14.0303 8.31947 13.9091L8.75841 13.6341C8.83064 13.5889 10.5308 12.5198 12.2514 10.9695C13.2886 10.0343 14.1238 9.11174 14.7313 8.22716C15.1147 7.66819 15.4166 7.11465 15.624 6.58101C15.874 5.94244 16 5.31473 16 4.71235C16.0018 4.07379 15.8703 3.45332 15.6129 2.86902Z" fill="url(#paint0_linear_60_1001)" />
                    <defs>
                        <linearGradient id="paint0_linear_60_1001" x1="8" y1="0" x2="8" y2="14" gradientUnits="userSpaceOnUse">
                            <stop stopColor={"#FFB0B0"} />
                            <stop offset="1" stopColor={"#FF4343"} />
                        </linearGradient>
                    </defs>
                </svg>) : (<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z" fill="#DBDBDB" />
                </svg>)}


            </button>
            <img width={133} height={122} src={imgUrl} alt="Sneakers" className="product-card__img" />
            <h5 className="product-card__title">{title}</h5>
            <div className="product-card-price d-flex justify-between">
                <div className="product-card-price__wrap d-flex flex-column">
                    <span className="product-card-price__desc">Цена:</span>
                    <span className="product-card-price__amont">{price} р.</span>
                </div>
                <button onClick={onClickPlus} className={`product-card__tocart d-flex justify-center align-center ${isAdded ? 'inCart' : ''}`}>
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" className="product-card__tocart-img" />
                </button>
            </div>
        </div>
    );
}


export default Card;
