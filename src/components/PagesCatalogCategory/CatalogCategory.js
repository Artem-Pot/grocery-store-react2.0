import ArrCategory from '../../helpers/ArrCategory/ArrCategory';
import Navigation from '../Navigation/Navigation';
import { NavLink } from "react-router-dom";
import Title from '../Form/Title/Title';
import './style.css';

const Catalog = (props) => {    
    return (
        <>
        <section className="catalog">
        <div className="container">
            <div className="catalog__wrapper">

                <Navigation url={props.catalog}/> 

                <Title text={'Каталог'} hiddenTextall={'true'}/>
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




