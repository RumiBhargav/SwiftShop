import React from "react";
import { icons } from "../assets";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between h-20 bg-white shadow-lg">
        <div className="flex items-center ml-16 gap-3 text-xl">
          <icons.MdOutlineShoppingBag className="text-4xl" />
          <h1 className="text-blue-500 font-extrabold italic "> Swift Shop </h1>
        </div>
        <div className=" border-3 border-blue-500  w-80 flex items-center">
          <input
            type="text"
            placeholder="Search products here... "
            className="flex-1 px-4 py-2 focus:outline-none focus:border-none"
          />
          <button className="bg-blue-500 text-white  px-4 py-2 ">Search</button>
        </div>
        <div className="flex items-center justify-between gap-2 mr-16">
          <button className="text-xl text-blue-600">
            <icons.CiHeart />
          </button>

          <button className="text-xl  text-blue-600">
            <icons.IoBagCheckOutline />
          </button>

          <button className="text-xl text-blue-600">
            <icons.FaTruck />
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between shadow-lg">
        <div className="flex flex-row justify-between gap-4 ml-8 ">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="mr-12 mt-6 text-2xl mb-6" >
          <Link to="/login" >
            <icons.BsBoxArrowInRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
//border border-2 border-blue-600"-->
