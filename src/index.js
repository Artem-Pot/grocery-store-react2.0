import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Header />

    <Catalog />
    <Footer />
    </>
);

    // <Home />
