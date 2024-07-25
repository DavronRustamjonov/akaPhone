import React from 'react'

import CardLinkPic9 from '/product14.png'

import CardLink from '../CardLink/CardLink'
function GalaxyTabS6() {
    const Detal9=[{
        span:"Galaxy",
        title:"Galaxy Tab S6",
        price:"25",
        img:CardLinkPic9 
    }]
  return (
    <div>
      <CardLink dataLink={Detal9[0]}/>
    </div>
  )
}

export default GalaxyTabS6
