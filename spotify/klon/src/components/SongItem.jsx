import React from 'react'
import { NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from './stores/player';


export const SongItem = ({item}) => {

    const dispatch=useDispatch()
    const {current} =useSelector(state=>state.player)
    const style=item=>{
        switch(item.type){
            case "album":
                return "rounded-full"
            case "artist":
                return "rounded"    
    }}
    const update=()=>{
        dispatch(setCurrent(item))
    }
    return (
          <NavLink
            key={item.id}
            to="/"
            className={"bg-footer p-4 rounded hover:bg-white hover:bg-opacity-10"}
          >
            
            <div className=" pt-[100%] relative mb-4 ">
            <img src={item.image} alt="" className={`absolute inset-0 object-cover w-full h-full ${style(item)}`} />
            <button onClick={update} className="w-10 h-10 rounded-full flex items-center justify-center bg-primary absolute bottom-2 right-2">
            {current?.playing ? (
              <FaPause className="text-24" />
            ) : (
              <FaPlay className="text-24" />
            )}{" "}            </button>
            </div>
            
            
            <h6 className="overflow-hiddern overflow-ellipsis whitespace-nowrap font-semibold">{item.title}</h6>
            <p className=""> 
            {item.description}</p>
          </NavLink>
  )
}

export default SongItem