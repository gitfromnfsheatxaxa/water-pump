import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ConTextProvider} from "./Context";
import {BrowserRouter} from "react-router-dom";
import {CartProvider} from "react-use-cart";


ReactDOM.render(
    <CartProvider>
        <ConTextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ConTextProvider>
    </CartProvider>,
    document.getElementById('root')
);