import React, { useState, useRef, useEffect } from "react";
import './style.css';
import { ReactComponent as Heart } from "./img/heart.svg";
import { ReactComponent as Order } from "./img/order.svg";
import { ReactComponent as ShoppingCart } from "./img/shopping-cart.svg";
import Avatar from './img/profile.svg';
import { ReactComponent as ArrowDown } from './img/arrow-down.svg';


function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a className="header__link-img" href="index.html">
            <div className="header__img-logo"></div>
          </a>
          <div className="header__menu" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>

          <a href="catalog.html">
            <div className="button__menu">
                <span>Каталог</span>
            </div>
          </a>

          {isVisible && (
            <ul className="header__list">
              <li className="header__items">
                <a href="#">Молоко, сыр, яйцо</a>
              </li>
              <li className="header__items">
                <a href="#">Хлеб</a>
              </li>
              <li className="header__items">
                <a href="#">Замороженные продукты</a>
              </li>
              <li className="header__items">
                <a href="#">Напитки</a>
              </li>
              <li className="header__items">
                <a href="#">Кондитерские изделия</a>
              </li>
              <li className="header__items">
                <a href="#">Чай, кофе</a>
              </li>
              <li className="header__items">
                <a href="#">Бакалея</a>
              </li>
              <li className="header__items">
                <a href="#">Здоровое питание</a>
              </li>
              <li className="header__items">
                <a href="#">Зоотовары</a>
              </li>
              <li className="header__items">
                <a href="#">Детское питание</a>
              </li>
              <li className="header__items">
                <a href="#">Мясо, птица, колбаса</a>
              </li>
              <li className="header__items">
                <a href="#">Непродовольственные товары</a>
              </li>
            </ul>
        
          )}
          </div>
          <div className="header__box-search">
            <input className="header__search" type="text" placeholder="Найти товар"/>
            <button className="button__search"></button>
          </div>
          <div className="header__box-icons">
          <a href="#"><div className="header__wrapper-icons"><Heart /><span className="header__title">Избранное</span></div></a>
          <a href="#"><div className="header__wrapper-icons"><Order /><span className="header__title">Заказы</span></div></a>
          <a href="#"><div className="header__wrapper-icons"><ShoppingCart /><span className="header__title">Корзина</span></div></a>
          </div>
          <div className="header__box-profile">
            <img className="header__img-ava" src={Avatar} alt="Аватар"/>
            <span className="header__name-user">Артём</span>
            <ArrowDown className='button__arrow'/>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Header;