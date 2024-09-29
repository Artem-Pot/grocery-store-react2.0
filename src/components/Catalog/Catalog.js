import { ReactComponent as ArrowRight} from './arrow-right.svg';
import ArrCategory from '../../helpers/ArrCategory/ArrCategory';
import './style.css';

const Catalog = (props) => {
    return (
        <>
        <section className="catalog">
        <div className="container">
            <div className="catalog__wrapper">
                <nav className="catalog__navigation">
                    <a href="/" className="catalog__link"><span>Главая</span></a>
                    <ArrowRight />
                    <a to='/catalog' className="catalog__link catalog__link_activ"><span>Каталог</span></a>
                </nav>
                <h2 className="title-h2">Каталог</h2>
                <div className="catalog__box">
                     
                {ArrCategory.map((category) => (
                    <a href="/" className="catalog__category-link" >
                    <div className="catalog__category catalog__category_span">
                        <img src={category.imgCategory} className="catalog__img" />
                        <div className="catalog__gradient">
                        <span>{category.textCategory}</span>
                        </div>
                    </div>
                </a>
                ))}
        
                </div>
            </div>
        </div>
        </section>
        </>
    );
};
 
export default Catalog ;




