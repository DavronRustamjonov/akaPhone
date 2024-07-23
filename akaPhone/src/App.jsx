// import {} from 'react'
import Header from './Header/Header'
import Hero from "./Components/Hero/Hero"
import Section from "./Components/Section/Section"
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'
import Slider from './Components/Slider'
function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Section/>
      <Slider/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default App
