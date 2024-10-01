import ArrCategory from '../../helpers/ArrCategory/ArrCategory';
import Navigation from '../Navigation/Navigation';
import { NavLink } from "react-router-dom";
import './style.css';

const Catalog = (props) => {
    return (
        <>
        <section className="catalog">
        <div className="container">
            <div className="catalog__wrapper">

                <Navigation url={props.url}/>

                <h2 className="title-h2">Каталог</h2>
                <div className="catalog__box">
 
                {ArrCategory.map((category) => (
                    <NavLink to={category.urlCategory} className="catalog__category-link" key={category.id}>
                        <div className="catalog__category catalog__category_span" >
                            <img src={category.imgCategory} className="catalog__img" />
                            <div className="catalog__gradient" >
                            <span>{category.textCategory}</span>
                            </div>
                        </div>
                    </NavLink>
                ))}
        
                </div>
            </div>
        </div>
        </section>
        </>
    );
};
 
export default Catalog ;




