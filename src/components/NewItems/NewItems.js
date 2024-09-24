import React from 'react';
import Product from '../Products/Product';
import './style.css';

function NewItems(props) {
    return (
        <section className="product-list product-list_stock">
            <div className="container">
                <div className="product-list__wrapper">
                    <div className="product-list__header">
                        <h2 className="title-h2">{props.text}</h2>
                        <a href='/' className="product-list__all">{props.textall}</a>
                    </div>
                    <div className="product-list__box">
                        <Product quantityProducts={4}/>
                    </div>
                </div>
            </div>
        </section>
        )
    }

export default NewItems;