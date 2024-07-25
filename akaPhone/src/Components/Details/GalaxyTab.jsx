import React from 'react'
// import ProductImg1 from '/product1.png'
// import ProductImg2 from '/product2.png'
// import ProductImg3 from '/product3.png'
// import ProductImg4 from '/product6.png'
// import ProductImg5 from '/product12.png'
// import ProductImg6 from '/product10.png'
// import ProductImg7 from '/product13.png'
// import ProductImg8 from '/product11.png'
import ProductImg9 from '/product14.png'

import CardLink from '../CardLink/CardLink'
function GalaxyTabS6() {
    const Detal9=[{
        span:"Galaxy",
        title:"Galaxy Tab S6",
        price:"25",
        img:ProductImg9 
    }]
  return (
    <div>
      <CardLink dataLink={Detal9[0]}/>
    </div>
  )
}

export default GalaxyTabS6
