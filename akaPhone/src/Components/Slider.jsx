import React from 'react'
import SliderMenu from './SliderMenu/SliderMenu'
import Header from '../Header/Header'
import Hero from './Hero/Hero'
import Section from './Section/Section'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

function Slider() {
  return (
    <div>
      <SliderMenu/>
      <Outlet/>
    </div>
  )
}

export default Slider
