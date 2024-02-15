import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar } from './Navbar'
import { Home } from '../views/Home'
import { Search } from '../views/Search'
import { Collection } from '../views/Collection'

export const Content = () => {
  return (
    <div className='flex-auto overflow-auto'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/collection' element={<Collection />} />

      </Routes>   
    </div>
  ) 
}
