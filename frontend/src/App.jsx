import React from 'react'
import {Routes,Route} from "react-router-dom"
import Courses from './components/Courses';
import Home from './components/Home';
import Signup from './components/Signup';

const App = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
       <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/courses' element = {<Courses/>}/>
          <Route path='/signup' element = {<Signup/>}/>
          <Route/>
       </Routes>
    </div>
  )
}

export default App

