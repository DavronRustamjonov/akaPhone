import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className='container footer-container'>
                <div className='header-logo footer-wrapper'>
                    <div className='footer-logo-box '>
                        <img className='footer-logo' src="https://aka-phone.netlify.app/images/logo.svg" alt="" />        
                    </div>
                   <div> <p className='header-lead footer-lead'>AkaPhone</p>
                        <p className='header-text footer-text' >Качестенное по доступное цену</p></div>
                </div>
                <div>
                    <ul className='footer-list'>
                        <li className='footer-item'><a className='footer-link' href='#'>О нас</a></li>
                        <li className='footer-item'><a className='footer-link' href='#'>Каталог продуктов</a></li>
                        <li className='footer-item'><a className='footer-link' href='#'>Доставка</a></li>
                        <li className='footer-item'><a className='footer-link' href='#'>Каталог</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='footer-list'>
                        <li className='footer-item'><a className='footer-link' href="/">Смартфоны</a></li>
                        <li className='footer-item'><a className='footer-link' href="/">Смарт Часы </a></li>
                        <li className='footer-item'><a className='footer-link' href="/">Планшеты</a></li>
                        <li className='footer-item'><a className='footer-link' href="/">Камеры </a></li>
                        <li className='footer-item'><a className='footer-link' href="/">Аксессуары </a></li>
                    </ul>
                </div>
                <div>
                    <ul className='footer-list'>
                    <iframe class="filial-iframe" src="https://yandex.com/map-widget/v1/-/CCUBbKwFs" frameborder="1" allowfullscreen="true"></iframe>
           
                              </ul>
                </div>
                <div>
                    <ul className='footer-list'>
                        <li><p className='footer-next-text'>Наш телефон</p><a className='footer-link' href="/tel: +998902251997">+998(91) 163-12-36</a></li>
                        <li><p className='footer-next-text'>Наш E-mail</p><a className='footer-link' href="/mailto: info@akaphone.uz">info@akaphone.uz</a></li>
                        <li><p className='footer-next-text'>Наш адрес</p><a className='footer-link' href="/">ул Мевазор дом 21</a></li>
                        <li class="social"><a className='footer-next-link' href="/"><img src="https://aka-phone.netlify.app/images/facebook.png" alt="" /></a><a className='footer-next-link' href="/"><img src="https://aka-phone.netlify.app/images/telegram.png" alt="" /></a><a className='footer-next-link' href="/"><img src="https://aka-phone.netlify.app/images/instagram.png" alt="" /></a></li>
       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
