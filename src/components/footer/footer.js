import React from 'react';
import './style.css';

function Footer() {
    return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <a className="footer__link-img" href="index.html">
                    <div className="footer__img-logo"></div>
                </a>
                <nav className="footer__menu">
                    <ul className="footer__list">
                        <li className="footer__items"><a className="footer__link" href="#">О компании</a></li>
                        <li className="footer__items"><a className="footer__link" href="#">Контакты</a></li>
                        <li className="footer__items"><a className="footer__link" href="#">Вакансии</a></li>
                        <li className="footer__items"><a className="footer__link" href="#">Статьи</a></li>
                    </ul>
                </nav>
                <div className="footer__box-social">
                    <a className="footer__social footer__social_insta" href="#"></a>
                    <a className="footer__social footer__social_vk" href="#"></a>
                    <a className="footer__social footer__social_face" href="#"></a>
                    <a className="footer__social footer__social_ok" href="#"></a>
                </div>
                <a className="footer__telephone" href="tel:+88007773333">8 800 777 33 33</a>
            </div>
        </div>
    </footer>
    )
}

export default Footer;