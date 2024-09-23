//не могу подключить шаблон продукта, пришлось напрямую в новые товары добавлять

import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import ArrProducts from './ArrProducts';


function Product(props) {
  return ( 

    <div className="product">
        <div className="product__box-images">
        <Link to='/' className="product__link">
            <img src={ArrProducts.imgProduct} className="product__images" alt="Изображение продукта"/>
        </Link>
            <button className="product__button-favorites" type="button"></button>
            <span className="product__sales">{ArrProducts.productSales}</span>
        </div>
        <div className="product__box-price">
            <div className="product__price">
                <span className="product__price-cart">{ArrProducts.productPriceCart} ₽</span>
                <span className="product__title">С картой</span>
            </div>
            <div className="product__price">
                <span className="product__price-nocart">{ArrProducts.productNoCart} ₽</span>
                <span className="product__title">Обычная</span>
            </div>
        </div>
        <p className="product__name">
            <Link to='/' className="product__link">{ArrProducts.productName}</Link>
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




  )}

export default Product;

