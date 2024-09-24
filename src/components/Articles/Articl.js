import React from 'react';

function Articl(props) {
    return (
        <article className="articl">
            <img src={props.imgArticles} className="articl__img" alt="Изображение статьи"/>
            <div className="articl__box">
                <div className='articl__interior'>
                    <span className="articl__date">{props.date}</span>
                    <h3 className="articl__title">{props.title}</h3>
                    <p className="articl__text">{props.text}</p>
                </div>
                <button className="button__articl">Подробнее</button>
            </div>
        </article>
        )
}

export default Articl;
