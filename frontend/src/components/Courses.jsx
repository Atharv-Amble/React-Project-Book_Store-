import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Course from './Course'

const Courses = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
      <div className='min-h-screen'>
        <Course/>
      </div>
      <Footer/>
    </div>
  )
}

export default Courses
