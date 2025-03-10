import React from "react";

const ProductsType = () => {
  return (
    <>
      <div className="flex items-center flex-wrap justify-between px-6 py-8  w-full">
        <div className=" flex flex-col  items-center group px-10 " >
          <div className="rounded-full bg-radial to-pink-500 from-white shadow-lg  w-52 h-52 flex items-center justify-center ">
            <img  src="https://shopie-x.netlify.app/assets/phone-BWwFSL4m.png" className=" group-hover:scale-150 transition-transform duration-500 ease-in w-24 h-24 aspect-square"/>
          </div>
          <h3 className="mt-2 text-blue-500"> Mobile </h3>
        </div>
        <div className=" flex flex-col  items-center group px-10 ">
          <div className="rounded-full bg-radial to-pink-500 from-white shadow-lg  w-52 h-52 flex items-center justify-center ">
            <img  src="https://shopie-x.netlify.app/assets/watch-BG87QTdQ.png" className=" group-hover:scale-150 transition-transform duration-500 ease-in w-24 h-24 aspect-square"/>
          </div>
          <h3 className="mt-2 text-blue-500"> Watches </h3>
        </div>
        
        <div className=" flex flex-col  items-center group px-10 ">
          <div className="rounded-full bg-radial to-pink-500 from-white shadow-lg  w-52 h-52 flex items-center justify-center ">
            <img  src="https://shopie-x.netlify.app/assets/phone-BWwFSL4m.png" className=" group-hover:scale-150 transition-transform duration-500 ease-in w-24 h-24 aspect-square"/>
          </div>
          <h3 className="mt-2 text-blue-500"> Mobile </h3>
        </div>
        <div className=" flex flex-col  items-center group ">
          <div className="rounded-full bg-radial to-pink-500 from-white shadow-lg  w-52 h-52 flex items-center justify-center ">
            <img  src="https://shopie-x.netlify.app/assets/phone-BWwFSL4m.png" className=" group-hover:scale-150 transition-transform duration-500 ease-in w-24 h-24 aspect-square"/>
          </div>
          <h3 className="mt-2 text-blue-500"> Mobile </h3>
        </div>
      </div>

      {/* <div className="py-8 md:px-10 px-6 w-full">
   <div className="max-w-full flex justify-between gap-3 flex-wrap">
   <div  className="py-3 px-5 slide-top group">
            <div className="w-24 h-24 md:w-52 md:h-52 rounded-full bg-blue-50 overflow-hidden flex items-center justify-center shadow-lg cursor-pointer">
              <img
               
                alt=""
                className="w-12 h-12 md:w-24 md:h-24 group-hover:scale-150 transition-all duration-700"
              />
            </div>
            
          <div className='max-w-full text-center'>
            <p className='mt-2 text-blue-300'> Mobile Phone </p>
          </div>
         
          
            </div>
    </div>
   </div> */}
    </>
  );
};

export default ProductsType;
