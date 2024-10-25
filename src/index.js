import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';

import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import CatalogCategory from './components/PagesCatalogCategory/CatalogCategory';
import CatalogProduct from './pages/CatalogProduct';
import Card from './pages/Card';
import Searсh from './pages/Searсh';
import ArrProducts from './helpers/ArrProducts/ArrProducts';
// import ProductCard from './components/Card/ProductCard/ProductCard';

import ScrollToTop from './utils/scrollTop'; //при переходе на другую страницу - автоматически листает вверх

const App = () => {
    const [filteredProducts, setFilteredProducts] = useState(ArrProducts);

    const handleSearch = (searchTerm) => {
        const filtered = ArrProducts.filter(product =>
            product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
        console.log('набор в инпут');
    };

    return (
        <Router>
            <ScrollToTop />
            <Header onSearch={handleSearch} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<CatalogCategory />} />
                <Route path="/catalog/:id" element={<CatalogProduct />} />
                <Route path="/card/:id" element={<Card />} />
                <Route path="/search" element={<Searсh products={filteredProducts} />} />
            </Routes>
            <Footer />
        </Router>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
