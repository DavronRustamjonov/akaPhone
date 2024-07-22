// import {} from 'react'
import Header from './Header/Header'
import Hero from "./Components/Hero/Hero"
import Section from "./Components/Section/Section"
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Korzinka from './Components/Korzinka/Korzinka'
function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path='korzinka' element={<Korzinka />} />
        </Routes>
      </Router> */}
      <Header/>
      <Hero/>
      <Section/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default App
