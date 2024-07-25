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
    },
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
                  <Link to="/details/googlepixelblack" > <Card  data={products[0]}/>
                   <button class="product-btn">   
        <div className='product_btn'><p>Add To Cart</p>  
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-2" size="20" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></svg>
         </div>
                   </button>       
                  </Link>
                </SwiperSlide>
                
                <SwiperSlide >
                <Link to="/details/samsungs7" > <Card  data={products[1]}/>
                 <button class="product-btn">   
        <div className='product_btn'><p>Add To Cart</p>  
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-2" size="20" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></svg>
         </div>
                 </button>
       </Link>
                </SwiperSlide>
                
                <SwiperSlide >
                <Link to="/details/htc10black" > <Card  data={products[2]}/>
                 <button class="product-btn">   
        <div className='product_btn'><p>Add To Cart</p>  
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-2" size="20" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></svg>
         </div>
         </button>
       </Link>

                </SwiperSlide>
                
                <SwiperSlide >
                <Link to="/details/vintageIphone"   > <Card  data={products[3]}/>
                 <button class="product-btn">   
        <div className='product_btn'><p>Add To Cart</p>  
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-2" size="20" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></svg>
         </div>
         </button>
       </Link>
                </SwiperSlide>
                
                <SwiperSlide >
                <Link to="/details/lenovoIdeapad" > <Card  data={products[4]}/>
                 <button class="product-btn">   
        <div className='product_btn'><p>Add To Cart</p>  
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-2" size="20" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></svg>
         </div>
         </button>
       </Link>
                </SwiperSlide>
                
                <SwiperSlide >
                <Link  to="/details/kresloINDI"  > <Card  data={products[5]}/>
                 <button class="product-btn">   
        <div className='product_btn'><p>Add To Cart</p>  
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-2" size="20" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></svg>
         </div>
         </button>
       </Link>   
                </SwiperSlide>
                
                <SwiperSlide >
                <Link to="/details/holiticChange"> <Card  data={products[6]}/>
                 <button class="product-btn">   
        <div className='product_btn'><p>Add To Cart</p>  
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-2" size="20" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></svg>
         </div>
         </button>
       </Link>
                </SwiperSlide>
                
                <SwiperSlide >
                <Link  to="/details/xyberXcloudStringer"  > <Card  data={products[7]}/>
                 <button class="product-btn">   
        <div className='product_btn'><p>Add To Cart</p>  
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-2" size="20" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></svg>
         </div>
         </button>
       </Link>
                </SwiperSlide>
                
                <SwiperSlide >
                <Link to="/details/galaxyTabS6"  > <Card  data={products[8]}/>
                 <button class="product-btn">   
        <div className='product_btn'><p>Add To Cart</p>  
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-2" size="20" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></svg>
         </div>
         </button>
       </Link>
                </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
