import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='products' element={<Products />}>
                        <Route path=':productCode' element={<Product />}></Route>
                    </Route>

                    <Route path='*' element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
