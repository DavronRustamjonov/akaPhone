import React from 'react'
import CardLinkPic6 from '/product10.png'
import CardLink from '../CardLink/CardLink'
const Detal6=[{
    span:"INDI",
    title:"Кресло INDI CA-1613A-1",
    price:"8",
    img:CardLinkPic6 
}]
function KresloINDI() {
  return (
    <div>
      <CardLink dataLink={Detal6[0]}/>
      
    </div>
  )
}

export default KresloINDI
