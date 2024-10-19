import './style.css';
import Navigation from '../Navigation/Navigation';
import { NavLink } from "react-router-dom";
import Title from '../Form/Title/Title';
import Product from '../Products/Product';
//ползунок
import MultiRangeSlider from '../../utils/MultiRangeSlider/MultiRangeSlider';
//переключатель чек бокс
import React, { useState } from "react";
import ReactSwitch from "react-switch";








const CatalogProduct = (props) => {   
    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked) => {
      setChecked(nextChecked);
    };
    

    return (
        <>
        <section className="catalog-product">
            <div className="container">
                <Navigation url={props.catalog}/> 
                <Title text={'Молоко, сыр, яйцо'} hiddenTextall={'true'}/>
                <div className="catalog-product__wrapper">
                    <div className="catalog-product__header">
                        <a hreа="/" className="catalog-product__header-link"><span>Товары нашего производства</span></a>
                        <a hreа="/" className="catalog-product__header-link"><span>Полезное питание</span></a>
                        <a hreа="/" className="catalog-product__header-link"><span>Без ГМО</span></a>
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
                          
                        <div  className="filter__switch">
                            <ReactSwitch
                            checked={checked}
                            onChange={handleChange}
                            onColor="#70C05B"
                            onHandleColor="fff"
                            offHandleColor="#fff"
                            handleDiameter={20}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            fontSize= {20}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            height={24}
                            width={44}
                            className="filter__checkbox"
                            id="material-switch"
                            />
                            <span>В наличии</span>
                        </div>

                        <button className="filter__btn-apply" type="button" >Применить</button>

                    </div>

                    <div className="filter__applied-title">
                        <button className="filter__btn-applied">В наличии</button>
                        <button className="filter__btn-applied">Цена от 0 до 100000</button>
                        <button className="filter__btn-applied filter__btn-applied_clear">Очистить фильтры</button>
                    </div>

                    <div className="filter__box-product">
                        <Product startProducts={0} quantityProducts={23} />
                    </div>

                </div>
            </div>
        </section>
        </>
    );
};
 
export default CatalogProduct;

//вынести фильтр в отдельный компонент
 