import React from 'react'
import CardLinkPic7 from '/product13.png'
import CardLink from '../CardLink/CardLink'
function HoliticChange() {
    const Detal7=[{
        span:"Asaxiy UZ",
        title:"Holitic Change",
        price:"8",
        img:CardLinkPic7 
    }]
  return (
    <div>
      <CardLink dataLink={Detal7[0]}/>
    </div>
  )
}

export default HoliticChange
