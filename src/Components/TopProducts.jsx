import React from "react";
// import ProductsType from "./ProductsType";
// import { products } from "../assets";


const TopProducts = ({products=[], title=""}) => {

  return (
    <div className=" px-4 py-2  bg-gray-300 my-4 ">
      <h1 className="text-center text-3xl font-bold py-5"> {title} </h1>

      <div className="grid grid-cols-4 space-x-5 px-4 py-3 space-y-5">
        {products.map((item) => (
          <div className="bg-white rounded-lg shadow-lg flex flex-col items-center p-8 " data-aos="fade-up">
            <img
              className="object-contain w-full aspect-square object"
              src={item.thumbnail}
            />
            <h1 className="w-full text-start  mt-5 uppercase text-gray-700">
            {item.category}
            </h1>
            <h1 className="w-full text-start  mt-2  font-bold">
             {item.title}
            </h1>
            <h1 className="w-full text-start  mt-2  text-blue-700">{item.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
