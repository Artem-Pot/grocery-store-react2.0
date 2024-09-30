import { NavLink } from "react-router-dom";
import './style.css';
import ArrProducts from '../../../helpers/ArrProducts/ArrProducts';
import { ReactComponent as Favorites } from "./img/favorites.svg";


function Product(props) {
  return (
    <>
    {ArrProducts.slice(props.startProducts, props.quantityProducts).map((product) => (
        <div className="product" key={product.id}>
        <div className="product__box-images">
        <NavLink className="product__link" to={`/product/${product.id}`}>
            <img src={product.imgProduct} className="product__images" alt="Изображение продукта"/>
        </NavLink>
            <button className="product__button-favorites" type="button"><Favorites className='ico-favorites'/></button>
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
        <p className="product__name">
            <NavLink className="product__link" to={`/product/${product.id}`}>{product.productName}</NavLink>
        </p>
        <div className="product__box-rating">
            {ArrProducts.slice(0, product.boxRating).map((product) => ( //вывод рейтинг продукта
                <span className="product__star product__star_on" key={product.id}></span>
            ))}
            {ArrProducts.slice(0, 5 - product.boxRating).map((product) => ( //вывод затемнённых звёзд если у товара не 5 звёзд рейтинга
                <span className="product__star"></span>
            ))}
        </div>
        <button className="product__button-buy" type="button">В корзину</button>
    </div>
    
    ))}
  </>
  )}

export default Product;