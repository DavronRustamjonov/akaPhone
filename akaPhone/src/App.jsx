import React from 'react'
import Header from './Header'
import Hero from "./Components/Hero/Hero"
import Section from "./Components/Section/Section"
import { Outlet } from 'react-router'
function App() {
  return (
    <div>
      
      <Header/>
      <Hero/>
      <Section/>
      <Outlet/>

    </div>
  )
}

export default App
