import React, { useState } from "react";
import { categories, icons ,products} from "../assets";
import Banner1 from "../Components/Banner1";
import TopProducts from "../Components/TopProducts";

const Products = () => {
  const [filtered,setFiltered]=useState(products.products);
  const  handleCategory = (category) => {
    // console.log(category);
    if(category === "reset"){
      setFiltered(products.products);
  }
  else{
    const newProducts = products.products.filter((item) => item.category === category);
    setFiltered(newProducts);
  }

}

  return (
    <div>
     <div className="flex gap-8">
    <div className="w-80">
    <div>
        <h2 className="text-2xl text-blue-500 mt-8 ml-8"># PRODUCTS</h2>
        <h3 className="mt-4 ml-8"> Home - Products</h3>
      </div>

      <h1 className="text-black text-xl uppercase ml-8 mt-3 font-bold">CATEGORIES</h1>
      <div className="flex flex-row ml-4 mt-4">
        
        <ul className="flex flex-col gap-4">
          {categories.map((item) => (
            <li
              onClick={() => handleCategory(item)}
              key={item}
              className="flex items-center gap-4 ml-4 cursor-pointer"
            >
              { item }
            </li>
          ))}
             
          {/* <li className="flex items-center gap-4 ml-4"> <icons.FcBusinessman /> Men's Clothes</li> */}

          {/* <li className="flex items-center gap-4 ml-4"> <icons.FcBusinesswoman /> Women's Clothes</li> */}
          {/* <li className="flex items-center gap-4 ml-4 "><icons.GiJewelCrown />Jewellery</li>
          <li className="flex items-center gap-4 ml-4"> <icons.FcElectricalSensor />Electronics</li>
          <li className="flex items-center gap-4 ml-4"> <icons.GrPowerReset />Reset</li> */}
        </ul>
      </div>

    </div>
<Banner1/>
     </div>
     <div className="mt-12">
      <TopProducts title={"Our Products"} products={products.products}/>

     </div>
    </div>
  );
};

export default Products;
