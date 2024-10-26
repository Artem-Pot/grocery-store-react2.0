import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './style.css';
import ArrCategory from '../../helpers/ArrCategory/ArrCategory';

import { ReactComponent as Heart } from "./img/heart.svg";
import { ReactComponent as Order } from "./img/order.svg";
import { ReactComponent as ShoppingCart } from "./img/shopping-cart.svg";
import Avatar from './img/profile.svg';
import { ReactComponent as ArrowDown } from './img/arrow-down.svg';

function Header({ onSearch }) {
  const container = useRef();

  const [dropdownState, setDropdownState] = useState({ open: false }); // выпадающее меню каталога

  // const handleDropdownClick = () =>
  //   setDropdownState({ open: !dropdownState.open });

  //событие меню 
  const ClickOutsid = (e) => {
  if (container.current && !container.current.contains(e.target)) {
    setDropdownState({ open: false }); }
  }

  //закрытие меню при клике вне меню
  // useEffect(() => {document.addEventListener("mousedown", ClickOutsid);
  //   return () => document.removeEventListener("mousedown", ClickOutsid);}
  // );

//поиск товаров
const [searchTerm, setSearchTerm] = useState('');




const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Вызов функции поиска из пропсов
};


  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
        <NavLink className="header__link-img" to="/"> 
            <div className="header__img-logo"></div>
        </NavLink>

          
          <div className="header__menu" >
          {/*<div className="header__menu" ref={container} onMouseOver={handleDropdownClick}>*/}
            <NavLink to="catalog">
              <div className="button__menu" >
                  <span>Каталог</span>
              </div>
            </NavLink>
            
            {dropdownState.open && (
              <ul className="header__list">
              {ArrCategory.map((category) => (
                <li className="header__items" key={category.id}>
                  <NavLink to="{category.urlCategory}">{category.textCategory}</NavLink>
                </li>
              ))}
              </ul>
            )}
          </div>

          <div className="header__box-search">
            <input className="header__search" 
              type="text" 
              placeholder="Найти товар"
              value={searchTerm}
              onChange={handleSearch} />
              <NavLink to={`/search?query=${searchTerm}`}>
                <button className="button__search"></button>
              </NavLink>
          </div>

          <div className="header__box-icons">
            <NavLink to="/heart"><div className="header__wrapper-icons"><Heart /><span className="header__title">Избранное</span></div></NavLink>
            <NavLink to="/order"><div className="header__wrapper-icons"><Order /><span className="header__title">Заказы</span></div></NavLink>
            <NavLink to="/shopping-cart"><div className="header__wrapper-icons"><ShoppingCart /><span className="header__title">Корзина</span></div></NavLink>
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