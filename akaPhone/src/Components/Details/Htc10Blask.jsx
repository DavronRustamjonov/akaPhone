import React from 'react'
import ProductImg3 from '/product3.png'
import CardLink from '../CardLink/CardLink'
const Detal3=[{
    span:"Htc",
    title:"HTC 10 - Black",
    price:"8" ,
    img:ProductImg3
}]
function Htc10Blask() {
  return (
    <div>
      <CardLink  dataLink={Detal3[0]}/>
    </div>
  )
}

export default Htc10Blask
