import React from 'react'
import './CardLink.css'

const CardLink =({dataLink}) =>{
  return (
    <div className='cardLink'>
    <div className='container cardLink-container'>
      <div className="cardLink-wrapper">
       {dataLink.img}
      </div>
      <div className="cardLink-wrapper">
        <ul className='cardLink-top-list'>
            <li className='cardLink-list-item'><span className='cardLink-span'>{dataLink.span}</span></li>
            <li className='cardLink-list-item'><h2 className='cardLink-title'>{dataLink.title}</h2></li>
        </ul>
        <ul className='cardLink-list'>
            <li className='cardLink-item'><p className='cardLink-lead'>Коротко о товаре</p></li>
            <li className='cardLink-item'><p className='cardLink-text'>Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.</p></li>
        </ul>
        <ul className='cardLink-list'>
          <li className='cardLink-item'><p className='cardLink-price'>{dataLink.price} ₽</p></li>
        </ul>
        <ul className='cardLink-footer-list'>
         <li className='cardLink-item'>
            <a href="#">
                <button className='cardLink-button'>Back To Products</button>
            </a>
         </li>
         <li className='cardLink-item'>
            <a href="#">
            <button className='cardLink-next-btn'>In Cart</button>     
            </a>
         </li>

        </ul>
      </div>
    </div>
    </div>
  )
}

export default CardLink
