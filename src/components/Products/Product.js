import React from 'react';
import './style.css';
import ArrProducts from '../Products/ArrProducts';

function Product(props) {
  return (
    <>
    {ArrProducts.slice(props.startProducts, props.quantityProducts).map((product) => (
        <div className="product" key={product.id}>
        <div className="product__box-images">
        <a href='/' className="product__link">
            <img src={product.imgProduct} className="product__images" alt="Изображение продукта"/>
        </a>
            <button className="product__button-favorites" type="button"></button>
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
            <a href='/' className="product__link">{product.productName}</a>
        </p>
        <div className="product__box-rating">
            <button className="product__star product__star_on" type="button"></button>
            <button className="product__star product__star_on" type="button"></button>
            <button className="product__star product__star_on" type="button"></button>
            <button className="product__star product__star_on" type="button"></button>
            <button className="product__star" type="button"></button>
        </div>
        <button className="product__button-buy" type="button">В корзину</button>
    </div>
    
    ))}
  </>
  )}

export default Product;