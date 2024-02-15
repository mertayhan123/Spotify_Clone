import React from 'react'
import { Navigation } from './Navbar/Navigation'
import { Login } from './Navbar/login'
import { Routes, Route} from 'react-router-dom'
import { Search } from '../views/Search'

export const Navbar = () => {
  return (
   <nav className='h-[3.75.rem] flex items-center justify-between px-8 mt-2'>

    <Navigation />
    <Routes>
      
        <Route path='/search' element={<Search />} />
      

      </Routes>   
    <Login />
   </nav>
  )
}
