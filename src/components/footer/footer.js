import { NavLink } from "react-router-dom";
import './style.css';

function Footer() {
    return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <NavLink to="/" className="footer__link-img">
                    <div className="footer__img-logo"></div>
                </NavLink>
                <nav className="footer__menu">
                    <ul className="footer__list">
                        <li className="footer__items"><NavLink className="footer__link" href="#" to="/about">О компании</NavLink></li>
                        <li className="footer__items"><NavLink className="footer__link" href="#" to="/contacts">Контакты</NavLink></li>
                        <li className="footer__items"><NavLink className="footer__link" href="#" to="/vacancies">Вакансии</NavLink></li>
                        <li className="footer__items"><NavLink className="footer__link" href="#" to="/articles">Статьи</NavLink></li>
                    </ul>
                </nav>
                <div className="footer__box-social">
                    <NavLink className="footer__social footer__social_insta" to="https://instagram.com"  target="_blank" rel="noopener noreferrer"></NavLink>
                    <NavLink className="footer__social footer__social_vk" to="https://vk.com/" target="_blank" rel="noopener noreferrer"></NavLink>
                    <NavLink className="footer__social footer__social_face" to="https://facebook.com/" target="_blank" rel="noopener noreferrer"></NavLink>
                    <NavLink className="footer__social footer__social_ok" to="https://ok.ru" target="_blank" rel="noopener noreferrer"></NavLink>
                </div>
                <NavLink className="footer__telephone" to="tel:+88007773333">8 800 777 33 33</NavLink>
            </div>
        </div>
    </footer>
    )
}

export default Footer;