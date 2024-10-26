import Navigation from '../Navigation/Navigation';
import { NavLink,useLocation } from "react-router-dom";
import Title from '../Form/Title/Title';
import Product from '../Products/Product';
import ArrCategory from '../../helpers/ArrCategory/ArrCategory';
import ArrProducts from '../../helpers/ArrProducts/ArrProducts';
import React, { useState, useRef } from "react";

import './style.css';

const decodeCyrillic = (str) => { //декодирует кирилицу в url в читаемый вид
    return decodeURIComponent(str);
};

function PagesSearсh(props, { products }){

    // decodeCyrillic(location);
    const location = decodeCyrillic((useLocation().search.slice(7))); //получение запроса поиска
    console.log(location);
    
    const filteredProduct = ArrProducts.filter(product => //фильтрация и поиск словосочетания в названии товара
        product.productName.toLowerCase().includes(location.toLowerCase())
    );
    
    return (
        <>
        <section className="searсh-product">
            <div className="container">
            <Navigation url={props.catalog}/> 
            <Title text={'Результаты поиска'} hiddenTextall={props.textAll} textAll={props.textAll}/>

            <div className="product-list__box">
            {filteredProduct.map(product => (
                    <Product key={product.id} idProduct={product.id} hiddenProperties={props.hiddenProperties} hiddenTextall={props.hiddenTextall}/>
                ))}
            </div>

            </div>
        </section>
        </>
    );
};

export default PagesSearсh;
