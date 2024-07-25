import React from 'react'
import CardLink from '../CardLink/CardLink'
import ProductImg5 from '/product12.png'

const Detal5=[{
    span:"Lenovo",
    title:"Lenovo IdeaPad L340",
    price:"80",
    img:ProductImg5 
}]
function LenovoIdeaPad() {
  return (
    <div>
      <CardLink dataLink={Detal5[0]}/>
    </div>
  )
}

export default LenovoIdeaPad
