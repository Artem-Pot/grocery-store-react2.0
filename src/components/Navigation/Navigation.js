import { NavLink } from "react-router-dom";
import './style.css';
import { ReactComponent as ArrowRight} from './arrow-right.svg';


function Navigation(props) {
    return (
        <nav className="navigation">
            <NavLink to={'/'} className="navigation__link"><span>Главная</span></NavLink>
            <ArrowRight />
            {props.arrowRight 
                ? <NavLink to={'/category/1'} className="navigation__link"><span>{props.productCategory}</span></NavLink> 
                : <NavLink to={'/catalog'} className="navigation__link"><span>Каталог</span></NavLink>
            }
        </nav>
    );
};

export default Navigation;