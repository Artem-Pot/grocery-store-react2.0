//Страница карточки товара
import ProductCard from '../components/Card/ProductCard/ProductCard';
import Navigation from '../components/Navigation/Navigation';

function Card(){
    return (
        <>
        <main className="card">
            <div className="container">
                <div className="card__wrapper">

                    <Navigation/>
                    <ProductCard/>

                </div>
            </div>
        </main>
        </>
    );
};

export default Card;