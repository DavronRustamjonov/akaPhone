// import {} from 'react'
import Header from './Header/Header'
import Hero from "./Components/Hero/Hero"
import Section from "./Components/Section/Section"
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Section/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default App
