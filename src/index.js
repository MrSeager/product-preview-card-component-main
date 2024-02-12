import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from './images/image-product-desktop.jpg';
import Cart from './images/icon-cart.svg';

function HeloWorld(){
  return (
    <div>
      <img src={Product} alt="Logo" className='product' />
      <h1>PERFUME</h1>
      <h2>Gabrielle Essence Eau De Parfum</h2>
      <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
      <h3>$149.99</h3>
      <h4>$169.99</h4>
      <button><img src={Cart} alt="icon" />Add to Cart</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeloWorld />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
