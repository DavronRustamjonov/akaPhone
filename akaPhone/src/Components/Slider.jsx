import React from 'react'
import SliderMenu from './SliderMenu/SliderMenu'
import { Outlet } from 'react-router'

function Slider() {
  return (
    <div>
      <SliderMenu/>
      <Outlet/>
    </div>
  )
}

export default Slider
