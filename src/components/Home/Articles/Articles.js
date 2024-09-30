import ArrArticles from './../../../helpers/ArrArticles/ArrArticles';
import { NavLink } from "react-router-dom";
import './style.css';

function Articles(props) {
    return (
        <section className="articles">
            <div className="container">
                <div className="articles__wrapper">
                    <div className="product-list__header">
                        <h2 className="title-h2">Статьи</h2><NavLink className="product-list__all" to="/articles">Все статьи</NavLink>
                    </div>
                    <div className="articles__box-articles">
                    {ArrArticles.slice(0, 3).map((articl) => (
                        <article className="articl" key={articl.id}>
                            <img src={articl.imgArticles} className="articl__img" alt="Изображение статьи"/>
                            <div className="articl__box">
                                <div className='articl__interior'>
                                    <span className="articl__date">{articl.date}</span>
                                    <h3 className="articl__title">{articl.title}</h3>
                                    <p className="articl__text">{articl.text}</p>
                                </div>
                            </div>
                            <NavLink className="button__articl" to={`/articl/${articl.id}`}>Подробнее</NavLink>
                        </article>
                    ))}
                    </div>
                </div>
            </div>
      </section>
    )
}

export default Articles;