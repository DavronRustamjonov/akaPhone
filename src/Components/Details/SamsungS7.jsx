import React from 'react'
import CardLink from '../CardLink/CardLink'
import CardLink2 from '/product2.png'
const Detal2=[{
    span:"SAMSUNG",
    title:"Samsung S7",
    price:"16",
    img:CardLink2 
}]
function SamsungS7() {
  return (
    <div>
      <CardLink dataLink={Detal2[0]}/>
    </div>
  )
}

export default SamsungS7