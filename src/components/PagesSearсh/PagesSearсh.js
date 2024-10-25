import Navigation from '../Navigation/Navigation';
import { NavLink } from "react-router-dom";
import Title from '../Form/Title/Title';
import Product from '../Products/Product';
import ArrCategory from '../../helpers/ArrCategory/ArrCategory';
import ArrProducts from '../../helpers/ArrProducts/ArrProducts';
import React, { useState, useRef } from "react";

import './style.css';

function PagesSearсh(props, { products }){
    return (
        <>
        <section className="searсh-product">
            <div className="container">
            <Navigation url={props.catalog}/> 
            <Title text={'Результаты поиска'} hiddenTextall={props.textAll} textAll={props.textAll}/>

            <div className="product-list__box">
                <Product idProduct={1} hiddenProperties={props.hiddenProperties} hiddenTextall={props.hiddenTextall}/>
                <Product idProduct={2} hiddenProperties={props.hiddenProperties} hiddenTextall={props.hiddenTextall}/>
                <Product idProduct={3} hiddenProperties={props.hiddenProperties} hiddenTextall={props.hiddenTextall}/>
                <Product idProduct={4} hiddenProperties={props.hiddenProperties} hiddenTextall={props.hiddenTextall}/>
                <Product idProduct={8} hiddenProperties={props.hiddenProperties} hiddenTextall={props.hiddenTextall}/>
                <Product idProduct={12} hiddenProperties={props.hiddenProperties} hiddenTextall={props.hiddenTextall}/>
                <Product idProduct={19} hiddenProperties={props.hiddenProperties} hiddenTextall={props.hiddenTextall}/>
                <Product idProduct={25} hiddenProperties={props.hiddenProperties} hiddenTextall={props.hiddenTextall}/>
            </div>

            </div>
        </section>
        </>
    );
};

export default PagesSearсh;