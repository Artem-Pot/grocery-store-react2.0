import React from 'react';
import './styles.css';
import Heart from './img/heart.svg';
import Order from './img/order.svg';
import ShoppingCart from './img/shopping-cart.svg';
import Avatar from './img/avatar.png';


function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper"><a className="header__link-img" href="index.html">
            <div className="header__img-logo"></div></a>
          <div className="header__menu">
            <div className="button__menu"> <span>Каталог</span></div>
            <ul className="header__list">
              <li className="header__items"><a className="header__link-product" href="#">Молоко, сыр, яйцо</a></li>
              <li className="header__items"><a className="header__link-product" href="#">Хлеб</a></li>
              <li className="header__items"><a className="header__link-product" href="#">Фрукты и овощи</a></li>
              <li className="header__items"><a className="header__link-product" href="#">Напитки</a></li>
              <li className="header__items"><a className="header__link-product" href="#">Кондитерские изделия</a></li>
              <li className="header__items"><a className="header__link-product" href="#">Чай, кофе</a></li>
            </ul>
          </div>
          <div className="header__box-search">
            <input className="header__search" type="text" placeholder="Найти товар"/>
            <button className="button__search"></button>
          </div>
          <div className="header__box-icons">
            <div className="header__wrapper-icons"><img className="header__img-icons" src={Heart} /><span className="header__title">Избранное</span></div>
            <div className="header__wrapper-icons"><img className="header__img-icons" src={Order} /><span className="header__title">Заказы</span></div>
            <div className="header__wrapper-icons"><img className="header__img-icons" src={ShoppingCart} /><span className="header__title">Корзина</span></div>
          </div>
          <div className="header__box-profile"><img className="header__img-ava" src={Avatar} alt="Аватар"/><span className="header__name-user">Алексей</span>
            <button className="button__arrow"></button>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Header;