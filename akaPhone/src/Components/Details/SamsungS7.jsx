import React from 'react'
import CardLink from '../CardLink/CardLink'
import ProductImg2 from '/product2.png'
// import ProductImg5 from '/product5.png'
// import ProductImg6 from '/product10.png'
// import ProductImg7 from '/product2.png'
// import ProductImg8 from '/product12.png'
// import ProductImg9 from '/product5.png'
const Detal2=[{
    span:"SAMSUNG",
    title:"Samsung S7",
    price:"16",
    img:ProductImg2 
}]
function SamsungS7() {
  return (
    <div>
      <CardLink dataLink={Detal2[0]}/>
    </div>
  )
}

export default SamsungS7
