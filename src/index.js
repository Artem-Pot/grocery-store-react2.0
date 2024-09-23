import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/Header';
import Swiper from './components/Swiper/Swiper';
import Stock from './components/Stock/Stock';
import NewItems from './components/NewItems/NewItems';

import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Header />
    <Swiper />
    <Stock text={'Акции'} textall={'Все акции'}/>
    <NewItems text={'Новинки'} textall={'Все новинки'}/>
    <Footer />

    </>
);

