//блок с товарами акции, вы покупали и т.д.
import { NavLink } from "react-router-dom";

import Product from '../Products/Product';
import './style.css';

function ProductBlock(props) {
    return (
        <section className="product-list product-list_stock">
            <div className="container">
                <div className="product-list__wrapper">
                    <div className="product-list__header">
                        <h2 className="title-h2">{props.text}</h2>
                        <NavLink className={props.hiddenTextall === 'true'? 'displayNone' : 'product-list__all'} to="product">{props.textAll}</NavLink>
                        
                    </div>
                    <div className="product-list__box">
                        <Product startProducts={props.startProducts} quantityProducts={props.quantityProducts} hiddenProperties={props.hiddenProperties}/>
                    </div>
                </div>
            </div>
        </section>
        )
    }

export default ProductBlock;




