import React from 'react';
import Product from '../Products/Product';
import ArrProducts from '../Products/ArrProducts';
import './style.css';

function Stock(props) {
  return (  
    <section className="product-list product-list_stock">
        <div className="container">
            <div className="product-list__wrapper">
                <div className="product-list__header">
                    <h2 className="title-h2">{props.text}</h2>
                    <a className="product-list__all" href="#">{props.textall}</a>
                </div>

                <div className="product-list__box">

                  <Product ArrProducts={ArrProducts} />

                </div>

            </div>
        </div>
    </section>
  )
}

export default Stock;




