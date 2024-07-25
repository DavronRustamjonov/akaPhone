import React from 'react';
import './Section.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';
import ProductImg1 from '/product1.png'
import ProductImg2 from '/product2.png'
import ProductImg3 from '/product3.png'
import ProductImg4 from '/product4.png'
import ProductImg5 from '/product5.png'
import ProductImg6 from '/product10.png'
import ProductImg7 from '/product2.png'
import ProductImg8 from '/product12.png'
import ProductImg9 from '/product5.png'
import { Link } from 'react-router-dom';
function Section() {
  const products = [
    {
      title: "Google Pixel - Black",
      infoProduct: "Beef dumpling in hot soup",
      price: 10,
      img:ProductImg1,
      chegirma: 5
    },
    {
      title: "Samsung S7",
      infoProduct: "Beef dumpling in hot soup",
      price: 16,
      img:ProductImg2,
      chegirma: 10
    },
    {
      title: "HTC 10 - Black",
      infoProduct: "Beef dumpling in hot soup",
      price: 8,
      img:ProductImg3,
      chegirma: 7
    },
    {
      title: "Holitic Change",
      infoProduct: "Beef dumpling in hot soup",
      price: 17,
      img:ProductImg4,
      chegirma: 15
    }
    ,
    {
      title: "Кресло INDI CA-1613A-1",
      infoProduct: "Beef dumpling in hot soup",
      price: 80,
      img:ProductImg5,
      chegirma: 10
    }
    ,
    {
      title: "Lenovo IdeaPad L340",
      infoProduct: "Beef dumpling in hot soup",
      price: 8,
      img:ProductImg6,
      chegirma: 7
    }
    ,
    {
      title: "HyperX Cloud Stinger",
      infoProduct: "Beef dumpling in hot soup",
      price: 8,
      img:ProductImg7,
      chegirma: 5
    }
    ,
    {
      title: "Galaxy Tab S6",
      infoProduct: "Beef dumpling in hot soup",
      price: 8,
      img:ProductImg8,
      chegirma: 5
    }
    ,
    {
      title: "Vintage Iphone",
      infoProduct: "Beef dumpling in hot soup",
      price: 25,
      img:ProductImg9,
      chegirma: 5
    }
    
   
  ];
  const link=[
    {
     
    }
  ]

  return (
    <div className='section'>
      <div className='container section-container'>
        <h2 className='section-title'>Горячие за неделью</h2>
        <div className='section-content'>
          <div className="slider-container">
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              className='swiper'
            >
      
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                    <Card  data={product}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
