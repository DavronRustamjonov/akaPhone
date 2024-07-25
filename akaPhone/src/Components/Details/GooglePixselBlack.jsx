import React from 'react'
import CardLink from '../CardLink/CardLink'

import ProductImg1 from '/product1.png'
const Detal1=[{
    span:"GOOGLE",
    title:"Google Pixel-Black",
    price:"10" ,
    img:ProductImg1
}]
function GooglePixselBlack() {
  return (
    <div>
      <CardLink dataLink={Detal1[0]}/>
    </div>
  )
}

export default GooglePixselBlack
