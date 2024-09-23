import React from 'react';
import Product from '../Products/Product';
import ArrProducts from '../Products/ArrProducts';


function NewItems() {
    return (
        <section className="product-list product-list_stock">
            <div className="container">
                <div className="product-list__wrapper">
                    <div className="product-list__header">
                        <h2 className="title-h2">Новинки</h2>
                        <a href='/' className="product-list__all">Все новинки</a>
                    </div>
                    <div className="product-list__box">

                        <Product ArrProducts={ArrProducts} />
                        
                    </div>
                </div>
            </div>
        </section>
        )
    }


export default NewItems;