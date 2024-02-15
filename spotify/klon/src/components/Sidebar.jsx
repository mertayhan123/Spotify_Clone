import React from 'react'
import logo from '../assets/spotify-seeklogo.svg'
import { Menu } from './Sidebar/Menu'
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Playlist } from './Sidebar/Playlist';


export const Sidebar = () => {
  return (
    <div className='w-60 py-6 flex flex-shrink-0 flex-col bg-black'   >
      <a href=""className='mb-5 px-6'> 
      <img src={logo} alt="" className='h-10' />

      </a>
        <Menu />

        <nav className='mt-6 mb-2 '>
          <ul className='px-6'>
          <li className='mb-3 flex justif' >
              <a href="" className='flex hover:text-white group'>
              
              <span className='flex mr-2 p-1 items-center bg-opacity-60 group-hover:bg-opacity-100 bg-white rounded-sm'>
              <FaPlus className='text-black' />
              </span>
                <p className='text-white'>
                  Çalma Listesi Oluştur
                </p>
              </a>
            </li>
            <li className='text-white'>
              <a href="#" className='flex hover:text-white group'>
              
              <span className='flex  mr-2 p-1 items-center bg-opacity-60 bg-gradient-to-br from-indigo-500 group-hover:bg-opacity-100 rounded-sm'><FaHeart className='text-white' /></span>
                Beğenilen Şarkılar

              </a>
            </li>
            
          </ul>

        </nav>

        <Playlist  />
         
    </div>
  )
}  
