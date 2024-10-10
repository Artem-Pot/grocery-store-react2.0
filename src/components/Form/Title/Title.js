//Заголовки разделов
import { NavLink } from "react-router-dom";
import "./style.css";

function Title(props) {
    return (
        <>
        <div className="title__header">
            <h2 className="title__h2">{props.text}</h2>
            <NavLink className={props.hiddenTextall === 'true'? 'displayNone' : 'product-list__all'} to="product">{props.textAll}</NavLink>

        </div>
        </>
    );
};

export default Title;