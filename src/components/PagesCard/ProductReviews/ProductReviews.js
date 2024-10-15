//Блок с отзывами продукта в карточке
import "./style.css";
import Title from "../../Form/Title/Title";
import ArrReviews from "../../../helpers/ArrReviews/ArrReviews";
import ArrProducts from "../../../helpers/ArrProducts/ArrProducts";

//средний бал отзыва
function calculateAverageRating(id) {
    let sum = ArrReviews[id].review;    
    return Math.floor(sum.reduce((sum, product) => sum + product.rating, 0) / sum.length);
}

function ProductReviews(props) {
    const idProduct = ArrProducts[props.idProduct];  //вывод нужного товара полученного через пропс по id
    const idReview = ArrReviews[props.idProduct].review;

    function summaRating(rating){
        const arr = ArrReviews[props.idProduct].review;
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            if(arr[i].rating === rating){
                sum = sum + 1;
            }
        }

        return sum;
    }

    console.log(idReview[1].rating);
    

    return (
        <>
            <section className="reviews">
                <Title text={'Отзывы'} hiddenTextall='true'/>
                <div className="reviews__wrapper">
                    <div className="reviews__box-stars">
                        <div className="reviews__box-rating">
                        
                                <div className="reviews__stars">
                                    {ArrProducts.slice(0, calculateAverageRating(props.idProduct)).map((product) => ( //вывод рейтинг продукта
                                        <span className="reviews__star reviews__star_on" key={product.id}></span>
                                    ))}
        
                                    {ArrProducts.slice(0, 5 - calculateAverageRating(props.idProduct)).map((product) => ( //вывод затемнённых звёзд если у товара не 5 звёзд рейтинга
                                        <span className="reviews__star" key={product.id}></span>
                                    ))}
                                </div>

                            <span> {calculateAverageRating(props.idProduct)} из 5</span>
                        </div>

                        <div className="reviews__review-rating">

                            <div className="reviews__line">
                                <div className="reviews__stars">
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                </div>
                                    <span>{summaRating(5)}</span>
                            </div>

                            <div className="reviews__line">
                                <div className="reviews__stars">
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star"></span>
                                </div>
                                <span>{summaRating(4)}</span>
                            </div>

                            <div className="reviews__line">
                                <div className="reviews__stars">
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star"></span>
                                    <span className="reviews__star"></span>
                                </div>
                                <span>{summaRating(3)}</span>
                            </div>

                            <div className="reviews__line">
                                <div className="reviews__stars">
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star"></span>
                                    <span className="reviews__star"></span>
                                    <span className="reviews__star"></span>
                                </div>
                                <span>{summaRating(2)}</span>
                            </div>

                            <div className="reviews__line">
                                <div className="reviews__stars">
                                    <span className="reviews__star reviews__star_on"></span>
                                    <span className="reviews__star"></span>
                                    <span className="reviews__star"></span>
                                    <span className="reviews__star"></span>
                                    <span className="reviews__star"></span>
                                </div>
                                <span>{summaRating(1)}</span>
                            </div>

                        </div>

                    </div>

                    <div className="reviews__box-reviews">

                        {idReview.map(product => (
                            <article className="reviews__user" key={product.id}>
                                <span className="reviews__name-user">{product.name}</span>

                                <div className="reviews__box-rating">
                                    <div className="reviews__stars">
                                        {ArrProducts.slice(0, product.rating).map((product) => ( //вывод рейтинг продукта
                                            <span className="reviews__star reviews__star_on" key={product.id}></span>
                                        ))}
                                        {ArrProducts.slice(0, 5 - product.rating).map((product) => ( //вывод затемнённых звёзд если у товара не 5 звёзд рейтинга
                                            <span className="reviews__star" key={product.id}></span>
                                        ))}

                                    </div>
    
                                    <span className="reviews__date">{product.date}</span>
                                </div>

                                <span className="reviews__text">{product.text}</span>
                            </article>
                        
                        ))}

                        <div className="reviews__your-review">
                            <div className="reviews__box-user">
                                <span className="reviews__text-grade">Ваша оценка</span>
                                <div className="reviews__stars">
                                    <span className="reviews__star"></span>
                                    <span className="reviews__star"></span>
                                    <span className="reviews__star"></span>
                                    <span className="reviews__star"></span>
                                    <span className="reviews__star"></span>
                                </div>
                            </div>

                            <div className="reviews__input-field">
                                <textarea className="reviews__input-text" placeholder="Напишите ваш отзыв"></textarea>
                                <button className="reviews__btn-send" type="button">Отправить отзыв</button>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductReviews;