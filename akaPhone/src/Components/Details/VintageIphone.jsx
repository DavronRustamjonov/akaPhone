import React from 'react'
import CardLink from '../CardLink/CardLink'
import ProductImg4 from '/product4.png'
const Detal4=[{
    span:"Apple",
    title:"Vintage Iphone",
    price:"17",
    img:ProductImg4 
}]
function VintageIphone() {
  return (
    <div>
      <CardLink dataLink={Detal4[0]}/>
    </div>
  )
}

export default VintageIphone
