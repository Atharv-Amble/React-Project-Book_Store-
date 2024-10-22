import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import FreeBook from './FreeBook'
import Cards from './Cards'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Banner/>
       <FreeBook/>
       <Cards/>
       <Footer/>
    </div>
  )
}

export default Home
