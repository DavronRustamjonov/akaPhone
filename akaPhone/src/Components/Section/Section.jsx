import React from 'react';
import './Section.css';
import { Swiper, SwiperSlide } from 'swiper/react';


function Section() {
  return (
    <div className='section'>
    <div  className='container section-container'>
  <h2 className='section-title'>Горячие за неделью</h2>
  <div className='section-content'>
  <div className="slider-container">
  <Swiper
      spaceBetween={10}
      slidesPerView={4}
      navigation  // Enable navigation arrows
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('Slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='swiper'
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
      <SwiperSlide>Slide 10</SwiperSlide>
    </Swiper>
</div>
    
  </div>
  </div>
</div>

   
  );
}

export default Section;
