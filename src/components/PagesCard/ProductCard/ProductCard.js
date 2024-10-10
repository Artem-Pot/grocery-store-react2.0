//Карточка продукта
import "./style.css";
import ArrProducts from '../../../helpers/ArrProducts/ArrProducts';
import ArrReviews from "../../../helpers/ArrReviews/ArrReviews";

import imgProduct from "../../../helpers/ArrProducts/img/product-22.png";
import imgProduct2 from "../../../helpers/ArrProducts/img/product-21.png";
import imgProduct3 from "../../../helpers/ArrProducts/img/product-20.png";
import imgProduct4 from "../../../helpers/ArrProducts/img/product-15.png";

//количество отзывов
function numberReviews(id) { 
   let sum = ArrReviews[id - 1].review.length;
   return sum;
}

//функция меняющая окончания слова 'отзыв'
function changesEndingsWords(count) {
    if (count % 10 === 1 && count % 100 !== 11) {
        return 'отзыв';
    } else if ((count % 10 >= 2 && count % 10 <= 4) && (count % 100 < 12 || count % 100 > 14)) {
        return 'отзыва';
    } else {
        return 'отзывов';
    }
}

//функция меняющая окончания слова 'бонус'
function changeEndingBonus(count) {
    if (count % 10 === 1 && count % 100 !== 11) {
        return 'бонус';
    } else if ((count % 10 >= 2 && count % 10 <= 4) && (count % 100 < 12 || count % 100 > 14)) {
        return 'бонуса';
    } else {
        return 'бонусов';
    }
}

//средний бал отзыва
function calculateAverageRating(id) {
    let sum = ArrReviews[id].review;    
    return Math.floor (sum.reduce((sum, product) => sum + product.rating, 0) / sum.length);
}

function ProductCard(props) {
    const idProduct = ArrProducts[props.idProduct];  //вывод нужного товара полученного через пропс по id

    
    return (
        <>
            <section className="card__card-product">

                <div className="card__header">
                    <span className="card__name">{idProduct.productName}</span>

                    <div className="card__box-button">
                        <span className="card__product-article">арт. {idProduct.productArticl}</span>

                        <div className="card__box-rating">
                            {ArrProducts.slice(0, calculateAverageRating(idProduct.id)).map((product) => ( //вывод рейтинг продукта
                                <span className="product__star product__star_on" key={product.id}></span>
                            ))}

                            {ArrProducts.slice(0, 5 - calculateAverageRating(idProduct.id)).map((product) => ( //вывод затемнённых звёзд если у товара не 5 звёзд рейтинга
                                <span className="product__star" key={product.id}></span>
                            ))}

                            <span className="card__rating-text"><a href="/">{numberReviews(idProduct.id)} {changesEndingsWords(numberReviews(idProduct.id))}</a></span>
                        </div>
                    
                        <button className="card__button card__button-share" type="button">Поделиться</button>
                        <button className="card__button card__button-favorites" type="button">В избранное</button>
                    </div>
                </div>
                            
                <div className="card__box">

                    <div className="card__box-images">
                        <div className="card__box-small">
                            <div className="card__small">
                                <img src={idProduct.imgProduct} className="card__images card__images_small" alt="Изображение продукта"/>
                            </div>
                            <div className="card__small">
                                <img src={idProduct.imgProduct} className="card__images card__images_small" alt="Изображение продукта"/>
                            </div>
                            <div className="card__small">
                                <img src={idProduct.imgProduct} className="card__images card__images_small" alt="Изображение продукта"/>
                            </div>
                            <div className="card__small">
                                <img src={idProduct.imgProduct} className="card__images card__images_small" alt="Изображение продукта"/>
                            </div>
                            <div className="card__small">
                                <img src={idProduct.imgProduct} className="card__images card__images_small" alt="Изображение продукта"/>
                            </div>
                        </div>

                        <div className="card__big">
                            <img src={idProduct.imgProduct} className="card__images card__images_big" alt="Изображение продукта" />
                            <span className="card__sales">{idProduct.productSales}</span>
                        </div>
                    </div>

                    <div className="card__box-information">
                        <div className="card___box-price">
                            <div className="card___price">
                                <span className="card___price-nocart">{idProduct.productNoCart} ₽</span>
                                <span className="card___title">Обычная</span>
                            </div>

                            <div className="card___price">
                                <span className="card___price-cart">{idProduct.productPriceCart} ₽</span>
                                <span className="card___title">С картой Северяночки</span>
                            </div>
                        </div>
                        
                        <button className="card__button-buy" type="button">В корзину</button>
                        <span className="card__bonus">Вы получите {Math.floor(idProduct.productNoCart / 10)} {changeEndingBonus((Math.floor(idProduct.productNoCart / 10)))}</span>
                        <button className="card__button-decrease" type="button">Уведомить о снижении цены</button>

                        <div className="card__box-characteristics">
                            <div className="card__characteristics">
                                <span className="card__characteristics-left">Бренд</span>
                                <span className="card__characteristics-right">{idProduct.productBrand}</span>
                            </div>
                            <div className="card__characteristics">
                                <span className="card__characteristics-left">Страна производителя</span>
                                <span className="card__characteristics-right">{idProduct.productCountry}</span>
                            </div>
                            <div className="card__characteristics">
                                <span className="card__characteristics-left">Упаковка</span>
                                <span className="card__characteristics-right">{idProduct.productWeight}</span>
                            </div>
                        </div>
                    </div>

                    <div className="card__similar">
                        <span>Похожие</span>
                        <div className="card__box-similar">

                            <a href="/">
                                <div className="card__similar-product">
                                    <img src={imgProduct} className="card__images card__images_small" alt="Изображение продукта" />
                                    <span>250 ₽</span>
                                </div>
                            </a>
                            
                            <a href="/">
                                <div className="card__similar-product">
                                    <img src={imgProduct2} className="card__images card__images_small" alt="Изображение продукта" />
                                    <span>250 ₽</span>
                                </div>
                            </a>

                            <a href="/">
                                <div className="card__similar-product">
                                    <img src={imgProduct3} className="card__images card__images_small" alt="Изображение продукта" />
                                    <span>250 ₽</span>
                                </div>
                            </a>

                            <a href="/">
                                <div className="card__similar-product">
                                    <img src={imgProduct4} className="card__images card__images_small" alt="Изображение продукта" />
                                    <span>250 ₽</span>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ProductCard;