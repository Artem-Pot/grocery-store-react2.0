import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import imgCategory1 from './catalog/category1.jpeg';
import imgCategory2 from './catalog/category2.jpeg';
import imgCategory3 from './catalog/category3.jpeg';
import imgCategory4 from './catalog/category4.jpeg';
import imgCategory5 from './catalog/category5.jpeg';
import imgCategory6 from './catalog//category6.jpeg';
import imgCategory7 from './catalog/category7.jpeg';
import imgCategory8 from './catalog/category8.jpeg';
import imgCategory9 from './catalog/category9.jpeg';
import imgCategory10 from './catalog/category10.jpeg';
import imgCategory11 from './catalog/category11.jpeg';
import imgCategory12 from './catalog/category12.jpeg';
import imgCategory13 from './catalog/category13.jpeg';

import { ReactComponent as ArrowRight} from "./catalog/arrow-right.svg";
 
const Catalog = () => {
    return (
        <div>
        <Header />

        <section className="catalog">
            <div className="container">
                <div className="catalog__wrapper">
                    <nav className="catalog__navigation">
                        <Link to='/' className="catalog__link"><span>Главая</span></Link>
                        <ArrowRight />
                        <Link to='/catalog' className="catalog__link catalog__link_activ"><span>Каталог</span></Link>
                    </nav>
                    <h2 className="title-h2">Каталог</h2>
                    <div className="catalog__box">
                         
                        <Link to='/' className="catalog__category-link">
                            <div className="catalog__category catalog__category_span">
                                <img src={imgCategory1} className="catalog__img"/>
                                <div className="catalog__gradient">
                                <span>Молоко, сыр, яйцо</span>
                                </div>
                            </div>
                        </Link>
 
                        <Link to='/' className="catalog__category-link">
                            <div className="catalog__category">
                                <img src={imgCategory2} className="catalog__img"/>
                                <div className="catalog__gradient">
                                    <span>Хлеб</span>
                                </div>
                            </div>
                        </Link>

                        <Link to='/' className="catalog__category-link">
                            <div className="catalog__category">
                                <img src={imgCategory3} className="catalog__img"/>
                                <div className="catalog__gradient">
                                    <span>Фрукты и овощи</span>
                                </div>
                            </div>
                        </Link>

                        <Link to='/' className="catalog__category-link">
                            <div className="catalog__category">
                                <img src={imgCategory4} className="catalog__img"/>
                                <div className="catalog__gradient">
                                    <span>Замороженные продукты</span>
                                </div>
                            </div>
                        </Link>

                        <Link to='/' className="catalog__category-link">
                            <div className="catalog__category">
                                <img src={imgCategory5} className="catalog__img"/>
                                <div className="catalog__gradient">
                                    <span>Напитки</span>
                                </div>
                            </div>
                        </Link>

                        <Link to='/' className="catalog__category-link">
                            <div className="catalog__category">
                                <img src={imgCategory6} className="catalog__img"/>
                                <div className="catalog__gradient">
                                    <span>Кондитерские изделия</span>
                                </div>
                            </div>
                        </Link>

                        <Link to='/' className="catalog__category-link">
                            <div className="catalog__category">
                                <img src={imgCategory7} className="catalog__img"/>
                                <div className="catalog__gradient">
                                    <span>Чай, кофе</span>
                                </div>
                            </div>
                        </Link>

                        <Link to='/' className="catalog__category-link">
                            <div className="catalog__category">
                                <img src={imgCategory8} className="catalog__img"/>
                                <div className="catalog__gradient">
                                    <span>Бакалея</span>
                                </div>
                            </div>
                        </Link>

                        <Link to='/' className="catalog__category-link">
                            <div className="catalog__category">
                                <img src={imgCategory9} className="catalog__img"/>
                                <div className="catalog__gradient">
                                    <span>Здоровое питание</span>
                                </div>
                            </div>
                        </Link>

                        <Link to='/' className="catalog__category-link">
                            <div className="catalog__category catalog__category_span">
                                <img src={imgCategory10} className="catalog__img"/>
                                <div className="catalog__gradient">
                                    <span>Зоотовары</span>
                                </div>
                            </div>
                        </Link>

                        <Link to='/' className="catalog__category-link">
                            <div className="catalog__category catalog__category_span">
                                <img src={imgCategory12} className="catalog__img"/>
                                <div className="catalog__gradient">
                                    <span>Мясо, птица, колбаса</span>
                                </div>
                            </div>
                        </Link>

                        <Link to='/' className="catalog__category-link">
                            <div className="catalog__category">
                                <img src={imgCategory11} className="catalog__img"/>
                                <div className="catalog__gradient">
                                    <span>Детское питание</span>
                                </div>
                            </div>
                        </Link>

                        <Link to='/' className="catalog__category-link">
                            <div className="catalog__category">
                                <img src={imgCategory13} className="catalog__img"/>
                                <div className="catalog__gradient">
                                    <span>Прочие товары</span>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </section>

        <Footer />
        </div>
    );
};
 
export default Catalog ;