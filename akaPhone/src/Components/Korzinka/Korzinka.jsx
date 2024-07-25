import React from 'react';
import './Korzinka.css';

function Korzinka() {
  return (
    <div className='korzinka'>
      <div className='container korzinka-container'>
        <h2 className='korzinka-title'>Корзина</h2>
        <div className='korzinka-wrapper'>
          <div className='korzinka-pic'>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="#9faab7" height="20%" width="20%" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(159, 170, 183)' }}>
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
          <b><h3>В вашей корзине пусто? Не беда!</h3></b>
          <p className='korzinka-text'>Начните выбирать товары из широкого ассортимента нашего каталога.</p>
          <div><a className="product_btn" href="/">Перейти к покупкам</a></div>
        </div>
      </div>
    </div>
  );
}

export default Korzinka;
