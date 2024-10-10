//Блок с отзывами продукта в карточке
import "./style.css";
import Title from "../../Form/Title/Title";
import ArrReviews from "../../../helpers/ArrReviews/ArrReviews";
import ArrProducts from "../../../helpers/ArrProducts/ArrProducts";

//средний бал отзыва
function calculateAverageRating(id) {
    let sum = ArrReviews[id].review;    
    return Math.floor (sum.reduce((sum, product) => sum + product.rating, 0) / sum.length);
}

function ProductReviews() {
    return (
        <>
            <section className="reviews">
                <Title text={'Отзывы'} hiddenTextall='true'/>
                <div className="reviews__wrapper">
                    <div className="reviews__box-stars">
                        <div className="reviews__box-rating">
                        
                                <div className="reviews__stars">
                                    {ArrProducts.slice(0, calculateAverageRating(1)).map((product) => ( //вывод рейтинг продукта
                                        <span className="reviews__star reviews__star_on" key={product.id}></span>
                                    ))}
        
                                    {ArrProducts.slice(0, 5 - calculateAverageRating(1)).map((product) => ( //вывод затемнённых звёзд если у товара не 5 звёзд рейтинга
                                        <span className="reviews__star" key={product.id}></span>
                                    ))}
                                </div>
                            <span> 4 из 5</span>
                        </div>

                        <div className="reviews__review-rating">

                            <div className="reviews__line">
                                <span>5</span>
                                <div className="reviews__stars">
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                </div>
                                <span>5</span>
                            </div>

                        <div className="reviews__line">
                            <span>4</span>
                            <div className="reviews__stars">
                                <span className="reviews__star reviews__star_on"></span>
                                <span className="reviews__star reviews__star_on"></span>
                                <span className="reviews__star reviews__star_on"></span>
                                <span className="reviews__star reviews__star_on"></span>
                                <span className="reviews__star"></span>
                            </div>
                            <span>4</span>
                        </div>

                        <div className="reviews__line">
                            <span>3</span>
                            <div className="reviews__stars">
                                <span className="reviews__star reviews__star_on"></span>
                                <span className="reviews__star reviews__star_on"></span>
                                <span className="reviews__star reviews__star_on"></span>
                                <span className="reviews__star"></span>
                                <span className="reviews__star"></span>
                            </div>
                            <span>1</span>
                        </div>

                        <div className="reviews__line">
                            <span>2</span>
                            <div className="reviews__stars">
                                <span className="reviews__star reviews__star_on"></span>
                                <span className="reviews__star reviews__star_on"></span>
                                <span className="reviews__star"></span>
                                <span className="reviews__star"></span>
                                <span className="reviews__star"></span>
                            </div>
                            <span>2</span>
                        </div>

                        <div className="reviews__line">
                            <span>1</span>
                            <div className="reviews__stars">
                                <span className="reviews__star reviews__star_on"></span>
                                <span className="reviews__star"></span>
                                <span className="reviews__star"></span>
                                <span className="reviews__star"></span>
                                <span className="reviews__star"></span>
                            </div>
                            <span>1</span>
                        </div>

                        </div>

                    </div>

                    <div className="reviews__box-reviews">
                        <article className="reviews__user">
                            <span className="reviews__name-user">Татьяна</span>

                            <div className="reviews__box-rating">
                                <div className="reviews__stars">
                                    {ArrProducts.slice(0, calculateAverageRating(1)).map((product) => ( //вывод рейтинг продукта
                                        <span className="reviews__star reviews__star_on" key={product.id}></span>
                                    ))}
        
                                    {ArrProducts.slice(0, 5 - calculateAverageRating(1)).map((product) => ( //вывод затемнённых звёзд если у товара не 5 звёзд рейтинга
                                        <span className="reviews__star" key={product.id}></span>
                                    ))}
                                </div>
                                <span className="reviews__date">22.02.2020</span>
                            </div>

                            <span className="reviews__text">Приятный вкус</span>
                        </article>

                        <article className="reviews__user">
                            <span className="reviews__name-user">Татьяна</span>

                            <div className="reviews__box-rating">
                                <div className="reviews__stars">
                                    {ArrProducts.slice(0, calculateAverageRating(1)).map((product) => ( //вывод рейтинг продукта
                                        <span className="reviews__star reviews__star_on" key={product.id}></span>
                                    ))}
        
                                    {ArrProducts.slice(0, 5 - calculateAverageRating(1)).map((product) => ( //вывод затемнённых звёзд если у товара не 5 звёзд рейтинга
                                        <span className="reviews__star" key={product.id}></span>
                                    ))}
                                </div>
                                <span className="reviews__date">22.02.2020</span>
                            </div>

                            <span className="reviews__text">Приятный вкус</span>
                        </article>
                    </div>





                </div>
            </section>
        </>
    );
};

export default ProductReviews;