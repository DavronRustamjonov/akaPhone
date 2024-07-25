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
      
         </div>
    
  )
}

export default Card