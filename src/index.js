import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Swiper from './components/Swiper/Swiper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Header />
    <Swiper />
    <Footer />
    </>
);
