import React from "react";
import { icons } from "../assets";
const Footer = () => {
  return (
    <div class="flex items-center justify-between px-10 py-5  w-full ">
      <div className="ml-8">
      <div className="flex items-center  gap-3 text-xl">
          <icons.MdOutlineShoppingBag className="text-4xl" />
          <h1 className="text-blue-500 font-extrabold italic "> Swift Shop </h1>
        </div>
        <p className="max-w-[600px] mt-6 ">
        Welcome to Shopie, your one-stop destination for all your shopping
        needs! Explore our extensive collection of products ranging from
        fashion, electronics, home essentials, beauty, and much more.
      </p>
      <div className="flex flex-row gap-5 mt-5 px-4 py-3 ">
      
      <span className="p-3 bg-white  shadow-md  hover:bg-blue-600 rounded-md hover:text-white cursor-pointer"><icons.FaFacebookSquare/></span>
      <span className="p-3 bg-white  shadow-md rounded-md hover:bg-gradient-to-br hover:from-pink-600 hover:to-yellow-400  erounded hover:text-white cursor-pointer"><icons.FaInstagram/></span>
      <span className="p-3 bg-white  shadow-md  hover:bg-black rounded-md hover:text-white cursor-pointer"><icons.FaXTwitter/></span>
      <span className="p-3 bg-white  shadow-md  hover:bg-red-600 rounded-md hover:text-white cursor-pointer"><icons.TbBrandYoutube/></span>
   
   </div>
      </div>
      <div className="flex  justify-start gap-16  flex-1 ml-16">
     
      <div>
        <h1 className="text-xl font-bold -ml-6 "> My Accounts</h1>
        <ul className="list-disc flex flex-col  mt-4 gap-2 ">
          <li>Account </li>
           <li className="hover:text-blue-500">Order</li>
            <li className="hover:text-blue-500">Cart</li>
            <li className="hover:text-blue-500">Shipping</li>
            <li className="hover:text-blue-500">Return</li>
        </ul>

      </div>
      <div>
        <h1 className="text-xl font-bold -ml-6 ">Pages</h1>
        <ul className="list-disc flex flex-col  mt-4 gap-2">
          <li className="hover:text-blue-500">Home</li>
          <li className="hover:text-blue-500">About</li>
          <li className="hover:text-blue-500">Contact</li>
          <li className="hover:text-blue-500">Term and Condition</li>
        </ul>
      </div>
      </div>
    
      
      
    </div>
  );
};

export default Footer;
//authreducer 
//productreducer
//cartreducer
//orderreducer
