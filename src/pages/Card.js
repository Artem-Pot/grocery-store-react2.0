//Страница карточки товара
import { useLocation } from "react-router-dom";

import ProductCard from '../components/Card/ProductCard/ProductCard';
import Navigation from '../components/Navigation/Navigation';
import ProductBlock from '../components/ProductBlock/ProductBlock';


function Card(props){
    const location = +(useLocation().pathname.slice(6)) - 1; //получение номера id товара через URL
   
    return (
        <>
        <main className="card">
            <div className="container">
                <div className="card__wrapper">

                    <Navigation/>
                    <ProductCard idProduct={(location)}/>
                    <ProductBlock text={'С этим товаром покупают'} textAll={'Все покупки'} startProducts={5} quantityProducts={9} hiddenProperties='false' hiddenTextall='true' />
                </div>
            </div>
        </main>
        </>
    );
};

export default Card;