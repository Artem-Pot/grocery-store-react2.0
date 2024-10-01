import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';

import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Card from './pages/Card';

import ScrollToTop from './utils/scrollTop'; //при переходе на другую страницу - автоматически листает вверх


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Router>
        <ScrollToTop/>
        <Header />
        
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="catalog" element={<Catalog/>}></Route>
            <Route path="card" element={<Card/>}></Route>
        </Routes>

        <Footer />
    </Router>
    </>
);

