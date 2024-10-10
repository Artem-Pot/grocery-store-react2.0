//блок с товарами акции, вы покупали и т.д.
import { NavLink } from "react-router-dom";

import Product from '../Products/Product';
import './style.css';

import Title from "../Form/Title/Title";

function ProductBlock(props) {
    return (
        <section className="product-list product-list_stock">
            <div className="container">
                <div className="product-list__wrapper">

                    <Title text={props.text} hiddenTextall={props.textAll} textAll={props.textAll}/>

                    <div className="product-list__box">
                        <Product startProducts={props.startProducts} quantityProducts={props.quantityProducts} hiddenProperties={props.hiddenProperties}/>
                    </div>
                </div>
            </div>
        </section>
        )
    }

export default ProductBlock;




