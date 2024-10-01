import { NavLink } from "react-router-dom";
import './style.css';
import { ReactComponent as ArrowRight} from './arrow-right.svg';


function Navigation(props) {
    return (
        <nav className="navigation">
            <NavLink to={'/'} className="navigation__link"><span>Главая</span></NavLink>
            <ArrowRight />
            <span>{props.url}</span>
        </nav>
    );
};

export default Navigation;

// <NavLink to={props.nav} className="navigation__link navigation__link_activ"><span>{props.nav2}</span></NavLink>