import './style.css';
import { useLocation } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import { NavLink } from "react-router-dom";
import Title from '../Form/Title/Title';
import Product from '../Products/Product';
import ArrCategory from '../../helpers/ArrCategory/ArrCategory';
import ArrProducts from '../../helpers/ArrProducts/ArrProducts';
//ползунок
import MultiRangeSlider from '../../utils/MultiRangeSlider/MultiRangeSlider';
//переключатель чек бокс
import React, { useState, useRef } from "react";
import ReactSwitch from "react-switch";

const CatalogProduct = () => { 

    //хуки для чекбокса
    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked) => {
      setChecked(nextChecked);
    };

    const location = (useLocation().pathname.slice(9)); //получение обозначения категории через URL

    const searchCategoryId = function (location) {
        const foundItem = ArrCategory.find((item) => item.urlCategory === location);
        if (foundItem) {
            return foundItem.id; // Возвращаем id найденного элемента
        }
        return null;
    };
    
    const searcId = searchCategoryId(location); //найденный id категории

    // //хуки кнопки показать ещё
    // const [visibleCount, setVisibleCount] = useState(6); // Количество отображаемых продуктов
    // const handleShowMore = () => {
    //     setVisibleCount(prevCount => prevCount + 3); // Увеличиваем на 3 по клику на "Показать ещё"
    // };
    // const availableProducts = ArrProducts.filter(product => product.productCategoryId === searcId); // Фильтруем доступные продукты
    // const visibleProducts = availableProducts.slice(0, visibleCount); // Ограничиваем количество видимых доступных продуктов

    const itemsPerPage = 6; // Количество продуктов на странице
    const [visibleCount, setVisibleCount] = useState(itemsPerPage); // Количество отображаемых продуктов
    const availableProducts = ArrProducts.filter(product => product.productCategoryId === searcId); // Фильтруем доступные продукты
    const displayedProducts = availableProducts.slice(0, visibleCount); // Ограничиваем количество видимых доступных продуктов
 
    const totalPages = Math.ceil(availableProducts.length / itemsPerPage); // Общее количество страниц
    const [currentPage, setCurrentPage] = useState(1); // Текущая страница
    
    const handleShowMore = () => {
        // Увеличиваем количество отображаемых продуктов
        setVisibleCount(prevCount => Math.min(prevCount + itemsPerPage, ArrProducts.length));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setVisibleCount(page * itemsPerPage); // Сбрасываем видимые товары до текущей страницы
    };
  
    return (
        <>
        <section className="catalog-product">
            <div className="container">
                <Navigation url={'Каталог'}/> 
                <Title text={ArrCategory[searcId - 1].textCategory} hiddenTextall={'true'}/>

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

                            <MultiRangeSlider min={0} max={10000} onChange={({ min, max }) => console.log()} />
        
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
                                handleDiameter={20}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                fontSize= {20}
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

                        <div className="filter__list-product">
                            {displayedProducts.map(product => (
                                <Product idProduct={product.id} hiddenProperties={'false'} key={product.id} />
                            ))}
                        </div>

                        <div className="filter__box-pages">

                            {visibleCount < ArrProducts.length && ( // Показываем кнопку, если есть еще продукты
                                <button className="filter__btn-show-more" onClick={handleShowMore}>Показать ещё</button>
                            )}

                            <ul className="filter__list-pages">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li className="filter__item" key={index + 1}>
                                    <button 
                                        onClick={() => handlePageChange(index + 1)} // Обрабатываем переход на страницу
                                        disabled={currentPage === index + 1} >
                                        {index + 1}
                                    </button> 
                                </li>
                            ))}
                            </ul>
                        </div>

                    </div>


                </div>
            </div>
        </section>
        </>
        
    );
};
 
export default CatalogProduct;