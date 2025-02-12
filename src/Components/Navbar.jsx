import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";

import { CiHeart } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between h-20 bg-white shadow-lg">
        <div className="flex items-center ml-16 gap-3 text-xl">
          <MdOutlineShoppingBag className="text-4xl" />
          <h1 className="text-blue-500 font-extrabold italic "> Swift Shop </h1>
        </div>
        <div className="border border-3 border-blue-500  w-80 flex items-center">
          <input type="text" placeholder="Search products here... " className="flex-1 px-4 py-2 focus:outline-none focus:border-none" />
          <button className="bg-blue-500 text-white  px-4 py-2 ">
            Search
          </button>
        </div>
        <div className="flex items-center justify-between gap-2 mr-16">
          <button className="text-xl text-blue-600">
            <CiHeart />
          </button>

          <button className="text-xl  text-blue-600">
          
            <IoBagCheckOutline />
          </button>

          <button className="text-xl text-blue-600">
            <FaTruck />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
 //border border-2 border-blue-600"-->