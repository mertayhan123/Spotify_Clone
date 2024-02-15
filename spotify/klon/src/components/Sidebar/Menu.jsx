import React from "react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { NavLink } from "react-router-dom";


export const Menu = () => {
  return (
    <nav className="px-2">
      <ul className="flex flex-col ">
        <li className="text-white">
          <NavLink  
            to="/"
            className="h-10 flex items-center text-sm font-semibold text-#b3b3b3 rounded  hover:text-gray-500 active:text-slate-800 px-4"
          >
            <span className="mr-1 pt-0.5">
              {" "}
              <FaHome />
            </span>
            Anasayfa
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink 
            to={"/search"}
            className="h-10 flex items-center text-sm font-semibold text-#b3b3b3 rounded  hover:text-gray-500 px-4 "
          >
            <span  className="mr-1 pt-0.5">
              <FaSearch />
            </span>
            Ara
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink 
            to={"/collection"}
            className="h-10 flex items-center text-sm font-semibold text-#b3b3b3 rounde hover:text-gray-500 px-4 "
          >
            <span className="mr-1 pt-0.5">
            <VscLibrary />

            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
