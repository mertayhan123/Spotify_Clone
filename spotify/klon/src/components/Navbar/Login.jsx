import React from 'react'
import { Menu } from '@headlessui/react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Login = () => {
    
    const user={
        name:"MERT AYHAN",
        avatar:"/src/assets/mmm.jpg"
    }

    return (
    <Menu as="nav" className={"relative"}>
      {({open:boolen})=>(
        <>
        <Menu.Button className={`flex items-center h-8 rounded-3xl ${open ? `bg-black`: `bg-white`}`}>
        <img src={user.avatar} alt="" className='h-8 w-8 rounded-full p-px mr-2' />
        <span className=' font-semibold text-white mr-2'>{user.name}</span>
        <span className={boolen ? 'rotate-180' : ''} >
            <IoIosArrowBack className='text-white mr-2' size={22} />
        </span>
      </Menu.Button>
     
        </>
      )}
    </Menu>
  )
}

export default Login