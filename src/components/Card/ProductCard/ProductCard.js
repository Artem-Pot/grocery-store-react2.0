//Карточка продукта
import "./style.css";
import imgProduct from "../../../helpers/ArrProducts/img/product-9.png";

function ProductCard() {
    return (
        <>
            <div className="card__card-product">
                <span>Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г</span>
                <div className="card__box-button">
                    <span className="card__product-article">арт. 371431</span>
                    <div className="card__box-Rating"></div>
                    <button className="card__button-share" type="button">Поделиться</button>
                    <button className="card__button-favorites" type="button">В избранное</button>
                </div>

                <div className="card__box-images">
                    <div className="card__images-small">
                        <img src={imgProduct} className="card__images_small" alt="Изображение продукта"/>
                    </div>
                    <div className="card__images-big">
                        <img src={imgProduct} className="card__images_big" alt="Изображение продукта" />
                        <span className="card__sales">-50%</span>
                    </div>
                </div>

                <div className="card__box-information">
                    <div className="card___box-price">
                        <div className="card___price">
                            <span className="card___price-nocart">130 ₽</span>
                            <span className="card___title">Обычная</span>
                        </div>

                        <div className="card___price">
                            <span className="card___price-cart">100 ₽</span>
                            <span className="card___title">С картой Северяночки</span>
                        </div>
                    </div>
                    
                    <button className="card__button-buy" type="button">В корзину</button>
                    <span className="card__bonus"></span>
                    <button className="card__button-decrease" type="button">Уведомить о снижении цены</button>

                    <div className="card__box-characteristics">
                        <div className="card__characteristics">
                            <span className="card__characteristics-left">Бренд</span>
                            <span className="card__characteristics-right">ПРОСТОКВАШИНО</span>
                        </div>
                        <div className="card__characteristics">
                            <span className="card__characteristics-left">Страна производителя</span>
                            <span className="card__characteristics-right">Россия</span>
                        </div>
                        <div className="card__characteristics">
                            <span className="card__characteristics-left">Упаковка</span>
                            <span className="card__characteristics-right">180 г</span>
                        </div>
                    </div>
                </div>

                <div className="card__similar">
                    <span>Похожие</span>
                    <div className="card__box-similar">
                        <div className="card__similar-product">
                            <img src={imgProduct} className="card__images_big" alt="Изображение продукта" />
                            <span>200 ₽</span>
                        </div>
                    
                    <div className="card__similar-product">
                        <img src={imgProduct} className="card__images_big" alt="Изображение продукта" />
                        <span>300 ₽</span>
                    </div>

                    <div className="card__similar-product">
                        <img src={imgProduct} className="card__images_big" alt="Изображение продукта" />
                        <span>250 ₽</span>
                    </div>

                    <div className="card__similar-product">
                        <img src={imgProduct} className="card__images_big" alt="Изображение продукта" />
                        <span>210 ₽</span>
                    </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;