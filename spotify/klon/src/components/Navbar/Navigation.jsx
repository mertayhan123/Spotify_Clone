import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center gap-x-4">
      <button
        onClick={() => navigate(-1)}
        className="w-8 h-8 items-center justify-center rounded-full text-white"
      >
        <IoIosArrowBack size={22} />
      </button>
      <button
        onClick={() => navigate(1)}
        className="w-8 h-8 items-center justify-center rounded-full text-white"
      >
        <IoIosArrowForward size={22} />
      </button>
    </nav>
  );
};
