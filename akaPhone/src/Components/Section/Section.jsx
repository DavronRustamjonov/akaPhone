import React from 'react';
import './Section.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';
import ProductImg1 from '/product1.png'
import ProductImg2 from '/product2.png'
import ProductImg3 from '/product3.png'
import ProductImg4 from '/product6.png'
import ProductImg5 from '/product12.png'
import ProductImg6 from '/product10.png'
import ProductImg7 from '/product13.png'
import ProductImg8 from '/product11.png'
import ProductImg9 from '/product14.png'
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
      title: "Vintage Iphone",
      infoProduct: "Beef dumpling in hot soup",
      price: 25,
      img:ProductImg4,
      chegirma: 5
    },
    
    {
      title: "Lenovo IdeaPad L340",
      infoProduct: "Beef dumpling in hot soup",
      price: 80,
      img:ProductImg6,
      chegirma: 7
    },
    {
      title: "Кресло INDI CA-1613A-1",
      infoProduct: "Beef dumpling in hot soup",
      price: 8,
      img:ProductImg8,
      chegirma: 10
    }
   
    ,
    {
      title: "Holitic Change",
      infoProduct: "Beef dumpling in hot soup",
      price: 8,
      img:ProductImg5,
      chegirma: 15
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
      img:ProductImg9,
      chegirma: 5
    }
  ];
 
 
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
      
             
                <SwiperSlide >
                  <Link to="/details/googlepixelblack" > <Card  data={products[0]}/></Link>
                </SwiperSlide>
                
                <SwiperSlide >
                <Link to="/details/samsungs7" > <Card  data={products[1]}/></Link>
                </SwiperSlide>
                
                <SwiperSlide >
                <Link to="/details/htc10black" > <Card  data={products[2]}/></Link>

                </SwiperSlide>
                
                <SwiperSlide >
                <Link to="/details/vintageIphone"   > <Card  data={products[3]}/></Link>
                </SwiperSlide>
                
                <SwiperSlide >
                <Link to="/details/lenovoIdeapad" > <Card  data={products[4]}/></Link>
                </SwiperSlide>
                
                <SwiperSlide >
                <Link  to="/details/kresloINDI"  > <Card  data={products[5]}/></Link>   
                </SwiperSlide>
                
                <SwiperSlide >
                <Link to="/details/holiticChange"> <Card  data={products[6]}/></Link>
                </SwiperSlide>
                
                <SwiperSlide >
                <Link  to="/details/xyberXcloudStringer"  > <Card  data={products[7]}/></Link>
                </SwiperSlide>
                
                <SwiperSlide >
                <Link to="/details/galaxyTabS6"  > <Card  data={products[8]}/></Link>
                </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
