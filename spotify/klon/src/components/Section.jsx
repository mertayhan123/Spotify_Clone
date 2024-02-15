import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import SongItem from "./SongItem";


const Section = ({ title, more = false, items }) => {
 
 
    
    return (
    <div>
      <div className="flex items-center justify-between mb-4">
      
      <NavLink to={more ?? "#"}>
      <h3 className="text-2xl text-white font-semibold tracking-tight pl-2 hover:underline ">
          {title}
        </h3>
      </NavLink>
        {more && (
          <NavLink
            className={
              "text-xs hover:underline font-semibold uppercase text-link mt-5 mr-5"
            }
          >
            Daha Fazla
          </NavLink>
        )}
      </div>
      <div className="grid grid-cols-5  gap-x-6">
        {items.map((item) => (
        <SongItem item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default Section;
