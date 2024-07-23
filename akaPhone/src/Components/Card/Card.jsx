import Korzinka from '../Korzinka/Korzinka'
import './Card.css'
import React from 'react'
const Card = ({data}) => {
    

    
  return (
    <div className='card'>
   <div className='card-top'> <h2 className='data-title'>{data.title}</h2>
   <span className='card-span'>
  <span className='card-position'>{data.chegirma} %</span>
   <img className='chegirmaBg' src="https://aka-phone.netlify.app/images/sale_bg.png" alt=" chegirmani orqa foni" />
   </span>
   </div>
   <div className='card-middle'>
    <img className='data-img' 
    src={data.img} 
    
    alt="product"/>
   </div>
   <div className='product-info'>
   {data.infoProduct}
   </div>
<div>
  <p className='data-price'>{data.price} ₽</p>
</div>
     <button class="product-btn">   
        <div className='product_btn'><p>Add To Cart</p>  
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-2" size="20" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></svg>
         </div>
         </button>
         
         </div>
    
  )
}

export default Card