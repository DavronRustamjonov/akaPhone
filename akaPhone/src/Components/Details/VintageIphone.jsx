import React from 'react'
import CardLink from '../CardLink/CardLink'
import CardLink4 from '/product6.png'
const Detal4=[{
    span:"Apple",
    title:"Vintage Iphone",
    price:"17",
    img:CardLink4 
}]
function VintageIphone() {
  return (
    <div>
      <CardLink dataLink={Detal4[0]}/>
    </div>
  )
}

export default VintageIphone
