import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
 
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


import './Hero.css'
function Hero() {
  /*
// Import Swiper React components

// Import Swiper styles


import './styles.css';

// import required modules

export default function App() {
  return (
    <>
     </>
  );
}

  */
  return (
    <div className='container hero-container'>
      <div className='hero-left'>
        <div class="hero-title">Смартфоны и гаджеты для близких и друзей по доступной цене</div>
        <div class="hero-sub_title">В нашем магазине вы сможете найти качествунную продукцию по досутпным ценам для вашего близкого человека</div>
      <button className='hero-btn'>Посмотреть каталог</button>
      </div>
      <div className='hero-right'>
      <Swiper 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiperSlide'>
  <img className='swiperImg' src="https://aka-phone.netlify.app/images/smart_watch.png" alt=" smart watch" />
  <a className='swiperLink' href="/" active >Смарт часы AmazFit <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></a>
        </SwiperSlide>

        <SwiperSlide className='swiperSlide'>   
        
  <img className='swiperImg' src="https://aka-phone.netlify.app/images/smart_watch.png" alt=" smart watch" />
  <a className='swiperLink' href="/" active >Смарт часы AmazFit <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></a>
        </SwiperSlide>
        <SwiperSlide className='swiperSlide'>   
        
  <img className='swiperImg' src="https://aka-phone.netlify.app/images/smart_watch.png" alt=" smart watch" />
  <a className='swiperLink' href="/" active >Смарт часы AmazFit <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></a>
        </SwiperSlide>
        <SwiperSlide className='swiperSlide'>   
        
  <img className='swiperImg' src="https://aka-phone.netlify.app/images/smart_watch.png" alt=" smart watch" />
  <a className='swiperLink' href="/" active >Смарт часы AmazFit <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></a>
        </SwiperSlide>
      </Swiper>
    
         
      </div>
    </div>
  )
}

export default Hero
