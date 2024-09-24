import React from 'react';
import Articl from './Articl';
import imgArticles1 from './img/articl-1.jpeg'
import imgArticles2 from './img/articl-2.jpeg'
import imgArticles3 from './img/articl-3.jpeg'
import './style.css';

function Articles() {
    return (
        <section className="articles">
            <div className="container">
                <div className="articles__wrapper">
                    <div className="product-list__header">
                        <h2 className="title-h2">Статьи</h2><a className="product-list__all" href="#">Все статьи</a>
                    </div>
                    <div className="articles__box-articles">
                        <Articl 
                            imgArticles={imgArticles3}
                            date='05.03.2024' 
                            title='ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!' 
                            text='Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!'/>
                        <Articl 
                            imgArticles={imgArticles2}
                            date='06.03.2024' 
                            title='Весеннее настроение для каждой' 
                            text='8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.'/>
                        <Articl 
                            imgArticles={imgArticles1}
                            date='07.03.2024' 
                            title='Режим использования масок и перчаток на территории магазинов' 
                            text='Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.'/>
                    </div>
                </div>
            </div>
      </section>
    )
}

export default Articles;