import React from 'react'
import Burger from '/menu.png'
import './Header.css'
function Header() {
  return (
    <div className='header'>
      <div className='container header-container'>
       
       <div className='header-menu'>
       <div className='header-logo'>
       <img src="https://aka-phone.netlify.app/images/logo.svg" alt="" />
       <span className='header-span'>
        <p className='header-lead'>AkaPhone</p>
         <p className='header-text' >Качестенное по доступное цену</p>
       </span>
       </div>
        <ul className='header-list'>
            <li className='header-item'><a href="#sale" data-rb-event-key="#sale" class="nav-link">Скидки</a></li>
            <li className='header-item'><a href="#special" data-rb-event-key="#special" class="nav-link active">Специальные предложения</a></li>
            <li className='header-item'><a href="#category" data-rb-event-key="#category" class="nav-link">Каталог товаров</a></li>
            <li className='header-item'>
                <p className='header-next-text'>+998(90) 225-19-97</p>
                <a href="tel: +998996770899" class="btn_p">Заказать звонок</a>
            </li>
            <li className='header-item'><a href="#"><svg className='header-icon' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></a></li>
          
        </ul>
        <ul><span className='navbar-icon' > </span></ul>
 
       </div>
       
      </div>
    </div>
  )
}

export default Header
