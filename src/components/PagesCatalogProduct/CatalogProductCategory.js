import './style.css';
import Navigation from '../Navigation/Navigation';
import { NavLink } from "react-router-dom";
import Title from '../Form/Title/Title';
import MultiRangeSlider from '../../utils/MultiRangeSlider/MultiRangeSlider';


const CatalogProduct = (props) => {    
    return (
        <>
        <section className="catalog-product">
            <div className="container">
                <Navigation url={props.catalog}/> 
                <Title text={'Молоко, сыр, яйцо'} hiddenTextall={'true'}/>
                <div className="catalog-product__wrapper">
                    <div className="catalog-product__header">
                        <a hreа="/" className="catalog-product__header-link">Товары нашего производства</a>
                        <a hreа="/" className="catalog-product__header-link">Полезное питание</a>
                        <a hreа="/" className="catalog-product__header-link">Без ГМО</a>
                    </div>
                    <div className="filter">
                        <span className="filter__title">Фильтр</span>
                        <div className="filter__box-price">
                            <div className="filter__box-input">
                                <span className="filter__label">Цена</span>
                                <button className="filter__btn-clear">Очистить</button>
                            </div>

                            <MultiRangeSlider min={0} max={100000} onChange={({ min, max }) => console.log()} />
        
                        </div>

                        <ul className="filter__category-list">
                            <li className="filter__category-item">Молоко</li>
                            <li className="filter__category-item">Сливки</li>
                            <li className="filter__category-item">Яйцо</li>
                        </ul>

                        <div className="filter__switch">
                            <input className="filter__checkbox" type="checkbox"></input>
                            <span>В наличии</span>
                        </div>

                        <button className="filter__btn-apply" type="button" >Применить</button>

                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
 
export default CatalogProduct;

//вынести фильтр в отдельный компонент
 