//карточка товара в каталоге
import { NavLink } from "react-router-dom";
import './style.css';
import ArrProducts from '../../helpers/ArrProducts/ArrProducts';
import ArrReviews from "../../helpers/ArrReviews/ArrReviews";
import { ReactComponent as Favorites } from "./img/favorites.svg";

//средний бал отзыва
function calculateAverageRating(id) {
    let sum = ArrReviews[id - 1].review;    
    return Math.floor (sum.reduce((sum, product) => sum + product.rating, 0) / sum.length);
}

function Product(props) {
    
         
  return (
    <>            
    <section className="product" >
        <button className="product__button-favorites" type="button"><Favorites className='ico-favorites'/></button>
        <NavLink className="product__link" to={`/card/${ArrProducts[props.idProduct - 1].id}`}>

            <div className="product__box">
                    <div className="product__box-images">
                    <img src={ArrProducts[props.idProduct - 1].imgProduct} className="product__images" alt="Изображение продукта"/>
                    <span className={props.hiddenProperties === 'true'? 'displayNone' : 'product__sales'}>{ArrProducts[props.idProduct - 1].productSales}</span>
                </div>

                <div className="product__box-price">
                    <div className="product__price">
                        <span className="product__price-cart">{ArrProducts[props.idProduct - 1].productPriceCart} ₽</span>
                        <span className={props.hiddenProperties === 'true'? 'displayNone' : 'product__title'}>С картой</span>
                    </div>
                    <div className={props.hiddenProperties === 'true'? 'displayNone' : 'product__price'}>
                        <span className="product__price-nocart">{ArrProducts[props.idProduct - 1].productNoCart} ₽</span>
                        <span className="product__title">Обычная</span>
                    </div>
                </div>

                <div className="product__name">
                    <span >{ArrProducts[props.idProduct - 1].productName}</span>
                </div>


                <div className="product__box-rating">
                    {ArrProducts.slice(0, calculateAverageRating(ArrProducts[props.idProduct - 1].id)).map((product) => ( //вывод рейтинг продукта
                        <span className="product__star product__star_on" key={product.id}></span>
                    ))}

                    {ArrProducts.slice(0, 5 - calculateAverageRating(ArrProducts[props.idProduct - 1].id)).map((product) => ( //вывод затемнённых звёзд если у товара не 5 звёзд рейтинга
                        <span className="product__star" key={product.id}></span>
                    ))}
                </div>
                
            </div>        
        </NavLink>
        <button className="product__button-buy" type="button">В корзину</button>
    </section>  

  </>
  )}

export default Product;