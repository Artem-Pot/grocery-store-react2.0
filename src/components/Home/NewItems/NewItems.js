import { NavLink } from "react-router-dom";

import Product from '../Products/Product';
import './style.css';

function NewItems(props) {
    return (
        <section className="product-list product-list_stock">
            <div className="container">
                <div className="product-list__wrapper">
                    <div className="product-list__header">
                        <h2 className="title-h2">{props.text}</h2>
                        <NavLink className="product-list__all" to="product">{props.textall}</NavLink>
                    </div>
                    <div className="product-list__box">
                        <Product startProducts={5} quantityProducts={9} hiddenProperties='false'/>
                    </div>
                </div>
            </div>
        </section>
        )
    }

export default NewItems;