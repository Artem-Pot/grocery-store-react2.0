//карточка товара в каталоге
import { NavLink } from "react-router-dom";
import './style.css';
import ArrProducts from '../../helpers/ArrProducts/ArrProducts';
import { ReactComponent as Favorites } from "./img/favorites.svg";

function Product(props) {
  return (
    <>
    {ArrProducts.slice(props.startProducts, props.quantityProducts).map((product) => (

            <div className="product" key={product.id}>
                <button className="product__button-favorites" type="button"><Favorites className='ico-favorites'/></button>
                <NavLink className="product__link" to={`/card/${product.id}`}>
                    <div className="product__box">
                        <div className="product__box-images">

                            <img src={product.imgProduct} className="product__images" alt="Изображение продукта"/>
                            <span className={props.hiddenProperties === 'true'? 'displayNone' : 'product__sales'}>{product.productSales}</span>
                        </div>

                        <div className="product__box-price">
                            <div className="product__price">
                                <span className="product__price-cart">{product.productPriceCart} ₽</span>
                                <span className={props.hiddenProperties === 'true'? 'displayNone' : 'product__title'}>С картой</span>
                            </div>
                            <div className={props.hiddenProperties === 'true'? 'displayNone' : 'product__price'}>
                                <span className="product__price-nocart">{product.productNoCart} ₽</span>
                                <span className="product__title">Обычная</span>
                            </div>
                        </div>

                        <div className="product__name">
                            <span >{product.productName}</span>
                        </div>

                        <div className="product__box-rating">
                            {ArrProducts.slice(0, product.boxRating).map((product) => ( //вывод рейтинг продукта
                                <span className="product__star product__star_on" key={product.id}></span>
                            ))}
                            {ArrProducts.slice(0, 5 - product.boxRating).map((product) => ( //вывод затемнённых звёзд если у товара не 5 звёзд рейтинга
                                <span className="product__star" key={product.id}></span>
                            ))}
                        </div>
                    </div>        
                </NavLink>
                <button className="product__button-buy" type="button">В корзину</button>
            </div>

    ))}
  </>
  )}

export default Product;