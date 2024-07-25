import React from 'react'
import CardLink from '../CardLink/CardLink'
import CardLinkPic1 from '/product1.png'
const Detal1=[{
    span:"GOOGLE",
    title:"Google Pixel-Black",
    price:"10" ,
    img:CardLinkPic1
}]
function GooglePixselBlack() {
  return (
    <div>
      <CardLink dataLink={Detal1[0]}/>
    </div>
  )
}

export default GooglePixselBlack
